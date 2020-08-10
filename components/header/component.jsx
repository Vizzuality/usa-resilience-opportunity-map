import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { MediaContextProvider, Media } from 'components/media';

// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

function Menu({ open, setOpen, isDesktop }) {
  const { pathname } = useRouter();
  const links = [
    {
      name: 'Explore Data',
      href: '/explore',
    },
    {
      name: 'Discover Stories',
      href: '/stories',
    },
    {
      name: 'About the Data',
      href: '/about',
    },
  ];

  const mobileLinks = [
    {
      name: 'Home',
      href: '/',
    },
    ...links,
  ];

  const otherLinks = [
    {
      name: 'Privacy Policy',
      href: '/privacy',
    },
    {
      name: 'Terms and Conditions of Use',
      href: '/terms',
    },
    {
      name: 'Contact Us',
      href: '/contact',
    },
  ];

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
      <div className="wrapper">
        <Link href="/">
          <a className="menu-logo">
            <img
              className="header--logo-image"
              src="assets/logos/logo_dark.svg"
              alt="USA Resilience Map"
            />
          </a>
        </Link>
      </div>
      <div className="side-menu--links">
        {mobileLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            <a
              className={cx('header--list-link', {
                '--active': pathname === l.href,
              })}
              onClick={() => setOpen(false)}
              role="button"
              tabIndex="0"
            >
              {l.name}
            </a>
          </Link>
        ))}
        <div className="side-menu--separator">
          <div />
        </div>
        <div className="header--list-small-links">
          {otherLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              <a
                className={cx('small-link', {
                  '--active': pathname === l.href,
                })}
                onClick={() => setOpen(false)}
                role="button"
                tabIndex="0"
              >
                {l.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
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
  const { pathname } = useRouter();
  const isDarkHeader = pathname === '/' || pathname === '/about';

  return (
    <header className={cx('c-header', { '--dark': isDarkHeader })}>
      <div className="wrapper header--list">
        <Link href="/">
          <a className="header-logo header--list-item">
            <img
              className="header--logo-image"
              src={`assets/logos/logo_${isDarkHeader ? 'white' : 'dark'}.svg`}
              alt="USA Resilience Map"
            />
          </a>
        </Link>
        <MediaContextProvider>
          <Media lessThan="small">
            <BurgerMenu open={isMenuOpen} setOpen={openMenu} />
            <Menu open={isMenuOpen} setOpen={openMenu} isDesktop={false} />
          </Media>
          <Media greaterThanOrEqual="small">
            <Menu open={isMenuOpen} setOpen={openMenu} isDesktop />
          </Media>
        </MediaContextProvider>
      </div>
    </header>
  );
}
