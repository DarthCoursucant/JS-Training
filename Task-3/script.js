console.log("We meet again, mr. Bond!");

// Exerice 3.1
var myNumber = 10

// Exerice 3.1 a
if (myNumber === 10) {
    console.log ("Bingo, the number is 10");
}

// Excerise 3.1 b + c
myNumber = 15;
if (myNumber === 10) {
    console.log ("Bingo, the number is 10");
} else {
    console.log ("Aww, the number wasn't 10");
}

// Excierise 3.2 a
var apple = true;
var orange = false;
if (apple !== orange) {
    console.log("You cannot compare apples and oranges");
}

// Excerise 3.2 b + c + d
orange = true;
if (apple !== orange) {
    console.log("You cannot compare apples and oranges");
} else {
    console.log("Hm, it seems apples and oranges are the same, after all");
}

// Excerise 3.3
// The Alert Says "Hello, null" If The User cancsels the alert 
let inputName = prompt("What is your name?");
if (inputName !== "") {
    alert ("Hello, " + inputName);
} else {
    alert ("Awww!");
}

//  Use [prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp) to allow input

// Exverise 3.4
var myAge = 21;
if (myAge < 0 || isNaN(Number(myAge))) { // Just an extra check
//if (myAge < 0) {
    console.log("That's not possible")
} else if (myAge < 18) {
    console.log("You are juvenile");
} else if (myAge < 30) {
    console.log("You are still young");
} else if (myAge < 50) {
    console.log("You aren't exactly young anymore, are you?");
} else if (myAge < 70) {
    console.log("You're getting really old, aren't you?");
} else if (myAge < 100) {
    console.log("How is retirement treating you?");
} else {
    console.log("Centennial? Impressive...");
}

// Excerise 3.5
var number = prompt("Please, enter a number");
var test = Number(number);
if (isNaN(test)) {
    console.log (number + " is not a number: Not a valid number entered");
} else {
    console.log (number + " is indeed a number: Valid number entered");
}

// Tip: Check the input using [the Number() function](https://www.w3schools.com/jsref/jsref_number.asp) and [the isNaN() function](https://www.w3schools.com/jsref/jsref_isnan.asp).