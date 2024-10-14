import colors from '../../config/colors';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100vh;
  align-items: center;

  section {
    width: 100%;
    text-align: justify;
    padding: 1em;
  }

  @media screen and (max-width: 896px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    height: 100vh;
  }

  span {
    text-decoration: underline 2px ${colors.primaryColor};
    text-underline-offset: 5px;
  }

  .donate-link {
    display: flex;
    margin: 0.5em;
    justify-content: center;
  }
`;
