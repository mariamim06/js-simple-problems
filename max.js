const business = 450;
const minister = 550;
const army = 600;
// if(business > minister) {
//     console.log('Business person er pola is bigger.');
// }
// else {
//     console.log('minister er pola is bigger');
// }

function findLargest(first, second){
    if(first> second) {
        return first;
    }
    else{
        return second;
    }
}

const largest  = findLargest(354, 241);
console.log('largest is', largest);

//compare 3 . way-1
 /* 
 if(business > minister && business > army) {
    console.log('Bussiness is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else (army > business && army > minister) {
    console.log('army is bigger');
}  
*/
//way-2
// var max = Math.max(business, minister, army);
// console.log('largest is', max)

//Task-1: creat a function that takes three numberfs as input parameter and returns you the largest number of the three.
//Task-2: write a function to find the smallest of three numbers. 