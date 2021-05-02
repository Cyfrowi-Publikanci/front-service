import React, { useEffect } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import { persistor, store } from '../redux/store';
import { Auth } from '../components/auth';
import { GlobalLoader } from '../components/common/loaders';

import '../config/i18n';
import '../styles/globals.css';

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <Auth />
          <GlobalLoader />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}