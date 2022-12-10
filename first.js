/*
console.log("Hello World!");
console.log("hi");
prompt("input your age");
alert("who are you");
*/

// week 11 assigment
let userName;
let age;
let userInfo = prompt("enter your userName ");
const userFurtherInfo = prompt("enter your age");
//template literals or template strings method
alert(`Welcome ${userInfo}, you are  ${userFurtherInfo} years old.`);
//this state,ent writes directly on the page rather than console using document.write
document.write(`Welcome ${userInfo}, you are ${userFurtherInfo} years old`);
