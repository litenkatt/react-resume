import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledInfobox = styled.div`
  border: 1px solid ${theme('colors.body')};
  margin: 2rem 0;
  font-size: 2rem;
  padding: 1rem;
  & > h4 {
    text-align: center;
  }
  & > a {
    display: block;
    text-align: center;
    padding: 0.5rem;
  }
`;

export const InfoBox = ({ t, i18n }) => {
  return (
    <StyledInfobox>
        <h4>{t('street')}</h4>
        <h4>{t('postal')}</h4>
        <a href="mailto:ninni@ninni.tech">{t('email')}</a>
        <a href="tel:0739876588">{t('telephone')}</a>
    </StyledInfobox>
  );
};
