//store names in arrray//
var names = ["harry", "Hermoine", "Ron", "Ginny", "Luna", "Neville"];
//save message//
var message = "dumbledore's Army is ready.";
//i index access each element of array one at a time//
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i], ": ").concat(message));
}
