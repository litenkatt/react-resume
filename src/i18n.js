import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import SyncBackend from 'i18next-xhr-backend';

const options = {
  order: ['path', 'navigator'],
};

i18n
  .use(detector)
  .use(SyncBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    initImmediate: false, // To be able to access language directly
    detection: options,
    fallbackLng: ['en', 'sv'],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
