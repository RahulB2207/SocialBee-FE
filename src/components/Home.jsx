import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import "../css/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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

    fetchPost();
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
