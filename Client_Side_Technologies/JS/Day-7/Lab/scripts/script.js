let addButton = document.getElementById("add-button")
let taskInput = document.querySelector("input[type=text]")
let table = document.getElementsByTagName("table")[0]
let tableBody = table.getElementsByTagName("tbody")[0]
let counter = 1;

addButton.addEventListener('click', function () {
    let input = taskInput.value;
    if (input !=='') {
        let newRow;
        if (counter % 2 !== 0) {
            newRow = `
            <tr id=${counter}>
                <td><input type="checkbox"></td>
                <td>${input}</td>
                <td><button class="button delete-button">Delete</button></td>
            </tr>
            `    
        }
        else {
            newRow = `
            <tr style="background-color: rgb(221, 216, 216);" id=${counter}>
                <td><input type="checkbox"></td>
                <td>${input}</td>
                <td><button class="button delete-button">Delete</button></td>
            </tr>
            `
        }
        tableBody.innerHTML += newRow;
        taskInput.value = '';
        counter ++;
    }
})

table.addEventListener('click', function (event) {
    if (event.target.type === 'checkbox') {
      if (event.target.checked === true) {
        let row = event.target.closest('tr');
        let taskName = row.getElementsByTagName('td')[1];
        taskName.classList.add("ended-task");
      }
    }
    else if (event.target.classList.contains('delete-button')) { 
        let conf = confirm('You want to delete this task ?!')
        if (conf) { 
            let row = event.target.closest('tr');
            row.remove();
        }
    }
});

