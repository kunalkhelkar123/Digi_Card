import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

export default function DigitalBusinessCardFeatures() {
    return (
        <div className="DigitalBusinessCard  pb-12 mt-10">
            <div className="container mx-auto px-4">
                <div className="HeadingSection text-center mb-12">
                    <h2 className="text-3xl font-bold">Digital Business Card Features</h2>
                </div>
                <div className="PaddingTop">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Column */}
                        <div className="flex flex-col w-full md:w-1/3 px-4 mt-5">
                            <div className="featurebox relative mb-6 flex items-start">
                                <p className="icon flex items-center justify-center bg-blue-800 text-white rounded-full h-12 w-44 transition-all ease-in-out duration-500 hover:bg-green-500"> {/* Increased width */}
                                    <i className="fas fa-share-alt"></i>
                                </p>
                                <p className="text ml-4"> {/* Adjusted margin for text */}
                                    <span className="heading font-semibold text-lg text-blue-800"> 3 Ways To Share: </span>
                                    Digitally via Link, Tap Or Scan. Share your card via Link on WhatsApp or Scan QR Code to share your Digital Visiting Card.
                                </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="featurebox relative mb-6 flex items-start mt-5">
                                <p className="icon flex items-center justify-center bg-blue-800 text-white rounded-full h-12 w-32 transition-all ease-in-out duration-500 hover:bg-green-500"> {/* Increased width */}
                                    <i className="fas fa-mobile-alt"></i>
                                </p>
                                <p className="text ml-4"> {/* Adjusted margin for text */}
                                    <span className="heading font-semibold text-lg text-blue-800"> One Click Action Buttons: </span>
                                    Click to Call, WhatsApp, Mail, Save Contact & navigate to your location in just 1 click.
                                </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="featurebox relative mb-6 flex items-start mt-5">
                                <p className="icon flex items-center justify-center bg-blue-800 text-white rounded-full h-12 w-36 transition-all ease-in-out duration-500 hover:bg-green-500"> {/* Increased width */}
                                    <i className="fab fa-facebook-f"></i>
                                </p>
                                <p className="text ml-4"> {/* Adjusted margin for text */}
                                    <span className="heading font-semibold text-lg text-blue-800">Social Media Integration: </span>   Through social media channels, customers can view your Facebook, Instagram, Twitter & YouTube accounts.
                                </p>
                            </div>
                            <hr className="border-gray-300" />
                        </div>

                        {/* Video Section */}
                        <div className="flex justify-center items-center w-full md:w-1/3 px-4">
                            <div className="video-container relative pt-[10%] pb-[10.25%] w-full">


                                <Image
                                    src="/images/DG2.jpg" // Replace with your demo card image path
                                    alt="Demo Business Card"
                                    layout="responsive" // This will make the image responsive
                                    width={700} // Width in pixels for aspect ratio calculation
                                    height={400} // Height in pixels for aspect ratio calculation
                                    className="w-3/4 md:w-2/4 h-auto object-contain rounded-xl shadow-xl" // Added rounded-lg and shadow-md
                                />


                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col w-full md:w-1/3 px-4 mt-5" >
                            <div className="featurebox relative mb-6 flex items-start">
                                <p className="icon flex items-center justify-center bg-blue-800 text-white rounded-full h-12 w-56    transition-all ease-in-out duration-500 hover:bg-green-500"> {/* Increased width */}
                                    <i className="fas fa-qrcode"></i>
                                </p>
                                <p className="text ml-4"> {/* Adjusted margin for text */}
                                    <span className="heading font-semibold text-lg text-blue-800">Your digital QR Code: </span>
                                    You can use QR Code anywhere like on paper Visiting Card, On Product Packaging, Brochure, Zoom Meetings, or anywhere. Anyone who scans the QR Code will open your card on their phone.
                                </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="featurebox relative mb-6 flex items-start mt-5">
                                <p className="icon flex items-center justify-center bg-blue-800 text-white rounded-full h-12 w-40 transition-all ease-in-out duration-500 hover:bg-green-500"> {/* Increased width */}
                                    <i className="fas fa-cube"></i>
                                </p>
                                <p className="text ml-4"> {/* Adjusted margin for text */}
                                    <span className="heading font-semibold text-lg text-blue-800">Products & Services Section: </span>
                                    Through this, you can exhibit your full list of products or services that you offer to your valuable customers.
                                </p>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="featurebox relative mb-6 flex items-start mt-5">
                                <p className="icon flex items-center justify-center bg-blue-800 text-white rounded-full h-12 w-36 transition-all ease-in-out duration-500 hover:bg-green-500"> {/* Increased width */}
                                    <i className="fab fa-youtube"></i>
                                </p>
                                <p className="text ml-4"> {/* Adjusted margin for text */}
                                    <span className="heading font-semibold text-lg text-blue-800">Video Integration: </span>
                                    Your customers can watch your videos in the digital visiting card itself through YouTube without any hassle.
                                </p>
                            </div>
                            <hr className="border-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
