import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';

const StyledSection = styled.div`

`;

export const Section = ({t}) => {
  return (
    <StyledSection>
      <h2>{t('title')}</h2>
    </StyledSection>
  );
};
