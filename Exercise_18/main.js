var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and printing its original order
var countriesToVisit = ["Dubai", "Switzerland", "London", "Ireland"];
console.log("Original Order: ", countriesToVisit);
// Print the Array in Alphabetical Order without modifying the actual array list
console.log("Alphabetical Order: ", __spreadArray([], countriesToVisit, true).sort());
// Showing that the arrat is still in its original order
console.log("Still in Original Order: ", countriesToVisit);
// Print the array in reverse order without modifying the actual array list
console.log("Reverse Order: ", __spreadArray([], countriesToVisit, true).reverse());
// Showing that the array is still in its original order
console.log("Still in Original Order", countriesToVisit);
// We have changed the original order now
console.log("Original array reversed: ", countriesToVisit.reverse());
// Print the array to show that it's back  to it original order
console.log("Back to Original Order: ", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order: ", countriesToVisit.sort());
// We have changed again the Original Array Order now in Reverse Order again
console.log("Original Array Reversed Again: ", __spreadArray([], countriesToVisit, true).reverse());
