import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Header } from '../components/Header';

const StyledMain = styled.div`
  height: 100%;
  margin: 0;
`;

export const Main = ({}) => {
  return (
    <StyledMain>
      <Header />
    </StyledMain>
  );
};
