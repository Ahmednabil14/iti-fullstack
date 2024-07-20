const addButton = document.getElementById('add-button');
const taskInput = document.querySelector('input[type=text]');
const table = document.getElementsByTagName('table')[0];
const tableBody = table.getElementsByTagName('tbody')[0];
const editButton = document.getElementById('edit-table');

if (!(localStorage.getItem('taskList'))) {
  localStorage.setItem('taskList', JSON.stringify([]));
}

const renderPage = function () {
  const taskList = JSON.parse(localStorage.getItem('taskList'));
  tableBody.innerHTML = '';
  let counter = 1;
  for (const task of taskList) {
    const row = document.createElement('tr');
    row.id = counter;
    if (counter % 2 === 0) {
      row.style = 'background-color: rgb(221, 216, 216);';
    }
    tableBody.appendChild(row);
    const td1 = document.createElement('td');
    td1.innerHTML = '<input type="checkbox">';
    row.appendChild(td1);
    const td2 = document.createElement('td');
    td2.innerText = task;
    row.appendChild(td2);
    const td3 = document.createElement('td');
    td3.innerHTML = '<button class="button delete-button">Delete</button>';
    row.appendChild(td3);
    const td4 = document.createElement('td');
    td4.innerHTML = '<button class="button edit-button">Edit</button>';
    row.appendChild(td4);
    taskInput.value = '';
    counter++;
  }
};

if (tableBody.innerText === '') {
  renderPage();
}

addButton.addEventListener('click', function () {
  const input = taskInput.value;

  if (input !== '') {
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    taskList.push(input);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    renderPage();
  }
});

table.addEventListener('click', function (event) {
  if (event.target.type === 'checkbox') {
    if (event.target.checked === true) {
      const row = event.target.closest('tr');
      const taskName = row.getElementsByTagName('td')[1];
      taskName.classList.add('ended-task');
    }
  } else if (event.target.classList.contains('delete-button')) {
    const conf = confirm('You want to delete this task ?!');
    if (conf) {
      const row = event.target.closest('tr');
      const taskName = row.getElementsByTagName('td')[1].innerText;
      const taskList = JSON.parse(localStorage.getItem('taskList'));
      const newTaskList = [];
      for (const task of taskList) {
        if (task !== taskName) {
          newTaskList.push(task);
        }
      }
      localStorage.setItem('taskList', JSON.stringify(newTaskList));
      renderPage();
    }
  } else if (event.target.classList.contains('edit-button')) {
    const row = event.target.closest('tr');
    const taskName = row.getElementsByTagName('td')[1].innerText;
    taskInput.focus();
    taskInput.value = taskName;
    addButton.style.display = 'none';
    editButton.style.display = 'inline-block';

    editButton.onclick = function () {
      const input = taskInput.value;
      if (input !== '') {
        const taskList = JSON.parse(localStorage.getItem('taskList'));
        const newTaskList = [];
        for (const task of taskList) {
          if (task !== taskName) {
            newTaskList.push(task);
          } else {
            newTaskList.push(input);
          }
        }
        localStorage.setItem('taskList', JSON.stringify(newTaskList));
        editButton.style.display = 'none';
        addButton.style.display = 'inline-block';
        renderPage();
      }
    };
  }
});

