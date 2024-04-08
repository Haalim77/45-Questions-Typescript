//Array that includes magician's names
var magicians_names = ["Dumbledore", "Gandalf", "Voldemort"];
//function 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//calling function to get each magician's name
show_magicians(magicians_names);
