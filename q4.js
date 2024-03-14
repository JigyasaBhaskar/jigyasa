const input = require("readline-sync");
let a = input.questionInt("Enter your Number: ");
let b = input.questionInt("Enter your Number: ");

c  = a+b;
c1 = a-b;
c2 = a*b;
c3 = a/b;
c4 = Math.floor(a/b);
c5 = a%b;

console.log(c,c1,c2,c3,c4,c5);