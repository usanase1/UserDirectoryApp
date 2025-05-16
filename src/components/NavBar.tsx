import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight">User Directory</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-200 transition-colors duration-200">Home</Link>
        <Link to="/add-user" className="hover:text-blue-200 transition-colors duration-200">Add User</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;