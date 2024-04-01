//store names in arrray//
let names:string[]=["harry", "Hermoine","Ron","Ginny","Luna", "Neville"];

//save message//
let message = "dumbledore's Army is ready.";

//i index access each element of array one at a time//
for (let i= 0; i<names.length; i++){
    console.log(`${names[i]}: ${message}`);
}
