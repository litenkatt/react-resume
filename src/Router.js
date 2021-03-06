import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Welcome } from './views/Welcome';
import { Experience } from './views/Experience';
import { Info } from './views/Info';
import i18n from './i18n';

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
  const currentIndex = routes.indexOf(current.pathname.slice(3)) === -1 ? 0 : routes.indexOf(current.pathname.slice(3));
  return (
    <StyledRouter>
      <Header />
      <Navigation
        before={routes[currentIndex - 1]}
        after={routes[currentIndex + 1]}
      />
      <StyledContent>
        <Switch>
          <Route path="/:lang/experience" exact>
            <Experience />
          </Route>
          <Route path="/:lang/info" exact>
            <Info />
          </Route>
          <Route
            path="/:lang"
            exact
            render={(props) => i18n.languages.includes(props.match.params.lang) ? 
                <Welcome />
               : (//fixes links and adds language prefix
                <Redirect to={`/${i18n.language.slice(0, 2)}/${props.match.params.lang}`} />
              )
            }
          />
          <Route>
            <Redirect to={`/${i18n.language.slice(0, 2)}/`} />
          </Route>
        </Switch>
      </StyledContent>
    </StyledRouter>
  );
};
