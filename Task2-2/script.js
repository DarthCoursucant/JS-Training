// excierise 2.2.1
const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// See lesson 1.4 for how to calculate this...

// Excierise 2.2.1 a
console.log(fib[6]); // 8, remember array indexes start at 0
// However: Normally we refer to fibonaccinumber as Fn
// Making F0 = 0, F1 = 1, F2 = 1, ..., F6 = 8, F7 = 13, F8, = 21, ...,
// ie. starting on 0, like an array, So F7 is not the same as the 7th number...
console.log(fib[7]); // 13

// excierise 2.2.1 b
let sum = 0;
for (let i = 0; i < fib.length; i++) {
    sum += fib[i];
}
console.log(sum); // 88

// excerise 2.2.2
let myNumbers = [13, -2, 18, 4, 42, 12, 9, -21, -3];

// excerise 2.2.2 a
console.log(myNumbers.length); // 9

// excerise 2.2.2 b
myNumbers.pop();

// excerise 2.2.2 c
myNumbers.push(14);

// excerise 2.2.2 d
myNumbers.unshift(3);
console.log(myNumbers); // Just checking... :-)
// Array(10) [ 3, 13, -2, 18, 4, 42, 12, 9, -21, 14 ]

// excerise 2.2.2 e
// e - almost level 2 ;-)
let max = -Infinity; // Nothing is less than negative infinity
for (let num of myNumbers) {
    if (num > max) {
max = num; }
}