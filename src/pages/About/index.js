import React from 'react';
import Header from '../../components/Header';
import { Title, Box } from './styled';
import { Button, Link } from '../../styles/GlobalStyles';

export default function About({ withoutTitle }) {
  return (
    <>
      <Box>
        {!withoutTitle && <Header></Header>}
        <Title>About</Title>
        <section>
          <p>
            Based on Twenty One Pilots song 'At The Risk of Feeling Dumb'
            (2024), I created this website aiming to stabilish a communication
            channel between people that struggles to communicate, reducing (or
            at least trying to) <span>the risk of feeling dumb</span>.
          </p>
        </section>
        <Title>How it works</Title>
        <section>
          <p>
            Basically — and firstly — you'll be able to input your friends
            e-mail and then send an anonimous customized message to it, asking
            if they would want to talk about serious stuff. The point of it
            being anonimous at the beginning means that, if your friend decline
            the talk proposal, they'll never know who make contact through this
            platform. On the other side, it being accepted, your own name and
            contact will be sent afterwards.
          </p>
        </section>
        <Title>Donate</Title>
        <section>
          <p id="donate">
            Hey, if you like this idea, pay me a coffee or something else you
            like to eat. I, personally, love pizza, but they're kinda expensive,
            to be honest.
          </p>
        </section>
        <Button>
          <Link className={'donate-link'}>Click here!</Link>
        </Button>
      </Box>
    </>
  );
}
