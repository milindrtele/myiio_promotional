import { useState } from "react";
import NewsTicker from "./components/NewsTicker";
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
      <NewsTicker
        messages={[
          "Take full control of your media — encrypted playback, secure distribution, and immersive experiences — streamlined for enterprise use cases through a next-gen centralized platform, all without compromise. Deploy-ready for POS systems, digital kiosks, interactive displays, VR lounges, and experience centres, with built-in automation and simplified deployment — eliminating time lost to integration and overcoming technical challenges",
        ]}
      />
      <div className="sticky top-[0] z-10 pt-0 bg-[#EFFF00] w-full h-[max-content]">
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
