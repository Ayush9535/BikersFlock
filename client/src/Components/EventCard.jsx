import React from 'react';

const EventCard = () => {
  const eventData = {
    name: "Riders' Rally 2024",
    date: "August 10, 2024",
    time: "8:00 AM - 7:00 PM",
    location: "Green Valley Park, Springfield",
    description: "Join us for an adventurous day with group rides, bike shows, workshops, and more.",
    fee: "$25 per participant",
    imageUrl: "https://via.placeholder.com/150",
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%]">
      <div className="relative">
        <img
          src={eventData.imageUrl}
          alt={eventData.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-gray-800 text-2xl font-medium mb-3">{eventData.name}</h2>
        <p className="text-gray-800 mb-4">{eventData.description}</p>
        <p className="text-gray-500">
        {eventData.date} | {eventData.time}
        </p>
        <p className="text-gray-500">{eventData.location}</p>
        <p className="text-gray-500 mb-6">{eventData.fee}</p>
        <button className="bg-bforange text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;