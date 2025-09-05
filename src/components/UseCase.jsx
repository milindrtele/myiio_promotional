import { useState, useRef, useEffect } from "react";
import { Carousel } from "flowbite-react";

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

  const hoveringItemRef = useRef(null);
  const [itemHovered, setItemHovered] = useState(null);

  const clickedItemRef = useRef(null);
  const [itemClicked, setItemClicked] = useState(false);

  return (
    <section className="bg-[#143D3D] text-white py-16 px-8">
      {/* Enterprise Use Cases */}
      <div className="w-[100%] landscape:w-[80%] mx-auto bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[10px] border-[#355453] relative rounded-3xl p-8 shadow-lg">
        <h2 className="text-[2vh] landscape:text-[2vw] text-[#57c2c0]  font-bold mb-6 text-center uppercase tracking-wide">
          Enterprise and Professional Use Cases
        </h2>
        <div
          className={`grid portrait:gap-8 landscape:gap-x-0 landscape:gap-y-8 text-[1.25vh] landscape:text-[1.25vw] landscape:text-base landscape:w-[100%] transition-all duration-500 ease-in-out ${
            itemHovered % 2 === 0
              ? "landscape:grid-cols-[80%_20%]"
              : "landscape:grid-cols-[20%_80%]"
          }`}>
          {cases.map((item, i) => (
            <div
              ref={hoveringItemRef}
              key={i}
              onMouseEnter={() => setItemHovered(i)}
              onMouseLeave={() => setItemHovered(null)}
              onClick={() => setItemClicked(i)}
              className={`portrait:flex portrait:flex-col landscape:w-[auto] h-[100px] landscape:h-[100px] items-center transition-all duration-500 ease-in-out ${
                i % 2 === 0 ? "" : "landscape:flex-row-reverse"
              } ${itemHovered === i ? "landscape:w-[50%]" : "landscape:w-[10%]"}
              ${
                itemClicked === i
                  ? "portrait:h-[max-content]"
                  : "portrait:h-[100px]"
              }`}>
              {/* Left Label */}
              <div
                className={`absolute z-[2] ml-0 mr-0 landscape:ml-0 bg-teal-700 text-white px-4 py-3 font-semibold relative w-[80%] landscape:max-w-[150px] landscape:w-[10vw] portrait:h-[5vh] landscape:h-[100%] flex items-center portrait:justify-center text-[1.5vh] landscape:text-[0.9vw] transition-all duration-500 ease-in-out ${
                  i % 2 === 0
                    ? "landscape:justify-start landscape:ml-0 landscape:mr-0 text-start"
                    : "landscape:justify-end landscape:ml-auto landscape:mr-0 text-end"
                } `}>
                {item.title}
                {/* Little notch */}
                <div
                  className={`absolute z-[0] hidden landscape:block   top-[35%] landscape:top-0 translate-y-[0]  w-0 h-0 
                border-t-[10px] border-t-transparent 
                border-b-[10px] border-b-transparent
                border-l-[10px] 
                border-[#949699]
                ${
                  i % 2 === 0
                    ? "right-0 translate-x-[100%]"
                    : "left-0 translate-x-[-100%] rotate-180"
                }`}></div>
              </div>

              {/* Right Content */}
              {/* // ${
                //   itemHovered % 2 === 0 && i % 2 === 0
                //     ? ""
                //     : "landscape:w-[70%] bg-gradient-to-r from-gray-100 to-gray-300"
                // } */}
              <div
                className={`absolute landscape:top-[-90%] w-[70%] 
                relative z-[1] flex bg-gradient-to-b from-white to-gray-100 text-gray-800 px-6 py-4 
                rounded-b-2xl landscape:rounded-none  shadow-sm h-[85%] 
                landscape:h-[80%] text-[1.5vh] landscape:text-[0.8vw] transition-all duration-500 ease-in-out
                landscape:w-[90%] bg-gradient-to-r from-gray-100 to-gray-300 text-center justify-center item-center
                ${itemClicked === i ? "portrait:h-[85%]" : "portrait:h-[10%]"}
                ${
                  i % 2 === 0
                    ? "landscape:ml-0 landscape:mr-auto landscape:rounded-r-2xl justify-end item-end"
                    : "landscape:mr-0 landscape:ml-auto landscape:rounded-l-2xl justify-center item-center"
                }
                `}>
                <p
                  className={`portrait:text-[1.5vh] landscape:text-[1vw] transition-all landscape:text-center justify-center item-center h-[max-content] m-auto 
                    ${
                      i % 2 === 0
                        ? "landscape:text-right justify-center item-center mr-[5%]"
                        : "landscape:text-left justify-center item-center ml-[5%]"
                    }
                    ${
                      itemHovered === null && i % 2 === 0
                        ? "landscape:opacity-100"
                        : "landscape:opacity-0"
                    }

                  ${
                    itemHovered !== null && itemHovered % 2 === i % 2
                      ? "landscape:opacity-100 duration-500 delay-500 ease-in-out"
                      : "landscape:opacity-0"
                  }
                  ${
                    itemClicked === i
                      ? "portrait:opacity-100"
                      : "portrait:opacity-0"
                  }
                `}>
                  {item.desc}
                </p>
              </div>
              {/* <div className="bg-white text-black px-4 py-2 rounded-r-xl flex-1">
                {item.desc}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Seamless Integration Section */}
      <div className="grid landscape:grid-cols-[60%_40%] gap-8 items-center w-[95%] landscape:w-[72%] mx-auto mt-20 landscape:mt-16">
        {/* Left: Text Block */}
        <div className="bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-8 shadow-lg">
          <div className="hover_icon w-[20%] h-[20%] absolute -top-15 landscape:-top-10 left-6 px-4 py-2"></div>
          <div className="flex items-start gap-3 mb-4">
            {/* <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold">☰</span>
            </div> */}
            <h3 className="text-[2vh] landscape:text-[1.5vw] font-semibold text-[#57c2c0] mt-[10%]">
              Seamless integration with HoloBox, Virtual Experience Centres, and
              VR Lounges
            </h3>
          </div>
          <p className="text-gray-200 text-[1.5vh] landscape:text-[1.2vw] leading-relaxed">
            Enabling secure, high-quality immersive experiences for
            entertainment, training, and exhibitions. MYiiO Cloud ensures
            seamless integration with platforms like HoloBox, Virtual Experience
            Centres, and VR Lounges. From showcasing products in lifelike
            holographic displays to delivering VR-based learning and interactive
            exhibitions, it provides a ready backbone for content creators,
            enterprises, and educators to engage their audiences like never
            before.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex flex-1 justify-end h-[100%] portrait:h-[60vh]">
          {/* <img
            src="/assets/holo-x.png"
            alt="Holo-X"
            className="rounded-xl shadow-xl max-w-xs"
          /> */}
          {/* <div className="holox_image mt-[20%] landscape:mt-0 landscape:mt-auto"></div> */}

          {/* <div className="h-56 w-[100%] sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img src="/assets/myiio_img_101.png" alt="Image 1" />
              <img src="/assets/myiio_img_102.png" alt="Image 2" />
              <img src="/assets/myiio_img_103.png" alt="Image 3" />
              <img src="/assets/myiio_img_104.png" alt="Image 4" />
            </Carousel>
          </div> */}

          <div className="w-full h-[100%] rounded-lg shadow-md ">
            <div
              data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
    }'
              className="relative w-full h-full">
              <div className="hs-carousel relative overflow-hidden w-full min-h-64 h-full rounded-lg">
                <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <div className="hs-carousel-slide">
                    <div className="flex justify-center h-full p-6">
                      <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white w-full h-full">
                        <div className="holox_image_2 w-full h-full"></div>
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-slide">
                    <div className="flex justify-center h-full p-6 ">
                      <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white w-full h-full">
                        <div className="holox_image_2 w-full h-full"></div>
                      </span>
                    </div>
                  </div>
                  <div className="hs-carousel-slide">
                    <div className="flex justify-center h-full p-6 ">
                      <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white w-full h-full">
                        <div className="holox_image_2 w-full h-full"></div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span className="text-2xl" aria-hidden="true">
                  <svg
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                type="button"
                className="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                  <svg
                    className="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </button>

              <div className="hs-carousel-pagination flex justify-center absolute bottom-1 start-0 end-0 space-x-2 mt-[5%]"></div>
            </div>
          </div>

          {/* <div className="holox_image mt-[20%] landscape:mt-0 landscape:mt-auto"></div> */}
        </div>
      </div>
    </section>
  );
}
