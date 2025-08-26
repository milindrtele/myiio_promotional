// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="landscape:max-w-[80%] mx-auto px-6 grid landscape:grid-cols-[20%_80%] gap-10">
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col items-center landscape:items-start">
          <div className="logo_footer"></div>
          {/* <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">MYiiO</span>Cloud
          </h1> */}
          <p className="mt-4 landscape:ml-4 text-gray-300 text-[1.75vh]">
            Enterprise Ready <br /> Encrypted Media
          </p>
          <div className="flex space-x-[10vw] landscape:ml-3.5 landscape:space-x-4 mt-[5vw] text-[2vh] landscape:text-[2vw] justify-center items-center">
            {/* Social Media Icons */}
            <div className="w-[4vh] h-[4vh] landscape:w-8 landscape:h-8 rounded social_media_icons s_m_1"></div>
            <div className="w-[4vh] h-[4vh] landscape:w-8 landscape:h-8 rounded social_media_icons s_m_2"></div>
            <div className="w-[4vh] h-[4vh] landscape:w-8 landscape:h-8 rounded social_media_icons s_m_3"></div>
            <div className="w-[4vh] h-[4vh] landscape:w-8 landscape:h-8 rounded social_media_icons s_m_4"></div>
          </div>
        </div>

        {/* <div className="grid landscape:grid-cols-3 gap-10 m-auto landscape:mr-0 landscape:ml-auto justify-end text-center landscape:text-left w-[max-content]"> */}
        <div className="flex landscape:flex-row flex-col m-auto landscape:mr-0 landscape:ml-auto justify-end text-center landscape:text-left w-[max-content]">
          {/* Solutions */}
          <div className="flex flex-col w-[max-content] landscape:mx-[1vw]  portrait:mt-[15%]">
            <h3 className="font-semibold text-[2.5vh] landscape:text-[1.25vw] mb-4">
              Solutions
            </h3>
            <ul className="space-y-1 text-gray-300 flex flex-col justify-start landscape:items-start text-[1.75vh] landscape:text-[0.70vw]">
              <li>
                <a href="#">Digital Signage</a>
              </li>
              <li>
                <a href="#">Interactive Kiosk Solutions</a>
              </li>
              <li>
                <a href="#">Pre-Cinema / Ad Playback</a>
              </li>
              <li>
                <a href="#">Retail & In-Store Media</a>
              </li>
              <li>
                <a href="#">Healthcare Media Solutions</a>
              </li>
              <li>
                <a href="#">Hospitality Media Solutions</a>
              </li>
              <li>
                <a href="#">Corporate Learning Platforms</a>
              </li>
              <li>
                <a href="#">Govt. & Public Info Systems</a>
              </li>
              <li>
                <a href="#">OEM / White Label</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="w-[max-content] mx-auto landscape:mx-[1vw]  portrait:mt-[15%]">
            <h3 className="font-semibold text-[2.5vh] landscape:text-[1.25vw] mb-4 flex flex-col justify-start landscape:items-start">
              Features
            </h3>
            <ul className="space-y-1 text-gray-300 flex flex-col justify-start landscape:items-start text-[1.75vh] landscape:text-[0.70vw]">
              <li>
                <a href="#">Remote Dashboard</a>
              </li>
              <li>
                <a href="#">Holobox Integration</a>
              </li>
              <li>
                <a href="#">iPad Kiosk Mode</a>
              </li>
              <li>
                <a href="#">Blueprints</a>
              </li>
              <li>
                <a href="#">App Management</a>
              </li>
              <li>
                <a href="#">APIs and SDK</a>
              </li>
              <li>
                <a href="#">Geofencing</a>
              </li>
              <li>
                <a href="#">Provisioning</a>
              </li>
            </ul>
          </div>

          {/* Supports */}
          <div className="w-[max-content] mx-auto landscape:mx-[1vw] portrait:mt-[15%]">
            <h3 className="font-semibold text-[2.5vh] landscape:text-[1.25vw] mb-4 flex flex-col justify-start landscape:items-start">
              Supports
            </h3>
            <ul className="space-y-1 text-gray-300 flex flex-col justify-start landscape:items-start text-[1.75vh] landscape:text-[0.70vw]">
              <li>
                <a href="#">Download APK</a>
              </li>
              <li>
                <a href="#">Privacy & Terms</a>
              </li>
              <li>
                <a href="#">Help & Guide</a>
              </li>
              <li>
                <a href="#">Installation Support</a>
              </li>
              <li>
                <a href="#">Custom Deployment</a>
              </li>
              <li>
                <a href="#">APIs and SDK</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#57c2c0] text-center py-4 mt-12 text-black text-[1.25vh] landscape:text-[1vw] font-medium">
        © 2025 Metavian Technologies Pvt. Ltd.
      </div>
    </footer>
  );
}
