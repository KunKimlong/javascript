const prompt = require('prompt-sync')();
console.log("\n\n------- Employee Information ------\n\n");
var id = Number(prompt("Eenter ID = "));
var name = prompt("Enter Name = ");
var gender = prompt("Enter Gender = ");
var salary = Number(prompt("Enter Salary = "));

console.log("------- OUTPUT EMPLOYEE ---------");
console.log("ID = "+id);
console.log("Name = "+name);
console.log("Gender = "+gender);
console.log("Salary = "+salary+"$");
