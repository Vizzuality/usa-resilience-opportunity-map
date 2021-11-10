import React from 'react';
import PropTypes from 'prop-types';
import Main from 'layouts/main';
import { MediaContextProvider, Media } from 'components/media';

function ContactWrapper({ children }) {
  ContactWrapper.propTypes = {
    children: PropTypes.array,
  };

  return (
    <MediaContextProvider>
      <Media lessThan="small">
        <Main>
          <div className="c-contact --mobile">{children}</div>
        </Main>
      </Media>
      <Media greaterThanOrEqual="small">
        <Main>
          <div className="c-contact">{children}</div>
        </Main>
      </Media>
    </MediaContextProvider>
  );
}

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact-title">
        <div className="contact-line" />
        <h1>Contact us.</h1>
      </div>
      <div className="contact-text wrapper">
        <div className="contact-shadow" />
        <div className="contact-section">
          <p>
            Contact the Adrienne-Arsht Rockefeller Foundation Resilience Center
            by emailing us at 
            {' '}
            <b>resilience@atlanticcouncil.org</b>
            .
          </p>
          <br />
          <p>
            We encourage you to contact us concerning any of the following
            matters:
          </p>
          <ul>
            <p>
              - Feedback based on your experience using the US Climate
              Resilience Map
            </p>
            <p>
              - Questions or concerns regarding the US Climate Resilience Map
              website, data and methodology
            </p>
            <p>
              - Further interest in the US Climate Resilience Map or other
              related topics
            </p>
          </ul>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
