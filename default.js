// 0 are set as a default value of the parameters. If no argument or formal parameter are given, default value is used. Otherwise,ignored.
function add(num1 =0, num2 = 0){ 
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// add(10, 20);
// add(10);
// add();

function fullName(firstName, lastName = ''){
    const name = firstName + ' ' + lastName;
    console.log(name);
}
fullName('mashuk', 'tamim');
fullName('mashuk');
fullName();

// empty array is passed as a default value of parameter
function totalMark(mark = []){

}
// empty object is passed as a default value of parameter
function species(human = {}){

}