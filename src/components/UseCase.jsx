// src/components/UseCases.jsx
export default function UseCases() {
  const cases = [
    {
      title: "Healthcare & Medical",
      desc: "Secure delivery of surgical training videos and pharmaceutical presentations.",
    },
    {
      title: "Retail & Fashion",
      desc: "Encrypted product launch videos and multi-location promotional campaigns.",
    },
    {
      title: "Museum & Exhibition",
      desc: "Protected multimedia archives for exhibits and galleries.",
    },
    {
      title: "Government Agencies",
      desc: "Secure briefing and confidential document distribution.",
    },
    {
      title: "Corporate & Industrial Training",
      desc: "Corporate knowledge portals, employee product, and skill-based training.",
    },
    {
      title: "Cinemas & Studios",
      desc: "Compliant pre-release screenings and OTT content distribution.",
    },
    {
      title: "Hospitality & Tourism",
      desc: "Interactive promo media for hotels, resorts, travel, and tourist showcases.",
    },
    {
      title: "Education & Institutions",
      desc: "LMS & e-learning content for schools, universities, and training centres.",
    },
  ];

  return (
    <section className="bg-[#143D3D] text-white py-16 px-8">
      {/* Enterprise Use Cases */}
      <div className="w-[100%] xl:w-[72%] mx-auto bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[10px] border-[#355453] relative rounded-3xl p-8 shadow-lg">
        <h2 className="xl-text-5xl text-[#57c2c0]  font-bold mb-6 text-center uppercase tracking-wide">
          Enterprise and Professional Use Cases
        </h2>
        <div className="grid xl:grid-cols-2 gap-4 text-sm xl:text-base">
          {cases.map((item, i) => (
            <div
              key={i}
              className="flex flex-col xl:flex-row h-[max-content] xl:h-[100px] items-center border-b border-[#355453] last:border-b-0"
            >
              {/* Left Label */}
              <div className="ml-0 mr-auto xl:ml-auto bg-teal-700 text-white px-4 py-3 font-semibold relative w-[150px] h-[100%] flex items-center justify-center">
                {item.title}
                {/* Little notch */}
                <div
                  className="absolute right-0 top-[35%] xl:top-0 translate-y-[0] translate-x-[100%] w-0 h-0 
                border-t-[10px] border-t-transparent 
                border-b-[10px] border-b-transparent 
                border-l-[10px] 
                border-[#949699]"
                ></div>
              </div>
              {/* <div className="bg-[#067a78] text-white font-semibold px-4 py-2 rounded-l-xl min-w-[180px] w-[200px]">
                {item.title}
              </div> */}
              {/* Right Content */}
              <div className="ml-0 mr-auto xl:ml-auto w-[100%] xl:w-auto relative z-[1] flex-1 flex bg-gradient-to-b from-white to-gray-100 text-gray-800 px-6 py-4 rounded-r-2xl shadow-sm h-[85%] xl:h-[80%] m-auto items-center justify-center">
                <p className="items-center justify-center">{item.desc}</p>
              </div>
              {/* <div className="bg-white text-black px-4 py-2 rounded-r-xl flex-1">
                {item.desc}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Seamless Integration Section */}
      <div className="grid xl:grid-cols-2 gap-10 items-center w-[95%] md:w-[72%] mx-auto mt-20 md:mt-16">
        {/* Left: Text Block */}
        <div className="bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-8 shadow-lg">
          <div className="hover_icon w-[20%] h-[20%] absolute -top-18 md:-top-10 left-6 px-4 py-2"></div>
          <div className="flex items-start gap-3 mb-4">
            {/* <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold">☰</span>
            </div> */}
            <h3 className="text-xl font-semibold">
              Seamless integration with HoloBox, Virtual Experience Centres, and
              VR Lounges
            </h3>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed">
            Enabling secure, high-quality immersive experiences for
            entertainment, training, and exhibitions. MYIIO Cloud ensures
            seamless integration with platforms like HoloBox, Virtual Experience
            Centres, and VR Lounges. From showcasing products in lifelike
            holographic displays to delivering VR-based learning and interactive
            exhibitions, it provides a ready backbone for content creators,
            enterprises, and educators to engage their audiences like never
            before.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-end">
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
