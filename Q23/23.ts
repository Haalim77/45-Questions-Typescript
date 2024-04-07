
let country = "Turkey";
let currency = "Dollar";

//Test 1 : True
console.log ("Test 1: Turkey is country?");
console.log(country  == "Turkey");

//Test 2 : True
console.log ("\nTest 2: Dollar is currency?");
console.log(currency  == "Dollar");

//Test 3: True
console.log ("\nTest 3: Dollar is not a country?");
console.log(currency  != country);

//Test 4 : True
console.log ("\nTest 4: Turkey is not a currency?");
console.log(country  != currency);

//Test 5 : True
console.log ("\nTest 5: Dollar is not a currency of Turkey?");
console.log(currency != country);

//Test 6: False
console.log ("\nTest 6: Dollar is a country?");
console.log(currency  == country);

//Test 7: False
console.log ("\nTest 7: Turkey is a curerncy?");
console.log(currency  == "Turkey");

//Test 8: False
console.log ("\nTest 8: Dollar is not a currency?");
console.log(currency  != "Dollar");

//Test 9: False
console.log ("\nTest 9: Dollar is not a currency?");
console.log(currency != "Dollar");

//Test 10: False
console.log ("\nTest 10: Turkey is not a country?");
console.log(country  != "Turkey");

