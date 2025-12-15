import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="relative bg-gray-700 text-white mt-2 px-3 py-2 rounded-md">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold">
        Flone.
      </div>

      <ul className="flex justify-center gap-4 text-sm">
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/products">Product</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/orders">Orders</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/cart">Cart(2)</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;




