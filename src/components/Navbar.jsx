"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = null;

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h3 className="text-xl font-bold text-blue-600">
            Skill<span className="text-gray-800">Sphere</span>
          </h3>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-blue-600 transition">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-600 transition">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <>
              <img
                src={user.image || "/default-avatar.png"}
                alt="avatar"
                className="w-9 h-9 rounded-full object-cover border-2 border-blue-500"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
          <ul className="flex flex-col gap-4 pt-4 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition block"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-blue-600 transition block"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:text-blue-600 transition block"
                onClick={() => setMenuOpen(false)}
              >
                My Profile
              </Link>
            </li>
          </ul>

          {/* Mobile Auth */}
          <div className="flex flex-col gap-3 mt-4">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={user.image || "/default-avatar.png"}
                    alt="avatar"
                    className="w-9 h-9 rounded-full object-cover border-2 border-blue-500"
                  />
                  <span className="text-gray-700 font-medium">{user.name}</span>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 transition font-medium block"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center block"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
