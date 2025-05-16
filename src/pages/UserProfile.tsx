import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '../types/user';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="text-center mt-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      <p className="text-gray-600 mt-2">Loading user...</p>
    </div>
  );
  if (error) return (
    <div className="text-center mt-20">
      <p className="text-red-500 text-lg">{error}</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Home</Link>
    </div>
  );
  if (!user) return null;

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{user.name}</h2>
        <div className="space-y-3">
          <p><strong className="text-gray-600">Email:</strong> {user.email}</p>
          {user.username && <p><strong className="text-gray-600">Username:</strong> {user.username}</p>}
          {user.phone && <p><strong className="text-gray-600">Phone:</strong> {user.phone}</p>}
        </div>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          aria-label="Back to home"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;