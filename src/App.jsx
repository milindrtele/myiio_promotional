import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import FeatureIcons from "./components/Features";
import FAQ from "./components/FAQ";
import KeyFeatures from "./components/KeyFeatures";
import UseCases from "./components/UseCase";
import WhyMyiio from "./components/WhyMyiio";
import FreeTrial from "./components/FreeTrial";
import Footer from "./components/Footer";
import Partnership from "./components/Partnership";
import "./App.css";

function App() {
  return (
    <>
      <div className="sticky top-[-2vh] z-10 pt-[2vh] bg-[#EFFF00] w-full h-[max-content]">
        <Navbar />
      </div>

      <div className="pt-8 min--screen bg-[#EFFF00] w-full h-[max-content] landscape:h-[100vh]">
        <div className="mx-auto w-[90%]">
          <HeroPage />
        </div>
      </div>
      <FeatureIcons />
      <FAQ />
      <KeyFeatures />
      <UseCases />
      <WhyMyiio />
      <Partnership />
      <FreeTrial />
      <Footer />
    </>
  );
}
export default App;
