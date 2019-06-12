"use strict"


// hoursAndMinutes(283);

// hoursAndMinutesAndSeconds(14400);

assignment();

function assignment() {
    console.log(5 > 4);
    console.log("apple" > "pineapple");
    console.log("apple".length < "pineapple".length);
    console.log("apple" < "pineapple");
    console.log("2" > "12");
    console.log(Number("2") > Number("12"));
    console.log(undefined == null);
    console.log(undefined === null);
    console.log(null == "\n0\n");
    // null is toch niet gelijk aan 
   // 0
    console.log( null === +"\n0\n");
    console.log(typeof(+"\n0\n"));
    console.log(typeof("\n0\n"));
   
    


}


function hoursAndMinutes(minutesAfterMidnight) {

    let hours = Math.floor(minutesAfterMidnight / 60);
    let minutes = minutesAfterMidnight % 60;

    console.log(hours + ":" + minutes);


}

function hoursAndMinutesAndSeconds(secondsAfterMidnight) {

    let hours = Math.floor(secondsAfterMidnight/3600);
    let minutes = Math.floor(secondsAfterMidnight / 60);

}