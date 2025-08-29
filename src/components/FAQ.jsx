import { useState } from "react";

const faqs = [
  {
    question: "What types of media does MYiiO Cloud support?",
    answer:
      "MYiiO Cloud supports a wide range of formats including standard HD, 4K, 8K, stereoscopic 3D SBS, VR180, and VR360° video. It is optimized for head-mounted displays (Apple Vision Pro, Meta Quest, HTC Vive, Pico, Magic Leap, etc.) and also integrates with holographic displays such as Looking Glass, HoloConnects, and Holobox devices.",
  },
  {
    question:
      "How can I update remote app or install/update other apps remotely?",
    answer:
      "MYiiO Cloud provides SDKs and APIs for custom integration, allowing enterprises to remotely manage apps and immersive applications. With smart distribution through MuZziio SDUs or cloud-hosted vaults, apps and updates can be securely pushed to devices without requiring physical intervention.",
  },
  {
    question: "How can content be updated remotely?",
    answer:
      "Content can be distributed and updated remotely through MYiiO Cloud using encrypted vaults or via MuZziio Smart Distribution Units (SDUs). Updates can be managed with DRM controls such as time-limited or geo-fenced access, ensuring only authorized users and devices receive the new content.",
  },
  {
    question: "Does MYiiO Cloud support white-label solutions?",
    answer:
      "Yes. MYiiO Cloud offers full white-label options for institutions and enterprises, enabling custom branding of the player, apps, and distribution platform. Enterprises can deploy MYiiO under their own identity while retaining MYiiO’s secure infrastructure.",
  },
  {
    question: "Can offline playback be supported by MYiiO cloud?",
    answer:
      "Yes. MYiiO supports offline playback through device-bound encryption and DRM. This makes it ideal for air-gapped or high-security environments where internet connectivity is restricted, such as exhibitions, confidential screenings, and government use cases.",
  },
  {
    question: "What are the various licensing models for MYiiO cloud?",
    answer:
      "MYiiO supports flexible licensing models including single-use, time-limited, geo-fenced, or lifetime access. Additional options include device-bound playback, NFC-based access (per device or per user), and playback count restrictions. Licensing can be tailored for enterprises, studios, or institutions.",
  },
];

// const faqs = [
//   {
//     question: "What types of media does MYiiO Cloud support?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     question:
//       "How can I update remote app or install/update other apps remotely?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     question: "How can content be updated remotely?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     question: "Does MYiiO Cloud support white-label solutions?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Praesent libero.",
//   },
//   {
//     question: "Can offline playback be supported by MYiiO cloud?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec.",
//   },
//   {
//     question: "What are the various licensing models for MYiiO cloud?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
//   },
//   {
//     question: "What are the various licensing models for MYiiO cloud?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
//   },
//   {
//     question: "How can content be updated remotely?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet orci eget eros.",
//   },
// ];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#143D3D] text-white py-12 px-6">
      <h2 className="text-center text-[4vh] landscape:text-[4vw] text-[#57c2c0] font-bold mb-10">
        F. A. Q.
      </h2>
      <div className="mx-auto bg-linear-to-t from-[#1d3d3d] to-[#07080d] border-[5px] border-[#355453] relative rounded-3xl p-8 shadow-lg w-[95%] landscape:w-[72%] mb-15">
        <div className="w-[95%] landscape:w-[85%] mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[#234a4a] rounded-lg shadow p-4 cursor-pointer">
              <div
                className="flex text-[1.5vh] landscape:text-[1.25vw] items-center"
                onClick={() => toggleFAQ(index)}>
                <span className="font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
                <span className="ml-5">{item.question}</span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-[1.5vh] landscape:text-[1.25vw] text-gray-200 leading-relaxed text text-left ml-9">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
