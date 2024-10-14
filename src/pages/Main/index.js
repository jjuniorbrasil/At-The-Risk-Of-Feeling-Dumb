import React, { useState } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MainForm from '../../components/MainForm';
import MessageForm from '../../components/MessageForm';
import { Box } from './styled';

const states = ['inactive', 'loading', 'active'];

export default function Main() {
  const [currentState, setCurrentState] = useState(states[0]);
  const [email, setEmail] = useState('');

  return (
    <Box>
      <Header />
      <Banner />
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
