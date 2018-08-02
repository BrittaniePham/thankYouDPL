import React from 'react';
import { Header, Container } from 'semantic-ui-react'
import styled from 'styled-components'

const LaunchDay = () => {
  return (
    <div>
      <VideoContainer textAlign='center'>
      <iframe
        width="1020" height="574" src="https://www.youtube.com/embed/KTgICYeMPbg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title='thanks'>
      </iframe>
    </VideoContainer>
    </div>
  );
}

const VideoContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

export default LaunchDay;
