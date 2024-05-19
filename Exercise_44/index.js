// Define a function with rest parameter that accept items argument representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n\tMaking a sandwich with the following items:\n");
    items.forEach(function (singleitem) { return console.log("-", singleitem); });
    console.log("\nNow enjoy your sandwich!!");
}
// Call the function 3 times with 3 different parameters
makeSandwich("Chicken", "Mayo", "Egg", "Cheese");
makeSandwich("Bread", "Chicken");
makeSandwich("Bread", "Chicken", "Cheese", "Mayo", "Butter", "Onion", "Egg", "Tomato", "Lettuce");
