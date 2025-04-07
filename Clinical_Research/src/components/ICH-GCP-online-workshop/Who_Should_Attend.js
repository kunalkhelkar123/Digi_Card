'use client';

export default function WhoShouldAttend() {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-16 flex flex-col items-center text-center shadow-xl ">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Who Will Benefit from This Workshop?
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mb-8">
                This workshop is ideal for professionals involved in clinical research, ensuring compliance and understanding of the latest guidelines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-blue-600 text-2xl mr-3">✔</span>
                    <span className="text-lg">Clinical Research Professionals</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-blue-600 text-2xl mr-3">✔</span>
                    <span className="text-lg">Sponsors & CROs (Including Phase 1 Units)</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-blue-600 text-2xl mr-3">✔</span>
                    <span className="text-lg">Investigator Sites & SMOs</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-blue-600 text-2xl mr-3">✔</span>
                    <span className="text-lg">Regulatory Professionals</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                    <span className="text-blue-600 text-2xl mr-3">✔</span>
                    <span className="text-lg">Academic Institutes & Ethics Committees (IECs)</span>
                </div>
            </div>
            <p className="text-lg text-gray-800 mt-8 font-semibold">
                If you are engaged in clinical trials, this workshop is a must for you!
            </p>
        </div>
    );
}
