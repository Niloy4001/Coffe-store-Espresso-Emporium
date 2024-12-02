import React from "react";

const CoffeeCard = ({ name, chef, price }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <img
        src="https://via.placeholder.com/100"
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{`Name: ${name}`}</h3>
        <p className="text-sm text-gray-600">{`Chef: ${chef}`}</p>
        <p className="text-sm text-gray-600">{`Price: ${price} Taka`}</p>
        <div className="flex justify-between mt-3">
          <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded">
            👁️
          </button>
          <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            ✏️
          </button>
          <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded">
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
