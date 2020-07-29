/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

// Redux
import { Provider } from 'react-redux';
import { useStore } from 'store';

// Components
import Page from 'components/page';
import Header from 'components/header';
import Footer from 'components/footer';
import { mediaStyle } from 'components/media';

import 'styles/index.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>USA Resilience Opportunity Map</title>
        <style type="text/css">{mediaStyle}</style>
      </Head>
      <Page>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </Provider>
  );
}
