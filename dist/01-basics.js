let firstName = "Anshu";
// console.log(firstName);
let age = 20;
// console.log(age);
// age = "32"; //Type 'string' is not assignable to type 'number'
// console.log(age);
//type inference //ability of the TypeScript compiler to automatically determine and assign types to variables, function return values, and expressions without requiring explicit type annotations.
let isMale = true;
// console.log("is male?", isMale);
// isMale = 19; //Type 'number' is not assignable to type 'boolean'.
// console.log("is male?", isMale);
//We can also declare the variables first with types and use them later.
let fName;
let umar;
fName = "Manas";
umar = 20;
//Union types
let isHuman = "true";
//any and unkown
let var1 = true; //can be any type //avoid using any.
console.log(var1);
var1 = 18;
console.log(var1);
let var2;
let str;
var2 = 16;
// str = var2; //we can't put an unkown type equal to a string as it is unknown
if (typeof var2 === "string") {
    str = var2;
    console.log(str);
}
// console.log(var2.toFixed(4)); //toFixed is a method for numbers, and can't be applied to unknown type.
if (typeof var2 === "number") {
    console.log(var2.toFixed(4));
}
export {};
