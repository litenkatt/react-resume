import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

// import se from './se.json';
// import en from './en.json';
// const lang = 'en';

// const translations = lang === 'en' ? en : se;
// const resources = {
//   [lang]: {
//     translation: {
//       ...translations,
//     },
//   },
// };

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
