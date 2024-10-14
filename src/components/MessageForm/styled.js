import styled from 'styled-components';
import colors from '../../config/colors';

export const Form = styled.form`
  background-color: white;
  font-size: 24px;
  flex-basis: 90vh;
  width: 80%;
  padding: 12px;
  border-radius: 10px;

  input {
    font-size: 20px;
  }

  textarea {
    font-size: 24px;
    flex-basis: 65%;
    flex-grow: 1;
    resize: none;
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${colors.secondaryColor};
    outline: none;
  }

  p {
    font-size: 12px;
    text-align: justify;
  }

  .error {
    bottom: 0;
    font-size: 16px;
    color: ${colors.primaryColor};
    text-decoration: none;
  }

  color: ${colors.darkColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    flex-basis: 50vh;
    padding: 2%;
  }
`;
