const input = require("readline-sync");

let a=input.questionInt("enter the number: ")
let sum = 0
let n=a
let i = 1
while (i<n)
{
    if(n%i==0){
        sum+=i
    } 
    i++
}
console.log(sum);

if (sum==a){
    console.log("perfect number");
}
else {
    console.log("not perfect number");
}