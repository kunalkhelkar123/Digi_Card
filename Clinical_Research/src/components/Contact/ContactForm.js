"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_db5sgob",   // Replace with your service ID
        "template_omaf1zp",  // Replace with your template ID
        formRef.current,
        "k05tTTCLechKDk94r"    // Replace with your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent!");
          // formRef.current.reset();
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>

    <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="text"
        name="number"
        placeholder="Phone Number"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Write your message..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
        required
      />

      <div className="sm:col-span-2 text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  );
};

export default ContactForm;
