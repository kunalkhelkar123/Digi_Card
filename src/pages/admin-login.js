import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from './NavbarTwo';
export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here, you would verify the email and password with your backend
        if (email === 'admin@gmail.com' && password === 'admin123') {
            alert('Login successful!');
            router.push('/admin-dashboard'); // Redirect to the admin dashboard after login
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <>
        <Navbar/>
        <div 
        className="min-h-screen flex items-center justify-center bg-gray-100 py-12" 
        style={{
            backgroundImage: "url('/images/about-banner.jpg')", // Replace with your background image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
            <div className="mt-20 bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Admin Login</h1>
                <p className="text-gray-600 text-center mb-4">Please enter your credentials to access the dashboard.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Admin Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Admin Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                    <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
                        Login
                    </button>
                </form>
                <div className="text-center mt-10">


                    {/* <p className="text-sm text-gray-500 mt-4">Forgot your password? <a href="#" className="text-blue-500 hover:underline">Reset it</a></p> */}
                </div>
            </div>
        </div></>
    );
}
