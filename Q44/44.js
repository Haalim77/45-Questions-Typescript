// array for items 
var sandwichItems = [];
//function that accept sandwichItems array
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Your Sandwich");
}
make_sandwich("Chicken", "cheese", "Mayoneese", "Tomato");
make_sandwich("Pepperoni", "cheese", "bell peper");
make_sandwich("Chicken", "cheese", "Mayoneese", "Tomato", "Eggs", "bell pepper", "olives");
