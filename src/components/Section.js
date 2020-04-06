import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'styled-tools';

const StyledSection = styled.div`
  border-left: 1px dashed black;
  margin: 2rem 0;
`;

const StyledItem = styled.div`
  & > h3 {
    & > span:first-child {
      margin-right: 1rem;
    }
    & > span:nth-child(3) {
      color: ${theme('colors.purple')};
      /* margin-left: 1rem; */
    }
    margin-bottom: 0.5rem;
  }
  & > h4 {
    color: ${theme('colors.grey')};
    margin: 0.5rem 1rem;
  }
  margin: 2rem 0;
  max-width: calc(320px - 4rem);
`;

export const Section = ({ t, i18n }) => {
  return (
    <StyledSection>
      <h2>{t('title')}</h2>
      <div>
        {t('subSections', { returnObjects: true }).map((s) => (
          <StyledItem key={`${s.subTitle}_${s.dates}`}>
            <h3>
              <span>{s.title}</span><br /><span>{s.subTitle}</span>
            </h3>
            <h4>{s.dates}</h4>
            <p>{s.description}</p>
            {s.extra && <small>{s.extra}</small>}
          </StyledItem>
        ))}
      </div>
    </StyledSection>
  );
};
