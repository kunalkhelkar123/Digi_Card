'use client';

import Image from 'next/image';
import researchImg from '../../../public/images/ICH-GCP-online-workshop/research-icon.jpg';

export default function ExchangeProgram() {
    return (
        <div className="bg-gradient-to-r from-purple-50 to-white py-16 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10 ">
            {/* Left Section - Text */}
            <div className="md:w-1/2 text-center md:text-left ml-20">
                <h1 className="text-4xl sm:px-10 font-extrabold text-gray-900 leading-tight">
                    Enhance Your Expertise in Clinical Research Compliance
                </h1>
                <p className="text-lg text-gray-700 mt-4 px-8">
                    Join us for a powerful online workshop covering the latest updates in ICH
                    GCP E6 (R3), ICMR Guidelines 2017, and NDCT Rules 2019. Learn from
                    industry expert Dr. Anupama Ramkumar and gain practical insights into the
                    evolving regulatory landscape in clinical research.
                </p>
                <button onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-6 bg-green-500 hover:bg-green-600 text-white sm:px-6 sm:py-6 md:px-6 md:py-6 lg:px-6 lg:py-8 px-3 py-2 rounded-lg shadow-lg text-lg font-medium transition-all">
                    Enroll Today & Stay Compliant! 
                </button>
            </div>
            
            {/* Right Section - Image */}
            <div className="md:w-1/2 flex items-center justify-center">
                <Image src={researchImg} alt="Clinical Research" className="w-80 h-80 rounded-full object-contain" />
            </div>
        </div>
    );
}
