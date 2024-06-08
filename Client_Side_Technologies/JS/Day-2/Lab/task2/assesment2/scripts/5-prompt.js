const userGrades = function(userName) {
    let grades = "";
    do {
        grades = prompt(`enter your grades separated by comma`);
    } while (!grades);

    let gradesArray = grades.split(",");
    let gradesArrayNumber = [];
    let isNumber = true;
    for (const item of gradesArray) {
        let grade = Number(item);
        if (isNaN(grade)) {
            isNumber = false;
            break;
        }
        else {
            gradesArrayNumber.push(grade);
        }
    }

    if (isNumber){
        console.log(`welcom ${userName}`);
        console.table(gradesArrayNumber);
    }
    else {
        userGrades(arguments[0]);
    }
    
}
