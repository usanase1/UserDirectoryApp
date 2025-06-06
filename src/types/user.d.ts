export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface NewUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  phone?: string;
  website?: string;
  address?: Address;
  company?: Company;
  age?: number;
  role?: UserRole;
}