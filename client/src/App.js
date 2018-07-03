import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import styled from 'styled-components';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ThankYou from './components/ThankYou';
import Everyone from './components/Everyone';
import Anthony from './components/Anthony';
import Dan from './components/Dan';
import Dave from './components/Dave';
import Jacob from './components/Jacob';
import Marc from './components/Marc';
import Nhi from './components/Nhi';
import Sarah from './components/Sarah';
import Spencer from './components/Spencer';
import Will from './components/Will';
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
          <Route exact path="/dpl/Anthony" component={Anthony} />
          <Route exact path="/dpl/Dan" component={Dan} />
          <Route exact path="/dpl/Dave" component={Dave} />
          <Route exact path="/dpl/Jacob" component={Jacob} />
          <Route exact path="/dpl/Marc" component={Marc} />
          <Route exact path="/dpl/Nhi" component={Nhi} />
          <Route exact path="/dpl/Sarah" component={Sarah} />
          <Route exact path="/dpl/Spencer" component={Spencer} />
          <Route exact path="/dpl/Will" component={Will} />
          <Route exact path="/dpl/:member" component={Member} />


          <Route component={NoMatch} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
