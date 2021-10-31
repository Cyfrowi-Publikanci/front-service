const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  serverRuntimeConfig: {
    googleSecretClientID: process.env.GOOGLE_CLIENT_ID_SECRET ? process.env.GOOGLE_CLIENT_ID_SECRET : '',
  },
  publicRuntimeConfig: {
    publicApiUrl: process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : '',
    googleClientID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID : '',
    googleCallbackURL: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT ? process.env.NEXT_PUBLIC_GOOGLE_REDIRECT : '',
  },
});
