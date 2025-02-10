export default function HowItWorks() {
    return (
        <div className="relative bg-blue-50 pt-1 pb-[1px]"> {/* Updated background color and added margin-top */}
            
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-16 mb-20">How It Works?</h2>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between mb-40">
                    {/* Card 1: Create your Card */}
                    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 md:mb-0 md:w-1/4 h-64 transform transition duration-300 hover:scale-105 hover:bg-green-300">
                        <div className="flex flex-col items-center text-center h-full justify-center">
                            <div className="text-green-500  text-4xl mb-4">
                                <i className="fa fa-edit"></i>
                            </div>
                            <div className="text-xl text-black font-semibold mb-2">
                                <span className="text-black">1.</span> Create your Card
                            </div>
                            <p className="text-gray-600">Design your digital visiting card in 2 minutes.</p>
                        </div>
                    </div>

                    {/* Card 2: Save to your Device */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:w-1/4 h-64 transform transition duration-300 hover:scale-105 hover:bg-green-300">
                        <div className="flex flex-col items-center text-center h-full justify-center">
                            <div className="text-green-500 text-4xl mb-4">
                                <i className="fa fa-download"></i>
                            </div>
                            <div className="text-xl text-black font-semibold mb-2">
                                <span className="text-black">2.</span> Save to your Device
                            </div>
                            <p className="text-gray-600">Digital Visiting Card is accessible anytime from anywhere.</p>
                        </div>
                    </div>

                    {/* Card 3: Share with Friends */}
                    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 md:mb-0 md:w-1/4 h-64 transform transition duration-300 hover:scale-105 hover:bg-green-300">
                        <div className="flex flex-col items-center text-center h-full justify-center">
                            <div className="text-green-500 text-4xl mb-4">
                                <i className="fa fa-share-alt"></i>
                            </div>
                            <div className="text-xl text-black font-semibold mb-2">
                                <span className="text-black hover:text-white">3.</span> Share with friends and colleagues
                            </div>
                            <p className="text-gray-600">Through a variety of channels.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
