import React from 'react';
import styled from 'styled-components';
// import { theme } from 'styled-tools';

const StyledTextBlock = styled.div`
  margin: 5rem;
  & > p {
    max-width: 70rem;
    margin: 4rem;
  }
  & > p:nth-child(2) {
    margin-left: 20rem;
  }
`;
export const TextBlock = ({ t }) => {
  return (
    <StyledTextBlock>
      {t('text', { returnObjects: true }).map((segment) => (
        <p>{segment}</p>
      ))}
    </StyledTextBlock>
  );
};
