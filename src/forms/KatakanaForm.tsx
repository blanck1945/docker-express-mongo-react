import { useState } from 'react';
import JapaneseAlphabet from '../data/Alphabets';

const KatakanaForm = () => {
  const { allKatakana } = JapaneseAlphabet;

  const getWord = () => {
    return allKatakana[Math.floor(Math.random() * allKatakana.length)];
  };

  const [katakanaForm, setKatakanaForm] = useState({
    formBuilder: [
      {
        word: getWord,
        name: 'res1',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res2',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res3',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res4',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res5',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res6',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res7',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res8',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res9',
        value: '',
        response: '',
      },
      {
        word: getWord,
        name: 'res10',
        value: '',
        response: '',
      },
    ],
  });

  return {
    katakanaForm,
    setKatakanaForm,
  };
};

export default KatakanaForm;
