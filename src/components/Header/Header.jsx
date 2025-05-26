// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import { Bell, Plus } from 'lucide-react'; // Optional: using lucide-react for icons
import userAvatar from '../../assets/avatar.avif'; // Placeholder image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">WellNexa<span className="dot">.</span></div>

      <div className="search-container">
        <input type="text" placeholder="Search..." disabled />
      </div>

      <div className="header-icons">
        <button className="add-button">
          <Plus size={18} />
        </button>
        <Bell className="icon" />
        <div className="user-profile">
          <img src={userAvatar} alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
