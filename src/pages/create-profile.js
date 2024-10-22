import { useState } from 'react';
import Navbar from './NavbarTwo';
import toast from 'react-hot-toast';
export default function CreateProfile() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        mobile: '',
        whatsapp: '',
        facebook: '',
        instagram: '',
        twitter: '',
        designation: '',
        companyName: '',
        website: '',
        linkedin: '',
        profilePicture: null,
        backgroundPhoto: null,
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }

        await fetch('/api/save-profile', {
            method: 'POST',
            body: data,
        })
            
      
                // window.location.reload() 
                setTimeout(() => {
                    toast.success('Profile created successfully!')
                     
                }, 1000),

                setTimeout(() => {
                    window.location.reload(); // or router.back();
                }, 3000),
                setShowSuccessPopup(true)
            


    };

    return (
        <>
            <Navbar />
            <div
                className="min-h-screen flex items-center justify-center bg-gray-100 py-12"
                style={{
                    backgroundImage: "url('/images/about-banner.jpg')", // Replace with your background image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mt-20 bg-white shadow-lg rounded-lg p-8 max-w-lg w-full bg-opacity-90">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Your Digital Card</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="Name"
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                id="address"
                                name="address"
                                placeholder="Address"
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                            <input
                                id="mobile"
                                name="mobile"
                                placeholder="Mobile"
                                onChange={handleInputChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                            <input
                                id="whatsapp"
                                name="whatsapp"
                                placeholder="WhatsApp Number"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook Profile URL</label>
                            <input
                                id="facebook"
                                name="facebook"
                                placeholder="Facebook Profile URL"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram Profile URL</label>
                            <input
                                id="instagram"
                                name="instagram"
                                placeholder="Instagram Profile URL"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">Twitter Profile URL</label>
                            <input
                                id="twitter"
                                name="twitter"
                                placeholder="Twitter Profile URL"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                            <input
                                id="designation"
                                name="designation"
                                placeholder="Designation"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                id="companyName"
                                name="companyName"
                                placeholder="Company Name"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                            <input
                                id="website"
                                name="website"
                                placeholder="Website"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                            <input
                                id="linkedin"
                                name="linkedin"
                                placeholder="LinkedIn Profile URL"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                            <input
                                id="profilePicture"
                                type="file"
                                name="profilePicture"
                                onChange={handleFileChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="backgroundPhoto" className="block text-sm font-medium text-gray-700">Background Photo</label>
                            <input
                                id="backgroundPhoto"
                                type="file"
                                name="backgroundPhoto"
                                onChange={handleFileChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>

                    {showSuccessPopup && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h2 className="text-lg font-bold mb-4 text-black">Profile Created Successfully!</h2>
                                <p className="mb-4 text-black">
                                    Your profile has been created successfully. Please contact the admin to activate your account.
                                </p>

                                <a href={`https://api.whatsapp.com/send?&phone=919960044986`} target='_blank'
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Contact Admin
                                </a>
                                <button
                                    onClick={() => setShowSuccessPopup(false)}
                                    className="bg-red-500 text-white px-6 py-2 ml-12 rounded hover:bg-red-600"
                                >
                                    Close
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
