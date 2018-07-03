import React from 'react';
import { 
  Card, 
  Image, 
  Container, 
  Divider, 
  Header,
  Grid
} from 'semantic-ui-react'
import Brittanie from '../images/Brittanie.jpg'
import Kira from '../images/Kira.jpg'

const Anthony = () => {
  return (
    <div>
      <Container>
        <Header as='h1' textAlign='center'>Dear Anthony,</Header>
        <Divider/>
        <Grid>
          
          <Grid.Row>
            <Grid.Column width={6}>
              <Image circular src={Brittanie} size='medium' />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign='middle' padded='vertically'>
              <Header as='h2' textAlign='center'>Brittanie Pham</Header>
              <Divider/>
                <p>
                  Oh boy, finding nice things to say about you is going to be hard…
                  Just kidding! I’m sorry if I was ever mean to you, it’s just so easy to tease you, man. I feel like you set it up for me. I can’t help it. I hope you know that I only mess with you so much because I feel close/comfortable enough with you to do so.
                </p>
                <p>
                  I'll never admit this in person but you always will be one of my favorite people to be around because you’re so fun to talk to!
                  Anyways, thank you for always going above and beyond when I had questions. You are so smart, and an amazing TA/instructor! I might've had a bad way of showing it but, you definitely were one of my absolute favorite TA's.
                </p>
                <p>
                  To be honest, I was always hoping to be in your group again, week after week.. but after the Casino game, I never got the chance! I was also pretty bummed when I found out we weren’t on the same portfolio project.
                  Let’s be real, you probably planned it that way because of the trauma/emotional damage I caused you. Sorry dude. I’ll work on being a little less salty.
                </p>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column width={6}>
              <Image circular src={Kira} size='medium' />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign='middle' padded='vertically'>
              <Header as='h2' textAlign='center'>Kira Kaur</Header>
              <Divider/>
                <p>
                  Anthony, you are the best! Our banter was one of the favorite parts of my day. You were my favorite TA…but don’t tell the others. I appreciate the time you took to answer any and all of my questions until I understood the material and was no longer confused. Your patience and kindness made all the difference in helping me become a programmer. Thank you so much!
                </p>
            </Grid.Column>
          </Grid.Row>
      
        </Grid>
      </Container>
    </div>
  );
};

export default Anthony;