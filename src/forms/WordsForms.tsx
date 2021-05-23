import { useState } from 'react';
import JapaneseAlphabet from '../data/Alphabets';

const WordForm = () => {
  const { allWords } = JapaneseAlphabet;

  const getWord = () => {
    return allWords[Math.floor(Math.random() * allWords.length)];
  };

  const [wordForm, setWordForm] = useState({
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
    ],
  });

  return {
    wordForm,
    setWordForm,
  };
};

export default WordForm;
