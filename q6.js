const input = require("readline-sync");

let a=input.questionInt("enter the number: ");
let b=input.questionInt("enter the number: ");

let K= a*b;
while(a%b !=0)
{
    var s= a%b;
    a =b;
    b = s;
}
console.log(b, K/b);