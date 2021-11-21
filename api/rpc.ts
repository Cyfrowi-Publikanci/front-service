import getConfig from 'next/config';

import { AuthServiceClient } from '../proto-generated/AuthenticationServiceClientPb';
import { SettingsServiceClient } from '../proto-generated/SettingsServiceClientPb';
import AuthStreamInterceptor from './auth-stream-interceptor';
import AuthUnaryInterceptor from './auth-unary-interceptor';

declare global {
  interface Window {
    __GRPCWEB_DEVTOOLS__: (
      clients: Array<AuthServiceClient | SettingsServiceClient>,
    ) => void;
  }
}

const { publicRuntimeConfig } = getConfig()

const authStreamInterceptor = new AuthStreamInterceptor();
const authUnaryInterceptor = new AuthUnaryInterceptor();

export const authServiceClient = new AuthServiceClient(publicRuntimeConfig.publicApiUrl, undefined, {
  streamInterceptors: [authStreamInterceptor],
  unaryInterceptors: [authUnaryInterceptor]
});

export const settingsServiceClient = new SettingsServiceClient(publicRuntimeConfig.publicApiUrl, undefined, {
  streamInterceptors: [authStreamInterceptor],
  unaryInterceptors: [authUnaryInterceptor]
});

if (process.browser) {
  // eslint-disable-next-line no-underscore-dangle
  const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
  enableDevTools([
    authServiceClient,
    settingsServiceClient,
  ]);
}

