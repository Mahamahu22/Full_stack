import Navbar from './components/Navbar';
import Login from './components/Login';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
