import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Username:', username);
      console.log('Password:', password);
      // Clear form if needed
      setUsername('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
