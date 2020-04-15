import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
// import { theme } from 'styled-tools';
import { TextBlock } from '../components/TextBlock';


const StyledWelcome = styled.div`
  margin-top: 2rem;
`;

const Intro = withTranslation('intro')(TextBlock);

export const Welcome = () => {
  return (
    <StyledWelcome>
      <Intro />
    </StyledWelcome>
  );
};
