import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledSection = styled.div`
  border-left: 1px dashed ${theme('colors.base')};;
  margin: 2rem 0;
  flex: 1 0 calc(320px - 4rem);
`;

const StyledItem = styled.div`
  & > h3 {
    & > span {
      display: inline-block;
    }
    & > span:first-child > span {
      margin-left: 1rem;
    }
    & > span:nth-child(2) {
      margin-left: 1rem;
      color: ${theme('colors.accent')};
    }
    margin-bottom: 0.5rem;
  }
  & > h4 {
    color: ${theme('colors.grey')};
    margin: 0.5rem 1rem;
  }
  & > h6 {
    color: ${theme('colors.grey')};
    font-style: italic;
  }
  margin: 2rem 0;
`;

export const Section = ({ t, i18n }) => {
  return (
    <StyledSection>
      <h2>{t('title')}</h2>
      <div>
        {t('subSections', { returnObjects: true }).map((s) => (
          <StyledItem key={`${s.subTitle}_${s.dates}`}>
            <h3>
              <span>{s.title} <span>/</span></span>
              <span>{s.subTitle}</span>
            </h3>
            {s.dates && <h4>{s.dates}</h4>}
            {s.description && <p>{s.description}</p>}
            {s.extra && <h6>{s.extra}</h6>}
          </StyledItem>
        ))}
      </div>
    </StyledSection>
  );
};
