
//function
function make_shirt(size: string = "Large", printMessage: string = `"I Love TypeScript"`) {
    console.log(`You selected ${size} shirt with ${printMessage} prints on shirt.`);
}

//calling function
make_shirt();

//callling function with medium size
make_shirt("Medium");

//calling function with any Size
make_shirt("Any size");