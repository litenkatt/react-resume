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
`;

export const Info = withTranslation('info')(({t}) => {
  return (
      <StyledInfo>
        <Contact {...t('contact', { returnObjects: true })}/>
        <List {...t('languages', { returnObjects: true })}/>
        <List {...t('skills', { returnObjects: true })}/>
      </StyledInfo>
  );
});
