import React, { useState } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MainForm from '../../components/MainForm';
import MessageForm from '../../components/MessageForm';
import headerImg from './../../assets/images/header.png';
import { Box } from './styled';
import { FaGithub } from 'react-icons/fa';

const states = ['inactive', 'loading', 'active'];

export default function Main() {
  const [currentState, setCurrentState] = useState(states[0]);
  const [email, setEmail] = useState('');

  return (
    <Box>
      <MetaData />
      <MainHead />
      <MainForm
        checkInHandler={setCurrentState}
        email={email}
        setEmail={setEmail}
      />
      {currentState !== 'inactive' ? (
        <MessageForm
          setCurrentState={setCurrentState}
          currentState={currentState}
          receiverEmail={email}
        />
      ) : null}
    </Box>
  );
}

function MainHead() {
  return (
    <div className="header">
      <Header />
      <Banner />
      <p className="banner-sign">
        Idealized by <FaGithub />{' '}
        <a target="blank" href="https://github.com/jjuniorbrasil">
          J. Júnior
        </a>
        .
      </p>
    </div>
  );
}

function MetaData() {
  return (
    <>
      <meta name="title" content="At The Risk of Feeling Dumb" />
      <meta
        name="description"
        content="This page's sole purpose is to offer a direct approach to a person you love and cares. You run the risk of feeling dumb, but know that you're not."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://at-the-risk-of-feeling-dumb.vercel.app/"
      />
      <meta property="og:title" content="At The Risk of Feeling Dumb" />
      <meta
        property="og:description"
        content="This page's sole purpose is to offer a direct approach to a person you love and cares. You run the risk of feeling dumb, but know that you're not."
      />
      <meta property="og:image" content={headerImg} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://at-the-risk-of-feeling-dumb.vercel.app/"
      />
      <meta property="twitter:title" content="At The Risk of Feeling Dumb" />
      <meta
        property="twitter:description"
        content="This page's sole purpose is to offer a direct approach to a person you love and cares. You run the risk of feeling dumb, but know that you're not."
      />
      <meta property="twitter:image" content={headerImg} />
    </>
  );
}
