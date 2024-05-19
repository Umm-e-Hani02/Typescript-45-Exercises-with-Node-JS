// Define a function with rest parameter that accept items argument representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\n\tMaking a sandwich with the following items:\n");

    items.forEach(singleitem => console.log("-",singleitem));

    console.log("\nNow enjoy your sandwich!!");    
}

// Call the function 3 times with 3 different parameters
makeSandwich("Chicken", "Mayo", "Egg", "Cheese");

makeSandwich("Bread", "Chicken");

makeSandwich("Bread", "Chicken", "Cheese", "Mayo", "Butter", "Onion", "Egg", "Tomato", "Lettuce")