// Electricity Bill Calculator.

let units = 150;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Electricity Bill:", bill);

// Second code.

let Units = 260;
let Bill;

if(Units <= 80) {
    Bill = Units * 5;
} else if (Units <= 150) {
    Bill = Units * 7;
} else if (Units <= 250) {
    Bill = Units * 10;
} else {
    Bill = Units * 15;
}

console.log("Electricity Bill:", Bill);