// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from './AuthContext';
import '../css/Sidebar.css';

function SideBar() {
  // const auth = useAuth();

  // if (!auth || !auth.user) {
  //   // You might want to handle the case where auth or auth.user is null
  //   // This could be a loading state, redirect to login, or display a login link, etc.
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <nav className="sidebar">
        <div>
            <h5>SocialBee</h5>
          </div>
          <div>
            <Link to="/">
          <span className="material-icons">home</span>Home
        </Link>
          </div>
           <div>
            <Link to="/profile">
          <span className="material-icons">account_circle</span>Profile
        </Link>
           </div>
          <div>
            <Link to="/create">
          <span className="material-icons">edit</span>Create
        </Link>
          </div>
          <div>
            <Link to="/search">
          <span className="material-icons">search</span>Search
        </Link> 
          </div>
        <div>
          <Link to="/login">
            <span className="material-icons">login</span>Login
          </Link>
        </div>
        <div>
          <Link to="/register">
          <span className="material-icons">how_to_reg</span>Signup
        </Link>
        </div>
        {/* {!auth.user && (
          <Link to="/login">
            <span className="material-icons">login</span>Login
          </Link>
        )} */}
      </nav>
    </div>
  );
}

export default SideBar;

