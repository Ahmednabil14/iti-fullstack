let localVar=90;
var printVariables = function(value1, value2, value3) {
    console.log(localVar)
    var testingVar = 5;
    return Object.values(arguments);
}

// console.log(localVar, testingVar) // will throw an error 

// printVariables(1, 2, 3)
// console.log(localVar, testingVar) // will throw and error

// function declaration
function printVariablesDeclaration(value1, value2, value3) {
    return Object.values(arguments);
}

// arrow function 
const printVariablesArrow = (value1, value2, value3) => Object.values(arguments);

console.log(localVar);

printVariables(1, 2, 3)
console.log(localVar);


module.exports = {printVariables, printVariablesArrow};
