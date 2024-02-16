import React from 'react';
import '../css/Home.css';

const Post = ({ post }) => {
  return (
    <div key={post._id} className="card-post">
      <div className="card-image">
        <img src={post.picturePath} alt="post" />
      </div>

      <div className="card-content">
        <div className="card-icons">
          <span className="material-symbols-rounded">favorite</span>
        </div>
        <div className="card-icons">
          <span className="material-symbols-rounded">mode_comment</span>
        </div>
      </div>

      <div className="post-caption">{post.description}</div>

      <div className="comment-section">
        <div className="input-container">
          <input type="text" id="text" placeholder="Add comment......" />
        </div>
        <div><button id = "post-btn">Post</button></div>
      </div>
      <button id="btn">{post.userName}</button>
    </div>
  );
};

export default Post;
