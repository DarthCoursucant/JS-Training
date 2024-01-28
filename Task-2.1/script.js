// Excerise 2.1.1 a
let str1 = "Down the freeway rolls a wayward beer can";
let upper = str1.toUpperCase();
console.log(upper);

// Excerise 2.1.1 b
let str2 = "YOU SHOULDN'T HAVE TO SELL YOUR SOUL";
let lower = str2.toLowerCase();
console.log(lower);

// excerise 2.1.2 a
let sliced1 = norwegianString.slice(3, 6);
console.log(sliced1); // bær

// excerise 2.1.2 b
let sliced2 = norwegianString.slice(-8);
console.log(sliced2); // syltetøy

// excrise 2.1.2 c
let sliced3 = norwegianString.slice(0, 3);
console.log(sliced3); // Blå

// excerise 2.1.3 a
let myChar = norwegianString[2];
console.log(myChar); // å

// exciersse 2.1.3 b
let unicode1 = norwegianString.charCodeAt(4);
let unicode2 = norwegianString.charCodeAt(12);
let unicode3 = norwegianString.charCodeAt(2);
console.log (unicode1, unicode2, unicode3); // 230 248 229

// excierse 2.1.3 c
console.log ("æ".charCodeAt(0), "ø".charCodeAt(0), "å".charCodeAt(0));

