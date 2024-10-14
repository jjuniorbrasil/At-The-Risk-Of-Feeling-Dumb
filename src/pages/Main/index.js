import React, { Component, Fragment, useState } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MainForm from '../../components/MainForm';
import MessageForm from '../../components/MessageForm';
import { Box } from './styled';
import { FaGithub } from 'react-icons/fa';

const states = ['inactive', 'loading', 'active'];

export default function Main() {
  const [currentState, setCurrentState] = useState(states[0]);
  const [email, setEmail] = useState('');

  return (
    <Box>
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
        Idealized by <FaGithub /> {' '}
        <a target="blank" href="https://github.com/jjuniorbrasil">
          J. Júnior
        </a>
        .
      </p>
    </div>
  );
}
