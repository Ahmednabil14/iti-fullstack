let queryString = location.search;
queryString = queryString.replace("?"  , "");
queryString = queryString.split("&");
let userName = queryString[0].split("=");
userName = userName[1];
let age = queryString[1].split("=");
age = age[1];


console.log(userName);
console.log(age);