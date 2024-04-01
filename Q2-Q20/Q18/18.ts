
let favoraitePlaces: string[] = ["Capadocia", "Korea", "Paradise Waterfall","Hogwarts", "Qatar"];

console.log("1. Original order");
console.log(favoraitePlaces.join("\n"));
/*for( let i=0; i<favoraitePlaces.length; i++){
    console.log(`${favoraitePlaces[i]}`);
}*/

//alphabetical order
favoraitePlaces.sort();
console.log("2. Alphabetical Order");
for( let i=0; i<favoraitePlaces.length; i++){
    console.log(`${favoraitePlaces[i]}`);
}

//reverse alphabetical order
favoraitePlaces.sort((a,b) =>
b.localeCompare(a));

console.log(".3. Reversed Alphabetical Order");
console.log(favoraitePlaces.join("\n"));