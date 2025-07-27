// --- Task 2: Data Types and Type Conversion ---

// Numbers
let num = 29;
// Strings
let str = "123";
// Booleans
let isStudent = true;
// Arrays
let colors = ["red", "pink", "blue"];
// Undefined
let notDefined;
// Null
let emptyValue = null;

console.log("Data Types:");
console.log(typeof num, typeof str, typeof isStudent, typeof colors, typeof notDefined, typeof emptyValue);

// Type Conversion
let strToNum = Number(str);
let numToStr = String(num);

console.log("Converted string to number:", strToNum);
console.log("Converted number to string:", numToStr);

// Simple operation
console.log("5 * 2 =", 5 * 2);
