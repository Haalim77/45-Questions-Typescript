//function
function describe_city(name, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(name, " is in ").concat(country));
}
//calling function
describe_city("Islamabad");
//calling function for 2nd city
describe_city("Karachi");
//calling function for a city which is not in default country
describe_city("New York", "United States of America");
