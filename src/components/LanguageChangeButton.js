import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { useHistory } from 'react-router-dom';

const StyledLanguage = styled.span`
  cursor: pointer;
  font-size: ${ifProp('current', '120%')};
`;

export const LanguageChangeButton = ({ i18n }) => {
  let history = useHistory();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    history.push(`/${lang}${history.location.pathname.slice(3)}`);
  };
  return (
    <h3>
      <StyledLanguage
        current={i18n.language === 'sv'}
        onClick={() => handleClick('sv')}
      >
        sv
      </StyledLanguage>
      /
      <StyledLanguage
        current={i18n.language !== 'sv'}
        onClick={() => handleClick('en')}
      >
        en
      </StyledLanguage>
    </h3>
  );
};
