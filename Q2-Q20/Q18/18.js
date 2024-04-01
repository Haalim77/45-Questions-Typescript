var favoraitePlaces = ["Capadocia", "Korea", "Paradise Waterfall", "Hogwarts", "Qatar"];
console.log("1. Original order");
console.log(favoraitePlaces.join("\n"));
/*for( let i=0; i<favoraitePlaces.length; i++){
    console.log(`${favoraitePlaces[i]}`);
}*/
//alphabetical order
favoraitePlaces.sort();
console.log("2. Alphabetical Order");
for (var i = 0; i < favoraitePlaces.length; i++) {
    console.log("".concat(favoraitePlaces[i]));
}
//reverse alphabetical order
favoraitePlaces.sort(function (a, b) {
    return b.localeCompare(a);
});
console.log(".3. Reversed Alphabetical Order");
console.log(favoraitePlaces.join("\n"));
