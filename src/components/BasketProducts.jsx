import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, amount, total } = useSelector((store) => store.basket);
  return (
    <div className="max-w-4xl mx-auto py-4">
      {amount > 1 ? (
        <>
          <div>
            {products.map((item, i) => (
              <Product
                key={new Date().getTime + Math.random()}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-evenly py-8">
            <p>Total</p>
            <p>{total}</p>
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl text-gray-700 font-medium text-center">
            Your Basket is empty
          </p>
        </>
      )}
    </div>
  );
};

export default BasketProducts;
