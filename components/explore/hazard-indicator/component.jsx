import PropTypes from 'prop-types';
import cx from 'classnames';

export default function HazardIndicator({
  hazardLevel,
  dark,
  className,
  category,
  slug,
}) {
  HazardIndicator.propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    hazardLevel: PropTypes.number,
    category: PropTypes.string,
    slug: PropTypes.string,
  };

  const hazards =
    slug === 'ses' || slug === 'pci'
      ? ['High', 'Medium-high', 'Medium', 'Low-medium', 'Low', 'No data']
      : ['Low', 'Low-medium', 'Medium', 'Medium-high', 'High', 'No data'];

  const hazardColors = [
    '#F3C64E',
    '#FDAE61',
    '#F46D43',
    '#F44543',
    '#BF2826',
    '#F1F1F1',
  ];

  // TO DO - fix this in the data and remove this fix
  const hazardLevelReverse = [4, 3, 2, 1, 0, -1];
  const hazardMeasure =
    slug === 'ses' || slug === 'pci'
      ? hazardLevelReverse[hazardLevel]
      : hazardLevel;

  // Opacity 30% on inactive bars
  return (
    <div className={cx('c-hazard-indicator', className, { '--dark': dark })}>
      <div className="c-hazard--text">
        <span className="c-hazard--title">
          {category === 'vulnerability' ? 'Vulnerability Level' : 'Risk Level'}
        </span>
        <span className="c-hazard--value">{hazards[hazardMeasure]}</span>
      </div>
      <svg
        className="c-hazard--chart"
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
