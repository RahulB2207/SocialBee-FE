import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import "../css/Home.css";

const Home = ({setProgress}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setProgress(50)
    const fetchPost = async () => {
      try {
        const postsResponse = await axios.get('http://localhost:3001/posts/', {
          headers: {
            "authorization": localStorage.getItem("token")
          }
        });

        const postsData = postsResponse.data;
        postsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
setProgress(60)
    fetchPost();
    setTimeout(() => {
      setProgress(100)
    },1000)
   
  }, []);

  return (
    <div className='post-container'>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
};

export default Home;
