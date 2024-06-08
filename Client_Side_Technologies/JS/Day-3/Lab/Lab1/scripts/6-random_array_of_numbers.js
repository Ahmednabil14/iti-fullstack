const randomArrayOfNumbers = function (length) {
  let i = 1;
  const list = [];

  if (length < 11) {
    while (i <= length) {
      const randomNum = Math.ceil(Math.random() * 10);
      list.push(randomNum);
      i++;
    }
    return list;
  }
  throw new Error('length must be less than 11');
};
