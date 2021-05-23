import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

// Global Styles.
const {
  colors: { mainBlue, mainRed },
  font: { font45, line48 },
} = GlobalStyles;

// Standars Buttons.
export const Button = styled.span`
  height: 96px;
  width: 90px;
  width: 331px;
  color: ${mainBlue};
  border: 1px solid ${mainBlue};
  padding: 12px 80px;
  font-size: ${font45};
  line-height: ${line48};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: '';
  margin-top: 20px;
  border-radius: 8px;
`;

// Exit Button.
export const ExitButton = styled.span`
  height: 96px;
  width: 150px;
  width: 450px;
  color: ${mainRed};
  border: 1px solid ${mainRed};
  padding: 12px 80px;
  font-size: ${font45};
  line-height: ${line48};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: white;
`;
