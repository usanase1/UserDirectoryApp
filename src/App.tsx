import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import AddUser from './pages/AddUser';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:id" element={<UserProfile />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;