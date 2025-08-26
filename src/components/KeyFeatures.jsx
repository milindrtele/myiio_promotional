// src/components/KeyFeatures.jsx
export default function KeyFeatures() {
  const features = [
    {
      title: "Hybrid Access",
      desc: "Stream online or sync offline protected viewing",
    },
    {
      title: "Flexible Licensing",
      desc: "Time-based, device-bound, play-count restricted",
    },
    { title: "Cross-Platform", desc: "Android, Windows, macOS, SBCs, Hxls" },
    {
      title: "Shielded Security",
      desc: "AES-256 encryption + hardware binding",
    },
    {
      title: "Immersive-Ready",
      desc: "Optimized for VR, AR, and spatial media",
    },
    {
      title: "Ultra High Quality",
      desc: "Supports Ultra High Playback at 4K and 8K",
    },
    {
      title: "Future Ready",
      desc: "HoloBox, VR Lounges, and Experience Centres",
    },
    {
      title: "Unified Dashboard",
      desc: "Monitor licenses, analytics, and playback health",
    },
  ];

  return (
    <section className="bg-[#EFFF00] py-16 px-8">
      <div className="grid landscape:grid-cols-[60%_40%] gap-12 items-center w-[95%] landscape:w-[80%] mx-auto">
        {/* Left: Features */}
        <div>
          <h2 className="text-[3vh] landscape:text-[2vw] font-bold mb-8 text-black">
            Key Features
          </h2>
          <div className="space-y-4 text-[1.5vh] landscape:text-[1vw] text-left text-wrap landscape:text-nowrap">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex flex-col landscape:flex-row border-2 border-[#000000]">
                <div className="bg-black text-white font-semibold px-4 py-2 w-[100%] landscape:w-[35%]">
                  {item.title}
                </div>
                <div className="bg-white text-black px-4 py-2 w-[max-content] flex-1 portrait:w-[100%] landscape:w-[65%]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Image */}
        {/* <div className="mx-auto landscape:mr-0 relative flex justify-end w-[80%] h-[max-content]"> */}
        <div className="mx-auto relative flex justify-center w-[75vw] h-[75vw] landscape:w-[80%] landscape:h-[60vh] landscape:mt-[9vw]">
          <div className="box_image_drm w-[20%] h-[20%] absolute -top-6 -left-6 px-4 py-2"></div>
          <div className="box_image_key_features"></div>
          {/* h-[5%] landscape:h-[20%] */}
        </div>

        {/* <div className="mx-auto relative flex justify-center w-[60vw] h-[60vw] landscape:w-[80%] landscape:h-[50vh]">
          <div className="box_image_nfc w-[20%] h-[20%] absolute -top-6 -left-6 px-4 py-2"></div>
          <div className="box_image"></div>
        </div> */}
      </div>
    </section>
  );
}
