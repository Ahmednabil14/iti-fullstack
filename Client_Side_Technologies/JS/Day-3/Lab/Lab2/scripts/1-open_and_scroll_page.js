const openScrollClosePage = function (url) {
  const newWindow = open(url, '_blank', 'width=200, hight=200');
  var hight = 0;

  // to ensure that page was loaded
  newWindow.onload = function () {
    setInterval(function () {
      let scrollValue = 600;
      newWindow.scrollBy(0, scrollValue);
      hight += scrollValue;
      if (hight >= newWindow.document.body.scrollHeight) {
        newWindow.close();
      }
    }, 500);
  };
};
