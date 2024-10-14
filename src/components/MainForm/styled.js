import styled from 'styled-components';
import colors from './../../config/colors';

const Form = styled.form`
  position: relative;
  width: 100%;
  height: ${(props) => (props.maxHeight ? '100%' : 'auto')};
  display: flex;
  flex-direction: column;

  .wrapper {
    position: relative;
    width: 100%;
    display: flex;
  }

  input {
    color: ${colors.darkColor};
    padding: 20px 15% 20px 10px;
    font-size: 24px;
    margin: 4.618% 20px;
    width: 100%;
    border-style: solid;
    border-color: ${colors.secondaryColor};
    outline: none;
  }

  .envolope {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: ${colors.primaryColor};
  }
`;

export { Form };
