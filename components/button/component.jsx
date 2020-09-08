import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'next/link';

export default function Button({
  children,
  style,
  className,
  link,
  onClick,
  ...props
}) {
  return link ? (
    <Link href={link}>
      <a className={cx('c-button', className)} style={style} {...props}>
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={cx('c-button', className)}
      style={style}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  style: PropTypes.object,
  className: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.object,
};
