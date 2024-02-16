import React from 'react'
import '../css/Home.css'
const Post = ({post}) => {
  return (
      <div key={post._id} className="card-post">
        <div className='top-bar'>
          <div id="userName" className='top-bar-child'>
            {post.userName}
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
  )
}

export default Post
