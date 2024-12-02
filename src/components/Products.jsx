import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router-dom";

const Products = () => {
    const coffeeItems = [
        { name: "Americano Coffee", chef: "Mr. Matin Paul", price: 890 },
        { name: "Black Coffee", chef: "Mr. Nibra Sweden", price: 890 },
        { name: "Espresso Coffee", chef: "Mrs. Morisha", price: 890 },
        { name: "Cappuccino Coffee", chef: "Mr. Moruti", price: 890 },
        { name: "Macchiato", chef: "Mr. Moruti", price: 890 },
        { name: "Decaf Coffee", chef: "Mr. Moruti", price: 890 },
      ];
  return (
    <div className="min-h-screen  py-10 px-6">
      <header className="text-center mb-10">
        <p className="text-xl  mb-2">--- Sip & Savor ---</p>
        <h1 className="text-4xl font-bold mb-6">Our Popular Products</h1>
        <Link  to={"/add-coffe"} className="btn px-4 py-2 bg-[#E3B577] text-white rounded-lg hover:bg-[#E3B577] border-2 border-solid border-[#331A15] font-rancho font-medium text-2xl">
          Add Coffee ☕
        </Link>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffeeItems.map((item, index) => (
          <CoffeeCard
            key={index}
            name={item.name}
            chef={item.chef}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
