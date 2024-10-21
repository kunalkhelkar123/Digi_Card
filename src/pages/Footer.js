import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
export default function Footer() {
    return (
        <div id="contact-us" className="ContactDetail py-12 bg-blue-800 text-white">
            <div className="container mx-auto px-4">
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
                                        <span>DigiCarda: Your Digital Card Always
                                            <span className="block">By Mindlabz Software Solutions Private Limited Pune</span>
                                            <span className='block'>Office Number 203, Mont Vert Spectra</span> </span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-phone-alt text-white mr-2"></i>
                                        <span>Call Us: <span className=""><a href="tel:+919960044986" className="text-white hover:text-gray-300">+91 9960044986</a></span></span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="far fa-envelope text-white mr-2"></i>
                                        <span>Email: <span className=""><a href="mailto:info@digicarda.com" className="text-white hover:text-gray-300">info@mindlabz.com</a></span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex items-center justify-center">
                            <Link href="/contact" passHref>
                                <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="text-center mt-12">
                    <p className="text-gray-300 mb-2">
                        © {new Date().getFullYear()} <a href="http://vjanalytics.com/" className="text-gray-300 hover:text-white">VJanalytics</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
