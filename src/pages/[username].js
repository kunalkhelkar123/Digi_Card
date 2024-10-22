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

    const [rows] = await connection.query('SELECT * FROM users WHERE name = ?', [sanitizedUsername]);
    console.log("check 4 ")

    const user = rows.length > 0 ? rows[0] : null;
    console.log("QR path ==> ", user.qrCode)


    console.log("qr code path2  ==>", `${process.env.BASE_URL2}/${user.qrCode}`)
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
                    // height: '100vh', // Full height of the viewport
                    background: 'repeating-linear-gradient(45deg, black, #413d48 70px)', // Corrected syntax for background
                    // backgroundPosition: 'center', // Centers the image (not necessary for gradients, but included if needed)
                    // backgroundRepeat: 'no-repeat', // Not applicable for gradients but can be kept
                }}
            >

                <div className="container mx-auto p-9 "
                    style={{
                        maxWidth: '480px', // You can keep this for maximum width
                        // height: '100vh', // Full height of the viewport
                    }}>
                    <div className="bg-white shadow-lg  p-6 text-center " >
                        <div className="mb-4 container2"
                            style={{
                                marginLeft: '-25px',
                                marginRight: '-25px',
                                marginTop: '-114px',
                                // backgroundImage: `url(/uploads/${user.backgroundPhoto})`, // Corrected syntax for backgroundImage
                                backgroundImage: `url(/api/get-image?fileName=/${user.backgroundPhoto})`, // Corrected syntax for backgroundImage

                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover', // Optional: Ensure the background image covers the entire div
                            }}>
                            <Image
                                // src={`/uploads/${user.profilePicture}`}
                                // src={`/uploads/${user.profilePicture}`}
                                src={`/api/get-image?fileName=${user.profilePicture}`}
                                alt="Profile"
                                className="w-24 h-24  mx-auto rounded-full container3"

                                width={100}
                                height={100}
                                style={{
                                    marginTop: '90px',
                                    width: '13rem',
                                    height: '13rem',
                                }}
                            />

                        </div>

                        <div className="mb-6 mt-10">
                            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                            <p className="text-gray-600 font-bold text-xl">
                                {user.designation
                                    // .toLowerCase() // Convert the string to lowercase first
                                    .split(' ') // Split by spaces to get each word
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
                                    .join(' ')}  {/* Join the words back with spaces */}
                            </p>


                            <a rel="noopener noreferrer" target='_blank' href={`https://${user.website}`} ><p className="text-gray-600 font-bold hover:text-black  text-xl ">{user.companyName}</p></a>
                        </div>


                        <div className="flex flex-wrap justify-center space-x-5 mb-6 mt-10">
                            <div className="flex-shrink-0">
                                <a
                                    href={`tel:+91${user.mobile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 border-2 border-blue-800 hover:border-blue-600  rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white flex items-center justify-center"
                                >
                                    <FaPhone className="w-4 h-4 md:w-6 md:h-6 text-blue-800 hover:text-white" title="Call" />
                                </a>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href={`https://api.whatsapp.com/send?text=Hi, ${user.name},&phone=91${user.mobile}`}
                                    //https://api.whatsapp.com/send?text=Hi,%20Kunal%20Gajananrao%20Khelkar,&phone=919146219186
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 border-2 border-green-500 rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-green-500 hover:text-white flex items-center justify-center"
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



                        {/* <div className="whatsapp_share mb-6 ml-5 mt-10">
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
                        </div> */}

                        <div className="flex justify-center mt-2">
                            <a
                                href={`/${user.name}.vcf`}
                                // target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center hover:bg-black "
                                >
                                    <FaUserPlus className="mr-2" />
                                    Save contact
                                </button>
                            </a>
                        </div>




                        <div className="flex justify-center space-x-4 text-2xl mt-8">
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
                        <div className="fixed bottom-16 right-2 z-10 ">
                            <a
                                href={`/${user.name}.vcf`}
                                className="relative pulse-ring2 pulse-button bg-black text-white px-6 py-3 rounded-full flex items-center justify-center transition duration-200 overflow-hidden"
                            >
                                {/* Pulse ring */}
                                <span className="absolute inset-0 pulse-ring"></span>
                                <FaUserPlus className="mr-2 " />
                                <div className="relative text-center z-10">
                                    <span className="block text-sm md:text-base">Save</span>
                                    <span className="block text-sm md:text-base">Contact</span>
                                </div>
                            </a>
                        </div>




                    </div>
                </div>
                {/* <UserFooter/> */}
                <div className="bg-gray-200 text-white py-2 fixed bottom-0 left-0 right-0">
                    <div className="container mx-auto flex justify-around items-center">
                        <div className="menu_item">
                            <a href={`tel:+91${user.mobile}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                                <FaPhone className="text-xl  text-black" />
                                <div className="link_btn  text-sm  text-black">Call Now</div>
                            </a>
                        </div>
                        <div className="menu_item">
                            <a
                                href={`https://api.whatsapp.com/send?text=Hi, ${user.name},&phone=91${user.mobile}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center"
                            >
                                <FaWhatsapp className="text-xl  text-black" />
                                <div className="link_btn  text-l  text-black">Whatsapp</div>
                            </a>
                        </div>
                        {/* <div 
          className="menu_item cursor-pointer flex flex-col items-center" 
          onClick={() => window.location.hash = '#home'} 
          id="share_box_pop"
        >
          <FaShareAlt className="text-xl" /> 
          Share
        </div> */}
                        {/* <div
                            className="menu_item cursor-pointer flex flex-col items-center"
                            onClick={() => window.location.hash = '#home'}
                        >
                            <FaQrcode className="text-xl  text-black" id="qr_box_pop" />
                                <div className="link_btn text-l  text-black">QR Code</div>
                                
                        </div> */}

                        <div
                            className="menu_item cursor-pointer flex flex-col items-center"
                            onClick={handleQrCodeClick} // Show QR code on click
                        >
                            <FaQrcode className="text-xl text-black" id="qr_box_pop" />
                            <div className="link_btn text-l text-black">QR Code</div>
                        </div>

                        {showQrCode && (
                            <div className="qr-code-modal  fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                                <div className="bg-white p-4 rounded ">
                                    {/* <h2 className="text-lg qrcode  text-black">Your QR Code</h2> */}
                                    <Image src={`https://digiswipe.in/${user.qrCode}`} alt={`https://digiswipe.in/${user.qrCode}`} height={500} width={500} className="mb-4 qrcode" />

                                    <button
                                        onClick={handleDownload}
                                        className="bg-blue-500 ml-8 text-white px-4 py-2 rounded"
                                    >
                                        Download QR Code
                                    </button>
                                    <button
                                        onClick={() => setShowQrCode(false)}
                                        className="ml-12 bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div ></>









    );
}
