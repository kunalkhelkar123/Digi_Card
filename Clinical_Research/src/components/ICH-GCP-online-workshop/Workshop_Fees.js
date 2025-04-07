'use client';

import Image from 'next/image';
import trainerPhoto from '../../../public/images/ICH-GCP-online-workshop/trainer.jpg';

export default function WorkshopFees() {
    return (
        <div className="bg-gradient-to-r from-red-50 to-white py-16 px-6 md:px-16 flex flex-col items-center text-center shadow-2xl ">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Register Now – Limited Seats Available!
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Join our exclusive online workshop and gain industry-leading knowledge from an expert in the field.
            </p>
            
            {/* Trainer Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl p-6 bg-white rounded-lg shadow-md">
                <Image src={trainerPhoto} alt="Trainer" width={120} height={120} className="rounded-full border-4 border-gray-300 shadow-lg" />
                <div className="text-left">
                    <p className="text-xl font-semibold text-gray-900">🎤 Lead Trainer:<span  className="text-3xl font-semibold text-green-500"> Mrs. Vaishali Deshpande</span></p>
                    <p className=" text-lg text-gray-900">Independent Trainer, Director at CRET Consulting</p>
                    <p className="text-lg text-gray-900">Chairperson Ethics Committee - Ruby Hall Clinic, Sancheti Hospital, Joshi Hospital Pune</p>
                </div>
            </div>
            
            {/* Event Details */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                    <span className="text-red-600 text-2xl mr-3">📅</span>
                    <span className="text-lg font-bold">Date: 26th April 2025 (Online)</span>
                </div>
                <div className="bg-white p-6 rounded-lg item-left justify-left text-left shadow-md flex flex-col items-center">
                    <span className="text-green-600 text-2xl mr-3">💰</span>
                    <div>
                        <p className="text-lg font-medium"> <span >	○ </span>Special Online Offer: <span className='text-black'>₹1,200 + GST</span></p>
                        <p className="text-lg font-medium"><span> ○ </span> Early Bird Online Registration: <span className='text-black'>₹1,000 + GST</span></p>
                    </div>
                </div>
            </div>
            
            {/* Additional Info */}
            <p className="text-lg text-gray-800 mt-6 font-semibold">
                Includes: Training materials, case studies & Q&A session
            </p>
            
            {/* CTA Button */}
            <button className="mt-8 bg-green-500 hover:bg-green-600  text-white px-4 py-3 rounded-lg  text-lg font-medium transition-all" onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Secure Your Spot →
            </button>
        </div>
    );
}
