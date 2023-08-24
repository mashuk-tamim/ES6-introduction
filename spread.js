// ... is the spread operator
// const numbers = [1,2,3,4,5,6];
// console.log(numbers); //output: [ 1, 2, 3, 4, 5, 6 ]

const numbers = [1,2,3,4,5,6];
console.log(...numbers); //output: 1 2 3 4 5 6

const num1 = [1,2,3,4,5,6];
const num2 = num1;
num2.push(7);
console.log(num1);
console.log(num2);

//output: [ 1, 2, 3, 4, 5, 6, 7 ]
// [ 1, 2, 3, 4, 5, 6, 7 ]
// both num1 and num2 got 7 because array, object are non-primitive which means they keep the reference.
// this can be avoided using spread operator

const num3 = [1,2,3,4,5,6];
const num4 = [...num3];
num4.push(7);
console.log(num3); // output: [ 1, 2, 3, 4, 5, 6 ]
console.log(num4); //output: [ 1, 2, 3, 4, 5, 6, 7 ]