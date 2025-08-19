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
    <section className="bg-[#143D3D] text-white py-16 px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <div className="kiosk_image"></div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">
            Partnership Framework
          </h2>

          <div className="bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-6 shadow-lg">
            {/* Icon placeholder */}
            <div className="hover_icon w-[20%] h-[20%] absolute -top-10 left-6 px-4 py-2"></div>

            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i}>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
