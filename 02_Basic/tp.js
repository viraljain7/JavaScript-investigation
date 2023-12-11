const obj = { name: "hitesh" };

// Using Object.entries to get an array of [key, value] pairs
const keyValuePairs = Object.entries(obj);

// Using Array.from to create an array from the key-value pairs
const resultArray = Array.from(keyValuePairs);

console.log(resultArray);
