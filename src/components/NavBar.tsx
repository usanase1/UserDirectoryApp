import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="font-semibold text-lg">UserApp</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add-user" className="hover:underline">Add User</Link>
        </div>
      </div>
    </nav>
  );
}
