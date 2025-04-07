"use client"
import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import RefundPolicy from "./RefundPolicy";

export default function PolicyPage() {
    const [selectedPolicy, setSelectedPolicy] = useState("terms");

    const renderContent = () => {
        switch (selectedPolicy) {
            case "terms":
                return <TermsAndConditions />;
            case "refund":
                return <RefundPolicy />;
            default:
                return <PrivacyPolicy />;
        }
    };

    return (
        <div className=" sm:mt-20 md:mt-20 lg:mt-20">
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 sm:mt-20 md:mt-20 lg:mt-20  mt-0">
                {/* Sidebar */}
                <div className="w-full md:w-1/4 bg-white shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Policies</h2>
                    <ul className="space-y-2">
                        <li>
                            <button
                                className={`w-full text-sm font-bold text-left px-4 py-2 rounded-lg ${selectedPolicy === "terms" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                onClick={() => setSelectedPolicy("terms")}
                            >
                                Terms & Conditions
                            </button>
                        </li>
                        <li>
                            <button
                                className={`w-full text-sm font-bold text-left px-4 py-2 rounded-lg ${selectedPolicy === "privacy" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                onClick={() => setSelectedPolicy("privacy")}
                            >
                                Privacy Policy
                            </button>
                        </li>

                        <li>
                            <button
                                className={`w-full text-sm font-bold text-left px-4 py-2 rounded-lg ${selectedPolicy === "refund" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                onClick={() => setSelectedPolicy("refund")}
                            >
                                Refund Policy
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="w-full md:w-3/4 p-2">{renderContent()}</div>
            </div>

        </div>
    );
}
