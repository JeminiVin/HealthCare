// src/components/Dashboard/HealthStatusCards.jsx
import React from 'react';
import './HealthStatusCards.css';

const cards = [
  { title: 'Lungs', status: 'Good', date: '26 Oct 2021', color: '#3f8cff' },
  { title: 'Teeth', status: 'Normal', date: '26 Oct 2021', color: '#34d399' },
  { title: 'Bone', status: 'Weak', date: '26 Oct 2021', color: '#f87171' },
];

const HealthStatusCards = () => {
  return (
    <div className="health-status-blocks">
      {cards.map((card, idx) => (
        <div className="health-card" key={idx}>
          <div className="card-title">{card.title}</div>
          <div className="card-status" style={{ background: card.color }}>
            {card.status}
          </div>
          <div className="card-date">Date: {card.date}</div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
