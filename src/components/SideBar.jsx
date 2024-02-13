import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';
import { AuthContext } from './AuthProvider';

function SideBar() {
  const { isAuth ,setIsAuth} = useContext(AuthContext);
 

  return (
    <div>
      <nav className="sidebar">
        <div>
          <h5>SocialBee</h5>
        </div>
        {isAuth && (
          <>
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
            <Link to="/login" onClick={() => {localStorage.removeItem('token')
          setIsAuth(false)}}>
                <span className="material-icons">logout</span>logout
              </Link>
          </>
        )}
        {!isAuth && (
          <>
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
          </>
        )}
      </nav>
    </div>
  );
}

export default SideBar;
