"use client";

import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Aboutus = () => {
    return (
        <>
            <div>
                <h1 className="text-4xl p-4 font-bold mt-6 mb-6 text-center">
                    About Us
                </h1>


                <div className="flex">
                    <div className="container12">
                        <div className="dr_image mb-6">
                            <Image width={100} height={100} src="/images/Gallary/Vaishali_Deshpande.jpeg" alt="Vaishali Deshpande" />
                        </div>

                        <div className="title text-center">
                            <h2 className="text-2xl font-bold">Vaishali Deshpande</h2>
                            <p className="text-xl text-gray-700">Independent Consultant in Clinical Research</p>

                            {/* Social Media Icons */}


                        </div>
                        <div className="flex space-x-4 " >
                            <span>
                                <a href="https://www.linkedin.com/in/vaishali-deshpande-b7311b10/" target="_blank" rel="noopener noreferrer" className="inline" style={{ color: 'blue' }}>
                                    <FaLinkedin className="text-2xl" />
                                </a>
                            </span>

                            <span>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="inline text-blue-700"  >
                                    <FaTwitter className="text-2xl" />
                                </a>
                            </span>
                        </div>

                    </div>

                    <div className="container2 px-20  ">
                        <h2 className="text-xl font-semibold">Vaishali Deshpande, working as an Independent Consultant in the field of Clinical Research for the past 28 years.</h2>
                        <p className="text-gray-600 mt-4">
                            I serve as an Ethics Committee member at several institutions, bringing my expertise to ensure that clinical research adheres to ethical standards. Currently, I chair the Ethics Committees at Ruby Hall, Sancheti Hospital, and Joshi Hospital in Pune, Maharashtra. In this role, I am responsible for overseeing and guiding clinical trials, ensuring that they are conducted with the highest ethical integrity and compliance with regulatory guidelines.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
