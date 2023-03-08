import wordBank from "./Data/words";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = () => {
  let wordSet;
  let wordToGuess;
  let wordToGuessIndex;
  wordToGuessIndex = Math.floor(Math.random() * wordBank.length);
  wordToGuess = wordBank[wordToGuessIndex];
  wordSet = new Set(wordBank);

  return { wordSet, wordToGuessIndex, wordToGuess };
};

export const checkGuess = (index: number, guess: string) => {
  if (wordBank[index] === undefined || wordBank[index] === "") {
    return;
  }
  return guess.toLowerCase() === wordBank[index];
};

export const getCorrectWord = (index: number) => {
  return wordBank[index];
};

export const letterIsCorrect = (
  index: number,
  lettrPos: number,
  letter: string
) => {
  if (letter === "") {
    return false;
  }
  if (wordBank[index][lettrPos] === letter) {
    return true;
  }
  return false;
};

export const letterExists = (index: number, letter: string) => {
  const ans = wordBank[index].includes(letter);
  return ans;
};
