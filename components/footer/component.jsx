import React from 'react';

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="wrapper">
        <div className="footer-links">
          <a>Privacy policy</a>
          <div className="footer-links--separator" />
          <a>Contact us</a>
        </div>
        <img
          className="footer-logo"
          src="assets/logos/atlantic_council_logo.svg"
          alt="atlantic council"
        />
      </div>
    </footer>
  );
}
