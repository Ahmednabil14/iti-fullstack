let list = [2,1,3,2,7,2,8,4,3,6,10,9,12];

console.table(ascendingOrder(list));

console.table(descendingOrder(list));

// max number 
console.log(Math.max(...list))
// min number
console.log(Math.min(...list));

// delete repeated 
console.log(deleteRepeated(list));

// Display the array elements as string concatenated with *.
console.log(displayArrayAsString(list));