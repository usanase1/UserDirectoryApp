import { useState } from 'react';

export const useUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  return {
    name,
    email,
    age,
    setName,
    setEmail,
    setAge,
    reset: () => {
      setName('');
      setEmail('');
      setAge('');
    },
  };
};