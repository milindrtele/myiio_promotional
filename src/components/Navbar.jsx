import { useState } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-1 flex items-center justify-between px-8 py-4 bg-black w-[112%] left-[-6%] relative xl:static xl:w-full xl:left-0 h-[max-content]">
      {/* Logo */}
      <div className="logo text-white font-bold "></div>

      {/* Desktop menu */}
      <ul className="hidden xl:flex space-x-8 text-white justify-end text-end xl:ml-auto xl:mr-[2%]">
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
      <button
        className="try_myiio_button mr-[5%] xl:block ml-6 px-4 py-2 rounded-full text-black font-semibold bg-gradient-to-t from-green-400 to-teal-400 
  hover:from-teal-500 hover:to-green-500 transition">
        <p>Try MYIIO</p>
      </button>

      {/* Mobile menu icon */}
      <div
        className="nav_icon_container"
        onClick={() => setMenuOpen(!menuOpen)}>
        <div className="nav_icon_bar"></div>
        <div className="nav_icon_bar middle_bar"></div>
        <div className="nav_icon_bar"></div>
      </div>
      {/* <div
        className=" text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div> */}

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute text-xl top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 xl:hidden">
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
