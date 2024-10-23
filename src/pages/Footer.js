import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    return (
        <div id="contact-us" className="ContactDetail py-12 bg-blue-800 text-white">
            <div className="container mx-auto px-4 ">
                <div className="HeadingSection text-center mb-8">
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                </div>
                <div className="PaddingTop">
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="LeftSide ml-20">

                                <ul className="Listing space-y-4">
                                    <li className="flex items-start">
                                        <i className="fas fa-map-marked-alt text-white mr-2"></i>
                                        <span>DigiSwipe: Your Digital Card Always
                                            <span className="block">By VJanalytics Private Limited Pune</span>
                                            <span className='block'>Office Number 203, Mont Vert Spectra</span> </span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-phone-alt text-white mr-2"></i>
                                        <span>Call Us: <span className=""><a href="tel:+91 9960044986" className="text-white hover:text-gray-300">+91 9960044986</a></span></span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="far fa-envelope text-white mr-2"></i>
                                        <span>Email: <span className=""><a href="mailto:info@digiswipe.in" className="text-white hover:text-gray-300">info@digiswipe.in</a></span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-shrink-0 mt-10 sm:mt-6 md:mt-4 lg:mt-2 mb-5 ml-16 sm:ml-0">
                            <Link href="/">
                                <Image
                                    className="h-16 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20"
                                    src="/images/Digiswipelogo.jpg"
                                    height={100}
                                    width={100}
                                    alt="Company Logo"
                                />
                            </Link>
                        </div>



                        <div className="md:w-1/2 flex items-center justify-center">
                            <Link href="/contact" passHref>
                                <button className="bg-green-500 mb-10 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="text-center mt-12 ">
                    <p className="text-gray-300 -mb-10">
                        © {new Date().getFullYear()} <a href="http://vjanalytics.com/" className="text-gray-300 hover:text-white">VJanalytics</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
