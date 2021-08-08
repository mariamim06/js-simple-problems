function largestElement(numbers){
    let largest = 0;
    for(let i= 0; i< numbers.length; i++) {
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-2, -6, -17]);
console.log('oldest2', oldest);

//task: find the lowest element of an array

