import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

export default function InfoTooltip({ id, description, place = 'left' }) {
  return (
    <ReactTooltip
      className="c-info-tooltip"
      id={id}
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
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  place: PropTypes.string,
};
