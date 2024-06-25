import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="hover:bg-purple-500 p-2 rounded transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:bg-purple-500 p-2 rounded transition duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="hover:bg-purple-500 p-2 rounded transition duration-300 ease-in-out"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:bg-purple-500 p-2 rounded transition duration-300 ease-in-out"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
