import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Simple localStorage-based login/register logic
  const getUsers = () => {
    return JSON.parse(localStorage.getItem('tt_users') || '{}');
  };

  const saveUsers = (users) => {
    localStorage.setItem('tt_users', JSON.stringify(users));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    
    if (!username.trim() || !password) {
      setRegisterError('Please enter a username and password.');
      return;
    }

    let users = getUsers();
    if (users[username]) {
      setRegisterError('Username already exists!');
      return;
    }

    users[username] = password;
    saveUsers(users);
    setRegisterError('');
    alert('Account created! You can now log in.');
    setIsRegisterMode(false);
    setFormData({ username: '', password: '' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    
    let users = getUsers();
    if (users[username] && users[username] === password) {
      localStorage.setItem('tt_logged_in', username);
      onLogin(username);
    } else {
      setLoginError('Invalid username or password!');
    }
  };

  const switchToRegister = () => {
    setIsRegisterMode(true);
    setLoginError('');
    setFormData({ username: '', password: '' });
  };

  const switchToLogin = () => {
    setIsRegisterMode(false);
    setRegisterError('');
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>🌀 TIME TRAVEL ADVENTURE 🌀</h1>
        <p>Collect keys and solve puzzles across time-warped locations!</p>
      </div>
      
      {/* LOGIN FORM */}
      <div id="login-form" className={`form-card ${isRegisterMode ? 'hidden' : ''}`}>
        <div id="login-error" className={loginError ? 'error' : 'error hidden'}>
          {loginError}
        </div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button id="login-btn" onClick={handleLogin}>
          Start Game
        </button>
        <button id="show-register-btn" type="button" className="alt-btn" onClick={switchToRegister}>
          Create Account
        </button>
      </div>

      {/* REGISTER FORM */}
      <div id="register-form" className={`form-card ${!isRegisterMode ? 'hidden' : ''}`}>
        <div id="register-error" className={registerError ? 'error' : 'error hidden'}>
          {registerError}
        </div>
        <label htmlFor="reg-username">Username:</label>
        <input
          type="text"
          id="reg-username"
          name="username"
          autoComplete="username"
          placeholder="Choose username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="reg-password">Password:</label>
        <input
          type="password"
          id="reg-password"
          name="password"
          autoComplete="new-password"
          placeholder="Choose password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button id="register-btn" onClick={handleRegister}>
          Create Account
        </button>
        <button id="show-login-btn" type="button" className="alt-btn" onClick={switchToLogin}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Login; 