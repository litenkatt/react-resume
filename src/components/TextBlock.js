import React from 'react';
import styled from 'styled-components';
// import { theme } from 'styled-tools';

const StyledTextBlock = styled.p`
  margin: 2rem;
`;
export const TextBlock = ({ t }) => {
  return <StyledTextBlock>{t('text')}</StyledTextBlock>;
};
