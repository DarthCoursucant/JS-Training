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