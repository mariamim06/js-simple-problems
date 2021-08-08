var first = 5;
var second = 7;
console.log(first, second); //result: 5 7
//first approach
var temp = first;
first = second;
second = temp;
console.log(first, second); //result: 7 5

//2nd approach: destructing
[first, second] = [second, first]
console.log(first, second); //result: 7 5
