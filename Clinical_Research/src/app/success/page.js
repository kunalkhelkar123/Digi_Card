import React from "react";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-white p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center animate-fade-in-up">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering. Your payment has been received successfully.
        </p>
        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
