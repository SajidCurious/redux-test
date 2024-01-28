import { useEffect } from "react";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { updateTotal } from "./features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);
  return (
    <>
      <Navbar />
      <BasketProducts />
    </>
  );
}

export default App;
