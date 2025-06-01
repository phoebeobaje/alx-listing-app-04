import Link from "next/link";
import React from "react";

const accommodationTypes = ["Rooms", "Mansion", "Countryside", "Apartment", "Villa", "Cabin"];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">MyStay</Link>
      </div>

      {/* Accommodation Types */}
      <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
        {accommodationTypes.map((type) => (
          <a key={type} href={`#${type.toLowerCase()}`} className="hover:text-blue-500">
            {type}
          </a>
        ))}
      </nav>

      {/* Search + Auth Buttons */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search accommodations..."
          className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-64"
        />

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
