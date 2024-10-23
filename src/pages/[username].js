import { useEffect, useCallback } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js for optimized images
import connection from '../lib/db';
import Navbar from './NavbarTwo';
import UserFooter from './UserFooter';
import { FaPhone, FaUserPlus, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaShareAlt, FaQrcode, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

export async function getServerSideProps({ query }) {
    console.log("check 1")
    const { username } = query;
    console.log("check 2")

    const sanitizedUsername = username.replace('.vcf', ''); // Remove .vcf for DB query
    console.log("check 3 sanitizedUsername ", sanitizedUsername)

    // const [rows] = await connection.query('SELECT * FROM users WHERE name = ?', [sanitizedUsername]);
    const [rows] = await connection.query('SELECT * FROM users WHERE userName = ?', [sanitizedUsername]);

    console.log("check 4 ")


    const user = rows.length > 0 ? rows[0] : null;


    return { props: { user, isVCF: username.endsWith('.vcf') } }; // Pass the vCard flag
}

export default function UserProfile({ user, isVCF }) {
    const [showQrCode, setShowQrCode] = useState(false);
    const [phone, setPhone] = useState('');
    const handleWhatsAppShare = () => {
        if (phone) {
            const whatsappUrl = `https://api.whatsapp.com/send?text=Hi, ${user.name},&phone=91${user.mobile}`
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Please enter a valid phone number');
        }
    };



    const handleDownload = () => {
        // Create an anchor element to download the QR code
        const link = document.createElement('a');
        link.href = `/${user.qrCode}` // Using the path from the user object
        link.download = 'qr_code.png'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    // Function to generate and download vCard
    const downloadVCard = useCallback(() => {
        if (!user) return; // Guard clause for no user

        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${user.name}
EMAIL:${user.email}
TEL;TYPE=WORK,VOICE:${user.mobile}
TEL;TYPE=CELL,VOICE:${user.whatsapp}
ADR;TYPE=WORK:;;${user.address};;;
END:VCARD
        `.trim();

        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${user.name.replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Clean up the URL object
    }, [user]); // `user` is a dependency

    // Use useEffect to handle client-side logic
    useEffect(() => {
        if (isVCF && user) {
            downloadVCard();
        }
    }, [isVCF, user, downloadVCard]);
    const handleQrCodeClick = () => {
        setShowQrCode(true);
    };
    // Handle conditional rendering instead of conditional hook calls
    if (!user && !isVCF) {
        return (
            <>
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-3xl font-bold text-red-600">User Not Found!</h1>

                    <br />

                    <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                        Contact Us
                    </Link>
                </div></>
        );
    }

    if (user && !user.active) {
        return (
            <>
                <Navbar />
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Account Inactive</h1>
                        <p className="text-gray-700 mb-4">
                            This account is inactive. Please contact the admin for assistance.
                        </p>
                        <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // If the user is requesting a VCF file, don't render profile information
    if (isVCF) {
        // window.location.reload();
        setTimeout(() => {
            window.history.back(); // or router.back();
        }, 1);
        return; // Optional loading message
    }

    // Render user profile information if not a VCF request
    return (
        <>

            <div

                style={{
                    background: 'repeating-linear-gradient(45deg, black, #413d48 70px)', // Background texture
                    backgroundAttachment: 'fixed', // Makes the background stick to the screen
                    height: '120vh', // Ensures the background covers the full viewport height
                    overflowX: 'auto', // Allows content to scroll
                    overflowY: 'hidden',
                    paddingBottom: '800px',
                }}
            >

                <div className="container mx-auto p-9" style={{ maxWidth: '525px', marginBottom: '100px' }}>
                    <div className="bg-white shadow-lg p-6 text-center relative"> {/* Set relative position here */}
                        {/* Background Image Section */}
                        <div
                            className="mb-4 container2"
                            style={{
                                marginLeft: '-25px',
                                marginRight: '-25px',
                                marginTop: '-24px',
                                backgroundImage: user?.backgroundPhoto
                                    ? `url(/api/get-image?fileName=${user.backgroundPhoto})`
                                    : 'none',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                height: '250px', // Height of the background image container
                                position: 'relative', // Make sure this has relative positioning
                            }}
                        >



                            {/* {white shape } */}




                            <div
                                style={{
                                    position: 'absolute',
                                    // bottom: '-100px', // Position the profile image so it's partially over the background
                                    // left: '50%',

                                    // width:'550px',
                                    // height:'120px',
                                    top: '150px',
                                    // maxWidth: '525px'
                                    // transform: 'translateX(-50%)', // Center the image horizontally
                                    // zIndex: '10', // Make sure the profile image is on top of the background
                                }}
                            >
                                <Image
                                    src={`/images/white-shape3.png`}
                                    alt="Profile"
                                    className=" ml-0.5 h-24 mt-2"

                                    width={453}

                                    height={100}

                                />
                            </div>
                            {/* Profile Image on top of background */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '-100px', // Position the profile image so it's partially over the background
                                    left: '50%',
                                    transform: 'translateX(-50%)', // Center the image horizontally
                                    zIndex: '10', // Make sure the profile image is on top of the background
                                }}
                            >
                                <Image
                                    src={`/api/get-image?fileName=${user.profilePicture}`}
                                    alt="Profile"
                                    className="w-24 h-24 mx-auto rounded-full border-4 shadow-lg container3"

                                    width={150}
                                    height={150}
                                    style={{
                                        width: '11rem',
                                        height: '11rem',
                                        borderRadius: '50%',
                                        border: '5px solid white', // Optional: Add a white border around the profile image for a clean look
                                    }}
                                />
                            </div>
                        </div>

                        {/* Rest of the content */}
                        <div className="mb-6 mt-28"> {/* Adjust the margin to push the content below */}
                            <h2 className="text-2xl font-bold  mb-2 text-black  ">{user.name}</h2>
                            <p className="text-black font-bold text-l tracking-wide ">
                                {user.designation
                                    .split(' ') // Split by spaces to get each word
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
                                    .join(' ')} {/* Join the words back with spaces */}
                            </p>

                            <a rel="noopener noreferrer" target="_blank" href={`https://${user.website}`}>
                                <p className="text-gray-600 font-bold hover:text-black text-l tracking-wide">
                                    {user.companyName}
                                </p>
                            </a>
{/* //asdddasdasdsad */}
                        </div>

                        <div className="flex flex-wrap justify-center space-x-5 mb-6 ">
                            <div className="flex-shrink-0">
                                <a
                                    href={`tel:+91${user.mobile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 border-2 border-blue-800 hover:border-blue-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white flex items-center justify-center"
                                >
                                    <FaPhone className="w-4 h-4 md:w-6 md:h-6 text-blue-800 hover:text-white" title="Call" />
                                </a>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href={`https://api.whatsapp.com/send?text=Hi, ${user.name},&phone=91${user.mobile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-green-500 border-2 border-green-500 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-white hover:text-green-500 flex items-center justify-center"
                                >
                                    <FaWhatsapp className="w-4 h-4 md:w-6 md:h-6" title="WhatsApp" />
                                </a>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href={`${user.companyLocation}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 border-2 border-red-500 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-red-500 hover:text-white flex items-center justify-center"
                                >
                                    <FaMapMarkerAlt className="w-4 h-4 md:w-6 md:h-6" title="Location" />
                                </a>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href={`mailto:${user.email}`}
                                    rel="noopener noreferrer"
                                    className="text-gray-600 border-2 border-gray-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-gray-600 hover:text-white flex items-center justify-center"
                                >
                                    <FaEnvelope className="w-4 h-4 md:w-6 md:h-6" title="Email" />
                                </a>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 border-2 border-blue-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white flex items-center justify-center"
                                >
                                    <FaGlobe className="w-4 h-4 md:w-6 md:h-6" title="Website" />
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center ">
                            <a href={`/${user.name}.vcf`} rel="noopener noreferrer">
                                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center hover:bg-black">
                                    <FaUserPlus className="mr-2" />
                                    Save contact
                                </button>
                            </a>
                        </div>

                        <div className="flex justify-center space-x-4 text-xl mt-4 pb-4 ">
                            <a
                                href={`${user.facebook}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 border-2 border-blue-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href={`${user.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 border-2 border-pink-600 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-pink-600 hover:text-white"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href={`${user.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 border-2 border-blue-400 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                            >
                                <FaTwitter />
                            </a>
                        </div>

                        <div className="fixed bottom-16 right-2 z-10">
                            <a
                                href={`/${user.name}.vcf`}
                                className="relative pulse-ring2 pulse-button bg-black text-white px-6 py-3 rounded-full flex items-center justify-center transition duration-200 overflow-hidden"
                            >
                                <span className="absolute inset-0 pulse-ring"></span>
                                <FaUserPlus className="mr-2" />
                                <div className="relative text-center z-10">
                                    <span className="block text-sm md:text-base">Save</span>
                                    <span className="block text-sm md:text-base">Contact</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 text-white py-2 fixed bottom-0 left-0 right-0">
                    <div className="container mx-auto flex justify-around items-center">
                        <div className="menu_item">
                            <a href={`tel:+91${user.mobile}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                <FaPhone className="text-xl text-black" />
                                <div className="link_btn text-sm text-black">Call Now</div>
                            </a>
                        </div>
                        <div className="menu_item">
                            <a
                                href={`https://api.whatsapp.com/send?text=Hi, ${user.name},&phone=91${user.mobile}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center"
                            >
                                <FaWhatsapp className="text-xl text-black" />
                                <div className="link_btn text-l text-black">Whatsapp</div>
                            </a>
                        </div>

                        <div className="menu_item cursor-pointer flex flex-col items-center" onClick={handleQrCodeClick}>
                            <FaQrcode className="text-xl text-black" id="qr_box_pop" />
                            <div className="link_btn text-black">Scan QR</div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}
