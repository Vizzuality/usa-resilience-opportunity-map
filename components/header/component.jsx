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
      name: 'About the Map',
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
              src="/assets/logos/logo_dark.svg"
              alt="US Climate Resilience Map"
            />
            <p className="header--logo-title">US Climate Resilience Map</p>
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

function Partners({ isDesktop }) {
  return (
    <div className="header-partners">
      <div className="wrapper header-partners-content">
        <a
          className="header-logo"
          href="https://www.atlanticcouncil.org/programs/adrienne-arsht-rockefeller-foundation-resilience-center"
        >
          <img
            alt="Arsht Rock Logo"
            className={cx('header--logo-image arsht', {
              'arsht--desktop': isDesktop,
            })}
            rel="noreferrer"
            src="/assets/logos/arshtRock_white.png"
            target="_blank"
          />
        </a>
        <a className="header-logo" href="https://www.jpmorganchase.com">
          <img
            alt="JPMorgan Chase and Company Logo"
            className={cx('header--logo-image jpmc', {
              'jpmc--desktop': isDesktop,
            })}
            rel="noreferrer"
            src="/assets/logos/JPMC_white.png"
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
}

Partners.propTypes = {
  isDesktop: PropTypes.bool,
};

export default function Header() {
  const [isMenuOpen, openMenu] = useState(false);
  const { pathname } = useRouter();
  const isDarkHeader = {
    desktop: pathname === '/' || pathname === '/about',
    mobile: pathname === '/',
  };

  return (
    <MediaContextProvider>
      <Media lessThan="small">
        <header className={cx('c-header', { '--dark': isDarkHeader.mobile })}>
          <Partners isDesktop={false} />
          <div className="wrapper header--list">
            <Link href="/">
              <a className="header-logo header--list-item">
                <img
                  className="header--logo-image"
                  src={`/assets/logos/logo_${
                    isDarkHeader.mobile ? 'white' : 'dark'
                  }.svg`}
                  alt="US Climate Resilience Map"
                />
                <p className="header--logo-title">US Climate Resilience Map</p>
              </a>
            </Link>
            <BurgerMenu open={isMenuOpen} setOpen={openMenu} />
            <Menu open={isMenuOpen} setOpen={openMenu} isDesktop={false} />
          </div>
        </header>
      </Media>

      <Media greaterThanOrEqual="small">
        <header className={cx('c-header', { '--dark': isDarkHeader.desktop })}>
          <Partners isDesktop />
          <div className="wrapper header--list">
            <Link href="/">
              <a className="header-logo header--list-item">
                <img
                  className="header--logo-image"
                  src={`/assets/logos/logo_${
                    isDarkHeader.desktop ? 'white' : 'dark'
                  }.svg`}
                  alt="US Climate Resilience Map"
                />
                <p className="header--logo-title">US Climate Resilience Map</p>
              </a>
            </Link>
            <Menu open={isMenuOpen} setOpen={openMenu} isDesktop />
          </div>
        </header>
      </Media>
    </MediaContextProvider>
  );
}
