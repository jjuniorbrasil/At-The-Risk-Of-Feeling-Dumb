import styled, { createGlobalStyle } from 'styled-components';
import colors from '../config/colors';
import { Link as RouterLink } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, body {
    font-family: "Alfredino";
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .black-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 50%);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const Link = styled(RouterLink)`
  color: ${colors.secondaryColor};
  text-decoration: none;
  font-size: 2em;

  &:hover {
    color: ${colors.primaryColor};
  }

  cursor: pointer;
`;

const Container = styled.div`
  color: ${colors.primaryColor};
  position: relative;
  width: 100%;
  height: ${(props) => (props.maxHeight ? '100%' : 'auto')};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => (props.flexColumn ? 'column' : 'row')};
  justify-content: ${(props) => (props.justify ? 'center' : 'auto')};
  align-items: ${(props) => (props.align ? 'center' : 'auto')};

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 8px;
  width: 60%;
  align-self: center;
  background-color: ${colors.primaryColor};
  font-size: 36px;
  border: none;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
  text-align: center;

  &:hover {
    filter: grayscale(30%);
  }

  &:disabled {
    filter: grayscale(100%);
    cursor: default;
  }

  &:focus {
    outline: none;
  }

  cursor: pointer;
`;

const Box = styled.div`
  font-size: 16px;
  background-color: white;
  padding: 20px;
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
`;

const Title = styled.h1`
  color: ${colors.primaryColor};
  text-align: center;
  font-size: 3em;
  margin: 0.5em 0;
`;

export { Container, Link, Button, Box, Title };
export default GlobalStyles;
