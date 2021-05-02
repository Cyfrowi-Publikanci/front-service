import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../public/static/locales/en.json';

const resources = { en: { translation: en } };

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
