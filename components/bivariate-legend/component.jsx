import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash.startcase';

export default function LegendTypeBivariate(props) {
  const { activeLayer } = props;
  const { legendConfig } = activeLayer;

  if (!legendConfig || legendConfig.type !== 'bivariate') {
    return null;
  }

  const squares = [
    'M53.0205 10.5736L44.5352 19.0589L53.0205 27.5442L61.5058 19.0589L53.0205 10.5736Z',
    'M44.5353 19.0589L36.05 27.5442L44.5353 36.0294L53.0206 27.5442L44.5353 19.0589Z',
    'M36.05 27.5442L27.5647 36.0294L36.05 44.5147L44.5353 36.0294L36.05 27.5442Z',
    'M27.5647 36.0294L19.0794 44.5147L27.5647 53L36.05 44.5147L27.5647 36.0294Z',
    'M19.0794 44.5147L10.5941 53L19.0794 61.4853L27.5647 53L19.0794 44.5147Z',
    'M61.5058 19.0589L53.0205 27.5442L61.5058 36.0294L69.9911 27.5442L61.5058 19.0589Z',
    'M53.0205 27.5442L44.5352 36.0294L53.0205 44.5147L61.5058 36.0294L53.0205 27.5442Z',
    'M44.5353 36.0294L36.05 44.5147L44.5353 53L53.0206 44.5147L44.5353 36.0294Z',
    'M36.05 44.5147L27.5647 53L36.05 61.4853L44.5353 53L36.05 44.5147Z',
    'M27.5647 53L19.0794 61.4853L27.5647 69.9706L36.05 61.4853L27.5647 53Z',
    'M69.9911 27.5442L61.5058 36.0294L69.9911 44.5147L78.4764 36.0294L69.9911 27.5442Z',
    'M61.5058 36.0294L53.0205 44.5147L61.5058 53L69.9911 44.5147L61.5058 36.0294Z',
    'M53.0205 44.5147L44.5352 53L53.0205 61.4853L61.5058 53L53.0205 44.5147Z',
    'M44.5353 53L36.05 61.4853L44.5353 69.9706L53.0206 61.4853L44.5353 53Z',
    'M36.05 61.4853L27.5647 69.9706L36.05 78.4558L44.5353 69.9706L36.05 61.4853Z',
    'M78.4764 36.0294L69.9911 44.5147L78.4764 53L86.9617 44.5147L78.4764 36.0294Z',
    'M69.9911 44.5147L61.5058 53L69.9911 61.4853L78.4764 53L69.9911 44.5147Z',
    'M61.5058 53L53.0205 61.4853L61.5058 69.9706L69.9911 61.4853L61.5058 53Z',
    'M53.0205 61.4853L44.5352 69.9706L53.0205 78.4558L61.5058 69.9706L53.0205 61.4853Z',
    'M44.5353 69.9706L36.05 78.4558L44.5353 86.9411L53.0206 78.4558L44.5353 69.9706Z',
    'M86.9617 44.5147L78.4764 53L86.9617 61.4853L95.4469 53L86.9617 44.5147Z',
    'M78.4764 53L69.9911 61.4853L78.4764 69.9706L86.9617 61.4853L78.4764 53Z',
    'M69.9911 61.4853L61.5058 69.9706L69.9911 78.4558L78.4764 69.9706L69.9911 61.4853Z',
    'M61.5058 69.9706L53.0205 78.4558L61.5058 86.9411L69.9911 78.4558L61.5058 69.9706Z',
    'M53.0205 78.4558L44.5352 86.9411L53.0205 95.4264L61.5058 86.9411L53.0205 78.4558Z',
  ].reverse();

  const variables = legendConfig.indicators.map((i) => startCase(i.name));

  return (
    <div className="c-legend-type-bivariate">
      <div className="indicators-wrapper">
        <p>{`High ${variables[0]}`}</p>
        <p>{`High ${variables[1]}`}</p>
      </div>
      <div className="indicators-row">
        <div className="indicators-wrapper">
          <p>{`High ${variables[0]}`}</p>
          <p>{`Low ${variables[1]}`}</p>
        </div>
        <svg
          width="105"
          height="105"
          viewBox="0 0 105 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              opacity="0.3"
              d="M44.0205 9.52051L52.3188 2L60.3452 9.52051"
              stroke="#4B5362"
              strokeWidth="2"
            />
            <path
              opacity="0.3"
              d="M44.0205 96L52.3188 103.521L60.3452 96"
              stroke="#4B5362"
              strokeWidth="2"
            />
            <path
              opacity="0.3"
              d="M96 44.5L103.521 52.7982L96 60.8247"
              stroke="#4B5362"
              strokeWidth="2"
            />
            <path
              opacity="0.3"
              d="M9.52051 44.5L2 52.7982L9.52051 60.8247"
              stroke="#4B5362"
              strokeWidth="2"
            />
          </g>
          {legendConfig.items.map(({ color }, i) => (
            <path d={squares[i]} fill={color} />
          ))}
        </svg>
        <div className="indicators-wrapper">
          <p>{`High ${variables[1]}`}</p>
          <p>{`Low ${variables[0]}`}</p>
        </div>
      </div>
      <div className="indicators-wrapper">
        <p>{`Low ${variables[0]}`}</p>
        <p>{`Low ${variables[1]}`}</p>
      </div>
    </div>
  );
}

LegendTypeBivariate.propTypes = {
  activeLayer: PropTypes.object,
};

LegendTypeBivariate.defaultProps = {
  activeLayer: {},
};
