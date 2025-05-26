// src/pages/Dashboard.jsx
import React from 'react';
import AnatomySection from '../components/Dashboard/AnatomySection';
import HealthStatusCards from '../components/Dashboard/HealthStatusCards';
import CalendarView from '../components/Dashboard/CalenderView';
import UpcomingSchedule from '../components/Dashboard/UpcomingSchedule';
import ActivityFeed from '../components/Dashboard/ActivityFeed';

import './Dashboard.css'; // Custom layout for grid/flexbox

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-column">
        <h2>Dashboard</h2>
        <AnatomySection />
        <ActivityFeed />
      </div>

      <div className="middle-column">
        <HealthStatusCards />
      </div>

      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default Dashboard;
