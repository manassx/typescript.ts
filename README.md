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
  address?: Address; // Can use type
}
```

> Usage: You declare variables with these types/interfaces to enforce the structure and get type checking.

```tsx
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
import { Person as BasePerson }  from "./interfaceExtendExample";
type Person = BasePerson & {
  country: string;
};
```

> The & symbol combines the properties of BasePerson with the new properties you define.
