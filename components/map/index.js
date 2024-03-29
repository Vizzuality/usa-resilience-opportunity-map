/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import isEqual from 'lodash.isequal';
import isEmpty from 'lodash.isempty';

import ReactMapGL, { FlyToInterpolator, TRANSITION_EVENTS } from 'react-map-gl';
import { WebMercatorViewport } from '@math.gl/web-mercator'; // eslint-disable-line

import { easeCubic } from 'd3-ease';

const DEFAULT_VIEWPORT = {
  zoom: 2,
  lat: 0,
  lng: 0,
};

class Map extends Component {
  events = {};

  HOVER = {};

  static propTypes = {
    /** A function that returns the map instance */
    children: PropTypes.func,

    /** Custom css class for styling */
    customClass: PropTypes.string,

    /** An object that defines the viewport
     * @see https://uber.github.io/react-map-gl/#/Documentation/api-reference/interactive-map?section=initialization
     */
    viewport: PropTypes.shape({}),

    /** An object that defines the bounds */
    bounds: PropTypes.shape({
      bbox: PropTypes.array,
      options: PropTypes.shape({}),
    }),

    /** A boolean that allows panning */
    dragPan: PropTypes.bool,

    /** A boolean that allows rotating */
    dragRotate: PropTypes.bool,

    /** A boolean that allows zooming */
    scrollZoom: PropTypes.bool,

    /** A boolean that allows zooming */
    touchZoom: PropTypes.bool,

    /** A boolean that allows touch rotating */
    touchRotate: PropTypes.bool,

    /** A boolean that allows double click zooming */
    doubleClickZoom: PropTypes.bool,

    /** A function that exposes when the map is loaded. It returns and object with the `this.map` and `this.mapContainer` reference. */
    onLoad: PropTypes.func,

    /** A function that exposes the viewport */
    onViewportChange: PropTypes.func,

    /** A function that exposes hovering features. */
    onHover: PropTypes.func,

    /** A function that exposes mouseleave from features. */
    onMouseLeave: PropTypes.func,

    /** A function that exposes mouseleave from features. */
    onMouseOut: PropTypes.func,

    /** A function that exposes the viewport */
    getCursor: PropTypes.func,

    /** A boolean that inform if user stories markers are visible on map */
    visibilityStories: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    customClass: null,
    viewport: DEFAULT_VIEWPORT,
    bounds: {},
    dragPan: true,
    dragRotate: true,

    onViewportChange: () => {},
    onLoad: () => {},
    getCursor: ({ isHovering, isDragging }) => {
      if (isHovering) return 'pointer';
      if (isDragging) return 'grabbing';
      return 'grab';
    },
  };

  state = {
    viewport: {
      ...DEFAULT_VIEWPORT,
      ...this.props.viewport, // eslint-disable-line
    },
    flying: false,
    loaded: false,
  };

  componentDidUpdate(prevProps) {
    const { viewport: prevViewport, bounds: prevBounds } = prevProps;
    const { viewport, bounds } = this.props;
    const { viewport: stateViewport } = this.state;

    if (!isEqual(viewport, prevViewport)) {
      // eslint-disable-next-line
      this.setState({
        viewport: {
          ...stateViewport,
          ...viewport,
        },
      });
    }

    if (!isEmpty(bounds) && !isEqual(bounds, prevBounds)) {
      this.fitBounds();
    }
  }

  onLoad = () => {
    const { bounds, onLoad } = this.props;
    this.setState({ loaded: true });

    if (!isEmpty(bounds) && !!bounds.bbox) {
      this.fitBounds();
    }

    onLoad({
      map: this.map,
      mapContainer: this.mapContainer,
    });
  };

  onViewportChange = (v) => {
    const { onViewportChange } = this.props;

    this.setState({ viewport: v });
    onViewportChange(v);
  };

  onResize = (v) => {
    const { onViewportChange } = this.props;
    const { viewport } = this.state;
    const newViewport = {
      ...viewport,
      ...v,
    };

    this.setState({ viewport: newViewport });
    onViewportChange(newViewport);
  };

