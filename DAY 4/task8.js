// --- Object Creation and Methods ---

const student = {
    name: "Alice",
    age: 21,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    incrementAge() {
        this.age++;
    }
};

console.log(student.name);     // Alice
student.greet();               // Hello, my name is Alice
student.incrementAge();
console.log(student.age);      // 22
