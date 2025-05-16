import type { FormEvent } from 'react';
import InputField from '../components/InputField';
import { useUserForm } from '../hooks/useUserForm';
import { useUserContext } from '../context/UserContext';
import type { User } from '../types/user';

const AddUser = () => {
  const { name, email, age, setName, setEmail, setAge, reset } = useUserForm();
  const { dispatch } = useUserContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || Number(age) < 18) return;

    const newUser: User = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      age: Number(age),
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
    reset();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New User</h2>
      <div className="bg-white shadow-xl rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputField
            label="Age"
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          {(!name.trim() || !email.trim() || (Number(age) < 18 && age !== '')) && (
            <p className="text-red-500 text-sm">
              {(!name.trim() && 'Name is required') ||
                (!email.trim() && 'Email is required') ||
                (Number(age) < 18 && age !== '' && 'Must be 18+')}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
            aria-label="Add new user"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;