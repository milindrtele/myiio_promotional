// src/components/WhyMyiio.jsx
import { Check } from "lucide-react"; // using lucide icons

export default function WhyMyiio() {
  const points = [
    "Total control over your content",
    "Piracy-proof distribution",
    "Future-ready VR/AR support",
    "Scalable for enterprises & creators alike",
  ];

  return (
    <section className="bg-[#EFFF00] py-16 px-8">
      <div className="grid landscape:grid-cols-2 gap-10 items-center w-[90%] landscape:w-[72%] mx-auto">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <div className="myiio_device"></div>
          {/* <img
            src="/assets/myiio-device.png"
            alt="MYIIO Device"
            className="rounded-2xl shadow-xl max-w-sm"
          /> */}
        </div>

        {/* Right: Content */}
        <div className="landscape:w-[50%] m-auto">
          <h2 className="text-[2.5vh] landscape:text-[2vw]  font-bold mb-6 text-black">
            Why MYIIO ?
          </h2>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* <Check className="text-green-600 w-6 h-6 flex-shrink-0" /> */}
                <div className="w-[3vh] h-[3vh] check_icon"></div>
                <span className="flex-1 text-[2vh] landscape:text-[1vw] text-black">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
