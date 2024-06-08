var num1 = 3;
var num2 = 2.9;
var num3 = 0xff;
var fName = "ahmed";
var mName = "ali";
var lName = "nabil";

numbers = [1, 2, 3, 4, 5]
var array = [1, 2, 3, 4, "ahmed", "nabil"];

var flag = true;

// task 4
console.log(num1 + num2);
console.log(num1 + array); // 31,2,3,4,ahmed,nabil
console.log(flag + num1); 
console.log(fName + flag);
console.log(num1 + fName);
console.log(num1 * flag);
console.log(num1 / lName);
console.log(fName + " " + lName);
console.log(`${fName} ${lName}`);
console.table(array)
console.log(numbers.map(x => x * 5));

// searching
var num = 30;
// conver to hexa decimal
console.log(num.toString(16));
