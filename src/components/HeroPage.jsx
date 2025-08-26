function HeroPage() {
  return (
    <>
      {/* Main Section */}
      <section className="grid landscape:grid-cols-2 gap-10 px-8 py-16 items-center w-[100%] landscape:w-[90%] h-[max-content] m-auto mt-[1%]">
        {/* Left: Image + Badge */}
        {/* <div className="w-[max-content] h-[max-content] m-auto relative"> */}
        <div className="mx-auto relative flex justify-center w-[75vw] h-[75vw] landscape:w-[80%] landscape:h-[50vh]">
          <div className="box_image_nfc w-[20%] h-[20%] absolute -top-6 -left-6 px-4 py-2"></div>
          <div className="box_image"></div>
        </div>
        {/* </div> */}

        {/* Right: Text */}
        <div className="mt-[15%] md:mt-0 mx-auto flex flex-col w-[100%] landscape:w-[100%] justify-center">
          <h2 className="text-4xl text-[4vh] landscape:text-[4vw] font-extrabold mb-6 text-black text-center">
            About MYIIO Cloud
          </h2>
          <p className="text-[1.75vh] landscape:text-[1.25vw] text-black mb-8 leading-relaxed text-justify">
            Take full control of your media — encrypted playback, secure
            distribution, and immersive experiences — streamlined for enterprise
            use cases through a next-gen centralized platform, all without
            compromise. Deploy-ready for POS systems, digital kiosks,
            interactive displays, VR lounges, and experience centres, with
            built-in automation and simplified deployment — eliminating time
            lost to integration and overcoming technical challenges.
          </p>
          <div className="flex flex-col landscape:flex-row justify-center items-center text-[1.75vh] landscape:text-[1.25vw]">
            <button className="m-auto w-[90%] landscape:w-[40%] px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Request a DEMO
            </button>
            <button className="m-auto mt-[10%] w-[90%] landscape:mt-0 landscape:w-[40%] px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Explore MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
