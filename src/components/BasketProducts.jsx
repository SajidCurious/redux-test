import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, amount, total } = useSelector((store) => store.basket);
  return (
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
  );
};

export default BasketProducts;
