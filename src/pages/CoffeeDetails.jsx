import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="w-[90%] mx-auto py-10 md:py-20">
      <div className="flex flex-col items-center justify-center">
        <Link
          to={"/"}
          className="btn hover:bg-[#D2B48C]  text-3xl mb-5 text-[#374151]  font-rancho"
        >
          &larr; Back to home
        </Link>
        <div className="w-full max-w-4xl bg-[#F4F3F0] rounded-lg shadow-lg p-8">
          <div className="flex items-start space-x-8">{/* Back to home */}</div>

          <div className="mt-6 flex">
            {/* Coffee Image */}
            <div className="w-1/2">
              <img
                src={photo} // Replace with your coffee image URL
                alt={name}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Coffee Details */}
            <div className="w-1/2 ml-8">
              <h2 className="text-2xl font-bold mb-4 text-brown-700 font-rancho">
                Novelties
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Name:</strong> {name}
                </li>
                <li>
                  <strong>Chef:</strong> {chef}
                </li>
                <li>
                  <strong>Supplier:</strong> {supplier}
                </li>
                <li>
                  <strong>Taste:</strong> {taste}
                </li>
                <li>
                  <strong>Category:</strong> {category}
                </li>
                <li>
                  <strong>Details:</strong> {details}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
