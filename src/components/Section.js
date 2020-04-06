import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';

const StyledSection = styled.div``;

const StyledItem = styled.div`
  & > h3 {
    & > span:first-child {
      margin-right: 1rem;
    }
    & > span:nth-child(2) {
      color: ${theme('colors.purple')};
      margin-left: 1rem;
    }
  }
`;

export const Section = ({ t, i18n }) => {
  return (
    <StyledSection>
      <h2>{t('title')}</h2>
      <div>
        {t('subSections', { returnObjects: true }).map((s) => (
          <StyledItem key={`${s.subTitle}_${s.dates}`}>
            <h3>
              <span>{s.title}</span>/
              <span>{s.subTitle}</span>
            </h3>
            <h4>{s.dates}</h4>
            <p>{s.description}</p>
            <small>{s.extra}</small>
          </StyledItem>
        ))}
      </div>
    </StyledSection>
  );
};
