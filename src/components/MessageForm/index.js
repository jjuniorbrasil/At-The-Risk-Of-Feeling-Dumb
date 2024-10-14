import React, { useState, useRef, useEffect } from 'react';
import { Container, Button, Box, Title } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { toast } from 'react-toastify';
import validator from 'validator';

export default function MessageForm({
  currentState,
  setCurrentState,
  receiverEmail,
}) {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const divRef = useRef(null);

  const checkEsc = (e) => {
    if (e.key === 'Escape') setCurrentState('inactive');
  };

  useEffect(() => {
    window.addEventListener('keydown', checkEsc);
    return () => {
      window.removeEventListener('keydown', checkEsc);
    };
  });

  async function sendMessage(data) {
    return await fetch('/api/', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      receiverEmail,
      message,
    };

    if (!validator.contains(message, name)) {
      try {
        setCurrentState('loading');
        const response = await sendMessage(data);
        const responseData = await response.json();

        if (responseData.message === 'success') {
          toast('Please, check your inbox to confirm your message.', {
            autoClose: 2000,
            type: 'info',
          });
        }
      } catch (e) {
        toast(`Unable to sent. (${e.message})`, {
          autoClose: 2000,
          type: 'error',
        });
      } finally {
        setCurrentState('inactive');
      }
    } else {
      toast('The message must not contain your name.', { type: 'error' });
    }
  }

  return (
    <>
      <div className="black-overlay" ref={divRef}>
        <Container flex flexColumn align>
          {currentState === 'active' && (
            <Form>
              <input
                placeholder="Your first name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                placeholder="Your e-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <textarea
                placeholder={
                  name
                    ? 'Hey, I’ve been thinking about you lately and just wanted to check in...'
                    : 'Message'
                }
                value={message}
                onClick={(e) => {
                  if (
                    e.target.value === '' &&
                    e.target.placeholder !== 'Message'
                  ) {
                    setMessage(e.target.placeholder);
                  }
                }}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              {name && message && validator.contains(message, name) && (
                <span className="error">
                  The message must not contain your name.
                </span>
              )}

              <p>
                This message will only be shown forward after your friends
                choice to see or not the message, by an eletronic confirmation.
                It must contain your name.
              </p>
              <Button type="submit" onClick={submitHandler}>
                Send
              </Button>
            </Form>
          )}

          {currentState === 'loading' && (
            <>
              <Box>
                <Title>Loading...</Title>
              </Box>
            </>
          )}
        </Container>
      </div>
    </>
  );
}
