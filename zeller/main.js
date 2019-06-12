"use strict"

let myDay = calculateWeekday(29,1,2019);

console.log(myDay);

// return: int
// parameters day, month, year
function calculateWeekday(d,m,y) {
	
	// printf("day %d, month %d, year %d\n", d, m, y);

	// if month jan or feb, decrease the year 
	// (since the month than belongs to the previous year)
	y = (m == 1 || m==2 ) ? y-1 : y;

	// century part (19 or 20)
	let c = Math.floor(y / 100); // century
	// year part
	y = y % 100;

	if(m==1){
		// january => 11th month
		m = 11; //since Roman times month were from March .. Feb (March was the first Month) 1..12
	}
	else {
		if(m==2) {
			// february => 12th month
			m = 12;
		}
		else {
			// just decrease by two (marth: 3 => 1)
			m -= 2;
		}
	}

	// now the calculation
	let weekday = (d + Math.floor((13*m-1)/5) + y + Math.floor(y/4) + Math.floor(c/4) + 5*c) %7;

	return weekday;
}

