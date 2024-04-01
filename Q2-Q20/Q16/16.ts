
let guests2:string[]=["Elsa","Emma Watson","Suzy", "IU", "Anne hathaway"];

let newGuest = "Park Shin Hye";

//append() method doesn't work in Typescript, it works in js//
guests2.push(newGuest);

let message2 = "Kindly join us for dinner at 8:00 pm in Monal.";

for( let i=0; i<guests2.length; i++){
    console.log(`${guests2[i]}, ${message2}`);
}

console.log("I have found a bigger table");
