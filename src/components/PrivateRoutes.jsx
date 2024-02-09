import React, { useState } from 'react'
import {  Outlet ,Navigate} from 'react-router-dom'
import axios from 'axios';

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/auth/verify", {
          headers: {
            "authorization": localStorage.getItem("token")
          }
        });
        const result = res.data;
        console.log(result);
        setIsAuth(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response && error.response.status === 401) {
          setIsAuth(false);
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  if (loading) {
    // You might want to return a loading spinner or something similar
    return <div>Loading...</div>;
  }
  
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
  
}

export default PrivateRoutes
