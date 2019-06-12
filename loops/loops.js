let i = 500;
//0 of vaker
while(i < 10) {
    console.log(i);
    i++;
}

i = 8;

// 1 of vaker
do {
    console.log("in de do... while")
    console.log(i);
    i++;
}
while(i < 10);

console.log(i);


// for loop

// 0 of vaker
for(let j = 0;j<15;j++) {
    console.log("In de for loop: "+j);
}

for(let j = 15;j>0;j--) {
    
    if(j != 13) {
        console.log("In de for loop: "+j);
    }
}

