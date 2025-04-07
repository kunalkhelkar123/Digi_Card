import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container sm:mt-16 bg-white rounded-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="text-gray-700">
          This document is an electronic record under the Information Technology Act, 2000,
          and its applicable rules. It serves as a legal agreement between you and CRET
          CONSULTING SERVICES regarding the use of our website
          <a href="https://www.cretconsulting.com" className="text-blue-600 underline"> www.cretconsulting.com</a>.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">User Agreement</h2>
        <p className="text-gray-700">
          By accessing, browsing, or using the Platform, you agree to be bound by these Terms
          of Use. If you do not agree, please do not use our services.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Liability & Risk</h2>
        <p className="text-gray-700">
          We do not guarantee the accuracy, completeness, or suitability of the information
          provided on our Platform. Your use of our Services is at your sole risk, and we shall
          not be liable for any damages arising from its use.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Intellectual Property</h2>
        <p className="text-gray-700">
          All content, design, and graphics on this Platform are proprietary to CRET CONSULTING SERVICES.
          Unauthorized use may result in legal action.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Indemnification</h2>
        <p className="text-gray-700">
          You agree to indemnify and hold harmless CRET CONSULTING SERVICES from any
          claims arising from your use of our Platform, violation of these Terms, or
          infringement of any third-party rights.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Jurisdiction</h2>
        <p className="text-gray-700">
          These Terms are governed by the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts in Pune, Maharashtra.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
