//Array that includes magician's names
let magicians_names = ["Dumbledore", "Gandalf", "Voldemort"];

//function 
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

//calling function to get each magician's name
show_magicians(magicians_names);