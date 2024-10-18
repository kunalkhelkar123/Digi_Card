export default function Banner() {
    return (
        <div
            className="relative bg-cover bg-center h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16"
            style={{
                backgroundImage: "url('/images/BannerImage1.jpg')", // Replace with your actual background image path
            }}
        >
            {/* Black Overlay for effect */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Content section */}
            <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
                <h1 className="mt-20 text-white text-3xl md:text-5xl font-bold mb-6">
                    The Ultimate Business Card for Today’s Digital World
                </h1>

                <p className="text-white font-bold text-base md:text-lg mb-4">
                    A smart, mobile-friendly Digital Business Card that doubles as your Mini Website and Personal Profile Page.
                </p>

                <p className="text-white font-bold text-base md:text-lg mb-6">
                    With just one click, connect instantly via Call, WhatsApp, Location, Social Media, YouTube, and more. No app required!
                </p>

                {/* Action buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a href="/create-profile" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                        Create Your Card
                    </a>
                    <a href="/Avinash%20Jadhav/" target="_blank" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                        See Demo Card
                    </a>
                </div>
            </div>

            {/* Demo card image */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                    src="/images/sliderimg.png" // Replace with your demo card image path
                    alt="Demo Business Card"
                    className="w-3/4 md:w-2/4 h-auto object-contain"
                />
            </div>
        </div>
    );
}
