import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Title, Box } from './styled';
import { Link } from '../../styles/GlobalStyles';
import { useParams } from 'react-router-dom';

export default function ConfirmationPage() {
  const { mid } = useParams();
  const [username, setUsername] = useState('user');
  const [receiver, setReceiver] = useState('receiver');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const url = `/api/messages/${mid}?confirm=true`;

        if (!ignore) {
          const response = await fetch(url, {
            method: 'PUT',
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();

          // Suponha que a resposta contenha username e receiver
          setUsername(data.name);
          setReceiver(data.receiverEmail);
          setConfirmed(data.senderConfirm);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [mid]);

  return (
    <>
      <Box>
        <Header></Header>
        {confirmed && (
          <>
            <Title>Thank you, {username}.</Title>
            <section>
              <p>
                Your message to {receiver} was stored. If your friend accepts to
                talk, it'll be delivered to him and I'll let you know it was
                read.
              </p>
            </section>
          </>
        )}
        {loading && <Title>LOADING</Title>}
        {error && <Title>Error: {error}</Title>}
        <Link to="/">Home</Link>
      </Box>
    </>
  );
}
