import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const scheduleData = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Ophthalmologist', time: '10:00 AM', icon: '👁️' },
      { title: 'Cardiologist', time: '11:30 AM', icon: '❤️' },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Neurologist', time: '09:30 AM', icon: '🧠' },
      { title: 'Health checkup complete', time: '01:00 PM', icon: '✅' },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="soon-schedule">
      <h3>The Upcoming Schedule</h3>
      {scheduleData.map((block, idx) => (
        <div key={idx} className="schedule-block">
          <h4>{block.day}</h4>
          <div className="appointment-detail">
            {block.appointments.map((appt, i) => (
              <SimpleAppointmentCard key={i} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
