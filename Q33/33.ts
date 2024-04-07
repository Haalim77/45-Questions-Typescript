//storing numbers in an array
let numbers = [1, 2, 3, 4, 5, 6., 7, 8, 9, ];

//using for loop
for( let oneNumber of numbers) {
    let ordinalEnding: string;

    //add "st" to 1 = 1st
    if(oneNumber === 1) {
        ordinalEnding = "st";
    }
    //add "nd" to 2 = 2nd
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    //add "rd" to 3 = 3rd
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    //add "th" to 4-9 numbers = 4th, 5th, 6th, 7th, 8th and 9th.
    else {
        ordinalEnding = "th";
    }
    //print numbers with thier ordinal ending.
    console.log(`${oneNumber}${ordinalEnding}`);
}