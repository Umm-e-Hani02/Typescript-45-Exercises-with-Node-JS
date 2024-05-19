"use strict";
// Variables
let strawberry = "strawberry";
let uppercaseStrawberry = "STRAWBERRY";
let fifteen = 15;
let thirty = 30;
let fruits = ["Apple", "Strawberry", "Orange"];
// Test for equality and inequality with strings
console.log("Is strawberry is equal to strawberry?");
console.log(strawberry == "strawberry");
console.log("\nIs strawberry is not equal to strawberry");
console.log(strawberry != "strawberry");
// Test using Lowercase function
console.log("\nIs STRAWBERRY is equal to strawberry after converting to lowercase?");
console.log(uppercaseStrawberry.toLowerCase() == "strawberry");
console.log("\nIs STRAWBERRY is not equal to strawberry after converting to lowercase?");
console.log(uppercaseStrawberry.toLowerCase() != "strawberry");
// Numerical Tests
// Equals to
console.log("\nIs fifteen is equal to thirty?");
console.log(fifteen == thirty);
// Not equals to
console.log("\nIs fifteen is not equal to thirty?");
console.log(fifteen != thirty);
// Greater than
console.log("\nIs fifteen is greater than 5?");
console.log(fifteen > 5);
// Less than 
console.log("\nIs fifteen is less than 10?");
console.log(fifteen < 10);
// Greater than or equal to 
console.log("\nIs fifteen is greater than or equal to 9?");
console.log(fifteen >= 9);
// Less than or equal to
console.log("\nIs thirty is less than or equal to 20?");
console.log(thirty <= 20);
// Test using "and" & "or" operators
// Using && (AND operator)
console.log("\nthirty is not equal to 15 and thirty is greater than 15");
console.log(thirty != 15 && thirty > 15);
console.log("\nthirty is not equal to 15 and thirty is greater than 40");
console.log(thirty != 15 && thirty > 40);
// Using || (OR operator)
console.log("\n30 is greater than 50 or 30 is equals to 30?");
console.log(30 > 50 || 30 == 30);
console.log("\n30 is greater than 50 or 30 is not equals to 30?");
console.log(30 > 50 || 30 != 30);
// Test whether an item is inlude in array
console.log("\nIs Strawberry include in my fruit array?");
console.log(fruits.includes("Strawberry"));
// Not include
console.log("\nIs Strawberry not include in my fruit array?");
console.log(!fruits.includes("Strawberry"));
