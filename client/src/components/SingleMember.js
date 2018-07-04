import React from 'react';
import { 
  Image, 
  Container, 
  Divider, 
  Header,
  Grid,
} from 'semantic-ui-react'
import students from '../StudentResponses'

class SingleMember extends React.Component {
  studentReplies = students.map( student => ({
    response: student[this.props.match.params.member.toLowerCase()],
    image: student.image,
    name: student.name,
  }))

  render() {
    const { member } = this.props.match.params

    return (
      <div>
        <Container>
          <Header as='h1' textAlign='center'>Dear {member},</Header>
          <Divider/>
          <Grid>
            { this.studentReplies.map (student => 
              [<Grid.Row key={`${student.name}-grid`}>
                <Grid.Column width={6}>
                  <Image circular src={student.image} size='medium' />
                </Grid.Column>
                <Grid.Column width={10} verticalAlign='middle' padded='vertically'>
                  <Header as='h2' textAlign='center'>{student.name}</Header>
                  <Divider/>
                  <p>{student.response}</p>
                </Grid.Column>
              </Grid.Row>,
              <Divider  key={`${student.name}-divider`}/>]
            )} 
        
          </Grid>
        </Container>
      </div>
    );
  }
}

export default SingleMember;