// const ids = new Set([1, 2, 3]);
// console.log(ids);

// if (ids.has(2)) {
//     console.log("2 is on the set !");
// }

// ids.add(8);
// console.log(ids);
// ids.delete(7);
// console.log(ids);

// for (const value of ids.values()) {
//     console.log(value);
// }

// for (const key of ids.keys()) {
//     console.log(key);
// }

const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, {registerDate: "01/01/2021", contractType: "CDD"}]]);

personData.set(person2, {registerDate: "01/09/2021", contractType: "CDI"});

console.log(personData);

for (const [key, value] of personData.entries()) {
    console.log(key, value);
}

for (const key of personData.keys()) {
    console.log(key);
}

for (const value of personData.values()) {
    console.log(value);
}
