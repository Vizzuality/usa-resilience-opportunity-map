import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

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

function Menu({ open, setOpen, isDesktop }) {
  const { pathname } = useRouter();

  return isDesktop ? (
    <div className="header-links">
      {links.map((l) => (
        <div
          key={l.href}
          className={cx('header--list-item', {
            '--active': pathname === l.href,
          })}
        >
          <Link href={l.href}>
            <a
              className="header--list-link"
              onClick={() => setOpen(false)}
              role="button"
              tabIndex="0"
            >
              {l.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <nav className={cx('side-menu', { '--open': open })}>
      {links.map((l) => (
        <Link key={l.href} href={l.href}>
          <a
            className="header--list-link"
            onClick={() => setOpen(false)}
            role="button"
            tabIndex="0"
          >
            {l.name}
          </a>
        </Link>
      ))}
    </nav>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  isDesktop: PropTypes.bool,
};

function BurgerMenu({ open, setOpen }) {
  return (
    <button
      className={cx('header-burger', { '--open': open })}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </button>
  );
}

BurgerMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default function Header() {
  const [isMenuOpen, openMenu] = useState(false);
  const isDesktop = true;
  const { pathname } = useRouter();

  return (
    <header className={cx('c-header', { '--dark': pathname === '/' })}>
      <div className="wrapper header--list">
        <Link href="/">
          <a className="header-logo header--list-item">
            <span className="">USA RESILIENCE MAP</span>
          </a>
        </Link>

        {!isDesktop && <BurgerMenu open={isMenuOpen} setOpen={openMenu} />}
        <Menu open={isMenuOpen} setOpen={openMenu} isDesktop={isDesktop} />
      </div>
    </header>
  );
}
