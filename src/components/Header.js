import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from 'styled-tools';
import { withTranslation } from 'react-i18next';
import { SwitchButton } from './SwitchButton';
import { LanguageChangeButton } from './LanguageChangeButton';
import { ThemeContext } from '../utils/contexts';

const intro = keyframes`
  from {
  }
  to {

  }
`;

const StyledHeader = styled.div`
  border-bottom: 2px ${theme('colors.base')} solid;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
  }
`;

const StyledLogo = styled.h1`
  display: inline-block;
  position: relative;
  z-index: 2;
  /* animation: ${intro} 2s linear; */
  & > span:first-child{
    color: ${theme('colors.accent')};
  }
  & > span:nth-child(2){
    font-size: 0.8em;
    color: ${theme('colors.base')};
  }
`;

export const Header = withTranslation('header')(({ t, i18n, props }) => {
  const { small } = useContext(ThemeContext);
  const firstName = small ? t('firstName')[0] : t('firstName')
  const lastName = small ? t('lastName')[0] : t('lastName')
  return (
    <StyledHeader>
      <Link to="/">
      <StyledLogo>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </StyledLogo>
      </Link>
      <div>
        <LanguageChangeButton i18n={i18n} />
        <SwitchButton {...props} />
      </div>
    </StyledHeader>
  );
});
