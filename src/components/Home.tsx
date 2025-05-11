import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../type/user";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User Directory</h1>
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
