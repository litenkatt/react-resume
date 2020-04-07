import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledSection = styled.div`
  border-left: 1px dashed ${theme('colors.body')};;
  margin: 2rem 0;
`;

const StyledItem = styled.div`
  &:hover {
    width: 5000px;
    & > h3,
    & > h4,
    & > h6,
    & > p {
      font-size: 2em;
    }
  }
  & > h3 {
    & > span:first-child {
      margin-right: 1rem;
    }
    & > span:nth-child(3) {
      color: ${theme('colors.accent')};
    }
    margin-bottom: 0.5rem;
  }
  & > h4 {
    color: ${theme('colors.grey')};
    margin: 0.5rem 1rem;
  }
  margin: 2rem 0;
  max-width: calc(600px - 4rem);
  min-width: calc(320px - 4rem);
`;

export const Section = ({ t, i18n }) => {
  return (
    <StyledSection>
      <h2>{t('title')}</h2>
      <div>
        {t('subSections', { returnObjects: true }).map((s) => (
          <StyledItem key={`${s.subTitle}_${s.dates}`}>
            <h3>
              <span>{s.title}</span>
              <br />
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
