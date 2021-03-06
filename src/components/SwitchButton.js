import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { ThemeContext } from '../utils/contexts';

const StyledSwitchButton = styled.div`
  margin-right: 1rem;
  height: 3rem;
  width: 2rem;
  background: ${theme('colors.grey')};
  border-radius: 10%;
  overflow: hidden;
  cursor: pointer;
  & > div {
    position: relative;
    top: ${ifProp('dark', '1.5rem', '0')};
    transition: top 0.3s ease-in-out;
    background: ${theme('colors.base')};
    height: 1.5rem;
    width: 2rem;
  }
`;

export const SwitchButton = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const handleSwitch = () => {
    setDark(!dark);
  };
  return (
    <StyledSwitchButton onClick={handleSwitch} dark={dark}>
      <div />
    </StyledSwitchButton>
  );
};
