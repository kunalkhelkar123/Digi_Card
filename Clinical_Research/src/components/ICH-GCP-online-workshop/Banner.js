'use client';



import Image from 'next/image';
import bg from '../../../public/images/ICH-GCP-online-workshop/shape-38.png';
import girl from "../../../public/images/ICH-GCP-online-workshop/girl-2.jpg";
import man from "../../../public/images/ICH-GCP-online-workshop/man-1.jpg";
import { PhoneCall } from "lucide-react";
import "../../../styles/talwindcss.css"

export default function ExchangeProgram() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between sm:px-10 px-4 py-16" style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            {/* Overlay Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(32, 29, 29, 0.5)'
            }}></div>

            {/* Left Section - Text Content */}
            <div className="md:w-1/2 space-y-10 sm:mt-20 sm:px-10 relative z-10">
                <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                    Master ICH GCP E6 (R3)  <span className=" block  text-4xl"> Key Regulatory Guidelines </span> <span className='text-3xl  text-white'>Online
                        Workshop</span>  <span className='block  text-green-500'>26th April 2025</span>
                </h1>
                <p className="text-white text-xl">
                    Comprehensive training on essential regulations for clinical trials &
                    research compliance.</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md " onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Register Now →
                </button>
            </div>

            {/* Right Section - Images */}
            <div className="md:w-1/2 flex items-center justify-center relative space-x-4 z-10">
                <div className="relative mt-40 z-10">
                    <Image src={girl} alt="Girl Studying" className="w-60 sm:h-60 rounded-2xl shadow-lg" />
                </div>
                <div className="relative -mt-10">
                    <Image src={man} alt="Man Thinking" className="w-52 sm:h-52 rounded-2xl shadow-lg border-4 border-white" />
                </div>
            </div>

            {/* Support Section */}
            <div className='mt-20'>

                <div className="absolute bottom-10 right-24 flex items-center bg-white p-4 rounded-lg shadow-md space-x-3 z-10">
                    <PhoneCall className="text-red-500" />
                    <div>
                        <p className="text-sm text-gray-500">More Details</p>
                        <a href="tel:+919326022386" className="text-lg font-semibold text-red-500">
                            +91 9326022386
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}