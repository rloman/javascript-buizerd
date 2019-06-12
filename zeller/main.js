"use strict"

function assert(b) {
	console.log("Assert called: result: "+b);
	if(!b) {
		throw new Error();
	}
}

let myDay = calculateWeekday(29,1,2019);

assert(myDay == 2); // tuesday (my graduation day)

myDay = calculateWeekday(9,8,1968);

assert(myDay == 5); // born on friday

myDay = calculateWeekday(23,5,2001);

assert(myDay == 3); // married on a wednesday (day before Ascension Day)

console.log(myDay);

myDay = calculateWeekday(23,3,2003);
assert (myDay == 0); // Lieke was born on a Sunday

myDay = calculateWeekday(6,9,2005);
assert (myDay == 2); // Wout was born on a Tuesday

myDay = calculateWeekday(6,9,2005);
assert (myDay == 2); // Wout was born on a Tuesday

// return: int
// parameters day, month, year
function calculateWeekday(d, m, y) {

	let c = Math.floor(y / 100); // century

	if (m < 3) {
		// january => 11th month
		m += 10;
		y--; // decrement the year since January and February belongs to the PREVIOUS YEAR!
	}
	else {
		// just decrease by two (marth: 3 => 1)
		m -= 2;
	}

	y = y % 100;

	// now the calculation
	let weekday = (d + Math.floor((13 * m - 1) / 5) + y + Math.floor(y / 4) + Math.floor(c / 4) + 5 * c) % 7;

	return weekday;
}

