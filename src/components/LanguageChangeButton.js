import React from 'react';
import styled from 'styled-components';

const StyledLanguageChangeButton = styled.h3`
    cursor: pointer;
`;

export const LanguageChangeButton = ({ i18n }) => {
  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  };
  return (
    <StyledLanguageChangeButton>
      <span onClick={() => handleClick('se')}>se</span>/
      <span onClick={() => handleClick('en')}>en</span>
    </StyledLanguageChangeButton>
  );
};
