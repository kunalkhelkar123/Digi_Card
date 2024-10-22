import { useState } from 'react';
import Navbar from './NavbarTwo';
import toast from 'react-hot-toast';

export default function CreateProfile() {
    // State to hold form data including file uploads
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        mobile: '',
        whatsapp: '',
        facebook: '',
        instagram: '',
        twitter: '',
        companyLocation: '',
        designation: '',
        companyName: '',
        website: '',
        linkedin: '',
        profilePicture: null, // For file upload
        backgroundPhoto: null, // For file upload
    });

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    // Function to handle text inputs
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle file inputs
    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] }); // Ensure correct file assignment
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {


        console.log("formData.profile pic ", formData.profilePicture);
        console.log("formData.backgroundPhoto pic ", formData.backgroundPhoto)



        e.preventDefault(); // Prevent default form submission

        // Show a success popup immediately upon submission
        setShowSuccessPopup(true);

        // Create a FormData object for file uploads
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]); // Append both text and file inputs to FormData
        }

        try {
            // Send the form data to the API endpoint for processing
            const response = await fetch('/api/save-profile', {
                method: 'POST',
                body: data,
            });

            // Check if the request was successful
            if (response.ok) {
                toast.success('Profile created successfully!'); // Success notification
                // Optionally, you can reload the page or navigate to another route here
                // setTimeout(() => window.location.reload(), 3000);
            } else {
                toast.error('Failed to create profile. Please try again.');
            }
        } catch (error) {
            // Handle any errors that occurred during the API request
            toast.error('An error occurred. Please try again.');
            console.error(error); // Log the error for debugging
        }
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
                        {/* Name input */}
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

                        {/* Address input */}
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

                        {/* Email input */}
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

                        {/* Mobile input */}
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

                        {/* WhatsApp input */}
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

                        {/* Facebook input */}
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

                        {/* Instagram input */}
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

                        {/* Twitter input */}
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

                        {/* Designation input */}
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

                        {/* Company Name input */}
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

                        {/* Company Location input */}
                        <div>
                            <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-700">Company Location</label>
                            <input
                                id="companyLocation"
                                name="companyLocation"
                                placeholder="Company Location"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Website input */}
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

                        {/* LinkedIn input */}
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

                        {/* Profile Picture upload */}
                        <div>
                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                            <input
                                id="profilePicture"
                                type="file"
                                name="profilePicture"
                                onChange={handleFileChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Background Photo upload */}
                        <div>
                            <label htmlFor="backgroundPhoto" className="block text-sm font-medium text-gray-700">Background Photo</label>
                            <input
                                id="backgroundPhoto"
                                type="file"
                                name="backgroundPhoto"
                                onChange={handleFileChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Success Popup */}
                    {showSuccessPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4">Profile Created Successfully!</h3>
                                <p>Thank you for submitting your profile information.</p>
                                <button
                                    className="mt-4 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none"
                                    onClick={() => setShowSuccessPopup(false)}
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
