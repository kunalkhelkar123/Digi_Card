'use client';

export default function WhyAttend() {
    return (
        <div className="bg-gradient-to-r from-yellow-50 to-white py-16 px-6 md:px-16 flex flex-col items-center text-center shadow-xl ">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Why This Training is Essential
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
                Gain valuable knowledge and stay ahead in the clinical research industry by attending this workshop.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-green-600 text-2xl mr-3">✅</span>
                    <span className="text-lg">Stay Compliant – Keep up with the latest regulatory changes in clinical research</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-green-600 text-2xl mr-3">✅</span>
                    <span className="text-lg">Learn from an Expert – Gain insights from Mrs. Vaishali Deshpande</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-green-600 text-2xl mr-3">✅</span>
                    <span className="text-lg">Real-World Applications – Understand how these guidelines impact clinical trials</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-green-600 text-2xl mr-3">✅</span>
                    <span className="text-lg">Certificate of Completion – Boost your professional credibility</span>
                </div>
            </div>
            <p className="text-lg text-gray-800 mt-8 font-semibold">
                Secure your spot today and enhance your career in clinical research!
            </p>
        </div>
    );
}
