import React from 'react';
import CountUp from 'react-countup';

const stats = [
  {
    id: 1,
    icon: '👥',
    value: 40,
    label: 'Clients',
  },
  {
    id: 2,
    icon: '📊',
    value: 53,
    label: 'Projects',
  },
  {
    id: 3,
    icon: '👍',
    value: 82,
    label: 'Users',
  },
  {
    id: 4,
    icon: '🏅',
    value: 9,
    label: 'Shops',
  },
];

const Users = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10 bg-gray-100">
      {stats.map(({ id, icon, value, label }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center bg-white shadow-md p-6 rounded-lg text-center"
        >
          <div className="text-4xl mb-3 text-blue-600">{icon}</div>
          <div className="text-3xl font-bold text-gray-800">
            <CountUp end={value} duration={40} />+
          </div>
          <div className="mt-2 text-gray-600 text-sm">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;

