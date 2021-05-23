import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HiraganaForm from '../../forms/HiraganaForm';
import KatakanaForm from '../../forms/KatakanaForm';
import WordForm from '../../forms/WordsForms';
import GlobalStyles from '../../styles/GlobalStyles';
import Buttons from './Buttons';
import KanaInput from './KanaInput';

const {
  colors: { mainRed },
} = GlobalStyles;

// ButtonDiv.
const ButtonsDivStyle = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

// KanaRow.
const KanaRowStyle = styled.div`
  display: flex;
  padding-top: 10px;
  border-radius: 12px;
  border: 1px solid ${mainRed};
  padding-bottom: 25px;
  background-color: white;
`;

interface KanaRowProps {
  kana: string;
}

const KanaRow = ({ kana }: KanaRowProps) => {
  console.log(kana);
  // Hook to handler form fields and props - Hiragana.
  const { hiraganaForm, setHirganaForm } = HiraganaForm();

  // Hook to handler form fields and props - Katakana.
  const { katakanaForm, setKatakanaForm } = KatakanaForm();

  // Hook to handler form fields and props - Katakana.
  const { wordForm, setWordForm } = WordForm();

  // Hook to handle component reload.
  const [reload, setReload] = useState<any>(false);

  // Hook to handle user responses.
  const [responseReport, setResponseReport] = useState<boolean>(false);

  // Function to handler inputs
  const setInputValue = (e: any) => {
    if (kana === 'hiragana') {
      setHirganaForm({
        ...hiraganaForm,
        [e.target.name]: e.target.value,
      });
    } else if (kana === 'katakana') {
      setKatakanaForm({
        ...katakanaForm,
        [e.target.name]: e.target.value,
      });
    } else {
      setWordForm({
        ...wordForm,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Function to handler submitting.
  const getFormValues = (e: any) => {
    e.preventDefault();
    setResponseReport(true);
  };

  // useEffect to reload component.
  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  // Refresh Kana Options.
  const refreshPage = () => {
    setResponseReport(false);
    setReload(true);
  };

  // Kanas Inputs hiragana.
  const HiraganaFormInputs = hiraganaForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        handler={setInputValue}
        responseReport={responseReport}
      />
    );
  });

  // Kanas Inputs katakana.
  const KatakanaFormInputs = katakanaForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        handler={setInputValue}
        responseReport={responseReport}
      />
    );
  });

  // Word Inputs.
  const WordFormInputs = wordForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        handler={setInputValue}
        responseReport={responseReport}
      />
    );
  });

  return (
    <>
      {reload ? (
        <p></p>
      ) : (
        <>
          <KanaRowStyle>
            {kana === 'hiragana'
              ? HiraganaFormInputs
              : kana === 'katakana'
              ? KatakanaFormInputs
              : WordFormInputs}
          </KanaRowStyle>
          <ButtonsDivStyle>
            <Buttons width="80px" func={getFormValues}>
              Press
            </Buttons>
            <Buttons
              width="80px"
              func={refreshPage}
              disabledState={responseReport}
            >
              Refresh
            </Buttons>
          </ButtonsDivStyle>
        </>
      )}
    </>
  );
};

export default KanaRow;
