import { useState } from "react";

const faqs = [
  {
    question: "What types of media does MYIIO Cloud support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question:
      "How can I update remote app or install/update other apps remotely?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How can content be updated remotely?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Does MYIIO Cloud support white-label solutions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Praesent libero.",
  },
  {
    question: "Can offline playback be supported by MYIIO cloud?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec.",
  },
  {
    question: "What are the various licensing models for MYIIO cloud?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
  },
  {
    question: "What are the various licensing models for MYIIO cloud?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
  },
  {
    question: "How can content be updated remotely?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet orci eget eros.",
  },
];

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
