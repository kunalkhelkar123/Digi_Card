import { useEffect, useState } from 'react';
import Cropper from "react-image-crop"; // Import the Cropper component
import "react-image-crop/dist/ReactCrop.css"; // Import the Cropper styles
import Navbar from './NavbarTwo';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
// import toast from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaClipboard } from 'react-icons/fa';

export default function Createprofile() {
    // State to hold form data including file uploads
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
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
    const [isuserNameexist, setuserNameexist] = useState(false)
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isSpaceInUserName, setIsSpaceInUserName] = useState(false);
    const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 });
    const [image, setImage] = useState(null); // To hold the image file
    const [preview, setPreview] = useState(null); // For image preview

    // Function to check if username already exists
    const checkUserName = async (e) => {
        const userName = e.target.value;
        const checkResponse = await fetch('/api/checkUserNameexists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName }),
        });
        const checkResult = await checkResponse.json();
        if (checkResult.exists) {
            setuserNameexist(true)
            toast.error("Username already exists.")
            console.log("checkResponse username exist true  ", checkResult.exists)
        } else {
            setuserNameexist(false)
            console.log("checkResponse username exist false  ", checkResult.exists)
        }
    }

    // Check for spaces in username
    const checkSpaceInUserName = (e) => {
        const { value } = e.target;
        if (value.includes(" ")) {
            setIsSpaceInUserName(true);
        } else {
            setIsSpaceInUserName(false);
            // If no space, run other validations
            setFormData({ ...formData, [e.target.name]: e.target.value });
            checkUserName(e);
        }
    }

    // Handle input changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file changes with cropping and size validation
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        // Check file size (5 MB limit)
        // if (file && file.size > 5 * 1024 * 1024) {
        //     toast.error("File size should be less than 5MB!");
        //     return;
        // }

        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setPreview(reader.result); // Set preview to display the uploaded image
        //     setImage(reader.result); // Set the image for cropping
        // };
        if (file) {
            // reader.readAsDataURL(file); // Read file as data URL
            setFormData({ ...formData, [e.target.name]: file }); // Ensure correct file assignment
        }
    };

    // Function to handle image cropping
    const handleCropComplete = (crop) => {
        if (image && crop.width && crop.height) {
            const croppedImageUrl = getCroppedImg(image, crop);
            setFormData({ ...formData, profilePicture: croppedImageUrl }); // Update formData with cropped image
        }
    };

    // Function to get cropped image from original image
    const getCroppedImg = (imageSrc, crop) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = imageSrc;
        canvas.width = crop.width;
        canvas.height = crop.height;

        ctx.drawImage(
            image,
            crop.x,
            crop.y,
            crop.width,
            crop.height,
            0,
            0,
            crop.width,
            crop.height
        );

        return canvas.toDataURL('image/jpeg'); // Return the cropped image as a data URL
    };

    // Function to reload the page
    const reloadpage = () => {
        window.location.reload();
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!isuserNameexist) {
            console.log("check inside create-profile 1");

            // Create a FormData object for file uploads
            const data = new FormData();
            for (let key in formData) {
                data.append(key, formData[key]); // Append both text and file inputs to FormData
            }

            try {
                console.log("profilelellelelelelel==>    ",formData.profilePicture)
                if (!isSpaceInUserName) {
                    console.log("check inside create-profile 2");
                    const response = await fetch('/api/save-profile', {
                        method: 'POST',
                        body: data,
                    });
                    const checkResult = await response.json();
                    if (checkResult.success) {
                        console.log("Profile created successfully!");
                        toast.success('Profile created successfully!'); // Success notification
                        setShowSuccessPopup(true);
                    } else {
                        console.log("Failed to create profile. Please try again.");
                        toast.error('Failed to create profile. Please try again.');
                    }
                } else {
                    console.log("Username cannot contain space.");
                    toast.error('Username cannot contain space.');
                }
            } catch (error) {
                console.log("check inside create-profile 4");
                toast.error('An error occurred. Please try again.');
                console.error(error); // Log the error for debugging
            }
        } else {
            console.log("Username already exists.");
            toast.error('Username already exists.');
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
                                placeholder="Enter your name"
                                onChange={handleInputChange}
                                maxLength={50}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                        {/* UserName input */}
                        {/* <div>
                            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                id="userName"
                                name="userName"
                                placeholder="Enter your username"
                                // onChange={handleInputChange}
                                onChange={(e) => {
                                    handleInputChange(e)
                                    checkUserName(e)
                                }}
                                maxLength={20}
                                required
                                className={isuserNameexist ? 'w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black' : 'w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black'}
                            />
                            {isuserNameexist && <p className='text-red-600  text-sm' >  username already exists</p>}
                        </div> */}



                        <div>
                            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                id="userName"
                                name="userName"
                                placeholder="Enter your username"
                                onChange={(e) => {
                                    handleInputChange(e)
                                    checkSpaceInUserName(e)
                                }}
                                maxLength={20}
                                required
                                className={
                                    isuserNameexist || isSpaceInUserName
                                        ? 'w-full p-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-black'
                                        : 'w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black'
                                }
                            />
                            {isuserNameexist && (
                                <p className='text-red-600 text-sm'>Username already exists</p>
                            )}
                            {isSpaceInUserName && (
                                <p className='text-red-600 text-sm'>Username cannot contain spaces</p>
                            )}
                        </div>


                        {/* Address input */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                                onChange={handleInputChange}
                                maxLength={200}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Email input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="Enter email address e.g example@gmail.com"
                                type="email"
                                onChange={handleInputChange}
                                maxLength={90}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Mobile input */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="number"
                                placeholder="Enter mobile number"
                                onChange={handleInputChange}
                                maxLength={10}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* WhatsApp input */}
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                            <input
                                id="whatsapp"
                                name="whatsapp"
                                type="number"
                                maxLength={10}
                                required
                                placeholder="Enter whatsapp number"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>


                        {/* Designation input */}
                        <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                            <input
                                id="designation"
                                name="designation"
                                maxLength={50}
                                required
                                placeholder="Designation"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                        {/* Company Name input */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                id="companyName"
                                name="companyName"
                                maxLength={30}
                                required
                                placeholder="Company name"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Company Location input */}
                        <div>
                            <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-700">Company Location URL or Link</label>
                            <input
                                id="companyLocation"
                                name="companyLocation"
                                maxLength={200} required
                                placeholder="Company location URL or Link"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Website input */}
                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Company Website </label>
                            <input
                                id="website"
                                name="website"
                                maxLength={200}
                                required
                                placeholder="Company website"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Facebook input */}
                        <div>
                            <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook profile URL or Link</label>
                            <input
                                id="facebook"
                                name="facebook"
                                maxLength={200}
                                required
                                placeholder="Facebook profile URL or Link"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Instagram input */}
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram profile URL or Link</label>
                            <input
                                id="instagram"
                                name="instagram"
                                maxLength={200}
                                required
                                placeholder="Instagram profile URL or Link"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Twitter input */}
                        <div>
                            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">Twitter profile URL or Link</label>
                            <input
                                id="twitter"
                                name="twitter"
                                maxLength={200}
                                required
                                placeholder="Twitter profile URL or Link"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* LinkedIn input */}
                        <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn profile URL or Link</label>
                            <input
                                id="linkedin"
                                name="linkedin"
                                maxLength={200}
                                required
                                placeholder="LinkedIn profile URL or Link"
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* profile Picture upload */}
                        <div>
                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                            <input
                                id="profilePicture"
                                type="file"
                                required
                                name="profilePicture"
                                accept="image/jpeg, image/jpg, image/png, image/webp, image/bmp"  // Accept only image types
                                onChange={handleFileChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>
                        {preview && (
                            <div>
                                <Cropper
                                    src={preview}
                                    crop={crop}
                                    onImageLoaded={setImage}
                                    onComplete={handleCropComplete}
                                    onChange={setCrop}
                                />
                            </div>
                        )}


                        {/* Background Photo upload */}
                        <div>
                            <label htmlFor="backgroundPhoto" className="block text-sm font-medium text-gray-700">Background Photo</label>
                            <input
                                id="backgroundPhoto"
                                type="file"
                                required
                                accept="image/jpeg, image/jpg, image/png, image/webp, image/bmp"  // Accept only image types
                                name="backgroundPhoto"
                                onChange={handleFileChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Success Popup */}
                    {showSuccessPopup && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center mx-4 sm:mx-0">
                                <div className="flex-shrink-0 mt-10 sm:mt-6 md:mt-4 lg:mt-2 mb-5">
                                    <Link href="/">
                                        <Image
                                            className="h-16 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-20 mx-auto" // Center the logo
                                            src="/images/Digiswipelogo.jpg"
                                            height={100}
                                            width={100}
                                            alt="Company Logo"
                                        />
                                    </Link>
                                </div>
                                <h2 className="text-lg font-bold text-black">profile Created Successfully!</h2>

                                <p className="mb-4 text-black">
                                    Please contact the admin to activate your account.

                                    <span className='block mt-2'>
                                        Your profile link:
                                        <a
                                            target='_blank'
                                            className='text-blue-700 underline'
                                            href={`/${formData.userName}/`}
                                        >
                                            {`https://digiswipe.in/${formData.userName}/`}
                                        </a>
                                        <button
                                            className="ml-2 sm:ml-6 inline-flex text-sm items-center px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                                            onClick={() => {
                                                navigator.clipboard.writeText(`https://digiswipe.in/${formData.userName}/`);
                                                toast.success('Link copied to clipboard!'); // Optional toast notification
                                            }}
                                        >
                                            <FaClipboard className="mr-1" /> {/* Clipboard icon */}
                                            Copy Link
                                        </button>
                                    </span>

                                    <span className='italic text-sm text-green-600 block mt-4'>
                                        Kindly copy and save this link for future reference. You can use it to access your profile once your account is activated.
                                    </span>
                                </p>

                                <a
                                    target='_blank' // Fixed typo here from 'blamk' to 'blank'
                                    href={`https://wa.me/919960044986?text=Hi%20Digiswipe,%20this%20is%20${encodeURIComponent(formData.name)}.%20I%20have%20created%20my%20profile%20on%20Digiswipe.in,%20and%20I%20would%20like%20to%20know%20the%20next%20steps%20for%20activating%20it.%20Thank%20you!`}
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                >
                                    Contact Admin
                                </a>

                                <button
                                    className="mt-4 ml-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 focus:outline-none"
                                    onClick={() => { setShowSuccessPopup(false), reloadpage() }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>



                    )}

                </div>
            </div>
            <Footer />

            <ToastContainer />
        </>
    );
}
