// --- Array Methods ---

const numbers = [1, 2, 3, 4, 5];

// forEach
console.log("Using forEach:");
numbers.forEach(num => console.log(num * 2));

// map
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// filter
const even = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", even);
