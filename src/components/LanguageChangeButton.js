import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const StyledLanguage = styled.span`
  cursor: pointer;
  font-size: ${ifProp('current', '120%')};
`;

export const LanguageChangeButton = ({ i18n }) => {
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <h3>
      <StyledLanguage
        current={i18n.language === 'se'}
        onClick={() => handleClick('se')}
      >
        se
      </StyledLanguage>
      /
      <StyledLanguage
        current={i18n.language === 'en'}
        onClick={() => handleClick('en')}
      >
        en
      </StyledLanguage>
    </h3>
  );
};
