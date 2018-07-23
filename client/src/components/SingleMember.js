import React from 'react';
import { 
  Image, 
  Container, 
  Divider, 
  Header,
  Grid,
  Segment,
} from 'semantic-ui-react'
import students from '../StudentResponses'

class SingleMember extends React.Component {
  // studentReplies = students.map( student => ({
  //   response: student[this.props.match.params.member.toLowerCase()],
  //   image: student.image,
  //   name: student.name,
  // })).filter( student => !!student.response)

  studentReplies = students.reduce( (acc, student) => {
    if (!!student[this.props.match.params.member.toLowerCase()]) {
      return [
        ...acc,
        {
          response: student[this.props.match.params.member.toLowerCase()],
          image: student.image,
          name: student.name,
        },
      ]
    }

    return acc;
  }, [])

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    const { member } = this.props.match.params
    console.log(this.studentReplies)

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
                  <Segment raised>{student.response}</Segment>
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