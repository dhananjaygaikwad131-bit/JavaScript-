// Reverse Nested loop pattern.

for(let i = 1; i <= 5; i ++) {
    for(let j = 1; j <= 6-i; j ++) {
        process.stdout.write("*")
    }
    console.log();
}