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

//making a copy of original array through .Slice() function
let copy_magicians_names = magicians_names.slice();

//modified the copiied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

//original array
show_magicians(magicians_names);

//copied array
show_magicians(copy_great_magicians);

