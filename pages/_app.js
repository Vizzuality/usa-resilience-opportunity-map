/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Redux
import { Provider } from 'react-redux';
import { useStore } from 'store';

// Components
import Page from 'components/page';
import Header from 'components/header';
import Footer from 'components/footer';
import { mediaStyle } from 'components/media';

import 'styles/index.scss';
import '@egjs/react-flicking/dist/flicking.css';

/* METRICS ON DEVELOPMENT
export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === 'development') {
    const { name, value, label } = metric;
    // eslint-disable-next-line no-console
    console.table({ name, 'value (ms)': value, label });
  }
}
*/

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  const isEmbed = router.pathname === '/explore/embed';
  const isMap = router.pathname === '/explore';
  const isStories = router.pathname.startsWith('/stories');

  return (
    <Provider store={store}>
      <Head>
        <title>US Climate Resilience Map</title>
        <style type="text/css">{mediaStyle}</style>
      </Head>

      {isEmbed && (
        <Page>
          <Component {...pageProps} />
        </Page>
      )}

      {!isEmbed && !isMap && !isStories && (
        <Page>
          <Header />
          <Component {...pageProps} />
          <Footer footerLogo="/assets/logos/atlantic_council_logo.svg" />
        </Page>
      )}

      {!isEmbed && isMap && (
        <Page>
          <Header />
          <Component {...pageProps} />
          <Footer footerLogo="/assets/logos/arshtRock_white.png" />
        </Page>
      )}

      {!isEmbed && isStories && !isMap && (
        <Page>
          <Header />
          <Component {...pageProps} />
          <Footer footerLogo="/assets/logos/arshtRock_white.png" />
        </Page>
      )}
    </Provider>
  );
}
