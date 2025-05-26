// src/components/Dashboard/ActivityFeed.jsx
import React from 'react';
import './ActivityFeed.css';

const activityData = [
  { day: 'Mon', value: 1 },
  { day: 'Tue', value: 2 },
  { day: 'Wed', value: 3 },
  { day: 'Thu', value: 1 },
  { day: 'Fri', value: 0 },
  { day: 'Sat', value: 2 },
  { day: 'Sun', value: 1 },
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>
      <div className="bar-chart">
        {activityData.map((entry, idx) => (
          <div key={idx} className="bar-item">
            <div
              className="bar"
              style={{ height: `${entry.value * 20}px` }}
              title={`${entry.value} appointments`}
            ></div>
            <span className="bar-label">{entry.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
