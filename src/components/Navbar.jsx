import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
   const {cart}=useSelector((state)=>state)

  return (
    <div>
      <div className="flex justify-between h-20 items-center max-w-5xl mx-auto">
        <NavLink to="/">
          <div>
            <img
              src="../logo.png" className="h-14"
              alt="Logo"
            />
          </div>
        </NavLink>

        <div className="flex items-center text-slate-100 mr-5 font-medium space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/Cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
             {
              cart.length>0 &&  <span className="absolute -top-1 -right-2 text-xs
              w-5 h-5 flex justify-center items-center rounded-full animate-bounce text-white bg-green-600">{cart.length}</span>
             }
            </div>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
