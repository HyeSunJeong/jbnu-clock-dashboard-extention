import './App.css';

import Greeting from './comporment/Greeting';

export default function App() {
  return (
    <div className="app">
      <div className="background">
        <div className="background-item"></div>
      </div>
      <div className="main">
        <header>
        </header>
        <main className="container">
          <Greeting />
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

