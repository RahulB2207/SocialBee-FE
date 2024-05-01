import { useEffect } from 'react';
import '../css/UserProfileCard.css';

const Profile=({setProgress})=> {
  useEffect(() =>{
    setProgress(30);
    setTimeout(() => {
        setProgress(100);
    },1000)
  },[])
  return (
  <div>
    <div style={{display:"flex",
     justifyContent:"space-evenly",
     margin:"18px 0px"
     }}>
    <div>
      <img  style={{width:'160px',height:'160px',borderRadius:'80px'}} src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
    </div>
    <div>
      <h1>Emma Watson</h1>
      <div  style={{display:'flex', justifyContent:"space-between"}}>
        <div>
        <h3>3</h3>
        <h6>post</h6>
        </div>
        <div>
        <h3>10</h3>
        <h5>follower</h5>
        </div>
        <div>
        <h3>20</h3>
        <h5>following</h5>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}

export default Profile;
