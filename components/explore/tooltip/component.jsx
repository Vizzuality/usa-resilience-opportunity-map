import { Popup } from 'react-map-gl';
import PropTypes from 'prop-types';
import startCase from 'lodash.startcase';
import HazardIndicator from 'components/explore/hazard-indicator';

export default function MapTooltip({ layersHover, indicators, geometries }) {
  const { lngLat, interactions } = layersHover;
  const countyValues = interactions?.counties?.data;
  const stateValues = interactions?.state?.data;
  const hazards = ['Low', 'Low-medium', 'Medium', 'Medium-high', 'High'];

  if (lngLat && stateValues) {
    const state = geometries.data?.find((g) => +g.id === +stateValues.id);
    const activeIndicators = indicators.active?.map((id) =>
      indicators.data?.find((i) => i.id === id)
    );

    if (countyValues) {
      const county = geometries.data?.find((g) => +g.id === +countyValues.id);
      return (
        <Popup
          longitude={lngLat && lngLat[0]}
          latitude={lngLat && lngLat[1]}
          anchor="top"
          closeButton={false}
        >
          <div>
            <h3>{`${county?.name} (${state?.name})`}</h3>
            {activeIndicators.map((act) => (
              <div key={act.slug}>
                <span>{startCase(countyValues[act.slug])}</span>
                {': '}
                <HazardIndicator
                  hazardLevel={countyValues[`${act.slug}_hazard`]}
                />
              </div>
            ))}
          </div>
        </Popup>
      );
    }

    return (
      <Popup
        longitude={lngLat && lngLat[0]}
        latitude={lngLat && lngLat[1]}
        anchor="top"
        closeButton={false}
      >
        <div>
          <h3>{state.name}</h3>
          {activeIndicators.length > 0 && <p>Hazard level</p>}
          {activeIndicators.map((act) => (
            <div key={act.slug}>
              <span>{startCase(stateValues[act.slug])}</span>
              {': '}
              <span>{hazards[stateValues[`${act.slug}_hazard`]]}</span>
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
