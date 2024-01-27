// Default message out to console
console.log("Hello, world from script.js");

console.log("Exercise One Shit")

// Exericse 1.2
// Files Out The blankParagraph ID from index 
const p = document.getElementById("blankParagraph");
p.textContent = "DarthCouruscant"

// Exerice 1.3 + 1.3b
// Creates An List
const ul = document.getElementById("emptyList");
ul.innerHTML = "<li>HTML</li>";
ul.innerHTML += "<li>CSS</li>";
ul.innerHTML += "<li>JavaScript</li>"

// Exerice 1.4
// Changes Color And Font On Exericse 1.2
p.style.color = "red";
p.style.fontWeight = "bold";
// Note that the CSS property `font-weight` is written in camelCase here: `fontWeight`.

// Exerise 1.4 b
// Changes Color And Font On Exerise 1.3 + b
ul.style.color = "blue";
ul.style.fontWeight = "italic";

// Exerise 1.4 c
// Changes The Page Background Color
document.body.style.backgroundColor = "green";

// Exerise 1.5
// Caluculates The 7 * 6 And Only Shows The Result
document.write(7 * 6);

// Exericse 1.5 b
// It Creates A Button And When You Presh It The Result of 7 * 6 Shows Up On A New page

// Exerise 1.6
// The moment you open the browser an alert pops up with the sum of 23-19
// window.alert(23 + 19);

//Exierise 1.6 b
// The alerts displays an alert which says "The answer is: 2319" it doesnt sum up 23 + 19 but rather mashes them into one number
//window.alert("The answer is: " + 23 + 19);

// exerise 1.6 c
// It Adds together the two numbers
//window.alert("The answer is: " + (23 + 19));

//exericize 1.7
// Doestn show anything from the HTML code
document.body.innerHTML = "";