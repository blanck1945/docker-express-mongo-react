import { useState } from 'react';
import OptionBtn from '../components/atoms/OptionButton';
import KanaRow from '../components/atoms/KanaRow';
import styled from 'styled-components';

const AppStyle = styled.div``;

// Hiragana && Katakana buttons.
const ButtonDiv = styled.div`
  width: 70%;
  margin: auto;
  padding-top: 72px;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-evenly;
`;

// GeneralDiv.
const GeneralDiv = styled.div`
  width: 90%;
  height: 400px;
  margin: auto;
`;

const DashPage = () => {
  // Hook to handle information display.
  const [infoState, setInfoState] = useState<string>('none');

  // Hook to handle app state.
  const [workState, setWorkState] = useState<string>('no-work');

  // Hook to handle alphabet selection.
  const [alphabet, setAlphabet] = useState<string>('none');

  // Styled div.
  const ContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e4e4e4;
  `;

  // Default state of Application.
  const NoWorkState = () => {
    return (
      <ContainerStyled>
        <h3>Please, select one Kana to start.</h3>
      </ContainerStyled>
    );
  };

  // Hiragana/Katakana display Row.
  const KanaContainerDis = (props: any) => {
    return <KanaRow kana={alphabet} />;
  };

  // Close Button Component.
  const closeBtn = () => {
    if (workState === 'working') {
      const btnFunc = {
        value: 'no-work',
        infoState: infoState,
        setInfoState: setInfoState,
        setState: setWorkState,
      };
      return (
        <OptionBtn exit {...btnFunc}>
          Exit Lesson
        </OptionBtn>
      );
    }
  };

  // Buttons configuration
  const buttonsConfig = {
    btnFuncHiragana: {
      value: 'working',
      alphabet: 'hiragana',
      infoState: infoState,
      setState: setWorkState,
      setInfoState: setInfoState,
      setAlphabet: setAlphabet,
    },
    btnFuncKatakana: {
      value: 'working',
      alphabet: 'katakana',
      infoState: infoState,
      setState: setWorkState,
      setInfoState: setInfoState,
      setAlphabet: setAlphabet,
    },
    btnFuncWords: {
      value: 'working',
      alphabet: 'words',
      infoState: infoState,
      setState: setWorkState,
      setInfoState: setInfoState,
      setAlphabet: setAlphabet,
    },
  };

  return (
    <AppStyle>
      <ButtonDiv>
        <OptionBtn {...buttonsConfig.btnFuncHiragana}>Hiragana</OptionBtn>
        <OptionBtn {...buttonsConfig.btnFuncKatakana}>Katakana</OptionBtn>
        <OptionBtn {...buttonsConfig.btnFuncWords}>Words</OptionBtn>
      </ButtonDiv>
      <GeneralDiv>
        {workState === 'no-work' ? (
          <NoWorkState />
        ) : workState === 'hiragana' ? (
          <KanaContainerDis />
        ) : (
          <KanaContainerDis />
        )}
      </GeneralDiv>
      {closeBtn()}
    </AppStyle>
  );
};

export default DashPage;
