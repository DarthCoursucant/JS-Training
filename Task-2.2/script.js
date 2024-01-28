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
console.log("The largest number is " + max); // The largest number is 42

// excirise 2.2.3
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

// excirise 2.2.3 a
console.log(vegetables.length); // 4

// excirise 2.2.3 b
vegetables.push("Tomato");

// excirise 2.2.3 c
vegetables.unshift("Cucumber");
console.log(vegetables); // Just to check...
// Array(6) [ "Cucumber", "Cabbage", "Turnip", "Radish", "Carrot", "Tomato" ]

// excirise 2.2.3 d
for (let item of vegetables) {
    console.log(`${item} contains ${item.length} letters`);
}
// d, equally correct
for (let i = 0; i < vegetables.length; i++) {
    let output = vegetables[i] + " contains " + vegetables[i].length + " letters";
    console.log(output);
}

// excirise 2.2.4 a
let mixed = ["Dill", 42, true, , 13, "13", null];
for (let i = 0; i < mixed.length; i++) {
    console.log(i + " contains " + mixed[i] + " with the datatype " + typeof mixed[i]);
}

// excirise 2.2.4 b
mixed[3] = "Hello, World!";
console.log(mixed);
// Array(7) [ "Dill", 42, true, "Hello, World!", 13, "13", null ]

// excirise 2.2.4 c
let numericSum = 0;
for (let item of mixed) {
    if (typeof item === 'number') {
        numericSum += item;
} }
console.log(numericSum); // 55

// excirise 2.2.5
console.log("Exercise 5");
vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
// Tip: Do not redeclare if you used let vegetables = [...] in #3 above
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// excirise 2.2.5 a
let greeneries = vegetables.concat(fruits);

// excirise 2.2.5 b
greeneries.sort();
console.log(greeneries);
// Array(9) [ "Apple", "Banana", "Cabbage", "Carrot", "Lemon", "Mango", "Orange", "Radish", "Turnip" ]

// excirise 2.2.5 c
console.log(greeneries[0]); // Apple

// excirise 2.2.5 d
console.log(greeneries[greeneries.length - 1]); // Turnip

// excirise 2.2.5 e
// Tip: Look at the `Array.reverse()`, and remember to `sort()` it first.
// Since greeneries is already sorted above:
greeneries.reverse();
console.log(greeneries);
// Array(9) [ "Turnip", "Radish", "Orange", "Mango", "Lemon", "Carrot", "Cabbage", "Banana", "Apple" ]

// excirise 2.2.6
myNumbers = [13, -2, 18, 4, 42, 12, 9, -21, -3];

// excirise 2.2.6 a
myNumbers.sort();
console.log(myNumbers);
// [ -2, -21, -3, 12, 13, 18, 4, 42, 9 ] > The array is sorted alphabetically

// excirise 2.2.6 b
myNumbers.sort(function(a, b){return a - b});
console.log(myNumbers);
// [ -21, -3, -2, 4, 9, 12, 13, 18, 42 ] > correct, ascending order

// excirise 2.2.6 c
myNumbers.sort(function(a, b){return b - a});
console.log(myNumbers);
// [ 42, 18, 13, 12, 9, 4, -2, -3, -21 ] > correct, descending order