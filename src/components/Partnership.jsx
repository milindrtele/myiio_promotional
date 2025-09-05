// src/components/Partnership.jsx
export default function Partnership() {
  const items = [
    {
      title: "SaaS Subscriptions",
      desc: "Flexible plans for individuals, teams, and enterprises.",
    },
    {
      title: "Scalable Storage & Bandwidth",
      desc: "Tiered packages aligned with media size and usage needs.",
    },
    {
      title: "Advanced License Management",
      desc: "Revenue from device-bound, time-based, or play-count controls.",
    },
    {
      title: "White-Label Enterprise Solutions",
      desc: "Custom-branded platforms for enterprises to launch their own secure streaming services.",
    },
    {
      title: "Pay-Per-Use Distribution",
      desc: "Simple and transparent model for independent creators to securely share and monetize their content.",
    },
  ];

  return (
    <section className="bg-[#143D3D] text-white py-16 ">
      <h2 className="text-[3.5vh] landscape:text-[3vw] font-bold mb-0 mt-[2%] mb-[2%] text-cyan-400 text-center">
        Partnership Framework
      </h2>
      <div className="grid landscape:grid-cols-2 landscape:text-[2vw] gap-12 items-center w-[95%] landscape:w-[72%] mx-auto">
        {/* Left: Product Image */}

        <div className="flex justify-center">
          <div className="kiosk_image"></div>
        </div>
        {/* Right: Content */}
        <div>
          <div className="mt-[15%] landscape:mt-[0] bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-6 shadow-lg">
            {/* Icon placeholder */}
            <div className="hover_icon w-[20%] h-[20%] absolute -top-15 landscape:-top-10 left-6 px-4 py-2"></div>

            <ul className="space-y-4 mt-[10%]">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-200 text-[1.75vh] landscape:text-[1.1vw]  ">
                  <span className="font-semibold text-[#57c2c0]">
                    {item.title}
                  </span>
                  <span>-</span>
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
