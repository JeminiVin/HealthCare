// src/components/Dashboard/CalendarView.jsx
import React from 'react';
import './CalenderView.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h3 className="calendar-title">Weekly Calendar</h3>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div className="calendar-day" key={index}>
            <span className="day-name">{day}</span>
            <div className="day-box">8am - 5pm</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;