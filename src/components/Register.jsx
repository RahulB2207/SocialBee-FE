import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({setProgress}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
    setProgress(30);
    setTimeout(() => {
        setProgress(100);
    },1000)
  },[])
  useEffect(() => { 
    setError(null);
  }, [userName, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const userData = {
      userName,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3001/auth/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        localStorage.setItem("token",token);
        // Registration successful, redirect to login or confirmation page
        navigate('/');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      if (error.response) {
        console.error('Error Response:', error.response.status, error.response.statusText, error.response.data);
      }
      setError('An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>SocialBee</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div>
          <Link className="form-link" to="/login">
            Have an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
