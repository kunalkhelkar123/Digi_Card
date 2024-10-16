import Link from 'next/link';
import Navbar from './navbar';
import Banner from './banner';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import DigitalBusinessCardFeatures from './DigitalBusinessCardFeatures';
import AboutUs from './AboutUs';
export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <AboutUs />
            <HowItWorks />
            <DigitalBusinessCardFeatures />
            <Footer />

            {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
            
            <h1 className="text-4xl font-bold mb-6">Welcome to the Platform</h1>
            <div className="flex flex-row space-x-4">
                <Link href="/create-profile" className="py-2 px-6 bg-blue-500 text-white text-center font-semibold rounded-lg hover:bg-blue-600">
                    Create Profile
                </Link>
                <Link href="/admin-login" className="py-2 px-6 bg-green-500 text-white text-center font-semibold rounded-lg hover:bg-green-600">
                    Admin
                </Link>
                <Link href="/contact" className="py-2 px-6 bg-red-500 text-white text-center font-semibold rounded-lg hover:bg-red-600">
                    Contact Us
                </Link>
            </div>
        </div> */}
        </>
    );
}
