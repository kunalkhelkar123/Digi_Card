'use client';

import { useState } from 'react';

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        { question: "What is covered in this workshop?", answer: "ICH GCP E6 (R3), ICMR Guidelines 2017, and NDCT Rules 2019 with practical insights." },
        { question: "Who should attend?", answer: "Anyone involved in clinical trials—CROs, sponsors, researchers, and ethics committees." },
        { question: "Will I get a certificate?", answer: "Yes! A certificate of completion will be provided to all attendees." }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-16 flex flex-col items-center text-center shadow-xl ">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Frequently Asked Questions
            </h1>
            <div className="mt-6 w-full max-w-2xl text-left">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm transition-transform transform hover:scale-105">
                            <button onClick={() => toggleFAQ(index)} className="w-full text-left font-medium text-gray-900 flex justify-between items-center text-lg">
                                {faq.question}
                                <span className="text-gray-600 text-xl">{openFAQ === index ? '▲' : '▼'}</span>
                            </button>
                            {openFAQ === index && <p className="mt-3 text-gray-700 text-base leading-relaxed border-t pt-3">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}