import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

const {
  font: { font40 },
  colors: { mainBlue },
} = GlobalStyles;

const StartButtonStyled = styled.button`
  color: white;
  width: 284px;
  height: 83px;
  background-color: ${mainBlue};
  border-radius: 20px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-size: ${font40};
`;

const StartButton = () => {
  return <StartButtonStyled>Start Now!</StartButtonStyled>;
};

export default StartButton;
