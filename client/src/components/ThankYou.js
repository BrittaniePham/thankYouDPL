import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

const ThankYou = () => {
  return (
    <RespContainer textAlign='center'>
      <Iframe
        width="1020" height="574" src="https://www.youtube.com/embed/KTgICYeMPbg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title='thanks'>
      </Iframe>
    </RespContainer>
  );
};

const Iframe = styled.iframe `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;
`

const RespContainer = styled.div `
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`

export default ThankYou;