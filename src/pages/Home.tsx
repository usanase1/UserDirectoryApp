import UserCard from '../components/UserCard';
import { useUserContext } from '../context/UserContext';
import type { User } from '../types/user';

const Home = () => {
  const { state } = useUserContext();
  const { users, loading, error } = state;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">User Directory App</h1>
      {loading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-2">Loading users...</p>
        </div>
      )}
      {error && <p className="text-red-500 text-center text-lg">{error}</p>}
      {!loading && !error && users.length === 0 && (
        <p className="text-gray-600 text-center text-lg">No users found. Try adding a user!</p>
      )}
      {!loading && !error && users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Home;