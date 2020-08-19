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

export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === 'development') {
    const { name, value, label } = metric;
    // eslint-disable-next-line no-console
    console.log({ name, 'value (ms)': value, label });
  }
}

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  const isEmbed = router.pathname === '/explore/embed';

  return (
    <Provider store={store}>
      <Head>
        <title>USA Resilience Map</title>
        <style type="text/css">{mediaStyle}</style>
      </Head>
      {isEmbed ? (
        <Page>
          <Component {...pageProps} />
        </Page>
      ) : (
        <Page>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Page>
      )}
    </Provider>
  );
}
