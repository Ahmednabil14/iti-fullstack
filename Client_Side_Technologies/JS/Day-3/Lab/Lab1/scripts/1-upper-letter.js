const upperCaseLetter = function (fullName) {
  const fullNameArray = fullName.split(' ');
  let fullNameUpper = '';
  for (const word of fullNameArray) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        newWord += word[i].toUpperCase();
      } else {
        newWord += word[i];
      }
    }
    fullNameUpper += newWord + ' ';
  }
  console.log(fullNameUpper);
};
