// src/components/FreeTrial.jsx
export default function FreeTrial() {
  return (
    <section className="w-full py-6 px-6 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_2px,transparent_2px,transparent_8px)]">
      <div className="w-[72%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 h-[150px]">
        {/* Left: Text */}
        <div className="free_trial_img w-[100%] justify-center text-center"></div>
        {/* <h2 className="text-xl md:text-2xl font-medium text-black text-center md:text-left">
          Power your content with{" "}
          <span className="font-extrabold">MYIIO Cloud</span>
        </h2> */}

        {/* Right: Button */}
        <a
          href="#trial"
          className="w-[100%] xl:w-[20%] justify-center text-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
          Start Your <span className="underline">Free Trial</span>
        </a>
      </div>
    </section>
  );
}
