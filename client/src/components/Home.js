import React from 'react';
import { Header, Image, Button, Container } from 'semantic-ui-react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import group from '../images/group.jpg'

const Home = () => {
  return (
    <div>
      <Image centered src={logo}/>
      <Header size='huge' textAlign='center'>Thank you for all you've done for us</Header>
      <Container>
        <Image centered spaced src={group}/>
      </Container>
      <Header size='huge' textAlign='center'>-Summer Daytime class 2018</Header>
      <Container>
        <Link to="/dpl">
          <Button color='black' as='h1' floated='right' >DPL Family</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;