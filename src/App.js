<<<<<<< HEAD
import './App.css';

import Greeting from './components/Greeting';
import Background from './components/Background';
import Home from './pages/Home';
=======
// css import
import "./App.css";

// components import
import HomePage from "./pages/HomePage";
>>>>>>> 78ae35e84c07c98f116829ddac6faedae2a3bb11

export default function App() {
  return (
    <div className="app">
<<<<<<< HEAD
      <Background />
      <div className="main">
        <Home />
      </div>
    </div>
  );
}
=======
      <div className={"background"}>
        <div className={"background-item"}></div>
      </div>
      <div className={"background-overlay"}></div>
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
}
>>>>>>> 78ae35e84c07c98f116829ddac6faedae2a3bb11
