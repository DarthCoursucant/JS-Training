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