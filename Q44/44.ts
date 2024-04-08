
//function that accept sandwichItems array
function make_sandwich(...items: string[]) {
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Your Sandwich");
}
//calling the function 1st  time
make_sandwich("Chicken", "cheese", "Mayoneese", "Tomato");

//calling the function 2nd time
make_sandwich("Pepperoni", "cheese", "bell peper");

//calling the function 3rd time
make_sandwich("Chicken", "cheese", "Mayoneese", "Tomato", "Eggs", "bell pepper", "olives");