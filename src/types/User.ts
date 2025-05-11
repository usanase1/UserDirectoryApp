export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  address?: {
    city: string;
    street: string;
  };
}

export interface UserFormData {
  name: string;
  email: string;
  age: number;
}
