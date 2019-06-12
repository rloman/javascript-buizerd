"use strict"

let myDay = calculateWeekday(9, 8, 1968);

console.log(myDay);

myDay = calculateWeekday(12, 6, 2019);

console.log(myDay);

// return: int
// parameters day, month, year
function calculateWeekday(d, m, y) {

	// printf("day %d, month %d, year %d\n", d, m, y);

	// if month jan or feb, decrease the year 
	// (since the month than belongs to the previous year)
	// century part (19 or 20)
	let c = Math.floor(y / 100); // century
	// year part

	if (m < 3) {
		// january => 11th month
		m += 10;
		y--;
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

