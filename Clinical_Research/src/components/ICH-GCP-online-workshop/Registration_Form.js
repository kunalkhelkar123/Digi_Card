"use client";

import { useState, useEffect } from "react";
import axios from "axios";


export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "kunal khelkar",
    email: "k@gmail.com",
    contactNumber: "9146219186",
    organization: "IT",
    designation: "Developer",
    registrationType: "standard",
    paymentDetails: "Payment Details",
  });

  const [phonePeReady, setPhonePeReady] = useState(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (window?.PhonePeCheckout?.transact) {
  //         setPhonePeReady(true);
  //         clearInterval(interval);
  //       }
  //     }, 300);
  //     return () => clearInterval(interval);
  //   }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!phonePeReady) {
    //   alert("PhonePe is not ready yet. Please wait a moment and try again.");
    //   return;
    // }

    const amount = formData.registrationType === "early-bird" ? 1000 : 1200;

    const data = {
      name: formData.fullName,
      email: formData.email,
      amount: amount,
      mobile: formData.contactNumber,
      organization: formData.organization,
      designation: formData.designation,
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now(),
    };

    try {
      const response = await axios.post("/api/order", data);

      if (response && response.data?.redirectUrl && response.data?.orderId) {
        const tokenUrl = response.data.redirectUrl;
        const orderId = response.data.orderId;
        const accessToken = response.data.AccessToken;

        console.log("check 1 tokenUrl", tokenUrl);

        window.PhonePeCheckout.transact({
          tokenUrl,
          type: "IFRAME",

          callback: async (result) => {
            console.log("Payment result:", result);

            if (result === "USER_CANCEL") {
              alert("Payment cancelled by user.");
            } else if (result === "CONCLUDED") {
              try {
                // Wait a bit to ensure status is updated on PhonePe server
                await new Promise(async (res) => setTimeout(res, 3000));

                const statusResponse = await axios.post("/api/status", {
                  orderId,
                  accessToken,
                });

                const status = statusResponse.data?.state;

                if (status === "SUCCESS") {
                  window.location.href = "/success";
                } else {
                  window.location.href = "/failure";
                }
              } catch (statusError) {
                console.error("Error fetching payment status:", statusError);
                alert(
                  "Unable to verify payment status. Please contact support."
                );
              }
            }
          },
        });
      } else {
        console.log("Invalid response from /api/order", response);
      }
    } catch (err) {
      console.error("Payment initiation failed:", err);
    }
  };

  return (
    <div
      id="registration-form"
      className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-16 flex flex-col items-center text-center shadow-xl"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
        Sign Up for the Workshop
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-8">
        Fill in your details below to secure your spot in this insightful
        workshop.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md text-left"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Your organization"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Your designation"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Select Registration Type
            </label>
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            >
              <option value="standard">Standard (₹1,200)</option>
              <option value="early-bird">Early Bird (₹1,000)</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium">
              Payment Details
            </label>
            <input
              type="text"
              name="paymentDetails"
              value={formData.paymentDetails}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter payment reference or details"
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium transition-all"
          >
            Register Now →
          </button>
        </div>
      </form>
    </div>
  );
}
