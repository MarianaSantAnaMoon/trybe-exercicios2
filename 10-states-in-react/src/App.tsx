import './App.css';
import { Profile } from './components/Profile';

function App() {
  return (
    <Profile
      name="John Connor"
      description="Líder da resistência no combate contra a Skynet"
      image="https://betrybe.github.io/images/trybe/john-connor.jpg"
    />
  );
}

export default App;
