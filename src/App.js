import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import DashboardMainContent from './components/Dashboard/DashboardMainContent';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        {/* The routes should be inside the main content */}
        <Routes>
          <Route path="/" element={<DashboardMainContent/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
