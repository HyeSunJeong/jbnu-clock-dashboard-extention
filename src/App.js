import './App.css';

import Greeting from './components/Greeting';
import Background from './components/Background';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="app">
      <Background />
      <div className="main">
        <Home />
      </div>
    </div>
  );
}