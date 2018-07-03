import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import nomatchpage from '../images/nomatchpage.jpg'

class NoMatch extends Component {
  render() {
    return (
      <div>
      <Image src={nomatchpage} fluid/>
      <Header as='h1' textAlign='center'>
        <Link to='/'> Home</Link>
          |   
        <Link to='/dpl'>Everyone</Link>
          | 
        <Link to='/ThankYou'>Thank You</Link>
      </Header>
      </div>
    );
  }
}

export default NoMatch;