import { useState } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-1 flex items-center justify-between px-8 py-4 bg-black w-[112%] left-[-6%] relative md:static md:w-full md:left-0 h-[max-content]">
      {/* Logo */}
      <div className="logo text-white font-bold ml-[-10%] md:ml-0"></div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8 text-white justify-end text-end md:ml-auto md:mr-[2%]">
        <li>
          <a href="#products" className="hover:text-green-400">
            Products
          </a>
        </li>
        <li>
          <a href="#solutions" className="hover:text-green-400">
            Solutions
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-green-400">
            Pricing
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-green-400">
            Features
          </a>
        </li>
        <li>
          <a href="#support" className="hover:text-green-400">
            Support
          </a>
        </li>
      </ul>

      {/* Desktop button */}
      <button className="md:block ml-6 px-4 py-2 rounded-full bg-green-400 text-white font-semibold hover:bg-green-500 transition">
        Try MYIIO
      </button>

      {/* Mobile menu icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 md:hidden">
          <a href="#products" className="text-white hover:text-green-400">
            Products
          </a>
          <a href="#solutions" className="text-white hover:text-green-400">
            Solutions
          </a>
          <a href="#pricing" className="text-white hover:text-green-400">
            Pricing
          </a>
          <a href="#features" className="text-white hover:text-green-400">
            Features
          </a>
          <a href="#support" className="text-white hover:text-green-400">
            Support
          </a>
          {/* <button className="px-4 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-500 transition">
            Try MYIIO
          </button> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
