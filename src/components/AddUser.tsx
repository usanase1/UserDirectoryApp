import { useState } from "react";
import { User} from "../type/User";

export default function AddUser() {
  const [formData, setFormData] = useState<UserFormData>({ name: "", email: "", age: 0 });
  const [submitted, setSubmitted] = useState<UserFormData | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (Number(formData.age) < 18) errs.age = "Must be at least 18";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setErrors({});
      setSubmitted(formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input name="name" type="text" value={formData.name} onChange={handleChange}
            className="w-full p-2 border rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange}
            className="w-full p-2 border rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input name="age" type="number" value={formData.age} onChange={handleChange}
            className="w-full p-2 border rounded" />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>

      {submitted && (
        <div className="mt-6 bg-green-50 p-4 rounded border border-green-400">
          <h3 className="font-bold text-green-700">User Submitted:</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Age: {submitted.age}</p>
        </div>
      )}
    </div>
  );
}
