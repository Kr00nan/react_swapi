import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';
import ViewCharacter from './components/ViewCharacter';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character" component={ViewCharacter} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;