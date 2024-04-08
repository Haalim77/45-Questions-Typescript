//Array that includes magician's names
let magicians_names = ["Dumbledore", "Gandalf", "Voldemort"];

//function 
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

//function for make_great
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let great_magicians = make_great(magicians_names);

//calling function to get each magician's name
show_magicians(great_magicians);