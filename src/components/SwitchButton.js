import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { ThemeContext } from '../utils/contexts';

const StyledSwitchButton = styled.div`
  height: 4rem;
  width: 3rem;
  background: ${theme('colors.grey')};
  border-radius: 10%;
  overflow: hidden;
  cursor: pointer;
  & > div {
      position: relative;
    top: ${ifProp( "dark" , "2rem", "0")};
    transition: top 0.3s ease-in-out;
    background: ${theme('colors.body')};
    height: 2rem;
    width: 3rem;

  }
`;

export const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const { dark, setDark } = theme;

  const handleSwitch = () => {
    setDark(!dark);
  };
  return (
    <StyledSwitchButton onClick={handleSwitch} dark={dark}>
      <div />
    </StyledSwitchButton>
  );
};
