// // type casting/ type assertion
// function addOrConcat(
//   a: number,
//   b: number,
//   op: "add" | "concat"
// ): string | number {
//   if (op === "add") {
//     return a + b;
//   } else {
//     return "" + a + b;
//   }
// }
// //this is type casting/assertion
// const value: string = addOrConcat(6, 9, "concat") as string;
// console.log(value);
// const value1: number = addOrConcat(6, 9, "add") as number;
// console.log(value1);
const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const form = document.getElementById("form");
const output = document.getElementById("output");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = inputName.value;
    const ageValue = inputAge.value;
    output.innerHTML = `name: ${nameValue} age:${ageValue}`;
});
export {};
