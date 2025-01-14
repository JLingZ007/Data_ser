const model = require('./BMI_UserModel.js');
let h1 = 1.75;
let w1 = 70;
let myBMI = model.calculateBMI(w1, h1);

console.log(`Your weight is ${w1} and height is ${h1}`)
console.log(myBMI.txt);
