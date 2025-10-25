const myFruits: string[] = ["apple", "banana"];
//this is how you declare an array with type.

myFruits.push("orange");
console.log(myFruits);

//also supports type inference

const myNums = [1, 2, 3, 4]; //automatically sets the type to numbers

//what if we want to have both numbers and strings????

const arr1: (number | string)[] = [9, "hi"];
arr1.push("some", 16);
console.log(arr1);

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

//we can also create an array of objects in typescript

const users: Person[] = [
  { firstName: "Manas", lastName: "Saxena", age: 20 },
  { firstName: "Swati", lastName: "Saxena" },
];

console.log(users);

//tuples are arrays with fixed size and types
const customTuple: [string, number, boolean] = ["str", 69, true];

type CustomTupleType = [string, number, boolean];
const tuple1: CustomTupleType = ["str", 2, false];

