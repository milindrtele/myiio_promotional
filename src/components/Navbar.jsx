import { useState } from 'react'
import '../App.css'

function Navbar(){
    return (
     <nav className="flex items-center justify-between px-8 py-4 bg-black">
        <div className="logo"></div>
        <ul className="hidden md:flex space-x-8 text-white justify-end">
          <li><a href="#products" className="hover:text-green-400">Products</a></li>
          <li><a href="#solutions" className="hover:text-green-400">Solutions</a></li>
          <li><a href="#pricing" className="hover:text-green-400">Pricing</a></li>
          <li><a href="#features" className="hover:text-green-400">Features</a></li>
          <li><a href="#support" className="hover:text-green-400">Support</a></li>
        </ul>
        <button className="ml-6 px-4 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-500 transition">
          Try MYIIO
        </button>
        {/* Mobile menu icon */}
        <div className="text-white text-2xl">
          ☰
        </div>
      </nav>
      )
}

export default Navbar;