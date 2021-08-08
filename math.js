// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);  //result: 5

// const myNumber = 33.9398;
// const output = Math.ceil(myNumber);  //upore jabe
// console.log(output);    //result: 34

// const myNumber = 33.9398;
// const output = Math.floor(myNumber);  //niche jabe
// console.log(output);    //result: 33

// const myNumber = 33.9398;
// const output = Math.round(myNumber);  // nearest integer
// console.log(output);    //result: 34
// const myNumber = 33.2398;
// const output = Math.round(myNumber); 
// console.log(output);    //result: 33

// const output = Math.random() * 6;  //sob shonkha alws 6 er niche hobe
// const rounded = Math.floor(output);
// console.log(rounded);    //result: ekekbar ekek result dibe (0-1 er moddhe)

for(let i=0; i <=30; i++) {
    const output = Math.random() * 6;
    const rounded = Math.round(output);
    console.log(rounded);
}