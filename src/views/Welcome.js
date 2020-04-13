import React from 'react';
import styled from 'styled-components';
// import { theme } from 'styled-tools';

const StyledWelcome = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
export const Welcome = () => {
  return (
    <StyledWelcome>
      Hej
    </StyledWelcome>
  );
};
