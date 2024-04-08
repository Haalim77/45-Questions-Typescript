//function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "\"I Love TypeScript\""; }
    console.log("You selected ".concat(size, " shirt with ").concat(printMessage, " prints on shirt."));
}
//calling function
make_shirt();
//callling function with medium size
make_shirt("Medium");
//calling function with any Size
make_shirt("Any Size");
