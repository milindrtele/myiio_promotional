// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="logo_footer"></div>
          {/* <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">MYiiO</span>Cloud
          </h1> */}
          <p className="mt-4 text-gray-300">
            Enterprise Ready <br /> Encrypted Media
          </p>
          <div className="flex space-x-4 mt-6 text-xl justify-center items-center">
            {/* Social Media Icons */}
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
            <div className="w-8 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mx-auto ">
          {/* Solutions */}
          <div className="flex flex-col justify-start md:items-start">
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-300 flex flex-col justify-start md:items-start">
              <li>
                <a href="#">Custom Media Player</a>
              </li>
              <li>
                <a href="#">Digital Signage</a>
              </li>
              <li>
                <a href="#">E-Cinema</a>
              </li>
              <li>
                <a href="#">Interactive Display</a>
              </li>
              <li>
                <a href="#">White Label</a>
              </li>
              <li>
                <a href="#">Menu_Items</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex flex-col justify-start md:items-start">
              Features
            </h3>
            <ul className="space-y-2 text-gray-300 flex flex-col justify-start md:items-start">
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
          <div>
            <h3 className="font-semibold text-lg mb-4 flex flex-col justify-start md:items-start">
              Supports
            </h3>
            <ul className="space-y-2 text-gray-300 flex flex-col justify-start md:items-start">
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
      <div className="bg-cyan-500 text-center py-4 mt-12 text-black text-sm font-medium">
        © 2025 Metavian Technologies Pvt. Ltd.
      </div>
    </footer>
  );
}
