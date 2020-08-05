import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';

export default function Button({ children, style, className, link }) {
  return link ? (
    <Link href={link}>
      <a className={cx('c-button', className)} style={style}>
        {children}
      </a>
    </Link>
  ) : (
    <button className={cx('c-button', className)} style={style}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.object,
  className: PropTypes.string,
  link: PropTypes.string,
};
