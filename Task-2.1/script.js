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

// excirse 2.1.4
let shout1 = "Shout, shout!";
let shout2 = "Let it all out.";

// excirse 2.1.4  a
let concated = shout1.concat(" ", shout2);
console.log(concated);

// excirse 2.1.4  b
let stringified = `${shout1} ${shout2}`;
console.log(stringified);

// excirse 2.1.5 
const lyrics = `London calling to the faraway towns
Now war is declared and battle come down
London calling to the underworld
Come out of the cupboard, you boys and girls
London calling now don't look to us
Phony Beatlemania has bitten the dust
London calling see we ain't got no swing
'Cept for the ring of that truncheon thing.`;
const searchFor = "London calling";
let first = lyrics.indexOf(searchFor);
let last = lyrics.lastIndexOf(searchFor);
console.log("First occurance at index " + first); // 0
console.log("Last occurance at index " + last); // 229

// excirse 2.1.6
let sum = 35;
if (sum % 10 == 0){
    console.log("a");
} else if (sum % 2 == 1){
    if (sum % 5 == 0 && sum % 2 == 0){
        console.log("b");
    } else if (sum % 5 == 0){
        console.log("c");
    } else {
        console.log("d");
}
} else {
    console.log("e");
}
// sum = 35 gives output 'c'
// Level 2:
// (sum % 2 == 1) and (sum % 2 == 0) cannot both be true,
// thus we cannot reach console.log("b");
