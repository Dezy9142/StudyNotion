import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item is removed");
  }
  return (
    <div className="  h-[400px] flex flex-col justify-center ">

      <div className="flex  p-10  space-x-4 border-b-2 border-gray-400   ">
        <div className="h-[180px]  justify-center mx-auto">
          <img src={item.image} alt="itemImage" className="w-full  h-full" />
        </div>
        <div className="flex flex-col mx-auto  gap-y-2 ">
          <h1 className="text-gray-700  font-semibold text-lg text-left  w-full mt-1">
            {item.title}
          </h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">
            {item.description.split(" ").slice(0,10).join(" ")+"..."}
          </h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
              className="w-10 h-10  bg-red-200 rounded-full  flex 
              items-center justify-center"
            >
              <MdOutlineDeleteSweep
                onClick={removeFromCart}
                className="text-2xl    text-red-900"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
