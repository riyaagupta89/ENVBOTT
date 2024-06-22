import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/infa-logo.svg" alt="" />
      </header>
      <div>
        <p>Username</p>
        <input value="" placeholder='Your Name' />
        <p>Password</p>
        <input value="" placeholder='Your Password' />
        <p>Login</p>
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
