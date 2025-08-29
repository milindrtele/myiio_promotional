import { useState, useEffect, useRef } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const { top } = navRef.current.getBoundingClientRect();
      setIsStuck(top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`flex items-center justify-between px-8 py-2 bg-black 
        ${isStuck ? "w-full" : "landscape:w-[90%] w-full"} 
        m-auto landscape:left-0 h-[max-content] text-[2vh] landscape:text-[1.25vw]`}>
      {/* Logo */}
      <div className="logo text-white font-bold"></div>

      {/* Desktop menu */}
      <ul className="hidden landscape:flex space-x-8 text-white justify-end text-end landscape:ml-auto landscape:mr-[2%] relative">
        {/* Products Dropdown */}
        <li
          className="relative group "
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}>
          <button className="hover:text-green-400">Products</button>
          {productsOpen && (
            <ul className="justify-start align-start text-start absolute top-[165%] left-0 bg-black text-white mt-2 rounded-b-2xl rounded-r-2xl shadow-lg py-2 w-40 ">
              <li className="">
                <a
                  href="#product1"
                  className="m-0 block px-4 py-2 hover:bg-gray-800">
                  Product 1
                </a>
              </li>
              <li>
                <a
                  href="#product2"
                  className="block px-4 py-2 hover:bg-gray-800">
                  Product 2
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Solutions Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}>
          <button className="hover:text-green-400">Solutions</button>
          {solutionsOpen && (
            <ul className="justify-start align-start text-start top-[165%] absolute left-0 bg-black text-white mt-2 rounded-b-2xl rounded-r-2xl shadow-lg py-2 w-40">
              <li>
                <a
                  href="#solution1"
                  className="block px-4 py-2 hover:bg-gray-800">
                  Solution 1
                </a>
              </li>
              <li>
                <a
                  href="#solution2"
                  className="block px-4 py-2 hover:bg-gray-800">
                  Solution 2
                </a>
              </li>
            </ul>
          )}
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
        className="try_myiio_button landscape:w-[max-content] mr-[5%] portrait:mr-[5%] portrait:ml-auto landscape:block ml-6 px-4 py-2 rounded-full text-black font-semibold bg-gradient-to-t from-green-400 to-[#57c2c0]
          hover:from-[#57c2c0] hover:to-green-500 transition">
        <p>Try MYiiO</p>
      </button>

      {/* Mobile menu icon */}
      <div
        className="nav_icon_container"
        onClick={() => setMenuOpen(!menuOpen)}>
        <div className="nav_icon_bar"></div>
        <div className="nav_icon_bar middle_bar"></div>
        <div className="nav_icon_bar"></div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute text-[2vh] landscape:text-[1.25vw] top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 landscape:hidden">
          {/* Products with sub-menu */}
          <div>
            <button
              className="text-white hover:text-green-400"
              onClick={() => setProductsOpen(!productsOpen)}>
              Products
            </button>
            {productsOpen && (
              <div className="flex flex-col space-y-2 mt-2">
                <a
                  href="#product1"
                  className="text-gray-300 hover:text-green-400">
                  Product 1
                </a>
                <a
                  href="#product2"
                  className="text-gray-300 hover:text-green-400">
                  Product 2
                </a>
              </div>
            )}
          </div>

          {/* Solutions with sub-menu */}
          <div>
            <button
              className="text-white hover:text-green-400"
              onClick={() => setSolutionsOpen(!solutionsOpen)}>
              Solutions
            </button>
            {solutionsOpen && (
              <div className="flex flex-col space-y-2 mt-2">
                <a
                  href="#solution1"
                  className="text-gray-300 hover:text-green-400">
                  Solution 1
                </a>
                <a
                  href="#solution2"
                  className="text-gray-300 hover:text-green-400">
                  Solution 2
                </a>
              </div>
            )}
          </div>

          <a href="#pricing" className="text-white hover:text-green-400">
            Pricing
          </a>
          <a href="#features" className="text-white hover:text-green-400">
            Features
          </a>
          <a href="#support" className="text-white hover:text-green-400">
            Support
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
