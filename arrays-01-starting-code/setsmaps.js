const ids = new Set([1, 2, 3]);
console.log(ids);

if (ids.has(2)) {
    console.log("2 is on the set !");
}

ids.add(8);
console.log(ids);
ids.delete(7);
console.log(ids);

for (const value of ids.values()) {
    console.log(value);
}

for (const key of ids.keys()) {
    console.log(key);
}
