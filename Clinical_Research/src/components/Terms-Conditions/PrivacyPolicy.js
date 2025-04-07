import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container bg-white sm:mt-16 rounded-lg mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <section className="mb-4">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="text-gray-700">
          This Privacy Policy describes how CRET CONSULTING SERVICES and its affiliates
          (collectively CRET CONSULTING SERVICES, we, our, us) collect, use, share,
          protect, or otherwise process your information/personal data through our
          website <a href="https://www.cretconsulting.com" className="text-blue-600 underline">www.cretconsulting.com</a>.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Collection of Data</h2>
        <p className="text-gray-700">
          We collect your personal data when you use our Platform, services, or
          otherwise interact with us. This may include your name, date of birth, address,
          telephone/mobile number, email ID, and financial details like payment information.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Usage of Data</h2>
        <p className="text-gray-700">
          We use personal data to provide the services you request, enhance customer experience,
          troubleshoot problems, and prevent fraud. We may also use it for marketing and research
          purposes with an option to opt out.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Security Notice</h2>
        <p className="text-gray-700">
          If you receive any suspicious emails or calls requesting personal data like debit/credit
          card PINs, report them immediately to law enforcement authorities.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;