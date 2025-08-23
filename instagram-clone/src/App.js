import React, { useEffect, useState } from "react";
import './App.css';
import logo from './assets/Instagram_logo.png';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Tango", 
      caption: "Awesome caption",
      imageUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/nGfV05dipbAc7zzojivKew_64x64.png"
    }, 
    {
      username: "Tango", 
      caption: "Awesome caption",
      imageUrl: "https://ssl.gstatic.com/onebox/media/sports/logos/nGfV05dipbAc7zzojivKew_64x64.png"
    }
  ]);

  return (
    <div className="App">
      <div className='app_header'>
        <img
          className='app_headerImage'
          src={logo}
          alt='Logo'
        />
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
