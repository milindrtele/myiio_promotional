function FeatureIcons() {
  const icons = [
    "myiio_icon_flex_licensing.png",
    "myiio_icon_custom_branding.png",
    "myiio_icon_remote_kiosk.png",
    "myiio_icon_holobox.png",
    "myiio_icon_ultrahd.png",
    "myiio_icon_secure_media.png",
    "myiio_icon_enterprise.png",
    "myiio_icon_hybrid_access.png",
  ];

  return (
    <section className="w-full bg-white py-8 px-4 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_2px,transparent_2px,transparent_8px)] ">
      <div className="grid grid-cols-4 landscape:grid-cols-8 justify-center items-center w-[90%] landscape:w-[75%] m-auto">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="w-[8vh] h-[8vh] h-28 landscape:w-[8vw] landscape:h-[8vw] flex items-center justify-center m-auto my-4">
            <img
              src={`/assets/new_icons/${icon}`}
              alt={icon}
              className="max-w-[100%] max-h-[100%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureIcons;
