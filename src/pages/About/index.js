import React from 'react';
import Header from '../../components/Header';
import { Title, Box } from './styled';
import { Button, Link } from '../../styles/GlobalStyles';
import { FaGithub } from 'react-icons/fa';

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
            at least trying to) <span>the risk of feeling dumb</span>. It's a
            personal project of mine, so don't take it too seriously. I made it,
            mainly, for learning purposes.
          </p>
        </section>
        <Title>How it works</Title>
        <section>
          <p>
            Basically — and firstly — you'll be able to input your friends
            e-mail and then send an anonimous customized message to it, asking
            if they would want to talk about some <span>serious stuff</span>.
            The point of it being anonimous at the beginning means that, if your
            friend decline the talk proposal, they'll never know who make
            contact through the platform. On the other side, it being accepted,
            your own name and contact will be shown instantly.
          </p>
        </section>
        <Title>Donate</Title>
        <section>
          <p id="donate">
            If you like this idea, pay me a coffee or something else you usually
            like to eat. Personally, I love pizza. They're kinda expensive,
            though.
          </p>
        </section>
        <Button>
          <Link
            to="https://www.paypal.com/donate/?business=LFNDM9LPSLDLU&no_recurring=0&item_name=Please%2C+just+do+it+if+I+really+did+something+for+you.&currency_code=BRL"
            target="blank"
            className={'donate-link'}
          >
            Click here!
          </Link>
        </Button>
        <Link className="about-home" to={'/'}>
          Home
        </Link>
      </Box>
    </>
  );
}
