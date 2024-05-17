const input = require("readline-sync");

let a=input.questionInt("enter the number: ")
let sum = 1
let n=a
let i = 1
while (i<=n)
    if(n%i==0)
    {
        sum=sum*i
        i++
    }
    else
        {
            i++
        }
if (sum==n)
    {
        console.log("prime number");
    }
else 
    {
        console.log("not prime number");
    }