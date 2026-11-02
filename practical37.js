// Shopping Discount Calculator.

let total = 2500;
let discount;

if (total >= 5000) {
    discount = 20;
} else if (total >= 2000) {
    discount = 10;
} else {
    discount = 0;
}

let finalAmount = total - (total * discount / 100);

console.log("Total:", total);
console.log("Discount:", discount + "%");
console.log("Final Amount:", finalAmount);

// Second code.

let total1 = 6000;
let discount1;

if(total1 >= 5000) {
    discount1 = 20;
} else if (total1 >= 2000) {
    discount1 = 10;
} else {
    discount1 = 0;
}

let finalAmount1 = total1 - (total1 * discount1 / 100);

console.log("Total:", total1);
console.log("Discount:", discount1 + "%");
console.log("Final Amount:", finalAmount1);

// Third code.


let total2 = 1000;
let discount2;

if(total2 >= 5000) {
    discount2 = 20;
} else if (total2 >= 2000) {
    discount2 = 10;
} else {
    discount2 = 0;
}

let finalAmount2 = total2 - (total2 * discount2 / 100);

console.log("Total:", total2);
console.log("Discount:", discount2 + "%");
console.log("Final Amount:", finalAmount2);