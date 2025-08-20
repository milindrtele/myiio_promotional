function FeatureIcons() {
  const icons = [
    "myiio_icon_flex_licensing.png",
    "myiio_icon_custom_branding.png",
    "myiio_icon_remote_kiosk.png",
    "myiio_icon_holobox.png",
    "myiio_icon_ultrahd.png",
    "myiio_icon_secure_media.png",
    "myiio_icon_interprise.png",
    "myiio_icon_hybrid_access.png",
  ];

  return (
    <section className="w-full bg-white py-8 px-4 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_2px,transparent_2px,transparent_8px)] ">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-center items-center w-[75%] m-auto">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="w-28 h-28 md:w-34 md:h-34 flex items-center justify-center m-auto"
          >
            <img
              src={`/assets/${icon}`}
              alt={icon}
              className="max-w-[70%] max-h-[70%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureIcons;
