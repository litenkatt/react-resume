import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { Section } from '../components/Section';

const StyledMain = styled.div`
  height: 100%;
  margin: 0 2rem;
`;

const WorkExperience = withTranslation('work')(Section);


export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <WorkExperience />
    </StyledMain>
  );
};
