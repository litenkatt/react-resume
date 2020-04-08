import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';
import { withTranslation } from 'react-i18next';
import { SwitchButton } from './SwitchButton';
import { LanguageChangeButton } from './LanguageChangeButton';

const intro = keyframes`
  from {
  }
  to {

  }
`;

const StyledHeader = styled.div`
  border-bottom: 2px ${theme('colors.body')} solid;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`;

export const Header = withTranslation('header')(({ t, i18n, props }) => {
  return (
    <StyledHeader>
      <StyledLogo>
        <span>{t('firstName')}</span>
        <span>{t('lastName')}</span>
      </StyledLogo>
      <LanguageChangeButton i18n={i18n}/>
      <SwitchButton {...props} />
    </StyledHeader>
  );
});
