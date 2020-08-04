import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from 'components/icon';
import ZoomIn from 'svgs/zoom.svg?sprite';
import ZoomOut from 'svgs/zoom_out.svg?sprite';

function ZoomControl(props) {
  const { className, viewport, onZoomChange } = props;
  const { zoom, maxZoom, minZoom } = viewport;

  const increaseZoom = (e) => {
    e.stopPropagation();
    onZoomChange(zoom === maxZoom ? zoom : zoom + 1);
  };

  const decreaseZoom = (e) => {
    e.stopPropagation();
    onZoomChange(zoom === minZoom ? zoom : zoom - 1);
  };

  return (
    <div className={cx('c-zoom-control', className)}>
      <button
        className={cx('zoom-control--btn', {
          '-disabled': zoom >= maxZoom,
        })}
        type="button"
        disabled={zoom === maxZoom}
        onClick={increaseZoom}
      >
        <Icon icon={ZoomIn} className="zoom-control--icon" />
      </button>
      <div className="zoom-control--separator" />
      <button
        className={cx('zoom-control--btn', {
          '-disabled': zoom <= minZoom,
        })}
        type="button"
        disabled={zoom === minZoom}
        onClick={decreaseZoom}
      >
        <Icon icon={ZoomOut} className="zoom-control--icon" />
      </button>
    </div>
  );
}

ZoomControl.propTypes = {
  viewport: PropTypes.object.isRequired,
  className: PropTypes.string,
  onZoomChange: PropTypes.func.isRequired,
};

export default ZoomControl;
