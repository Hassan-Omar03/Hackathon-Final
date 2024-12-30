import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white hover:text-teal-200 transition-all duration-300">EventHub</Link>
        <div className="flex gap-6 items-center">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-teal-200 transition-all duration-300">Dashboard</Link>
              <Link to="/create-event" className="text-white hover:text-teal-200 transition-all duration-300">Create Event</Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-teal-200 transition-all duration-300">Login</Link>
              <Link to="/register" className="text-white hover:text-teal-200 transition-all duration-300">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
