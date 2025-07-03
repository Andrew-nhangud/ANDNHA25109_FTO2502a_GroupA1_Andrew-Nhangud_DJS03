// Example in Header.jsx
import React from 'react';
import headphonesIcon from '../assets/images/headphones-icon.png';
import profilePictureIcon from '../assets/images/profile-picture-icon.png';
import '../styles/styles.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="innerHeader-container container">
        <div className="rightSide-icons">
          <img src={headphonesIcon} alt="headphones picture" />
          <h1>Podcast<span>Hub</span></h1>
        </div>
        <div className="leftSide-icons">
          <img src={profilePictureIcon} alt="profile picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