  onMoveEnd = () => {
    const { onViewportChange } = this.props;
    const { viewport } = this.state;

    if (this.map) {
      const bearing = this.map.getBearing();
      const pitch = this.map.getPitch();
      const zoom = this.map.getZoom();
      const { lng, lat } = this.map.getCenter();

      const newViewport = {
        ...viewport,
        bearing,
        pitch,
        zoom,
        latitude: lat,
        longitude: lng,
      };

      // Publish new viewport and save it into the state
      this.setState({ viewport: newViewport });
      onViewportChange(newViewport);
    }
  };

  onHover = (e) => {
    const { onHover, visibilityStories } = this.props;
    const { features } = e;
    if (features && features.length) {
      const { id, source, sourceLayer } = features[0];

      if (this.HOVER.id) {
        this.map.setFeatureState(
          {
            ...this.HOVER,
          },
          { hover: false }
        );
      }

      if (id && source && !visibilityStories) {
        this.HOVER = {
          id,
          source,
          ...(sourceLayer && { sourceLayer }),
        };

        this.map.setFeatureState(
          {
            ...this.HOVER,
          },
          { hover: true }
        );
      }
    }

    if (!!onHover) onHover(e);
  };

  onMouseLeave = (e) => {
    const { onMouseLeave } = this.props;
    if (this.HOVER.id) {
      this.map.setFeatureState(
        {
          ...this.HOVER,
        },
        { hover: false }
      );
    }

    this.HOVER = {};

    if (!!onMouseLeave) onMouseLeave(e);
  };

  onMouseOut = (e) => {
    const { onMouseOut } = this.props;
    if (this.HOVER.id) {
      this.map.setFeatureState(
        {
          ...this.HOVER,
        },
        { hover: false }
      );
    }

    this.HOVER = {};

    if (!!onMouseOut) onMouseOut(e);
  };

  fitBounds = () => {
    if (!this.mapContainer) return null;

    const { bounds, onViewportChange } = this.props;
    const { bbox } = bounds;

    const viewportA = new WebMercatorViewport(this.state.viewport);

    const { longitude, latitude, zoom } = viewportA.fitBounds(
      [
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]],
      ],
      {
        padding: {
          top: 50,
          bottom: 50,
          left: window.innerWidth / 2 - 200,
          right: 50,
        },
      }
    );

    const newViewport = {
      ...this.state.viewport,
      longitude,
      latitude,
      zoom,
      transitionDuration: 2500,
      transitionInterruption: TRANSITION_EVENTS.UPDATE,
    };

    this.setState({
      flying: true,
      viewport: newViewport,
    });
    onViewportChange(newViewport);

    setTimeout(() => {
      this.setState({ flying: false });
    }, 2500);

    return true;
  };

  render() {
    const {
      customClass,
      children,
      getCursor,
      dragPan,
      dragRotate,
      scrollZoom,
      touchZoom,
      touchRotate,
      doubleClickZoom,
      ...mapboxProps
    } = this.props;
    const { viewport, loaded, flying } = this.state;

    return (
      <div
        ref={(r) => {
          this.mapContainer = r;
        }}
        className={classnames({
          'c-map': true,
          [customClass]: !!customClass,
        })}
      >
        <ReactMapGL
          ref={(map) => {
            this.map = map && map.getMap();
          }}
          // CUSTOM PROPS FROM REACT MAPBOX API
          {...mapboxProps}
          mapStyle="mapbox://styles/usaresilience/ckv9ktcuyamt914o8t4tu3h77"
          // VIEWPORT
          {...viewport}
          width="100%"
          height="100%"
          // INTERACTIVE
          dragPan={!flying && dragPan}
          dragRotate={!flying && dragRotate}
          scrollZoom={!flying && scrollZoom}
          touchZoom={!flying && touchZoom}
          touchRotate={!flying && touchRotate}
          doubleClickZoom={!flying && doubleClickZoom}
          // DEFAULT FUNC IMPLEMENTATIONS
          onViewportChange={this.onViewportChange}
          onResize={this.onResize}
          onLoad={this.onLoad}
          // getCursor={getCursor}

          onHover={this.onHover}
          onMouseLeave={this.onMouseLeave}
          onMouseOut={this.onMouseOut}
          transitionInterpolator={new FlyToInterpolator()}
          transitionEasing={easeCubic}
        >
          {loaded &&
            !!this.map &&
            typeof children === 'function' &&
            children(this.map)}
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
