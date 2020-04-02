import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import se from './se.json';
import en from './en.json';
const lang = 'en';

const resources = {
  [lang]: {
    translation: {
      ...en
    },
  },
};

console.log(resources)
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
