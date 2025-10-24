// function add(a: number, b: number): number {
//   return a + b;
// }
//without overload signatures, typescript would not give error if you tried add("hello", 4),
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else
        throw new Error("something's wrong");
}
console.log(add(3, 7)); //8
console.log(add("Manas", "Saxena")); //Manas Saxena
function greet(name) {
    return `hello, ${name !== null && name !== void 0 ? name : "guest"}`;
}
console.log(greet("scukaa"));
export {};
