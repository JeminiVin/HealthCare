// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Home, History, Calendar, ClipboardList, BarChart2, FileText, MessageCircle, HelpCircle, Settings } from 'lucide-react';

const navLinks = [
  { icon: <Home size={20} />, label: 'Dashboard' },
  { icon: <History size={20} />, label: 'History' },
  { icon: <Calendar size={20} />, label: 'Calendar' },
  { icon: <ClipboardList size={20} />, label: 'Appointments' },
  { icon: <BarChart2 size={20} />, label: 'Statistics' },
  { icon: <FileText size={20} />, label: 'Tests' },
  { icon: <MessageCircle size={20} />, label: 'Chat' },
  { icon: <HelpCircle size={20} />, label: 'Support' },
  { icon: <Settings size={20} />, label: 'Setting' },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-heading">General</h3>
      <nav className="nav-links">
        {navLinks.map((link, index) => (
          <div className="nav-link" key={index}>
            {link.icon}
            <span>{link.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
