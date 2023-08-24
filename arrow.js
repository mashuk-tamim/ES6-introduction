// function add(a,b){
//     const result = a + b;
//     return result;
// }

//works same as above
function add(a, b){
    return a + b;
}

//function expression
const add2 = function(a, b){
    return a + b;
}

//function expression with arrow (shortcut version of the immediate above expression)
// const add3 = (a, b) => a + b;
// const sum = add3(1, 2);
// console.log(sum); 

// const sum = add(5, 10);
// console.log(sum);

//different type of simple arrow function
//1. have parenthesis (applicable for two or more parameter)
const add3 = (a, b) => a + b;
const sum = add3(1, 2);
console.log(`the sum is ${sum}`);

//2. No parenthesis (applicable for one parameter)
const sqr = a => a*a;
const area = sqr(2);
console.log(`the area is ${area} cm^2`);

//3. empty parenthesis (if there is nothing to return)
const printHello = () => console.log('Hello!');
const greet = printHello();