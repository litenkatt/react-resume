import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const StyledTextBlock = styled.div`
    margin: ${ifProp('theme.desktop', '5rem')};

  & > p {
    max-width: 70rem;
    margin: ${ifProp('theme.desktop', '4rem', '2rem 0')};
  }
  ${ifProp(
    'theme.desktop',
    css`
      & > p:nth-child(2) {
        margin-left: 20rem;
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
