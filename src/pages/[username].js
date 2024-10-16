import { useEffect, useCallback } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js for optimized images
import connection from '../lib/db';
import Navbar from './NavbarTwo';

export async function getServerSideProps({ query }) {
    const { username } = query;
    const sanitizedUsername = username.replace('.vcf', ''); // Remove .vcf for DB query

    const [rows] = await connection.query('SELECT * FROM users WHERE name = ?', [sanitizedUsername]);
    const user = rows.length > 0 ? rows[0] : null;

    return { props: { user, isVCF: username.endsWith('.vcf') } }; // Pass the vCard flag
}

export default function UserProfile({ user, isVCF }) {
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

    // Handle conditional rendering instead of conditional hook calls
    if (!user && !isVCF) {
        return (
<>
            <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold text-red-600">User Not Found!</h1>
                
                <br/>
                
                <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                        Contact Us
                    </Link>
            </div></>
        );
    }

    if (user && !user.active) {
        return (
            <>
            <Navbar/>
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
        return <h1>Downloading your vCard...</h1>; // Optional loading message
    }

    // Render user profile information if not a VCF request
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
                {/* Profile Picture at the Top, Centered */}
                <Image
                    src={`/uploads/${user.profilePicture}`}
                    alt="Profile Picture"
                    className="mb-4 rounded-full border-2 border-gray-200"
                    width={200}
                    height={200}
                />
                
                <h1 className="text-3xl font-bold mb-4">{user.name}&apos;s Profile</h1>
                <p className="text-lg text-gray-800 mb-2">Email: <span className="font-semibold">{user.email}</span></p>
                <p className="text-lg text-gray-800 mb-2">Address: <span className="font-semibold">{user.address}</span></p>
                <p className="text-lg text-gray-800 mb-2">Mobile: <a href={`tel:${user.mobile}`} className="text-blue-600 hover:underline">{user.mobile}</a></p>
                <p className="text-lg text-gray-800 mb-2">WhatsApp: <a href={`https://wa.me/${user.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{user.whatsapp}</a></p>

                {/* Social Media Links */}
                <p className="text-lg text-gray-800 mb-2">
                    Facebook: 
                    <a 
                        href={`https://facebook.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.facebook}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Instagram: 
                    <a 
                        href={`https://instagram.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.instagram}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                designation: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.designation}
                    </a>
                </p><p className="text-lg text-gray-800 mb-2">
                companyName: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.companyName}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                website: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.website}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                linkedin: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.linkedin}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    Twitter: 
                    <a 
                        href={`https://twitter.com/${user.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline ml-1">{user.twitter}
                    </a>
                </p>

            </div>
            
        </div>
        <div>
        <h2>Your QR Code:</h2>
        <img src={`/${user.qrCode}`} alt="QR Code" width="200" />

        {/* Download QR Code Button */}
        <a href={`/${user.qrCode}`} download={`${user.name}-qr.png`}>
            <button>Download QR Code</button>
        </a>
    </div>
    </>
    );
}
