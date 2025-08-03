import ShadcnButton from './components/ShadcnButton';
import MuiButton from './components/MuiButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-semibold">Task 43: Shadcn-UI & MUI</h1>
      <ShadcnButton />
      <MuiButton />
    </div>
  );
}

export default App;
