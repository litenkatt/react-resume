import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { InfoBox } from '../components/InfoBox';

const StyledMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Info = withTranslation('contact')(InfoBox);

export const Contact = () => {
  return (
      <StyledMain>
        <Info />
      </StyledMain>
  );
};
