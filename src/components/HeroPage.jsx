function HeroPage() {
  return (
    <>
      {/* Main Section */}
      <section className="grid xl:grid-cols-2 gap-10 px-8 py-16 items-center w-[95%] xl:w-[90%] h-[max-content] m-auto mt-[5%]">
        {/* Left: Image + Badge */}
        {/* <div className="w-[max-content] h-[max-content] m-auto relative"> */}
        <div className="mx-auto relative flex justify-center w-[75vw] h-[75vw] xl:w-[80%] xl:h-[50vh]">
          <div className="box_image_nfc w-[20%] h-[20%] absolute -top-6 -left-6 px-4 py-2"></div>
          <div className="box_image"></div>
        </div>
        {/* </div> */}

        {/* Right: Text */}
        <div className="mt-[15%] md:mt-0 mx-auto flex flex-col w-[100%] xl:w-[100%] justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-black text-center">
            About MYIIO Cloud
          </h2>
          <p className="text-xl text-black mb-8 leading-relaxed text-justify">
            Take full control of your media — encrypted playback, secure
            distribution, and immersive experiences — streamlined for enterprise
            use cases through a next-gen centralized platform, all without
            compromise. Deploy-ready for POS systems, digital kiosks,
            interactive displays, VR lounges, and experience centres, with
            built-in automation and simplified deployment — eliminating time
            lost to integration and overcoming technical challenges.
          </p>
          <div className="flex flex-col xl:flex-row justify-center items-center ">
            <button className="m-auto w-[90%] xl:w-[40%] px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Request a DEMO
            </button>
            <button className="m-auto mt-[10%] w-[90%] xl:mt-0 xl:w-[40%] px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              Explore MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
