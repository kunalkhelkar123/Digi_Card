import { useState } from 'react';
import Navbar from './NavbarTwo';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        query: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Query submited successfully!');
        setFormData({ name: '', email: '', phone: '', address: '', message: '', query: '' });
        console.log("form data ==> ", formData);
    };

    return (
        <> <Navbar/>
        
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12" style={{ backgroundImage: "url('/images/about-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
           
            <div className="mt-20 bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6 bg-opacity-80">
                <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
                <p className="text-gray-600 text-center mb-4">We'd love to hear from you! <br/>Please fill out the form below.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Your Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <textarea
                        name="query"
                        value={formData.query}
                        onChange={handleInputChange}
                        placeholder="Your Query Description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        rows="4"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        rows="4"
                        required
                    />
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
                        Send Message
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-sm text-gray-500 mt-4">By submitting this form, you agree to our terms and conditions.</p>
                </div>
            </div>
        </div></>
    );
}
