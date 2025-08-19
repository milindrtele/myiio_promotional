// src/components/KeyFeatures.jsx
export default function KeyFeatures() {
  const features = [
    { title: "Hybrid Access", desc: "Stream online or sync offline protected viewing" },
    { title: "Flexible Licensing", desc: "Time-based, device-bound, play-count restricted" },
    { title: "Cross-Platform", desc: "Android, Windows, macOS, SBCs, HMDs" },
    { title: "Shielded Security", desc: "AES-256 encryption + hardware binding" },
    { title: "Immersive-Ready", desc: "Optimized for VR, AR, and spatial media" },
    { title: "Ultra High Quality", desc: "Supports Ultra High Playback at 4K and 8K" },
    { title: "Future Ready", desc: "HoloBox, VR Lounges, and Experience Centres" },
    { title: "Unified Dashboard", desc: "Monitor licenses, analytics, and playback health" },
  ];

  return (
    <section className="bg-[#EFFF00] py-16 px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Features */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-black">Key Features</h2>
          <div className="space-y-4">
            {features.map((item, i) => (
              <div key={i} className="flex">
                <div className="bg-black text-white font-semibold px-4 py-2 rounded-l-md min-w-[160px]">
                  {item.title}
                </div>
                <div className="bg-white text-black px-4 py-2 rounded-r-md flex-1">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="relative flex justify-center">
          {/* DRM Badge */}
          <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            DRM <br /> AES 256
          </div>
          <img
            src="/assets/myiio-box.png"
            alt="MYIIO Device"
            className="rounded-2xl shadow-xl max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
