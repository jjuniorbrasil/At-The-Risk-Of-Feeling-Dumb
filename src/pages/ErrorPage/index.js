import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../../components/Header';
import { Title, Box } from './styled';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Box>
        <Header></Header>
        <Title>404</Title>
      </Box>
    </>
  );
}
