import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PopularProducts = () => {
  const [allCoffees, setAllCoffees] = useState([]);
  useEffect(() => {
    fetch("https://espresso-emporium-server-tau.vercel.app/coffees")
      .then((res) => res.json())
      .then((result) => setAllCoffees(result));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-tau.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = allCoffees.filter(
                (coffee) => coffee._id !== id
              );
              setAllCoffees(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-[90%] mx-auto py-10 md:py-20">
      <header className="text-center mb-10">
        <p className="text-xl  mb-2">--- Sip & Savor ---</p>
        <h1 className="text-4xl font-bold mb-6">Our Popular Products</h1>
        <Link
          to={"/add-coffe"}
          className="btn px-4 py-2 bg-[#E3B577] text-white rounded-lg hover:bg-[#E3B577] border-2 border-solid border-[#331A15] font-rancho font-medium text-2xl"
        >
          Add Coffee ☕
        </Link>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCoffees.length > 0 ? (
          allCoffees.map((item, index) => (
            <div
              key={item._id}
              className="p-4 bg-[#F5F4F1] shadow-md rounded-lg grid grid-cols-12 justify-center items-center gap-2 md:gap-6"
            >
              <div className="col-span-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="col-span-6">
                <h3 className="text-lg font-semibold">{`Name: ${item.name}`}</h3>
                <p className="text-sm text-gray-600">{`Chef: ${item.chef}`}</p>
                <p className="text-sm text-gray-600">{`Price: ${item.price} Taka`}</p>
              </div>
              <div className="flex flex-col gap-4  col-span-2">
                <Link
                  to={`/coffee/${item._id}`}
                  className="p-2 bg-[#D2B48C] hover:bg-[#D2B48C] rounded text-center"
                >
                  👁️
                </Link>
                <Link
                  to={`/coffeeUpdate/${item._id}`}
                  className="p-2 bg-[#3C393B] hover:bg-[#3C393B] text-white rounded text-center"
                >
                  ✏️
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-2 bg-[#EA4744] hover:bg-[#EA4744] text-white rounded text-center"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 font-bold text-center">
            {" "}
            No Products Found
          </p>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
