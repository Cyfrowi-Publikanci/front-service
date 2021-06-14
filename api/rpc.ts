import getConfig from 'next/config';

import { AuthServiceClient } from '../proto-generated/AuthenticationServiceClientPb';
import { SettingsServiceClient } from '../proto-generated/SettingsServiceClientPb';
import AuthStreamInterceptor from './auth-stream-interceptor';

declare global {
  interface Window {
    __GRPCWEB_DEVTOOLS__: (
      clients: Array<AuthServiceClient | SettingsServiceClient>,
    ) => void;
  }
}

const { publicRuntimeConfig } = getConfig()

const authStreamInterceptor = new AuthStreamInterceptor();

export const authServiceClient = new AuthServiceClient(publicRuntimeConfig.publicApiUrl, undefined, {
  streamInterceptors: [authStreamInterceptor],
});

export const settingsServiceClient = new SettingsServiceClient(publicRuntimeConfig.publicApiUrl, undefined, {
  streamInterceptors: [authStreamInterceptor],
});

if (process.browser) {
  // eslint-disable-next-line no-underscore-dangle
  const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
  enableDevTools([
    authServiceClient,
    settingsServiceClient,
  ]);
}

