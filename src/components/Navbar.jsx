import { useState, useEffect, useRef } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu_2_open, setMenu_2_Open] = useState(true);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const navRef = useRef(null);

  const [openItem, setOpenItem] = useState(null);

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
      className={`flex items-center justify-between px-8  bg-[#363636] 
        ${isStuck ? "w-full" : "landscape:w-[90%] w-full"} 
        m-auto landscape:left-0 h-[max-content] text-[2vh] landscape:text-[1.25vw]`}>
      {/* Logo */}
      <div className="logo text-white font-bold"></div>

      {/* Desktop menu */}
      <ul className="hidden h-[8.5vh] landscape:flex space-x-8 text-white justify-end text-end landscape:ml-auto landscape:mr-[2%] relative">
        {/* Products Dropdown */}
        <div
          className="relative group "
          onMouseEnter={() => setOpenItem("products")}
          onMouseLeave={() => setOpenItem(null)}
          // </ul>onClick={() => setProductsOpen((prev) => !prev)}
        >
          <button
            className={`${
              openItem === "products" ? "text-green-400" : ""
            } h-full`}>
            Products
          </button>
          {openItem === "products" && (
            <ul
              onMouseLeave={() => setOpenItem(null)}
              className="justify-start align-start text-start absolute top-[90%] left-0 bg-[#363636] text-white mt-2 rounded-b-2xl rounded-r-2xl shadow-lg py-2 w-40 ">
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
        </div>

        {/* Solutions Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setOpenItem("solutions")}
          onMouseLeave={() => setOpenItem(null)}>
          <button
            className={`${
              openItem === "solutions" ? "text-green-400" : ""
            } h-full`}>
            Solutions
          </button>
          {openItem === "solutions" && (
            <ul
              onMouseLeave={() => setOpenItem(null)}
              className="justify-start align-start text-start top-[90%] absolute left-0 bg-[#363636] text-white mt-2 rounded-b-2xl rounded-r-2xl shadow-lg py-2 w-40">
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

        <li className="h-full">
          <a
            href="#pricing"
            className="hover:text-green-400 h-full flex m-auto justify-center text-center items-center">
            Pricing
          </a>
        </li>
        <li className="h-full">
          <a
            href="#features"
            className="hover:text-green-400 h-full flex m-auto justify-center text-center items-center">
            <p className="m-auto">Features</p>
          </a>
        </li>
        <li className="h-full">
          <a
            href="#support"
            className="hover:text-green-400 h-full flex m-auto justify-center text-center items-center">
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

      {menu_2_open && (
        <div className="absolute w-[10vw] h-[max-content] bg-black top-0 right-0 text-white">
          <div className="absolute top-0 right-0 w-[2vw] h-[2vw]"></div>
          <ul className="mt-[2vw]">
            <li className="justify-center items-center flex w-full">
              <div className="flex flex-row m-auto  py-2">
                <div className="h-full w-8"></div>
                <p>F.A.Q</p>
              </div>
            </li>
            <li className="justify-center items-center flex">
              <div className="flex flex-row m-auto  py-2">
                <div className="h-full w-8"></div>
                <p>Features</p>
              </div>
            </li>
            <li className="justify-center items-center flex">
              <div className="flex flex-row m-auto py-2">
                <div className="h-full w-8"></div>
                <p>Blogs</p>
              </div>
            </li>
            <li className="justify-center items-center flex">
              <div className="flex flex-row m-auto py-2">
                <div className="h-full w-8"></div>
                <p>Events</p>
              </div>
            </li>
            <li className="justify-center items-center flex m-auto">
              <div className="flex flex-row m-auto py-2">
                <div className="h-full w-8"></div>
                <p>Abouts</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
