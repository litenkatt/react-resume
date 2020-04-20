import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Welcome } from './views/Welcome';
import { Experience } from './views/Experience';
import { Info } from './views/Info';

const StyledRouter = styled.div`
  height: 100%;
  margin: 0 2rem;
  min-width: calc(320px - 4rem);
`;

const StyledContent = styled.div`
  margin: ${ifProp('theme.desktop', '0 4rem')};
  margin-bottom: 10rem;
`;

export const Router = () => {
  const routes = ['/', '/experience', '/info'];
  const current = useLocation();
  const currentIndex = routes.indexOf(current.pathname);

  return (
    <StyledRouter>
      <Header />
      <Navigation
        before={routes[currentIndex - 1]}
        after={routes[currentIndex + 1]}
      />
      <StyledContent>
        <Switch>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </StyledContent>
    </StyledRouter>
  );
};
