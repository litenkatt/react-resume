import React from 'react';
import styled from 'styled-components';
import { ifNotProp } from 'styled-tools';
import { withTranslation } from 'react-i18next';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { InfoBox } from '../components/InfoBox';


const StyledMain = styled.div`
  height: 100%;
  margin: 0 2rem;
  min-width: calc(320px - 4rem);
`;

const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  /* flex-wrap: ${ifNotProp('theme.desktop', 'wrap')}; */
`;

const WorkExperience = withTranslation('work')(Section);
const Education = withTranslation('education')(Section);
const Contact = withTranslation('contact')(InfoBox);


export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <StyledContent>
        <WorkExperience />
        <Education />
        <Contact />
      </StyledContent>
    </StyledMain>
  );
};
