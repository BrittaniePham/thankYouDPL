import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import logo from '../images/logo.jpg'

const Home = () => {
  return (
    <div>
      <Image centered src={logo}/>
      <Header size='huge' textAlign='center'>Thank you for all you've done for us</Header>
    </div>
  );
};

export default Home;