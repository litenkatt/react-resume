import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { Section } from '../components/Section';

const StyledMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Experience = withTranslation('experience')(({ t }) => {
  return (
      <StyledMain>
        <Section {...t('work', { returnObjects: true })}/>
        <Section {...t('education', { returnObjects: true })}/>
      </StyledMain>
  );
});
