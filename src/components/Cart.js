import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const CartItem = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItems());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl  font-extrabold">Cart</h1>
      <div>
        <button
          className="m-2 p-2 bg-black text-white font-medium"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto ">
        {cartItems.length === 0 && <h1>Your Cart is Empty </h1>}
        <ItemList itemsData={cartItems} />
      </div>
    </div>
  );
};

export default CartItem;
