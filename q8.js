const input = require("readline-sync");

let n=input.questionInt("enter : ");
let a=input.questionInt("enter the number: ");

var i=2;
var max = a, min =a;
while(i<=n)
{
    var b=input.questionInt("enter the number: ");
    if(b > max)
    {
        var t = max;
        max = b;
        b = t;
    }
    if(b < min)
    {
        min = b;
    }
    i++;
}
console.log(max,min);