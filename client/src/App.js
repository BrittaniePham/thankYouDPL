import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import styled from 'styled-components';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ThankYou from './components/ThankYou';
import Everyone from './components/Everyone';
import Member from './components/SingleMember';

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, #fff0f8, #d7ecff);
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ThankYou" component={ThankYou} />
          <Route exact path="/dpl" component={Everyone} />
          <Route exact path="/dpl/:member" component={Member} />
          <Route component={NoMatch} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
