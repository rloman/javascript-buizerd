"use strict"

let myDay = calculateWeekday(9,8,1968);

console.log(myDay);

// return: int
// parameters day, month, year
function calculateWeekday(d,m,y) {
	
	// printf("day %d, month %d, year %d\n", d, m, y);

	y = (m == 1 || m==2 ) ? y-1 : y;

	let c = Math.floor(y / 100); // century
	y = y % 100;

	if(m==1) m = 13; //since Roman times month were from March .. Feb (March was the first Month) 1..12
	if(m==2) m = 14;
	m -= 2;

	let weekday = (d + Math.floor((13*m-1)/5) + y + Math.floor(y/4) + Math.floor(c/4) + 5*c) %7;

	return weekday;

}

