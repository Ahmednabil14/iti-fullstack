// task 1-a

const traning = document.getElementsByTagName('table')[1].getElementsByTagName('a')[0];
traning.setAttribute('href', 'training.com');

// task 1-b

const images = document.images;
for (const img of images) {
  img.style.border = 'solid pink 2px';
}


// task 1-c
  const alertCheckedLanguages = function () {
    const submit = document.querySelector('input[type=submit]');
    submit.onclick = function () {
      let checkedList = document.querySelectorAll('input[type=checkbox]')
      let checkedLanguages = [];
      for (let i = 0; i < checkedList.length; i++) {
        if (checkedList[i].checked) {
          checkedLanguages.push(checkedList[i].value);
        }
      }
        alert(checkedLanguages);
    };
  };

alertCheckedLanguages();

// task 1-d

const exampleElement = document.getElementById('example');
exampleElement.onclick = function () {
  exampleElement.style.backgroundColor = 'pink';
};
