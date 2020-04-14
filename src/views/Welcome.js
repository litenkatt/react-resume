import React from 'react';
import styled from 'styled-components';
// import { theme } from 'styled-tools';

const StyledWelcome = styled.div`
  margin-top: 2rem;
  max-width: 50rem;
 & > p {
     margin: auto;
 }
`;
export const Welcome = () => {
  return (
    <StyledWelcome>
      <p>
        Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej
        Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej Hej
      </p>
    </StyledWelcome>
  );
};
