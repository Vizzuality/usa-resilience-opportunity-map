import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';

export default function Button({ children, colors, className, link }) {
  return link ? (
    <Link href={link}>
      <a
        className={cx('c-button', className)}
        style={{
          borderColor: colors ? colors.border : '#000',
          color: colors ? colors.text : '#FFF',
        }}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={cx('c-button', className)}
      style={{
        borderColor: colors ? colors.border : '#000',
        color: colors ? colors.text : '#FFF',
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.array,
  colors: PropTypes.object,
  className: PropTypes.string,
  link: PropTypes.string,
};
