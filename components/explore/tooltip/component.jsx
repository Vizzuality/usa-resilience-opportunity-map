import { Popup } from 'react-map-gl';
import PropTypes from 'prop-types';
import startCase from 'lodash.startcase';

export default function MapTooltip({ layersHover, indicators, geometries }) {
  MapTooltip.propTypes = {
    layersHover: PropTypes.shape({
      lngLat: PropTypes.array,
      interactions: PropTypes.object,
    }),
    indicators: PropTypes.object,
    geometries: PropTypes.object,
  };
  const { lngLat, interactions } = layersHover;
  const countyValues = interactions?.counties?.data;
  const stateValues = interactions?.state?.data;
  const hazards = ['Low', 'Low-medium', 'Medium', 'Medium-high', 'High'];

  if (lngLat && stateValues && countyValues) {
    const state = geometries.data?.find((g) => +g.id === +stateValues.id);
    const county = geometries.data?.find((g) => +g.id === +countyValues.id);
    const activeIndicators = indicators.active?.map((id) =>
      indicators.data?.find((i) => i.id === id)
    );

    return (
      <Popup
        longitude={lngLat && lngLat[0]}
        latitude={lngLat && lngLat[1]}
        anchor="top"
      >
        {state.id === geometries.id ? ( // hovering on selected state, show counties
          <div>
            <h3>{`${county?.name} (${state?.name})`}</h3>
            <p>Hazard level</p>
            {activeIndicators.map((act) => (
              <div>
                <span>{startCase(countyValues[act.slug])}</span>
                {': '}
                <span>{hazards[countyValues[`${act.slug}_hazard`]]}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3>{state.name}</h3>
            <p>Hazard level</p>
            {activeIndicators.map((act) => (
              <div>
                <span>{startCase(stateValues[act.slug])}</span>
                {': '}
                <span>{hazards[stateValues[`${act.slug}_hazard`]]}</span>
              </div>
            ))}
          </div>
        )}
      </Popup>
    );
  }
  return null;
}
