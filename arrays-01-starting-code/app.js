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
hobbies.push("Coding");
hobbies.unshift("Reading");
console.log(hobbies);
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
// hobbies[5] = "Reading"; // Extend the array and add undefined to between slots
console.log(hobbies);