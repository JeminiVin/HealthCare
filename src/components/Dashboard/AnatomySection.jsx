// src/components/Dashboard/AnatomySection.jsx
import React from 'react';
import './AnatomySection.css';
import bodyImage from '../../assets/anatomy.avif'; // Use a transparent anatomical image

const AnatomySection = () => {
  return (
    <div className="anatomy-sect">
      <div className="anatomy-image-container">
        <img src={bodyImage} alt="Human Anatomy" />
        <div className="tooltip heart">❤️ Healthy Heart</div>
        <div className="tooltip leg">🦵 Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;
