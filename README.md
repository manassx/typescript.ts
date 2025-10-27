## Function Overloading

type 1: with different parameter types

```tsx
// Overload Signatures (The Declarations): They describe the valid ways to call the function.
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// Implementation Signature: This is the single, actual function implementation that follows the signatures. Its parameter types must be general enough to be compatible with all the overload signatures. TypeScript does not use this signature for type checking when you call the function; it only uses the overload signatures above.

function add(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  } else throw new Error("something's wrong");
}

console.log(add(3, 5)); //8
console.log(add("Manas", "Saxena")); //Manas Saxena
console.log(add("Manas", 4)); //error
```

<!-- When you call add(5, 10), TypeScript knows it matches the second signature and correctly infers the return type is number. When you call add("hello", "world"), it knows the return type is string. -->

type 2: with different number of parameters

```tsx
function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
  return `hello, ${name ?? "guest"}`;
}
console.log(greet("scukaa"));
```

## types and interfaces

Both `type` and `interface` are used to define the shape or structure of data in TypeScript.

**`type` Alias:** Creates a custom name for any type structure (objects, primitives, unions, etc.).

```typescript
type Address = {
  city: string;
  pincode: number;
};
```

**`interface`:** Primarily defines a contract for the shape of an object.

```tsx
interface Person {
  name: string;
  email: string;
  number: number;
  address?: Address; // Can use type
}
```

> Usage: You declare variables with these types/interfaces to enforce the structure and get type checking.

```tsx
//The `: Person` part just tells your brain, "Okay, whatever comes after the = must fit the Person shape I defined earlier."
const person: Person = {
  name: "Manas",
  email: "gmail.com",
  number: 6969696969,
  address: {
    city: "new hamshire",
    pincode: 69,
  },
};
```

> interface is generally preferred for object shapes and can be extended.

### Extending Interfaces & Using Types

TypeScript allows building upon existing object shapes.

**Interface Extension:** Use the `extends` keyword to inherit properties from another interface and add new ones.

```typescript
import { Person as BasePerson } from "./interfaceExtendExample"; //Person is an interface in another file
interface Person extends BasePerson {
  height: number; //now the object implementing Person interface will also need to have the height property
}
```

**Converting Imported Interface to `type`**
We can achieve the same result as interface extends using a type alias with an intersection(&).

```tsx
import { Person as BasePerson } from "./interfaceExtendExample";
type Person = BasePerson & {
  country: string;
};
```

> The & symbol combines the properties of BasePerson with the new properties you define.

## Arrays and Tuples

```tsx
const arr1: (number | string)[] = [9, "hi"];
//this is how you declare an array with type.
```

```tsx
//we can also create an array of objects in typescript

// users is an array of Person objects
const users: Person[] = [
  { firstName: "Manas", lastName: "Saxena", age: 20 },
  { firstName: "Swati", lastName: "Saxena" },
];
```

```tsx
// tuples are arrays with fixed size and types
const customTuple: [string, number, boolean] = ["str", 69, true];

//we can also define a type and use it to define a tuple, like this

type CustomTupleType = [string, number, boolean];
const tuple1: CustomTupleType = ["str", 2, false];
```

## enums

Enums (enumerations) in TypeScript provide a way to define a set of named constants.

```tsx
enum OrderStatus {
  DELIVERED = 1, //1 otherwise 0 when not assigned a specific value
  PENDING, //2
  RETURNED, //3
  CANCELLED, //4
}

function checkOrder(status: OrderStatus): void {
  if (status === OrderStatus.DELIVERED) {
    console.log("order has been delivered");
  } else if (status === OrderStatus.PENDING) {
    console.log("order is pending");
  } else if (status === OrderStatus.RETURNED) {
    console.log("order has been returned");
  } else {
    console.log("order has been cancelled");
  }
}

checkOrder(OrderStatus.DELIVERED); //order has been delivered
```

## type casting/ assertion

When we know the value of an element and that it will be not be null.

```tsx
const value: string = addOrConcat(6, 9, "concat") as string;
const inputName = document.getElementById("name")! as HTMLInputElement;
const inputAge = document.getElementById("age")! as HTMLInputElement; //same thing
const form = document.getElementById("form") as HTMLFormElement; //same thing
const output = document.getElementById("output") as HTMLElement;
```
