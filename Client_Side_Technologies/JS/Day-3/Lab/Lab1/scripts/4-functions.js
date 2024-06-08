const ascendingOrder = function (list) {
  return list.sort((a, b) => a - b);
};

const descendingOrder = function (list) {
  return list.sort((a, b) => b - a);
};

const deleteRepeated = function (list) {
  const newList = [];
  for (const item of list) {
    let inList = false;
    for (const Newitem of newList) {
      if (Newitem === item) {
        inList = true;
        break;
      }
    }
    if (inList === false) {
      newList.push(item);
    }
  }
  return newList;
};

const displayArrayAsString = function (list) {
  const str = list.join('*');
  return str;
};
