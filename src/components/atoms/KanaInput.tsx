import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  KanaDivStyle,
  KanaInputStyle,
  KanaDivDisplayStyle,
  KanaWordStyle,
  KanaWordInput,
} from './KanaInputsStyles';

// Kana Input Interface.
interface KanaInputInterface {
  kanaOptions: any;
  handler?: any;
  words?: boolean;
  setInputValue?: any;
  responseReport?: boolean;
}

const KanaInput = ({ kanaOptions, responseReport }: KanaInputInterface) => {
  // Properies from Kana form.
  const { word, name, value } = kanaOptions;

  // Function to get Kana.
  const memo = useMemo(() => {
    return word();
  }, [word]);

  // Hook to handler user response and response value.
  const [input, setInput] = useState<any>({
    res: value,
    response: '',
  });

  // Function to updated user response value.
  const setInputValue = (e: any) => {
    setInput({
      res: e.target.value,
      response: memo.romanji === e.target.value ? 'Correcto' : 'Incorrecto',
    });
  };

  // Responses Div.
  const ResponseStyle = styled.h4`
    margin-top: 12px;
    padding: 3px 6px;
    color: white;
    border-radius: 5px;
    background-color: ${input.response === 'Correcto' ? 'green' : 'red'};
  `;

  if (word) {
    return (
      <KanaWordStyle>
        <KanaDivDisplayStyle>{memo.kana}</KanaDivDisplayStyle>
        <KanaWordInput
          name={name}
          value={input.res}
          onChange={(e) => setInputValue(e)}
        />
        {responseReport && (
          <ResponseStyle>
            {input.response} - {memo.romanji}
          </ResponseStyle>
        )}
      </KanaWordStyle>
    );
  }

  return (
    <KanaDivStyle>
      <KanaDivDisplayStyle>{memo.kana}</KanaDivDisplayStyle>
      <KanaInputStyle
        name={name}
        value={input.res}
        onChange={(e) => setInputValue(e)}
      />
      {responseReport && (
        <ResponseStyle>
          {input.response} - {memo.romanji}
        </ResponseStyle>
      )}
    </KanaDivStyle>
  );
};

export default KanaInput;
