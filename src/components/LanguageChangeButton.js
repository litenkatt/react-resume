import React from 'react';

export const LanguageChangeButton = ({ i18n }) => {
  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  };
  return (
    <h3>
      <span onClick={() => handleClick('se')}>se</span>/
      <span onClick={() => handleClick('en')}>en</span>
    </h3>
  );
};
