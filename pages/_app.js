/* eslint-disable react/prop-types */
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { useStore } from 'store';

// Components
import Page from 'components/page';
import Header from 'components/header';
import Footer from 'components/footer';

import 'styles/index.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Page>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </Provider>
  );
}
