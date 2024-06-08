const longesWord = function (sentence) {
  const sentenceArray = sentence.split(' ');
  let wordLength = 0;
  let longestWord = '';

  for (const word of sentenceArray) {
    if (word.length > wordLength) {
      wordLength = word.length;
      longestWord = word;
    }
  }
  return longestWord;
};
