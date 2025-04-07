"use client";

import React from "react";

const Funfacts = () => {
  const funFactsData = [
    { percentage: "100+", label: "Hospitals", description: "Connected" },
    { percentage: "50+", label: "Ethics", description: "Committees Trained & Audited" },
    { percentage: "30+", label: "Years of", description: "Industry Experience" },
    { percentage: "100%", label: "Trusted", description: "by Leading Research Institutions" },
  ];

  const getStrokeValue = (percentage) => {
    const numericValue = parseInt(percentage.replace(/\D/g, ""), 10);
    return numericValue > 100 ? 100 : numericValue;
  };

  return (
    <div className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {funFactsData.map(({ percentage, label, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg
                  className="w-full h-full transform rotate-[-90deg]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="text-gray-300 stroke-current"
                    strokeWidth="3"
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                  />
                  <circle
                    className="text-green-500 stroke-current"
                    strokeWidth="3"
                    strokeDasharray={`${getStrokeValue(percentage)}, 100`}
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                  />
                </svg>
                <span className="absolute text-lg font-bold text-green-700">{percentage}</span>
              </div>
              <span className="mt-4 text-gray-600 text-sm font-bold">{label}</span>
              <h3 className="text-lg font-semibold text-center">{description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
