/* eslint-disable react/prop-types */
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { useStore } from 'store';

// Components
import Header from 'components/header';

import 'styles/index.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
