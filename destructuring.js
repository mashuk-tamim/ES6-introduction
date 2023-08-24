const student = {
    name: 'Mashuk',
    roll: 1603113,
    section: 'B'
}

// const {name, roll, section} = student;
// console.log(name, roll, section);

const {name, roll: id, section} = student;
console.log(name, id, section); 

const numbers = [1, 2, 3];
// [num1, num2, num3] = numbers;
// console.log(num1, num2, num3); //1, 2, 3

// [num1, num2] = numbers;
// console.log(num1, num2); //1, 2

[num1, , num3] = numbers;
console.log(num1, num3); //1, 3