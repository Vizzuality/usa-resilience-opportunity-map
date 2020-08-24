import { Popup } from 'react-map-gl';
import PropTypes from 'prop-types';
import startCase from 'lodash.startcase';
import HazardIndicator from 'components/explore/hazard-indicator';

export default function MapTooltip({ layersHover, indicators, geometries }) {
  const { lngLat, interactions } = layersHover;
  const countyValues = interactions?.counties?.data;
  const stateValues = interactions?.state?.data;

  if (lngLat && stateValues) {
    const state = geometries.data?.find((g) => +g.id === +stateValues.id);
    const activeIndicators = indicators.active?.map((id) =>
      indicators.data?.find((i) => i.id === id)
    );
    const isCounty = !!countyValues;
    const county = isCounty
      ? geometries.data?.find((g) => +g.id === +countyValues.id)
      : null;
    const refArray = countyValues || stateValues;

    return (
      <Popup
        longitude={lngLat && lngLat[0]}
        latitude={lngLat && lngLat[1]}
        anchor="top"
        closeButton={false}
      >
        <div className="c-map-tooltip">
          <h5 className="c-tooltip--location">
            {isCounty ? county?.name : state.name}
          </h5>
          {activeIndicators.map((act) => (
            <div key={act.slug} className="c-tooltip--indicator">
              <span className="c-tooltip--indicator-label">
                {startCase(refArray[act.slug])}
              </span>
              <HazardIndicator
                dark
                hazardLevel={refArray[`${act.slug}_hazard`]}
                className="c-tooltip--hazard"
              />
            </div>
          ))}
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
