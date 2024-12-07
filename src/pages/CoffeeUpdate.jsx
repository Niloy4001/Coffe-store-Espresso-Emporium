import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeUpdate = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  //   console.log(name);

  const notify = () => {
    Swal.fire({
      title: "Updated your coffe",
      icon: "success",
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const info = { name, chef, supplier, taste, category, details, photo };

    fetch(`https://espresso-emporium-server-tau.vercel.app/coffeeUpdate/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          notify();
        }
      });

    // console.log(info);
  };

  return (
    <div>
      <div className="flex justify-center items-center  bg-white">
        <div className="bg-[#F4F3F0] my-14 py-10 px-3 md:px-10  rounded-lg shadow-md w-[90%] lg:w-3/5">
          <Link
            to={"/"}
            className="btn hover:bg-[#D2B48C]  text-3xl mb-5 text-[#374151]  font-rancho"
          >
            &larr; Back to home
          </Link>
          <h2 className="text-5xl font-bold text-center mb-4 font-rancho text-[#374151]">
            Update Coffee
          </h2>
          <p className="text-gray-500 text-center mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleUpdate}
          >
            <div className="col-span-1">
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                defaultValue={name}
                name="name"
                type="text"
                placeholder="Enter coffee name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 text-gray-700">Chef</label>
              <input
                defaultValue={chef}
                name="chef"
                type="text"
                placeholder="Enter coffee chef"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 text-gray-700">Supplier</label>
              <input
                defaultValue={supplier}
                name="supplier"
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 text-gray-700">Taste</label>
              <input
                defaultValue={taste}
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 text-gray-700">Category</label>
              <input
                defaultValue={category}
                name="category"
                type="text"
                placeholder="Enter coffee category"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-1 text-gray-700">Details</label>
              <input
                defaultValue={details}
                name="details"
                type="text"
                placeholder="Enter coffee details"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 text-gray-700">Photo</label>
              <input
                defaultValue={photo}
                name="photo"
                type="url"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              />
            </div>
            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#D2B48C] w-full font-rancho hover:bg-transparent  text-[#331A15] border-2 border-solid border-[#331A15] py-2 px-6 rounded transition duration-200"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoffeeUpdate;
