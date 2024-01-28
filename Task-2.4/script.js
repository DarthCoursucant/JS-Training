// excerise 2.4.1
function myOwnLogger (text) {
    console.log ("This is what I log: " + text);
}
myOwnLogger("The text from below");

// excerise 2.4.2 a
function isItOdd(number) {
    if (number % 2 === 1) {
        return true;
    }
    return false;
    // No need for an else here, though you could have one...
}
console.log(isItOdd(13), isItOdd(42));
// true false > just testing, always a good idea

// excerise 2.4.2 b
console.log(isItOdd("Whatever")); // false

// excerise 2.4.2 c
function isItOdd2(number) {
    if (isNaN(number)) {
        return NaN;
    } else if (number % 2 === 1) {
        return true;
    }
    return false;
    // No need for an else here, either...
}
console.log(isItOdd2(13), isItOdd2(42.0), isItOdd2("13"));
// true false true > just testing, again

// excerise 2.4.2 d
console.log(isItOdd2("Whatever"), isItOdd2("42 whatevers"), isItOdd2("whatevers 42"));
// NaN NaN NaN

// excerise 2.4.3 a
function toFarenheit(celsius) {
    return celsius * (9/5) + 32;
  }
  console.log(toFarenheit(-40));  // -40
  console.log(toFarenheit(0));    // 32
  console.log(toFarenheit(37));   // 98.60000000000001
  console.log(toFarenheit(100));  // 212

// excerise 2.4.3 b
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

console.log(toCelsius(-40)); // -40
console.log(toCelsius(32)); // 0
console.log(toCelsius(98.6)); // 37
console.log(toCelsius(212)); // 100

// excerise 2.4.4 a
function writeToPage(text) {
    const target = document.getElementById('emptyParagraph')
    target.innerText = text;
}
let myGreeting = "London Calling by The Clash";
writeToPage(myGreeting);

// excerise 2.4.4 b
function writeToPage2(text, element) {
    const target = document.getElementById(element);
    target.innerText = text;
}
let myGreeting2 = "This is not America by David Bowie";
writeToPage2(myGreeting2, "anotherParagraph");

// excerise 2.4.4 c
function writeToPage3(text, element) {
    const target = document.getElementById(element);
    if (target !== null) {
        target.innerText = text;
    } else {
        console.error ("The given element, " + element + ", doesn't exist.");
    }
}
let myGreeting3 = "Is there anybody out there by Pink Floyd";
writeToPage3(myGreeting3, "whatever");
// Note that the `console.error()` doesn't stop the rest of the execution of the script. :-)

// excerise 2.4.5
function listItems() {
    const target = document.querySelector("ol#myList");
    let programmingLanguages = [
        "Python",
        "JavaScript",
        "Java",
        "C#",
        "C",
        "C++",
        "Go",
        "R",
        "Swift",
        "PHP"
];
    programmingLanguages.sort();
    for (let language of programmingLanguages) {
        target.innerHTML += "<li>" + language + "</li>";
    }
}

// excerise 2.4.6 a
function toFarenheitPrecise(celsius, precision = 2) {
    return  Number.parseFloat(celsius * (9/5) + 32).toFixed(precision);
  }
  console.log( toFarenheitPrecise(-40, 1 ));  // -40.0
  console.log( toFarenheitPrecise(0, 1) );    // 32.0
  console.log( toFarenheitPrecise(37, 1) );   // 98.6
  console.log( toFarenheitPrecise(100, 1) );  // 212.0

  // excerise 2.4.6 b
  function toCelsiusPrecise(fahrenheit, precision = 2) {
    return Number.parseFloat((5/9) * (fahrenheit-32)).toFixed(precision);
  }
  console.log( toCelsiusPrecise(-40, 1) );
  console.log( toCelsiusPrecise(32, 1) );
  console.log( toCelsiusPrecise(98.6, 1) );
  console.log( toCelsiusPrecise(212, 1) );
  // -40.0
  // 0.0
  // 37.0
  // 100.0