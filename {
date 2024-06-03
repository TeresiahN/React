import React, { useState, useEffect } from 'react';

const WelcomeForm = () => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ userType, email, password, confirmPassword });
  };

  useEffect(() => {
    // Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleGoogleSignIn
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  const handleGoogleSignIn = (response) => {
    // Handle Google Sign-In response
    console.log(response);
  };

  return (
    <div className="welcome-form">
      <h2>Welcome to TekRafiki</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userType">Register as:</label>
          <select 
            id="userType" 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)} 
            required
          >
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div id="google-signin-button"></div>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default WelcomeForm;
