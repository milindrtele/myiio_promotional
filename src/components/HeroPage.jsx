function HeroPage() {
  return (
    <>
      {/* Main Section */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
        {/* Left: Image + Badge */}
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -left-6 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            NFC READY
          </div>
          <img
            src="/assets/myiio-box.png"
            alt="MYIIO Device"
            className="rounded-2xl shadow-xl max-w-sm"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-black">
            About MYIIO Cloud
          </h2>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Take full control of your media — encrypted playback, secure
            distribution, and immersive experiences — streamlined for enterprise
            use cases through a next-gen centralized platform, all without
            compromise. Deploy-ready for POS systems, digital kiosks, interactive
            displays, VR lounges, and experience centres, with built-in
            automation and simplified deployment — eliminating time lost to
            integration and overcoming technical challenges.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Request a DEMO
            </button>
            <button className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Explore MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
