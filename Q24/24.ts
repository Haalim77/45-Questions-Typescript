//declaring variables 
let fruit = "mango";
let upperCaseFruit = "MANGO";
let fifteen = 15;
let fifty = 50;
let fruits = ["apple", "banana", "orange"];


//1. Test for equality and inequality with strings
//equalityTest: true
console.log("Is mango equal to fruit?");
console.log(fruit == "mango");

//inequalityTest: false
console.log("\nIs mango not equal to fruit?");
console.log(fruit != "mango");

//2. Test using the lower case function
//true
console.log("\nIs MANGO equal to mango after converting to lowercase?");
console.log(upperCaseFruit.toLowerCase() == "mango");
//false
console.log("\nIs MANGO equal to mango after converting to lowercase?");
console.log(upperCaseFruit.toLowerCase() != "mango");

//3. numerical tests
//equality
console.log("\n Is fifteen equal to fifty?");
console.log(fifteen == fifty);
//inequality
console.log("\n Is fifteen not equal to fifty?");
console.log(fifteen != fifty);
//greater than
console.log("\n Is fifty greater than fifteen?");
console.log(fifty > fifteen);
//less than
console.log("\n Is fifty less than fifteen?");
console.log(fifty < fifteen);
//greater than or equal to
console.log("\n Is fifteen greater than or equal to fifty?");
console.log(fifteen >= fifty);
//less than or equal to
console.log("\n Is fifteen less than or equal to fifty?");
console.log(fifteen <= fifty);

//4. logical operators

//and &&: true
console.log("\n fifty is not equal to fifteen and greater than fifteen");
console.log(fifty != fifteen && fifty > fifteen);
//and &&: false
console.log("\n fifty is equal to fifteen and greater than fifteen");
console.log(fifty == fifteen && fifty > fifteen);

//OR ||: true
console.log("\n fifty is not equal to fifteen or greater than fifteen");
console.log(fifty != fifteen || fifty > fifteen);
//OR ||: false
console.log("\n fifty is equal to fifteen or less than fifteen");
console.log(fifty == fifteen || fifty < fifteen);

//5. identify array

console.log("\n Is orange include in my fruits");
console.log(fruits.includes("orange"));

//6. identify non-array
console.log("\n Is orange not included in my fruits");
console.log(fruits.includes("orange"));
