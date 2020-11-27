import '../App.css';
import Greeting from '../components/Greeting';

export default function Home() {
    return (
      <div>
        <header></header>
        <main className="container">
          <Greeting />
        </main>
        <footer></footer>
      </div>
    )
}
