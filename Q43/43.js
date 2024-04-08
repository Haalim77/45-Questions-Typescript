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
//making a copy of original array through .Slice() function
var copy_magicians_names = magicians_names.slice();
//modified the copiied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
//original array
show_magicians(magicians_names);
//copied array
show_magicians(copy_great_magicians);
