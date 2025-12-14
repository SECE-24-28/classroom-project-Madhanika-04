function Navbar() {
  return (
    <nav className="relative bg-gray-700 text-white mt-2 px-3 py-2 rounded-md">

      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold">
        Flone.
      </div>

      <ul className="flex justify-center gap-4 text-sm">
        <li className="cursor-pointer hover:text-gray-300">Product</li>
        <li className="cursor-pointer hover:text-gray-300">Orders</li>
        <li className="cursor-pointer hover:text-gray-300">Cart(2)</li>
        <li className="cursor-pointer hover:text-gray-300">Login</li>
      </ul>

    </nav>
  );
}

export default Navbar;

