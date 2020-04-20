import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { Contact } from '../components/Contact';
import { List } from '../components/List';

const StyledInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -2rem;
  & > div {
    flex: 1;
    margin: 2rem 2rem 0;
  }
`;

export const Info = withTranslation('info')(({ t }) => {
  return (
    <StyledInfo>
      <div>
        <List {...t('languages', { returnObjects: true })} />
        <List {...t('skills', { returnObjects: true })} />
      </div>
      <Contact {...t('contact', { returnObjects: true })} />
    </StyledInfo>
  );
});
