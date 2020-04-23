import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const StyledTextBlock = styled.div`
  & > p {
    max-width: 60rem;
    margin: ${ifProp('theme.desktop', '4rem 0', '2rem 0')};
  }
  ${ifProp(
    'theme.desktop',
    css`
      width: 80%;
      margin: auto;

      & > p:nth-child(2) {
        margin-left: 2rem;
      }
    `
  )};
`;
export const TextBlock = ({ t }) => {
  return (
    <StyledTextBlock>
      {t('text', { returnObjects: true }).map((segment) => (
        <p key={segment}>{segment}</p>
      ))}
    </StyledTextBlock>
  );
};
