import { useEffect, useState } from 'react';
import '../css/Home.css';
import axios from 'axios';

function Home({ setProgress }) {
  const [posts, setPosts] = useState([]);
  const [follow, setFollow] = useState();
  const [userFriends, setUserFriends] = useState([]);
 useEffect(() =>{
  setProgress(40);
  setTimeout(()=>{
    setProgress(100)
  },2500)
 },[])
  useEffect(() => {
    async function fetchDataAndFriends() {
      try {
        
        const userId = localStorage.getItem("userId");

        // Fetch user friends
        const friendsResponse = await axios.get(`http://localhost:3001/users/${userId}/friends`, {
          headers: {
            "authorization": localStorage.getItem("token")
          }
        });
        setUserFriends(friendsResponse.data);
        

        // Fetch posts
        const postsResponse = await axios.get('http://localhost:3001/posts/', {
          headers: {
            "authorization": localStorage.getItem("token")
          }
        });
        const postsData = postsResponse.data;
        setPosts(postsData);
        postsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Set progress to 100
       
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error - show error message to user or retry fetching
      }
    }

    fetchDataAndFriends();
  }, [follow]);

  const addFriend = async (friendId) => {
    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.patch(
        `http://localhost:3001/users/${userId}/${friendId}`,
        null,
        {
          headers: {
            "authorization": localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200) {
        console.log("Is Friend:", res.data.isFriend);
        setFollow((prevFollow) => {
          return res.data.isFriend === true;
        });
      } else {
        console.log("Failed to add friend");
      }
    } catch (err) {
      console.log("Error adding friend", err);
    }
  };

  return (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post._id} className="card-post">
          <div className='top-bar'>
            <div id="userName" className='top-bar-child'>
              {post.userName}
            </div>
            <div id="follow-button" className="top-bar-child" onClick={() => addFriend(post.userId)}>
              {userFriends.some((friend) => friend._id === post.userId) ? "unfollow" : "follow"}
            </div>
          </div>
          <div className="card-image">
            <img src={post.picturePath} alt="post" />
          </div>
          <div className="card-content">
            <div className="card-icons"><span className="material-icons">favorite</span></div>
            <p>{post.description}</p>
            <input type="text" id="text" placeholder="Add comment" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
