import {Link} from "react-router-dom";
import './Login.css';
import './App.css';

function Login(){

    // document.getElementById('login-form').addEventListener('submit', function(event) {
    //     event.preventDefault();
        
    //     // For demonstration purposes, log the username and password to console
    //     const username = document.getElementById('username').value;
    //     const password = document.getElementById('password').value;
        
    //     console.log('Username:', username);
    //     console.log('Password:', password);
        
    //     // Here you can add further validation or login logic
    //   });

    return(
    <div className="App">

    <div class="navbar">
        <img src="/infa-logo.png" alt="Informatica Logo"/>
        <h1>EnvBot</h1>
    </div>
    <div className="box">
    <div class="login-container">
    <h2>Login</h2>
    <form id="login-form">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <Link to="/welcome">
      <button type="submit" class="login-btn">Login</button>
      </Link>
    </form>
  </div>  
  </div>      
  </div>
    )
}

export default Login;