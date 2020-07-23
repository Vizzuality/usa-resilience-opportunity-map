import React from 'react';
import cx from 'classnames';

// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

import './styles.scss';

const HEADER_LINKS = [];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <nav className="c-header">
      {HEADER_LINKS.map(({ id, items }) => (
        <ul className="header--list" key={id}>
          {items.map(({ name, href, className, external }) => (
            <li
              className={cx({
                'header--list-item': true,
                [className]: !!className,
              })}
              key={href}
            >
              {external ? (
                <a
                  className={cx('header--list-link', {
                    '-active': pathname === href,
                  })}
                >
                  <span>{name}</span>
                </a>
              ) : (
                <Link href={href}>
                  <a
                    className={cx('header--list-link', {
                      '-active': pathname === href,
                    })}
                  >
                    <span>{name}</span>
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
