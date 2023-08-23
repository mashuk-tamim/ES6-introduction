const mark = 60;
// mark = 56; //TypeError: Assignment to constant variable.
// console.log(mark);

const marks = [60, 60, 58, 60, 56];
// marks = [60, 60, 58, 60, 60]; // TypeError: Assignment to constant variable. 
marks[4] = 60; // NO ERROR
// console.log(marks);

const student = {
    name: 'Mashuk Tamim',
    roll: 1603113
}

// student = {
//     name: 'Md Mashuk Tamim'
// } 
// TypeError: Assignment to constant variable.

student.name = 'Md Mashuk Tamim'; //No ERROR
// console.log(student);

for (let i =0; i<=10; i++){
    const num = i; //No ERROR because after finishing a loop or block of code 'const' clear the value
    console.log(num);
}