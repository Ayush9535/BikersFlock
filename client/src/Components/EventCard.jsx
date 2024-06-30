import React from 'react';

const EventCard = ({el}) => {
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[100%] lg:w-[90%]">
      <div className="relative">
        <img
          src={el.imageUrl}
          alt={el.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-gray-800 text-2xl font-medium mb-3">{el.name}</h2>
        <p className="text-gray-800 mb-4">{el.description}</p>
        <p className="text-gray-500">
        {el.date} | {el.time}
        </p>
        <p className="text-gray-500">{el.location}</p>
        <p className="text-gray-500 mb-6">{el.fee}</p>
        <button className="bg-bforange text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;