
function FeatureIcons() {
    return (
        <section className="w-full bg-white py-8 px-4 bg-[repeating-linear-gradient(135deg,#ccc_0px,#ccc_2px,transparent_2px,transparent_8px)]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="w-20 h-20 md:w-24 md:h-24 bg-white border rounded-lg shadow flex items-center justify-center"
                    >
                        {/* Replace with <img src="/assets/iconX.png" alt="" /> */}
                        <span className="text-gray-400">Icon {i + 1}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FeatureIcons;