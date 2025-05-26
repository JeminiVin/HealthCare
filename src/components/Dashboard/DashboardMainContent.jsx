// src/components/Dashboard/DashboardMainContent.jsx
import React from 'react';
import './DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalenderView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="dashboard">
      <section className="upper-section">
        <AnatomySection />
        <HealthStatusCards />
      </section>
      <section className="lower-section">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </section>
    </main>
  );
};

export default DashboardMainContent;
