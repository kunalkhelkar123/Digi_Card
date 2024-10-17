

import { FaPhone, FaUserPlus, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
    const [phone, setPhone] = useState('');

    const handleWhatsAppShare = () => {
        if (phone) {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=91${phone}&text=Hello%2C%0D%0APleasure+connecting+with+you%21%21+Below+are+my+details%3A%0D%0A%0D%0ADigital+Business+Card%2FProfile%3A%0D%0Ahttps%3A%2F%2Fdigicarda.com%2Fsagirgolandaj%0D%0A%0D%0ASave+to+Contacts+Directly%3A%0D%0Ahttps%3A%2F%2Fdigicarda.com%2Fsagirgolandaj.vcf+%0D%0A%0D%0A%2ANote%3A+If+this+is+our+first+chat%2C+reply+hi+and+then+click+the+links+above.+%28Wapp+Policy%29%2A+%0D%0A%0D%0ARegards%2C+%0D%0ASagir+Golandaj+%0D%0ACo-Founder%0D%0AFuture+Spaces+Realty+%0D%0A%0D%0APowered+by%3A+digicarda.com`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Please enter a valid phone number');
        }
    };

    return (
        <>
            <div
                style={{
                    height: '100vh', // Full height of the viewport
                    background: 'repeating-linear-gradient(45deg, black, #413d48 100px)', // Corrected syntax for background
                    backgroundPosition: 'center', // Centers the image (not necessary for gradients, but included if needed)
                    // backgroundRepeat: 'no-repeat', // Not applicable for gradients but can be kept
                }}
            >
               

            <div className="container mx-auto p-9 "
                style={{
                    maxWidth: '599px', // You can keep this for maximum width
                    // height: '100vh', // Full height of the viewport
                }}>
                <div className="bg-white shadow-lg  p-6 text-center " >
                    <div className="mb-4 container2"
                        style={{
                            marginLeft: '-25px',
                            marginRight: '-25px',
                            marginTop: '-84px',
                            backgroundImage: 'url(/images/about-banner.jpg)',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <img
                            src="/images/BannerImage1.jpg"
                            alt="Profile"
                            className="w-24 h-24 mx-auto rounded-full container3"
                            style={{
                                marginTop: '60px',
                                width: '15rem',
                                height: '15rem',
                            }}
                        />
                    </div>
                    <div className="mb-6 mt-10">
                        <h2 className="text-2xl font-bold">Sagir Golandaj</h2>
                        <p className="text-gray-600 font-bold  textxl">Co-Founder</p>
                        <p className="text-gray-600 font-bold  text-xl ">Future Spaces Realty</p>
                    </div>


                    <div className="flex justify-center space-x-5 mb-6 mt-10">
                        <a
                            href="tel:+919833675687"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 border-2 border-blue-600 rounded-full p-1 pt-2 pb-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                        >
                            <FaPhone className="w-10 h-7" title="Call" />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=918788200792"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 border-2 border-green-500 rounded-full p-1 pt-2 transition-transform transform hover:scale-110 hover:bg-green-500 hover:text-white"
                        >
                            <FaWhatsapp className="w-10 h-7" title="WhatsApp" />
                        </a>
                        <a
                            href="https://maps.app.goo.gl/bmsurFuBF3YVB2TB7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 border-2 border-red-500 rounded-full p-1 pt-2 transition-transform transform hover:scale-110 hover:bg-red-500 hover:text-white"
                        >
                            <FaMapMarkerAlt className="w-10 h-7" title="Location" />
                        </a>
                        <a
                            href="mailto:sagirgolandaj@futurespacesrealty.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 border-2 border-gray-600 rounded-full p-1 pt-2 transition-transform transform hover:scale-110 hover:bg-gray-600 hover:text-white"
                        >
                            <FaEnvelope className="w-10 h-7" title="Email" />
                        </a>
                        <a
                            href="https://futurespacesrealty.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 border-2 border-blue-600 rounded-full p-1 pt-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                        >
                            <FaGlobe className="w-10 h-7" title="Website" />
                        </a>
                    </div>



                    <div className="whatsapp_share mb-6 ml-5 mt-10">
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row items-center">
                            <label className="mr-2 text-l font-semibold">+91</label>
                            <input
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className="p-1 border border-gray-300 rounded-lg mr-2 w-full md:w-44 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                                maxLength="10"
                            />
                            <button
                                type="button"
                                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center mt-2 md:mt-0 hover:bg-green-700 transition duration-200"
                                onClick={handleWhatsAppShare}
                            >
                                <FaWhatsapp className="mr-2" /> Share via WhatsApp
                            </button>
                        </form>
                    </div>

                    <div>
                        <button
                            className="bg-gray-700 text-white px-4 py-2 ml-40 rounded-lg flex items-center mt-2 md:mt-0 hover:bg-black transition-transform transform hover:scale-110 "
                        >
                            <FaUserPlus className="mr-2" /> {/* Icon added here */}
                            Save contact
                        </button>
                    </div>



                    <div className="flex justify-center space-x-4 text-2xl mt-10">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 border-2 border-blue-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 border-2 border-pink-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-pink-600 hover:text-white"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 border-2 border-blue-400 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                        >
                            <FaTwitter />
                        </a>
                    </div>

                </div>
            </div></div ></>
    );
}
