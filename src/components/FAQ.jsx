import { useState } from "react";

const faqs = [
  {
    question: "What types of media does MYIIO Cloud support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    question:
      "How can I update remote app or install/update other apps remotely?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.",
  },
  {
    question: "How can content be updated remotely?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum imperdiet.",
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
      <h2 className="text-center text-3xl font-bold mb-10">F. A. Q.</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#256D6D] rounded-lg shadow p-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
                <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
              <span className="font-medium justify-start">{item.question}</span>
              
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;