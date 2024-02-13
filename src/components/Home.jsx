import { useEffect, useState } from 'react';
import '../css/Home.css';
import axios from 'axios';

function Home({ setProgress }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setProgress(40);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts/', {
          headers: {
            'authorization': localStorage.getItem('token')
          }
        });
        const res = response.data;
        setPosts(res);
        setProgress(70);
        res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } catch (err) {
        console.log("problem in fetching", err);
      } finally {
        setProgress(100);
      }
    }

    fetchData();
  }, []); 

  return (
    <div className="home">
      {
        posts.map((post) => (
          <div key={post._id} className="card-post">
            <h3 className="card-id">{post.userName}</h3>
            <div className="card-image">
              <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" />
            </div>
            <div className="card-content">
              <div className="card-icons"><span className="material-icons">favorite</span>{post.likes.length }</div>
              <p>{post.description}</p>
              <input type="text" id="text" placeholder="Add comment" />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
