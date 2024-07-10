import React from 'react';
import './App.css'; // Import the CSS file where Tailwind directives are used

const IconOrbit = () => {
  const icons = [
    'https://img.icons8.com/ios-filled/50/000000/coffee.png',
    'https://img.icons8.com/ios-filled/50/000000/apple.png',
    'https://img.icons8.com/ios-filled/50/000000/anchor.png',
    'https://img.icons8.com/ios-filled/50/000000/bolt.png',
    'https://img.icons8.com/ios-filled/50/000000/car.png',
    'https://img.icons8.com/ios-filled/50/000000/bicycle.png'
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
          <img src="https://img.icons8.com/ios-filled/50/000000/plant.png" alt="Logo" className="w-16 h-16" />
        </div>
        {icons.map((icon, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
            style={{
              transform: `rotate(${i * 60}deg) translate(100px) rotate(-${i * 60}deg)`,
            }}
          >
            <img src={icon} alt={`Icon ${i + 1}`} className="w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconOrbit;
