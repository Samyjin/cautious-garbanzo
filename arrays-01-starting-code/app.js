const numbers = [1, 2, 3];
console.log(numbers);

/*

const moreNumbers = new Array(5); // This line creates a fix array of length 5. new keyword is optional
console.log(moreNumbers);

const yetMoreNumbers = Array.of(5, 2); 
console.log(yetMoreNumbers);

*/

// const listElems = document.querySelectorAll("li");
// console.log(listElems);

// const arrayListElems = Array.from(listElems); // Convert an iterable or an array-like object to real array
// console.log(arrayListElems);

// const hobbies = ["Cooking", "Hiking", "Chess"]; // Uniform data

// const personalData = [30, "Max", {moreDetails : []}]; // Mixed 

// const analyticsData = [[1.0, 2.3], [9.4, 8.3]]; // Multi dimentional array

// for (const data of analyticsData) {
//     for (const pointData of data) {
//         console.log(pointData);
//     }
// }

const hobbies = ["Sports", "Cooking"];

/* Push, pop, shift and unshift */

// hobbies.push("Coding");
// hobbies.unshift("Reading");
// console.log(hobbies);
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = "Coding";
// // hobbies[5] = "Reading"; // Extend the array and add undefined to between slots
// console.log(hobbies);

/* Splice Method */

// hobbies.splice(1, 0, "Good Food"); // Insert good food at the index 1 and remove zero elements
// console.log(hobbies);

// const removedElems = hobbies.splice(-1, 1); // Remove the last element from the array
// console.log(hobbies, removedElems);

// hobbies.splice(0); // Remove all elements from index zero
// console.log(hobbies);

// const testResults = [3, 4.9, -10, 9];
// const storedResults = testResults.slice(2); // Return testResults from index 2 

const testResults = [3, 4.9, -10, 9];
const storedResults = testResults.concat([22, 7.9, 89]);
const personalData = [{name: "Jack"}, {name: "Stephen"}];

testResults.push(3);

console.log(testResults, storedResults);
console.log(testResults.indexOf(3)); // Return the first entry find in the array 
console.log(testResults.lastIndexOf(3)); // Return the first entry starting from the end
console.log(personalData.indexOf({name: "Jack"})) // Return -1 because of reference of objects

const jack = personalData.find((person, idx, persons) => {
    return person.name === "Jack"; // Find return a reference not a copy !
});

const stephenIndex = personalData.findIndex((person, idx, persons) => {
    return person.name === "Stephen";
}); 

console.log(jack);
// jack.name = "Jack II";
console.log(stephenIndex);
console.log(personalData);

console.log(testResults.includes(4.9)); // .includes in JS not .contain
