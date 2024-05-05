import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for component styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }
    if (username === 'admin' && password === 'admin123') {
      console.log('Login successful!');
      // Redirect to code page
      window.location.href = '/code';
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="glass-container">
      <div className="login-container">
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='logbtn'>Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
