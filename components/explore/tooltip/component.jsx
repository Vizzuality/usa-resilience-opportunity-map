import { Popup } from 'react-map-gl';
import PropTypes from 'prop-types';
import startCase from 'lodash.startcase';
import HazardIndicator from 'components/explore/hazard-indicator';

export default function MapTooltip({ layersHover, indicators, geometries }) {
  const { lngLat, interactions } = layersHover;
  const countyValues = interactions?.counties?.data;
  const stateValues = interactions?.state?.data;
  const censusValues = interactions?.census?.data;
  const storyValues = interactions?.stories?.data;

  if (lngLat && !storyValues && (stateValues || countyValues || censusValues)) {
    const activeIndicators = indicators.active?.map((id) =>
      indicators.data?.find((i) => i.id === id)
    );
    let values;
    let locationName;

    if (censusValues) {
      // hovering on census geometries
      const census = geometries.censusGeometries?.find(
        (g) => +g.id === +censusValues.id
      );
      locationName = `Census Tract ${census?.name || 'Unknown'}`;
      values = censusValues;
    } else if (!stateValues) {
      // hovering on current state or county, not outside
      const county = geometries.data?.find((g) => +g.id === +countyValues.id);
      locationName = county.name;
      values = countyValues;
    } else {
      const state = geometries.data?.find((g) => +g.id === +stateValues.id);
      locationName = state.name;
      values = stateValues;
    }

    return (
      <Popup
        longitude={lngLat && lngLat[0]}
        latitude={lngLat && lngLat[1]}
        anchor="bottom"
        closeButton={false}
      >
        <div className="c-map-tooltip">
          <h5 className="c-tooltip--location">{locationName}</h5>
          {activeIndicators.map((act) => (
            <div key={act.slug} className="c-tooltip--indicator">
              <span className="c-tooltip--indicator-label">
                {startCase(values[act.slug])}
              </span>
              <HazardIndicator
                dark
                hazardLevel={values[`${act.slug}_hazard`]}
                className="c-tooltip--hazard"
                slug={act.slug}
              />
            </div>
          ))}
        </div>
      </Popup>
    );
  }
  if (lngLat && storyValues) {
    const locationName = storyValues.title;
    return (
      <Popup
        longitude={lngLat && lngLat[0]}
        latitude={lngLat && lngLat[1]}
        anchor="bottom"
        closeButton={false}
      >
        <div className="c-map-tooltip">
          <h5 className="c-tooltip--location">{locationName}</h5>
        </div>
      </Popup>
    );
  }
  return null;
}

MapTooltip.propTypes = {
  layersHover: PropTypes.shape({
    lngLat: PropTypes.array,
    interactions: PropTypes.object,
  }),
  indicators: PropTypes.object,
  geometries: PropTypes.object,
};
