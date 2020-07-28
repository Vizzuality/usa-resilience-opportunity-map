import React from 'react';
import cx from 'classnames';

// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    name: 'Explore data',
    href: '/explore',
  },
  {
    name: 'Discover stories',
    href: '/stories',
  },
  {
    name: 'About the data',
    href: '/about',
  },
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="c-header col-xs-12">
      <div className="row between-xs middle-s header--list">
        <div className="col-m-4">
          <span className="header--list-item">USA RESILIENCE MAP</span>
        </div>

        <div className="col-m-6">
          <div className="row">
            {links.map((l) => (
              <div key={l.href} className="col-xs header--list-item">
                <Link href={l.href}>
                  <a
                    className={cx('header--list-link', {
                      '-active': pathname === l.href,
                    })}
                  >
                    {l.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
