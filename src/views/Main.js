import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const StyledMain = styled.div`
  height: 100%;
  margin: 0 2rem;
`;

export const Main = () => {
  return (
    <StyledMain>
      <Header />
      hejhej
    </StyledMain>
  );
};
