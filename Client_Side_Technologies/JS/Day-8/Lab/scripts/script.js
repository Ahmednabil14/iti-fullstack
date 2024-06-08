const studentNameBox = document.getElementById('s-name');
const studentGradeBox = document.getElementById('s-grade');
const devCheckbox = document.querySelectorAll('input[type=radio]');
const addButton = document.getElementById('add-button');
const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const filter = document.getElementById('filter');
const sort = document.getElementById('sort');

studentNameBox.addEventListener('blur', function () {
  const err = document.getElementById('name-error');
  if (this.value === '') {
    this.style.marginBottom = '4px';
    err.textContent = 'Please enter a name';
    err.style.color = 'red';
    this.focus();
  } else {
    err.textContent = '';
  }
});

studentGradeBox.addEventListener('blur', function () {
  const err = document.getElementById('grade-error');
  if (this.value === '') {
    this.style.marginBottom = '4px';
    err.textContent = 'Please enter a grade';
    err.style.color = 'red';
    this.focus();
  } else if ((Number(this.value)) > 100) {
    err.textContent = 'Grade must be between 0 and 100';
    err.style.color = 'red';
    this.focus();
  } else {
    err.textContent = '';
  }
});

const checked = function () {
  for (const element of devCheckbox) {
    if (element.checked) {
      return element.id;
    }
  }
  return false;
};

addButton.addEventListener('click', function (e) {
  const err = document.getElementById('complete-error');
  const capitalizeName = () => {
    const name = studentNameBox.value;
    return name[0].toUpperCase() + name.slice(1);
  };
  const notUniqueName = () => {
    const tRow = tableBody.querySelectorAll('tr');
    for (const tr of tRow) {
      const nameCell = tr.querySelector('td:first-child');
      if (nameCell.textContent.toLowerCase() === studentNameBox.value.toLowerCase()) {
        return true;
      }
    }
    return false;
  };
  if (studentNameBox.value === '' ||
    studentGradeBox.value === '' ||
    Number(studentGradeBox.value) > 100 ||
    !checked()) {
    err.textContent = 'Please complete the data';
    err.style.color = 'red';
    e.preventDefault();
  } else if (notUniqueName()) {
    err.textContent = 'Name already exists';
    err.style.color = 'red';
    e.preventDefault();
  } else {
    err.textContent = '';
    let color;

    if (checked() === 'sd') {
      color = '<tr style="background-color: #FFB6C3;" class="sd">';
    } else if (checked() === 'os') {
      color = '<tr style="background-color: #FFFEDF;" class="os">';
    } else {
      color = '<tr style="background-color: #85D0F8;" class="el">';
    }
    tableBody.innerHTML += `
            ${color}
                <td>${capitalizeName()}</td>
                <td>${studentGradeBox.value}</td>
                <td class='trash-button'>&#x1F5D1</td>
            </tr>
        `;
    studentNameBox.value = '';
    studentGradeBox.value = '';
  }
});

filter.addEventListener('change', function () {
  const rows = Array.from(tableBody.getElementsByTagName('tr'));

  if (this.value === 'success') {
    rows.forEach(row => {
      row.style.display = 'table-row';
    });
    for (const tr of rows) {
      const nameCell = tr.querySelectorAll('td')[1];
      if (Number(nameCell.textContent) <= 60) {
        tr.style.display = 'none';
      }
    }
  } else if (this.value === 'fail') {
    rows.forEach(row => {
      row.style.display = 'table-row';
    });
    for (const tr of rows) {
      const nameCell = tr.querySelectorAll('td')[1];
      if (Number(nameCell.textContent) > 60) {
        tr.style.display = 'none';
      }
    }
  } else {
    for (const tr of rows) {
      tr.style.display = 'table-row';
    }
  }
});

sort.addEventListener('change', function () {
  const rows = Array.from(tableBody.getElementsByTagName('tr'));
  if (this.value === 'name') {
    rows.sort((a, b) => {
      const nameA = a.querySelectorAll('td')[0].textContent;
      const nameB = b.querySelectorAll('td')[0].textContent;
      return nameA.localeCompare(nameB);
    });
    tableBody.innerHTML = '';
    for (const row of rows) {
      tableBody.appendChild(row);
    }
  } else {
    rows.sort((a, b) => {
      const gradeA = Number(a.querySelectorAll('td')[1].textContent);
      const gradeB = Number(b.querySelectorAll('td')[1].textContent);
      return gradeA - gradeB;
    }
    );
    tableBody.innerHTML = '';
    for (const row of rows) {
      tableBody.appendChild(row);
    }
  }
});

tableBody.addEventListener('click', function (e) {
  if (e.target.classList[0] === 'trash-button') {
    const row = e.target.closest('tr');
    row.remove();
  }
});

tableBody.addEventListener('mouseover', function (e) {
  const row = e.target.closest('tr');
  if (row.classList[0] === 'sd' &&
  e.target.classList[0] === 'trash-button') {
    e.target.style.backgroundColor = '#FF8A9B';
  } else if (row.classList[0] === 'os' &&
  e.target.classList[0] === 'trash-button') {
    e.target.style.backgroundColor = '#FFFBC7';
  } else if (row.classList[0] === 'el' &&
  e.target.classList[0] === 'trash-button') {
    e.target.style.backgroundColor = '#5EB7F0';
  }
});

tableBody.addEventListener('mouseout', function (e) {
  if (e.target.classList[0] === 'trash-button') {
    e.target.style.backgroundColor = '';
  }
});
