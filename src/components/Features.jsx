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

  const icons_and_names = [
    { file: "myiio_icon_flex_licensing.png", name: "Flexible Licensing" },
    { file: "myiio_icon_custom_branding.png", name: "Custom Branding" },
    { file: "myiio_icon_remote_kiosk.png", name: "Remote Kiosk" },
    { file: "myiio_icon_holobox.png", name: "Holobox" },
    { file: "myiio_icon_ultrahd.png", name: "Ultra HD" },
    { file: "myiio_icon_secure_media.png", name: "Secure Media" },
    { file: "myiio_icon_enterprise.png", name: "Enterprise" },
    { file: "myiio_icon_hybrid_access.png", name: "Hybrid Access" },
  ];

  return (
    <section className="w-full bg-white py-8 px-4 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_2px,transparent_2px,transparent_8px)] ">
      <div className="grid grid-cols-4 landscape:grid-cols-8 portrait:h-[max-content] justify-center items-center w-[90%] landscape:w-[75%] m-auto">
        {icons_and_names.map((icon, i) => (
          <div
            key={i}
            className="w-[8vh] h-[16vh] landscape:w-[8vw] landscape:h-[8vw] flex flex-col items-center justify-between m-auto my-4">
            <img
              style={{}}
              src={`/assets/new_icons_square/${icon.file}`}
              alt={icon.name}
              className="max-w-[100%] max-h-[100%]"
            />
            <div className="w-[100%] h-[30%]">
              <p className="bg-white font-semibold  shadow-lg text-center">
                {icon.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureIcons;
