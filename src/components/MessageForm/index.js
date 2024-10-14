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
    let error = false;

    const data = {
      name,
      email,
      receiverEmail,
      message,
    };

    if (!validator.contains(message.toLowerCase(), name.toLowerCase())) {
      try {
        if (!validator.isEmail(email)) {
          throw new Error('Please, input an valid email.');
        }
        setCurrentState('loading');
        const response = await sendMessage(data);
        const responseData = await response.json();

        if (responseData.message === 'success') {
          toast('Please, check your inbox to confirm your message.', {
            autoClose: 2000,
            type: 'info',
          });
        }
        setCurrentState('inactive');
      } catch (e) {
        toast(`Unable to sent. (${e.message})`, {
          autoClose: 2000,
          type: 'error',
        });
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
              {name &&
                message &&
                validator.contains(
                  message.toLowerCase(),
                  name.toLowerCase(),
                ) && (
                  <span className="error">
                    The message must not contain your name.
                  </span>
                )}

              <p>
                The message will be sent after your confirmation. Your name will
                only be visible to {receiverEmail} once they accept it, so
                please ensure this message does not include your name. As this
                is a demo, messages will not be encrypted in our database. Feel
                free to test it, but do not share any personal data. 😉
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
