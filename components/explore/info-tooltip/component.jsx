import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import cx from 'classnames';

export default function InfoTooltip({
  className,
  id,
  description,
  disabled = false,
  place = 'left',
}) {
  return (
    <ReactTooltip
      className={cx({
        'c-info-tooltip': true,
        [className]: !!className,
      })}
      id={id}
      disable={disabled}
      place={place}
      delayHide={200}
      effect="solid"
      textColor="#FFFFFF"
      backgroundColor="#4B5362"
    >
      {description}
    </ReactTooltip>
  );
}

InfoTooltip.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  place: PropTypes.string,
};
