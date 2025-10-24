import { Person as BasePerson } from "./interfaceExtendExample";

//interface extension
interface Person extends BasePerson {
  height: number;
}

// //Converting Imported Interface to type
// type Person = BasePerson & {
//   height: number;
// };

const person: Person = {
  name: "Manas",
  email: "gmail.com",
  number: 6969696969,
  address: {
    flatNo: 135,
    city: "new hamshire",
    pincode: 69,
    country: "USA",
  },
  height: 178,
};

console.log(person);
