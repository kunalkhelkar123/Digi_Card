'use client';

export default function Workshop_Topics() {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 shadow-xl  ">
            {/* Left Section - Text */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                    Key Topics Covered in This Workshop
                </h1>
                <p className="text-lg text-gray-700 mt-4">
                    Gain in-depth insights and practical applications of crucial clinical research guidelines.
                </p>
                <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg text-lg font-medium transition-all" onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    Enroll Today & Stay Compliant! →
                </button>
            </div>
            
            {/* Right Section - List */}
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <ul className="space-y-6 text-gray-900 text-lg">
                    <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm">
                        <span className="text-blue-600 text-2xl mr-3">✔</span>
                        <span><span className=" font-bold">ICH GCP E6 (R3):</span> Latest updates & practical applications in clinical trials</span>
                    </li>
                    <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm">
                        <span className="text-blue-600 text-2xl mr-3">✔</span>
                        <span><span className=" font-bold">ICMR Guidelines 2017:</span> Ethical guidelines for biomedical research in India</span>
                    </li>
                    <li className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm">
                        <span className="text-blue-600 text-2xl mr-3">✔</span>
                        <span><span className=" font-bold">NDCT Rules 2019:</span> Understanding India&#39;s regulatory framework for new drug clinical trials</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}   