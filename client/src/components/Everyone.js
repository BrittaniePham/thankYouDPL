import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Card, 
  Image, 
  Button, 
  Container, 
  Divider, 
} from 'semantic-ui-react'
import Dave from '../images/Dave.png'
import Nhi from '../images/Nhi.png'
import Spence from '../images/Spence.png'
import Will from '../images/Will.png'
import Jacob from '../images/Jacob.png'
import Anthony from '../images/Anthony.jpeg'
import Dan from '../images/Dan.jpeg'
import Sarah from '../images/Sarah.jpeg'



const Everyone = () => {
  return (
    <div>
      <Container>
        <Card.Group itemsPerRow={3}>

          <Card raised >
            <Card.Content>
              <Image src={Dave} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Dave Jungst</Card.Header>
              <Card.Meta>Teacher</Card.Meta>
              <Link to='/dpl/Dave'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Anthony} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Anthony Kelley</Card.Header>
              <Card.Meta>TA</Card.Meta>
              <Link to='/dpl/Anthony'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Dan} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Dan Actor</Card.Header>
              <Card.Meta>TA</Card.Meta>
              <Link to='/dpl/Dan'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Jacob} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Jacob Wheeler</Card.Header>
              <Card.Meta>TA</Card.Meta>
              <Link to='/dpl/Jacob'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Sarah} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Sarah Daenitz</Card.Header>
              <Card.Meta>TA</Card.Meta>
              <Link to='/dpl/Sarah'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Spence} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Spencer Richards</Card.Header>
              <Card.Meta>TA</Card.Meta>
              <Link to='/dpl/Spencer'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Will} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Will Liang</Card.Header>
              <Card.Meta>Teacher</Card.Meta>
              <Link to='/dpl/Will'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Nhi} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Nhi Doan</Card.Header>
              <Card.Meta>Teacher</Card.Meta>
              <Link to='/dpl/Nhi'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>

          <Card raised >
            <Card.Content>
              <Image src={Dave} height='100%' width='100%'/>
              <Divider hidden/>
              <Card.Header>Marc Price</Card.Header>
              <Card.Meta>Teacher</Card.Meta>
              <Link to='/dpl/Marc'>
                <Button fluid>View</Button>
              </Link>
            </Card.Content>
          </Card>


        </Card.Group>
      </Container>
    </div>
  );
};

export default Everyone;