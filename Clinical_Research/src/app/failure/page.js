import React from "react";
import { XCircle } from "lucide-react";

const CancelPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-50 to-white p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center animate-fade-in-up">
        <XCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          It looks like your payment did not go through. If this was a mistake, feel free to try again.
        </p>
        <a
          href="/ICH-GCP-online-workshop#registration-form"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default CancelPage;
