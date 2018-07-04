import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { 
  Card, 
  Image, 
  Button, 
  Container, 
  Divider, 
} from 'semantic-ui-react'
import devMembers from '../Members'

class Everyone extends Component {
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={3}>
          { devMembers.map ( member => 
          <Card raised key={member.firstName}>
            <Card.Content>
              <Image src={member.image} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>{member.firstName} {member.lastName}</Card.Header>
              <Card.Meta>{member.jobTitle}</Card.Meta>
              <Link to={`/dpl/${member.firstName}`}>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>
          )}
        </Card.Group>
      </Container>
    );
  }
}

export default Everyone;