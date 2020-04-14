import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Welcome } from './views/Welcome';
import { Main } from './views/Main';
import { Contact } from './views/Contact';

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
  const routes = ['/', '/main', '/contact'];
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
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </StyledContent>
    </StyledRouter>
  );
};
