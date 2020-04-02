import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';

const intro = keyframes`
  from {
  }
  to {

  }
`;

const StyledHeader = styled.div`
  margin: 2rem;
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
  return (
    <StyledHeader>
      <StyledLogo><span>NINNI</span><span>HÖRNAEUS</span></StyledLogo>
    </StyledHeader>
  );
};
