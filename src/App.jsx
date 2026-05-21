import { useState } from "react";
import "./App.css";
import reactLogo from './assets/react.svG';

function App() {
  const [followStatus, setFollowStatus] = useState('Online');
  const [clickCount, setClickCount] = useState(0);
  const hobbiesList = ["Reading", "Swimming", "Playing guitar"];
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [likeCount, setLikeCount] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFollowClick = () => {
    setClickCount(clickCount + 1);
    if (followStatus === 'Online') {
      setFollowStatus('Offline');
    } else {
      setFollowStatus('Online');
    }
  };
  return (
    <>
    <div className="information"> 
      <div className="img-container">
      <img src={reactLogo} alt="Profile" style={{width: '100%', borderRadius: '12px'}} />
    </div>  
      <h1 className="Fullname">Nguyen The Toan</h1>
      <p>Student ID: HE200136</p>
      <p>Class: SE2004-NJ</p>
      <p>Major: FER202</p>
      <div className="hobbies">
        {hobbiesList.map((hobby, index) => (
            <p key={index}>{hobby}</p>
          ))}
        </div>
      <button className="Status" onClick={handleFollowClick}>{followStatus}</button>
      <p>Status clicked: {clickCount} times</p>
      <button className="Theme" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button className="Like-button" onClick={() => setLikeCount(likeCount + 1)}>Like Profile</button>
      <p>Likes: {likeCount}</p>
    </div>
    </>
  )
}

export default App
