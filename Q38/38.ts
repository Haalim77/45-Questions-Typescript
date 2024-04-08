//function
function describe_city(name: string, country: string = "Pakistan") {
    console.log(`${name} is in ${country}`);
}

//calling function for 1st city
describe_city("Islamabad");

//calling function for 2nd city
describe_city("Karachi");

//calling function for 3rd city which is not in default country
describe_city("New York", "United States of America");
