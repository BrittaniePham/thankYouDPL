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

const Dave = () => {
  return (
    <div>
      <Container>
        <Header as='h1' textAlign='center'>Students of Devpoint Labs - Summer 2018</Header>
        <Grid>
          
          <Grid.Row>
            <Grid.Column width={6}>
              <Image circular src={Brittanie} size='medium' />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign='middle' padded='vertically'>
              <Header as='h2' textAlign='center'>Brittanie Pham</Header>
              <Divider/>
                <p>
                  Dave, where do I even start?! You've been such an inspiration to me. 
                  Thank you for always making class enjoyable and fun. Honestly, you're the best teacher I've ever had and I promise you 
                  I am not just saying that to be nice. You've always been more than happy to help every student with anything they needed, 
                  and we couldn't have asked for more. 
                  Podium is practically begging you to work there, plus you'd get to be with your best friend Jake that we all hear so much about,
                  yet you still choose to stay with us. I can definitely tell you love what you do and I'm happy for you. I can't thank you enough.
                </p>
                <p>
                  p.s. If I can get better at boarding and handle more than the bunny hill, lets hit the slopes. I'll invite Taylor and whoever else at DPL that wants to join. We can have a DPL shred day.
                  I'll bring an epi pen in case you break out in hives. (I still can't believe you're allergic to the cold)
                </p>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column width={6}>
              <Image circular src={Brittanie} size='medium' />
            </Grid.Column>
            <Grid.Column width={10} verticalAlign='middle' padded='vertically'>
              <Header as='h2' textAlign='center'>Brittanie Pham</Header>
              <Divider/>
                <p>
                  Dave, where do I even start?! You've been such an inspiration to me. 
                  Thank you for always making class enjoyable and fun. Honestly, you're the best teacher I've ever had and I promise you 
                  I am not just saying that to be nice. You've always been more than happy to help every student with anything they needed, 
                  and we couldn't have asked for more. 
                  Podium is practically begging you to work there, plus you'd get to be with your best friend Jake that we all hear so much about,
                  yet you still choose to stay with us. I can definitely tell you love what you do and I'm happy for you. I can't thank you enough.
                </p>
                <p>
                  p.s. If I can get better at boarding and handle more than the bunny hill, lets hit the slopes. I'll invite Taylor and whoever else at DPL that wants to join. We can have a DPL shred day.
                  I'll bring an epi pen in case you break out in hives. (I still can't believe you're allergic to the cold)
                </p>
            </Grid.Column>
          </Grid.Row>
      
        </Grid>
      </Container>
    </div>
  );
};

export default Dave;