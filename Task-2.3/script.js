// excerise 2.3.1
let myTV = { make: "Toshiba", model: "42XV555", resolution: "1080p" };
console.log(myTV); // Just for tests

// excerise 2.3.1 a
console.log(myTV['resolution']); // "1080p"

// excerise 2.3.1 b
let makeAndModel = myTV.make + " " + myTV.model;
console.log(makeAndModel);

// excerise 2.3.1 c
myTV.year = 2008;
console.log(myTV); // Just for tests, again

// excerise 2.3.1 d
console.log(typeof myTV); // object

// excerise 2.3.1 e
let newTV = { make: "LG", model: "65OLEDCX", resolution: "2160p", year: 2020 };

// excerise 2.3.1 f
for (let prop in newTV) {
    console.log(newTV[prop] + " (" + prop + ")")
}

// excerise 2.3.1 g
let tvs = [myTV, newTV];
console.log(tvs); // Just for tests

// excerise 2.3.1 h
for (let tv of tvs) {
    console.log (tv.make + " " + tv.model + " (" + tv.year + ") " + tv.resolution);
}

// Excierise 2.3.2 a
tvs.push( { make: "TCL", model: "55DP660", resolution: "2160p", year: 2018 } );
tvs.push( { make: "Samsung", model: "QE65Q950RBT", resolution: "4320p", year: 2019 } );
console.log(tvs); // Just for tests

// Excierise 2.3.2 b
tvs.sort();
for (let tv of tvs) {
    console.log (tv.make + " " + tv.model + " (" + tv.year + ") " + tv.resolution);
}
// Nothing happens, sort() does not know how to compare the objects

// Excierise 2.3.2 c
tvs.sort(function(a, b){return b.year - a.year})
console.log ("Sorted list:");
for (let tv of tvs) {
    console.log (tv.make + " " + tv.model + " (" + tv.year + ") " + tv.resolution);
}