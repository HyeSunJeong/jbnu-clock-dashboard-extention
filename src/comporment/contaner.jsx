import './App.css';
import Greeting from './components/Greeting';
import Background from './components/Background';
import Home from './pages/Home';
import Container from './components/Container';
export default function App() {
  return (
    <div className="app">
      <Background />
      <Container>
        <Home />
      </Container>
    </div>
  );
}
