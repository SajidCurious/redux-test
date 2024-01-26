import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg">
      <p>Home</p>
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          0
        </span>
      </p>
    </div>
  );
};

export default Navbar;
