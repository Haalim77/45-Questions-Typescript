var guests2 = ["Elsa", "Emma Watson", "Suzy", "IU", "Anne hathaway"];
var newGuest = "Park Shin Hye";

//append() method doesn't work in Typescript, it works in js//
guests2.push(newGuest);
var message2 = "Kindly join us for dinner at 8:00 pm in Monal.";
for (var i = 0; i < guests2.length; i++) {
    console.log("".concat(guests2[i], ", ").concat(message2));
}
console.log("I have found a bigger table");
