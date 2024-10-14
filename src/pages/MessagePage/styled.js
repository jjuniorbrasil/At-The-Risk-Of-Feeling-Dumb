import styled from 'styled-components';
import colors from './../../config/colors';

export const Title = styled.h1`
  text-align: center;
  color: ${colors.primaryColor};
  display: flex;
  align-items: center;
  font-size: 45px;
  margin: 10px 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 1em 0;

  section {
    width: 100%;
    text-align: justify;
    padding: 1em;
  }

  @media screen and (max-width: 896px) {
    font-size: 24px;
  }

  span {
    text-decoration: underline 2px ${colors.primaryColor};
    text-underline-offset: 5px;
  }

  .donate-link {
    display: flex;
    font-size: 36px;
    justify-content: center;

    &:hover {
      color: ${colors.secondaryColor};
    }
  }
`;
