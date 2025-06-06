import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
    return (
        <div
            className="relative bg-cover bg-center h-screen flex flex-col md:flex-row items-center  justify-between sm-pt-0 pt-[280px] sm-pb-0 pb-[590px] md:px-16"
            style={{
                backgroundImage: "url('/images/DG!.jpg')", 
                opacity:40, // Replace with your actual background image path
            }}
        >
            {/* Black Overlay for effect */}
            {/* <div className="absolute inset-0 text-red-800 bg-black bg-opacity-20">Heading</div> */}

            {/* Content section */}
            <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
                <h1 className="mt-20 text-white text-3xl md:text-5xl font-bold mb-6">
                    The Ultimate Business Card for Todays Digital World
                </h1>

                <p className="text-white font-bold text-base md:text-lg mb-4">
                    A smart, mobile-friendly Digital Business Card that doubles as your Mini Website and Personal Profile Page.
                </p>

                <p className="text-white font-bold text-base md:text-lg mb-6">
                    With just one click, connect instantly via Call, WhatsApp, Location, Social Media, YouTube, and more. No app required!
                </p>

                {/* Action buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Link href="/create-profile" passHref>
                        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                            Create Your Card
                        </button>
                    </Link>
                    <Link href="/AvinashJadhav/" passHref>
                        <button target="_blank" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                            See Demo Card
                        </button>
                    </Link>
                </div>
            </div>

            {/* Demo card image */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
             

                {/* <Image
                    src="/images/sliderimg.png" // Replace with your demo card image path
                    alt="Demo Business Card"
                    // layout="responsive" // This will make the image responsive
                    width={-100} // Width in pixels for aspect ratio calculation
                    height={-200} // Height in pixels for aspect ratio calculation
                    className="mt-20"
                /> */}

            </div>
        </div>
    );
}
