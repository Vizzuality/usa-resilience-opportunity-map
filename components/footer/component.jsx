import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { MediaContextProvider, Media } from 'components/media';

function FooterWrapper({ children }) {
  FooterWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  return (
    <MediaContextProvider>
      <Media lessThan="small">
        <footer className="c-footer --mobile">{children}</footer>
      </Media>
      <Media greaterThanOrEqual="small">
        <footer className="c-footer">{children}</footer>
      </Media>
    </MediaContextProvider>
  );
}

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="footer-links">
          <Link href="/privacy">
            <a>Privacy policy</a>
          </Link>
          <div className="footer-links--separator" />
          <Link href="/privacy">
            <a>Contact us</a>
          </Link>
        </div>
        <a href="https://www.atlanticcouncil.org/">
          <img
            className="footer-logo"
            src="/assets/logos/atlantic_council_logo.svg"
            alt="atlantic council"
          />
        </a>
      </div>
    </FooterWrapper>
  );
}
