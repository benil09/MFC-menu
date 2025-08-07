

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-orange-600">
          MFC
        </Link>

        {/* Buttons */}
        <div className="space-x-4 flex items-center">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-orange-600"
          >
            Home
          </Link>
          <Link
            to="/category/veg"
            className="text-sm font-medium text-gray-700 hover:text-orange-600"
          >
            Veg
          </Link>
          <Link
            to="/category/nonveg"
            className="text-sm font-medium text-gray-700 hover:text-orange-600"
          >
            Non-Veg
          </Link>
          <Link
            to="/category/beverages"
            className="text-sm font-medium text-gray-700 hover:text-orange-600"
          >
            Beverages
          </Link>
          <Link
            to="/cart"
            className="text-sm font-medium text-gray-700 hover:text-orange-600"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;