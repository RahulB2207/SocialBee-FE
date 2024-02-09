import React, { useState ,useEffect} from 'react';
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = ({setProgress}) => {
  useEffect(() =>{
    setProgress(30);
    setTimeout(() => {
        setProgress(100);
    },1000)
  },[])
const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const userData = {
      userName,
      password
    }
    try{
      const response = await axios.post('http://localhost:3001/auth/login',userData,{
        headers :{
          "Content-Type" :"application/json",
        },
        withCredentials : true 
      });
      if(response.status === 200 || response.status === 201){
        const token = response.data.token;
        localStorage.setItem("token",token);
        navigate('/')
      }else{
        console.error("invalid password", response.statusText);
      }
    }catch(err){
      console.log(err)
    }
    
  }


  return (
    <div className='form-container'> 
  
      <form onSubmit={handleSubmit}>  
      <h2>SocialBee</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          required />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          required/>
        </div>
        <div>
        <button className="form-group" type="submit">Login</button>
        </div>
        <div>
        <Link className="form-link" to="/register">create account</Link>
        </div>
        
      </form>
     
    </div>
  );
};

export default Login;
