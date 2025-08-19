// src/components/UseCases.jsx
export default function UseCases() {
  const cases = [
    { title: "Healthcare & Medical", desc: "Secure delivery of surgical training videos and pharmaceutical presentations." },
    { title: "Retail & Fashion", desc: "Encrypted product launch videos and multi-location promotional campaigns." },
    { title: "Museum & Exhibition", desc: "Protected multimedia archives for exhibits and galleries." },
    { title: "Government Agencies", desc: "Secure briefing and confidential document distribution." },
    { title: "Corporate & Industrial Training", desc: "Corporate knowledge portals, employee product, and skill-based training." },
    { title: "Cinemas & Studios", desc: "Compliant pre-release screenings and OTT content distribution." },
    { title: "Hospitality & Tourism", desc: "Interactive promo media for hotels, resorts, travel, and tourist showcases." },
    { title: "Education & Institutions", desc: "LMS & e-learning content for schools, universities, and training centres." },
  ];

  return (
    <section className="bg-[#143D3D] text-white py-16 px-8">
      {/* Enterprise Use Cases */}
      <div className="max-w-5xl mx-auto bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wide">
          Enterprise and Professional Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((item, i) => (
            <div key={i} className="flex">
              <div className="bg-[#067a78] text-white font-semibold px-4 py-2 rounded-l-md min-w-[180px]">
                {item.title}
              </div>
              <div className="bg-white text-black px-4 py-2 rounded-r-md flex-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seamless Integration Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-16">
        {/* Left: Text Block */}
        <div className="bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-8 shadow-lg">
          <div className="hover_icon w-[20%] h-[20%] absolute -top-10 left-6 px-4 py-2"></div>
          <div className="flex items-start gap-3 mb-4">
            {/* <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold">☰</span>
            </div> */}
            <h3 className="text-xl font-semibold">
              Seamless integration with HoloBox, Virtual Experience Centres, and VR Lounges
            </h3>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Enabling secure, high-quality immersive experiences for entertainment, training, and
            exhibitions. MYIIO Cloud ensures seamless integration with platforms like HoloBox,
            Virtual Experience Centres, and VR Lounges. From showcasing products in lifelike holographic
            displays to delivering VR-based learning and interactive exhibitions, it provides a ready
            backbone for content creators, enterprises, and educators to engage their audiences like
            never before.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          {/* <img
            src="/assets/holo-x.png"
            alt="Holo-X"
            className="rounded-xl shadow-xl max-w-xs"
          /> */}
          <div className="holox_image"></div>
        </div>
      </div>
    </section>
  );
}
