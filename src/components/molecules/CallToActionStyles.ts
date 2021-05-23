import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';

// GlobalStyles
const {
  colors: { flagCenter },
  font: { font65 },
} = GlobalStyles;

// Call to action div.
export const CallToActionStyled = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Japanese Flag ackground.
export const FlagBg = styled.div`
  width: 512px;
  margin: auto;
  height: 265px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

// Japanese Flag center.
export const FlagCenter = styled.div`
  display: block;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: ${flagCenter};
`;

// Hiragana call div.
export const HiraganaCall = styled.div`
  margin: auto;
`;

// Hiragana h4.
export const HiraganaTag = styled.h4`
  font-size: ${font65};
`;
