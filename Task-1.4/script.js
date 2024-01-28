console.log("You're a mean one, mr. Grinch!");

//Excerise 1.4.1 a
for (let i = 0; i < 11; i++) {
    console.log(i);
}

//Excerise 1.4.1 b
for (let i = 6; i < 12; i++) {
    console.log(i);
}

// Excerise 1.4.1 c
for (let i = 10; i > 0; i-- ) {
    console.log(i);
}

// Excerise 1.4.2 a
let i = 0;
while (i <= 10) {
    console.log(i);
i++; }

// Excerise 1.4.2 b
let b = 6;
while (b <=11) {
    console.log(b);
b++}

// Excerise 1.4.2 c
let p = 10;
while (p > 0) {
    console.log(p)
p--}

// Excerise 1.4.3 a
for (let i = 1; i <= 10; i++) {
    if (i === 5) { continue; }
    console.log(i);
}

// Excerise 1.4.3 b
for (let i = 10; i >= 0; i--) {
    if (i < 2) { break; }
    console.log(i);
}

// Excerise 1.4.3 b But With A Loop
i = 10;
while (i >= 0) {
    console.log(i);
    if (i === 2) { break; } // Break after logging the 2.
    i--;
}

// Excerise 1.4.4 a
i = 10;
do {
    console.log(i);
    i--;
} while (i >= 5);

// Excerise 1.4.4 b
i = 0;
do {
    console.log(i);
    i--;
} while (i >= 5);

// Excerise 1.4.5
for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

// Alternative:
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Excerise 1.4.6
const catBreeds = ["Abyssinian", "Balinese", "Birman", "Chartreux", "Egyptian Mau", "Maine Coon", "Norwegian Forest Cat", "Ragdoll", "Siamese", "Siberian"];
for (let cat of catBreeds) {
    console.log(cat + " is a cat breed.");
}

// Excerise 1.4.7
console.log ("Exercise 7 - Level 2");
let text = "";
const rows = 5;
// Outer for = rows
for (let i = 1; i <= rows; i++) {
    // Inner for = columns
    for (let j = 1; j <= i; j++) {
text += "*"; }
    text += "\n"; // Add a line break for each row
}
console.log (text);
// What happens if you change the inner loop to
// for (let j = rows; j >= i; j--)

// Excerise 1.4.8 a + b 
let fizz, buzz;
const maxB = 30; // a = 20, b = 30
let outputB = "";
for (let i = 1; i <= maxB; i++) {
    fizz = (i%3 === 0); // fizz is true if i%3 == 0 (i is divisible into 3)
    buzz = (i%7 === 0); // for b, swap 5 for 7, just here.
    if (fizz || buzz) {
if (fizz) {
            outputB += "Fizz";
        }
        if (fizz && buzz) {
            outputB += " ";
            // Space between fizz and buzz when both are written
}
if (buzz) {
            outputB += "Buzz";
        }
} else {
        outputB += i; // If neither fizz or buzz, output the number
    }
if (i < maxB) {
        outputB += ", "; // Add comma for all but the last
    }
}
console.log (outputB);