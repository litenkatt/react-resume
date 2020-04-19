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

const WorkExperience = withTranslation('work')(Section);
const Education = withTranslation('education')(Section);


export const Experience = () => {
  return (
      <StyledMain>
        <WorkExperience />
        <Education />
      </StyledMain>
  );
};
