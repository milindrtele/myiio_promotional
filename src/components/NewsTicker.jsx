import { useEffect, useRef } from "react";

export default function NewsTicker({ messages }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1; // speed
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0; // reset loop
        }
      }
      animation = requestAnimationFrame(scroll);
    };

    animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#363636] text-white overflow-hidden whitespace-nowrap py-2">
      <div className="inline-flex space-x-8 px-4">
        {messages.map((msg, i) => (
          <span key={i} className="text-sm md:text-base">
            🔔 {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
