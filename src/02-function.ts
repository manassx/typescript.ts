// function add(a: number, b: number): number {
//   return a + b;
// }

// const Add = function (a: number, b: number): number {
//   return a + b;
// };
// console.log(Add(4, 16));

// const concat = (a: number, b: string): string => {
//   return a + b;
// };

// console.log(concat(16, "16"));

// const noReturn = (a: number, b: number): void => {
//   //this function doesn't return anything
//   console.log(a + b);
// };

// noReturn(12, 12);

// //this is a function with an optional parameter
// const optional = (name?: string): void => {
//   console.log(name ?? "manas"); //if name arg is give then good otherwise print "manas".
// };
// optional();

// const defaultParameter = (name: string = "guest"): void => {
//   console.log(`hello, ${name}`);
// };

// defaultParameter("anshu");

// //there is also type never which returns nothing, mostly used to throw errors

// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }

// throwError("something went wrong")

//function overloading //using different types
function add(a: string, b: string): string;
function add(a: number, b: number): number;
//without overload signatures, typescript would not give error if you tried add("hello", 4),
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  } else throw new Error("something's wrong");
}

console.log(add(3, 7)); //8
console.log(add("Manas", "Saxena")); //Manas Saxena
// console.log(add("Manas", 4)); //error

//using different number of types

function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
  return `hello, ${name ?? "guest"}`;
}
console.log(greet("scukaa"));
