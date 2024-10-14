import styled from 'styled-components';
import colors from './../../config/colors';

export const Title = styled.h1`
  text-align: center;
  color: ${colors.primaryColor};
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-size: 80px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
