// Sum of Even numbers.

let total = 0;

for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        total = total + i;
    }
}

 console.log(total);