import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';
import { useTranslation } from 'react-i18next';

const intro = keyframes`
  from {
  }
  to {

  }
`;

const StyledHeader = styled.div`
  border-bottom: 2px black solid;
`;

const StyledLogo = styled.div`
  display: inline-block;
  position: relative;
  z-index: 2;
  font-size: ${theme('fontSizes.huge')};
  /* animation: ${intro} 2s linear; */
  & > span:first-child{
    color: ${theme('colors.purple')};
  }
  & > span:nth-child(2){
    font-size: 80%;
  }

`;

export const Header = ({}) => {
  const { t, i18n } = useTranslation();
  console.log(t)
  return (
    <StyledHeader>
      <StyledLogo>
        <span>{t('firstName')}</span>
        <span>HÖRNAEUS</span>
      </StyledLogo>
    </StyledHeader>
  );
};
