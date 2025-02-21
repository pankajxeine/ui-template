import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en_translation from './config/language/en.json';
const resources = {
  en: {
    translation: en_translation,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { default } from 'i18next';
