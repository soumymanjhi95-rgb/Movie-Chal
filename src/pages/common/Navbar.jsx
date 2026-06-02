import React from "react";
import { FaSearch } from "react-icons/fa";

export default function App() {


    

  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Navbar */}
      <nav className="h-28 border-b border-slate-800 bg-[#020617] flex items-center justify-between px-16">

        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-4 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-pink-400 shadow-lg shadow-pink-500/20">
            <div className="w-12 h-12 rounded-full bg-[#3d241e] flex items-center justify-center text-white font-bold text-xl">
              CV
            </div>

            <h1 className="text-white text-4xl font-bold tracking-[4px]">
              CINEVIEW
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-16">
          <a
            href="/"
            className="text-gray-300 hover:text-white text-xl font-medium"
          >
            Home
          </a>

          <a
            href="/favorites"
            className="text-gray-300 hover:text-white text-xl font-medium"
          >
            Favorites
          </a>

          <a
            href="/profile"
            className="text-gray-300 hover:text-white text-xl font-medium"
          >
            Profile
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Search Button */}
          <button className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center bg-[#071126] hover:bg-[#101d3a] transition">
            <FaSearch className="text-lg text-purple-300" />
          </button>

          {/* Sign In */}
          <button className="px-8 py-3 rounded-full border border-orange-500 text-orange-300 text-xl hover:bg-orange-500 hover:text-white transition">
            Sign in
          </button>

          {/* Get Started */}
          <button className="px-8 py-3 rounded-full text-white text-xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition">
            Get started
          </button>

        </div>
      </nav>
    </div>
  );
}