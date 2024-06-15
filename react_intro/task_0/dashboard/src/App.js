import logo from '../src/holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p>
      </header>

      <main className='App-body'>
        <p>
          Login to access the full dashboard
        </p>
      </main>

      <footer className='App-footer'>
        <p>
          Copyright 2024 - holberton School
        </p>
      </footer>
    </div>
  );
}

export default App;
