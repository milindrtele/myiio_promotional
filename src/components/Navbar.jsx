import { useState, useEffect, useRef } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const { top } = navRef.current.getBoundingClientRect();
      setIsStuck(top <= 0); // stuck at top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`flex items-center justify-between px-8 py-4 bg-black 
    ${isStuck ? "w-full" : "landscape:w-[90%] w-full"} 
    m-auto landscape:left-0 h-[max-content] text-[2vh] landscape:text-[1.25vw]`}>
      {/* Logo */}
      <div className="logo text-white font-bold "></div>

      {/* Desktop menu */}
      <ul className="hidden landscape:flex space-x-8 text-white justify-end text-end landscape:ml-auto landscape:mr-[2%]">
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
        className="try_myiio_button mr-[5%] landscape:block ml-6 px-4 py-2 rounded-full text-black font-semibold bg-gradient-to-t from-green-400 to-teal-400 
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
        <div className="absolute text-[2vh] landscape:text-[1.25vw] top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 landscape:hidden">
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
