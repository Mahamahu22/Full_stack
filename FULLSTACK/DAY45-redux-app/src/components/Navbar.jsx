import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="flex justify-between p-4 shadow-md bg-sky-100 dark:bg-gray-800">
      <h1 className="text-lg font-bold">DAY45 App</h1>
      <div className="flex gap-3">
        <button onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        {auth.isAuthenticated && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
