//Array that includes magician's names
var magicians_names = ["Dumbledore", "Gandalf", "Voldemort"];
//function 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function for make_great
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var great_magicians = make_great(magicians_names);
//calling function to get each magician's name
show_magicians(great_magicians);
