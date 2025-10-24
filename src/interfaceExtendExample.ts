type Address = {
  flatNo: number;
  city: string;
  country: string;
  pincode: number;
};

export interface Person {
  name: string;
  email: string;
  number: number;
  address: Address;
}
