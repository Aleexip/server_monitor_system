import { useState } from 'react';
import './AuthPage.css'; 

export default function AuthPage({ onLogin }) {
  // useState helps us toggle between login and registration forms
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login Sentinel' : 'Account Creation Sentinel'}</h2>
        
        
        <form className="auth-form" onSubmit={(e) => {
          e.preventDefault(); // Stop the form from refreshing the page
          onLogin(); 
        }}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Ex: John Doe" />
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="email@exemple.com" />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          
          <button type="submit" className="primary-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create one here' : 'Sign in here'}
          </span>
        </p>
      </div>
    </div>
  );
}