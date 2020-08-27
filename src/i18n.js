import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

const options = {
  order: ['path', 'navigator']
}

i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: options,
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
