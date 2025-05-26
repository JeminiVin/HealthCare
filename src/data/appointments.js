// src/data/appointments.js

export const calendarAppointments = [
  { date: '2021-10-05', time: '09:00' },
  { date: '2021-10-08', time: '11:00' },
  { date: '2021-10-12', time: '13:00' },
  { date: '2021-10-15', time: '15:00' },
];

export const upcomingSchedule = [
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

