const myFruits = ["apple", "banana"];
//this is how you declare an array with type.
myFruits.push("orange");
console.log(myFruits);
//also supports type inference
const myNums = [1, 2, 3, 4]; //automatically sets the type to numbers
//what if we want to have both numbers and strings????
const arr1 = [9, "hi"];
arr1.push("some", 16);
console.log(arr1);
//we can also create an array of objects in typescript
const users = [
    { firstName: "Manas", lastName: "Saxena", age: 20 },
    { firstName: "Swati", lastName: "Saxena" },
];
console.log(users);
//tuples are arrays with fixed size and types
const customTuple = ["str", 69, true];
const tuple1 = ["str", 2, false];
export {};
