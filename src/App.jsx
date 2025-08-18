import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import './App.css'

function App() {

  return (
    <>
      <div className="pt-8 min--screen bg-[#EFFF00] w-full">
        <div className="mx-auto w-[95%]">
          <Navbar />
          < HeroPage />
        </div>
      </div>
    </>

  )
}
export default App
