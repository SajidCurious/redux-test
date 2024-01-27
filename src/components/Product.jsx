import React from "react";

const Product = ({ name, price, image, amount }) => {
  return (
    <div className="flex flex-row items-center gap-8 px-10 mt-20">
      <img src={image} alt={name} className="w-40 h-40" />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg">{price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Amount</p>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default Product;
