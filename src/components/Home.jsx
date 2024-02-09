
import { useEffect } from 'react';
import '../css/Home.css';

function Home({setProgress}) {
  useEffect(() =>{
    setProgress(30);
    setTimeout(() => {
        setProgress(100);
    },1000)
  },[])

  return (
    <div className="home">
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>
      <div className="card-post">
        <h3 className="card-id">shubh</h3>
        <div className="card-image">
          <img src="https://c4.wallpaperflare.com/wallpaper/692/93/295/women-actress-brunette-long-hair-wallpaper-preview.jpg" alt="" />
        </div>
        <div className="card-content">
          <div className="card-icons"><span className="material-icons">favorite</span></div>
          <p>emma watson</p>
          <input type="text" id="text" placeholder="Add comment" />
        </div>
      </div>

    

    </div>
  );
}

export default Home;
