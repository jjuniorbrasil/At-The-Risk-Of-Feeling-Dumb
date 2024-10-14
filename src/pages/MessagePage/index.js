import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import About from '../About';
import { Title, Box } from './styled';
import { Link, Button } from '../../styles/GlobalStyles';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const url = `/api/messages/`;

export default function MessagePage() {
  const { mid } = useParams();
  const [whatsThis, setWhatsThis] = useState();
  const [sender, setSender] = useState(null);
  const [senderEmail, setSenderEmail] = useState(null);
  const [message, setMessage] = useState(' '.repeat(200));
  const [pending, setPending] = useState(true);
  const [answer, setAnswer] = useState(null);

  const fetchData = async (controller) => {
    try {
      const response = await fetch(url + mid, {
        method: 'GET',
        signal: controller.signal,
      });

      const data = await response.json();
      setSender(data.name);
      setSenderEmail(data.email);
      setMessage(data.message || ' ');
      setAnswer(data.receiverResponse);
      if (data.receiverResponse !== 'NA') {
        setPending(false);
      }
    } catch (e) {
      if (e.name !== 'AbortError') {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller)
    return () => {
      controller.abort();
    };
  });

  async function acceptOrDecline(action) {
    try {
      const data = await fetch(url + mid + '/' + action, {
        method: 'put',
      });
      const messageObj = await data.json();
      setSender(messageObj.name);
      setSenderEmail(messageObj.email);
      setAnswer(messageObj.receiverResponse);
    } catch (e) {
      console.log(e.message);
    }
    setPending(false);
  }

  return (
    <>
      <Box>
        <Header></Header>
        <div className="message-box">
          <Title>From: {sender ? sender : 'ØØØØØØØØ'}</Title>
          <span>{senderEmail ? senderEmail : 'ØØØØØØØØ'}</span>
          <section className="message-section">
            <p>{message}</p>
            <br />
          </section>
        </div>
        <ResponseBox
          className="message-response-box"
          answer={answer}
          acceptOrDecline={acceptOrDecline}
          pending={pending}
          sender={sender}
        />
        <NavBar />
      </Box>
    </>
  );
}

function ResponseBox({ answer, acceptOrDecline, pending, sender }) {
  return (
    <div className="message-response-box">
      {answer === 'NA' ? (
        <>
          <p>Accept to know and warn the sender.</p>
          <Button
            disabled={!pending}
            className="message-button"
            onClick={() => {
              acceptOrDecline('accepted');
            }}
          >
            ACCEPT
          </Button>
          <Button
            disabled={!pending}
            className="message-button"
            onClick={() => {
              acceptOrDecline('declined');
            }}
          >
            DECLINE
          </Button>
        </>
      ) : (
        <>
          <p className="message-answer">
            You {answer} this request. {sender ? sender : 'The sender'} has
            received your answer.
          </p>
        </>
      )}
    </div>
  );
}
