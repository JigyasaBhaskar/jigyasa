const input = require("readline-sync");

let n=input.questionInt("enter : ");
let a=input.questionInt("enter the number: ");

var max=a, secmax=a;
var i=2;
while(i<=n)
{
    var b=input.questionInt("enter the number: ");
    if(b > max)
    {
        var t = max;
        max = b;
        secmax = t;
    }
    else if(b > secmax)
    {
        secmax = b;
    }
    i++;
}
console.log('second max=',secmax);