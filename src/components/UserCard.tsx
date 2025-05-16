import { Link } from 'react-router-dom';
import type { User } from '../types/user';

const UserCard = ({ user }: { user: User }) => (
  <div className="flex items-center justify-between bg-white shadow-lg p-6 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-200">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
        {user.name.charAt(0)}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
    <Link to={`/users/${user.id}`}>
      <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition-colors duration-200">
        View Profile
      </button>
    </Link>
  </div>
);

export default UserCard;