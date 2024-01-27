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

//Exerise 1.4 c
document.body.style.backgroundColor = "green";