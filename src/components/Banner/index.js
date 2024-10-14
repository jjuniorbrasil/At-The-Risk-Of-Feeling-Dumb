import React from 'react';
import imgOhio from './../../assets/images/ohio.png';
import { Image, Paragraph } from './styled';
import { Container } from './../../styles/GlobalStyles';
import NavBar from '../NavBar';

export default function Banner() {
  return (
    <>
      <Container>
        <Image src={imgOhio} />
        <NavBar/>
        <Paragraph>
          This page's sole purpose is to offer a direct approach to a person you
          love and cares. You run the risk of feeling dumb, but know that you're
          not.
        </Paragraph>
      </Container>
    </>
  );
}
