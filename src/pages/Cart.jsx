import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  // [cart] means whenever the value of cart is changes upadate the value

  return (
    <div className="bg-[#F5F5F5] ">
      {cart.length > 0 ? (
        <div className=" flex max-w-5xl  gap-x-0 mx-auto  ">
        <div className=" w-1/2  ">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* Summary div */}
          <div className="flex flex-col w-1/2 my-16 justify-between items-center">
            <div className="flex flex-col ">
              <div className="text-green-800 font-semibold  text-lg uppercase">Your Cart</div>
              <div className="text-green-700 text-4xl mb-4 uppercase font-extrabold ">Summary</div>
              <p>
                <span className="font-bold text-gray-700"> Total Items:{cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col ">
              <p  >Total Amount: <span className="font-bold text-gray-700">${totalAmount}</span></p>
              
              <button className="bg-green-800 w-[300px] py-2 px-6 
              hover:bg-[#f9f6f9] hover:text-green-700 mt-5 hover:border-green-700 hover:border-2 rounded  text-white">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div  className="flex  flex-col justify-center h-[100vh] w-[100vh] items-center mx-auto">
          <h1 className="text-xl font-semibold text-gray-700">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-white rounded px-6 py-1 w-full mt-2
            hover:bg-green-400 ">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}; 

export default Cart;
