import PropTypes from 'prop-types';

export default function MapTooltip({ hazardLevel }) {
  MapTooltip.propTypes = {
    hazardLevel: PropTypes.number,
  };

  const hazards = [
    'Low',
    'Low-medium',
    'Medium',
    'Medium-high',
    'High',
    'No data',
  ];
  const hazardColors = [
    '#F3C64E',
    '#FDAE61',
    '#F46D43',
    '#F44543',
    '#F44543',
    '#F1F1F1',
  ];
  // Opacity 30% on inactive bars

  return (
    <div className="c-hazard-indicator">
      <div className="hazard-text">
        <span>Hazard level</span>
        <span>{hazards[hazardLevel]}</span>
      </div>
      <svg
        className="hazard-chart"
        width="39"
        height="20"
        viewBox="0 0 39 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="16" width="7" height="4" fill={hazardColors[hazardLevel]} />
        <rect
          x="8"
          y="12"
          width="7"
          height="8"
          fill={hazardColors[hazardLevel]}
          fillOpacity={hazardLevel < 1 ? '30%' : '100%'}
        />
        <rect
          x="16"
          y="8"
          width="7"
          height="12"
          fill={hazardColors[hazardLevel]}
          fillOpacity={hazardLevel < 2 ? '30%' : '100%'}
        />
        <rect
          x="24"
          y="4"
          width="7"
          height="16"
          fill={hazardColors[hazardLevel]}
          fillOpacity={hazardLevel < 3 ? '30%' : '100%'}
        />
        <rect
          x="32"
          width="7"
          height="20"
          fill={hazardColors[hazardLevel]}
          fillOpacity={hazardLevel < 4 ? '30%' : '100%'}
        />
      </svg>
    </div>
  );
}
