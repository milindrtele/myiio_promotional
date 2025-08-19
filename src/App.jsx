import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import FeatureIcons from './components/Features'
import FAQ from './components/FAQ'
import KeyFeatures from './components/KeyFeatures'
import UseCases from './components/UseCase'
import WhyMyiio from './components/WhyMyiio'
import FreeTrial from './components/FreeTrial'
import Footer from './components/Footer'
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
      <FeatureIcons />
      <FAQ />
      <KeyFeatures />
      <UseCases />
      <WhyMyiio />
      <FreeTrial />
      <Footer />
    </>

  )
}
export default App
