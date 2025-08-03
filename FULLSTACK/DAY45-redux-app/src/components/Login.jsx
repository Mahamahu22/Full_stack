import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    const dummyUser = { username: 'maha' };
    dispatch(login(dummyUser));
  };

  return (
    <div className="text-center mt-10">
      {auth.isAuthenticated ? (
        <h2>Welcome, {auth.user.username}!</h2>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-sky-500 px-4 py-2 text-white rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
