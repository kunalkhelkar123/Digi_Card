import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className="AboutUs py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="mt-20 flex flex-col md:flex-row items-center md:space-x-8">
                    {/* Left Section */}
                    <div className="md:w-2/4 mb-15 md:mb-15">
                        <div className="HeadingSection mb-6">
                            <div className="HeadingSmall text-blue-800 font-semibold mb-2">About Us</div>
                            <div className="HeadingMain">
                                <h2 className="text-3xl font-bold mb-4">Share via Link, QR or Scan</h2>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Share your card digitally via link on WhatsApp, SMS, Email, or Social Media, or share your QR or Scan. Treat this card as a Mini Website and attach a PDF Brochure, Online Appointment, WhatsApp Catalogue, or any other link. One link for everything. Your Digital Visiting Card can be easily updated with our user-friendly dashboard, so you wont need to re-print a business card again. This is the last Business Card you will ever need.
                            </p>
                        </div>


                        <Link href="/create-profile" passHref>
                            <button className="ml-40 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                                <i className="fab fa-whatsapp mr-2"></i>Create Your Card
                            </button>
                        </Link>

                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2">
                        <div className="video-container mb-6">

                            <Image
                                src="/images/Digitalcard2.jpg" // Replace with your demo card image path
                                alt="Demo Business Card"
                                layout="responsive" // This will make the image responsive
                                width={700} // Width in pixels for aspect ratio calculation
                                height={400} // Height in pixels for aspect ratio calculation
                                className="w-3/4 md:w-2/4 h-auto object-contain rounded-xl shadow-xl"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
