const input = require("readline-sync");
let a = input.questionInt("Enter your Number: ");
let b = input.questionInt("Enter your Number: ");

t = a;
a = b;
b = t;

 console.log(a,b);

