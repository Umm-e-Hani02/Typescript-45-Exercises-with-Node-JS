// Making a array of countries and printing its original order
let countriesToVisit: String[] = ["Dubai", "Switzerland", "London", "Ireland"];
console.log("Original Order: ", countriesToVisit);

// Print the Array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order: ", [...countriesToVisit].sort());

// Showing that the arrat is still in its original order
console.log("Still in Original Order: ", countriesToVisit);

// Print the array in reverse order without modifying the actual array list
console.log("Reverse Order: ", [...countriesToVisit].reverse());

// Showing that the array is still in its original order
console.log("Still in Original Order", countriesToVisit);

// We have changed the original order now
console.log("Original array reversed: ", countriesToVisit.reverse());

// Print the array to show that it's back  to it original order
console.log("Back to Original Order: ", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order: ", countriesToVisit.sort());

// We have changed again the Original Array Order now in Reverse Order again
console.log("Original Array Reversed Again: ", [...countriesToVisit].reverse());