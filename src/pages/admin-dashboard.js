import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // For storing user info for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [isUpdating, setIsUpdating] = useState(false); // Track if updating





    const [formData, setFormData] = useState({
        id: users.id,
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

    // Fetch users on component load


    const router = useRouter();

    useEffect(() => {
        // Check if the token is present in sessionStorage
        const token = sessionStorage.getItem('token');
        console.log("checking token ")
        if (!token) {
            console.log("not find checking token ")

            // If no token is found, redirect to the login page
            router.push('/admin');
        }
    }, [router]);



    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/get-user-profiles');
            const data = await response.json();
            setUsers(data.users);
        };
        fetchUsers();
    }, []);

    // Toggle the active status of a user
    const toggleActiveStatus = async (userId, currentStatus) => {
        const newStatus = !currentStatus; // Toggle the current status
        const response = await fetch(`/api/update-user-status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, active: newStatus }),
        });

        if (response.ok) {
            setUsers(users.map(user =>
                user.id === userId ? { ...user, active: newStatus } : user
            ));
        } else {
            console.error('Failed to update user status');
        }
    };

    // Show more info modal with selected user data
    const handleShowMoreInfo = (user) => {
        setSelectedUser({ ...user }); // Copy user data for editing
        setFormData({
            id: user.id,
            name: user.name,
            address: user.address,
            email: user.email,
            mobile: user.mobile,
            whatsapp: user.whatsapp,
            facebook: user.facebook,
            instagram: user.instagram,
            twitter: user.twitter,
            designation: user.designation,
            companyName: user.companyName,
            website: user.website,
            linkedin: user.linkedin,
            profilePicture: null,
            backgroundPhoto: null,
        });
        setIsModalOpen(true);  // Open the modal
    };

    // Update user data in the database
    const handleUpdateUser = async () => {
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }
        console.log("updating user data")

        const response = await fetch('/api/update-user', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            console.log("updated user data")

            const updatedUser = await response.json();
            setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
            setIsModalOpen(false); // Close the modal after update
            handleRefresh()
        } else {
            console.error('Failed to update user');
        }
    };

    // Handle input change for both text inputs and file uploads
    const handleInputChange = (e) => {
        const { name, type } = e.target;

        if (type === 'file') {
            // Handle file upload
            if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSelectedUser(prevState => ({
                        ...prevState,
                        [name]: reader.result // Base64 string for image
                    }));
                    setFormData(prevState => ({
                        ...prevState,
                        [name]: file,
                    }));
                };
                reader.readAsDataURL(file); // Read file as base64 encoded URL
            }
        } else {
            // Handle text inputs
            setFormData({ ...formData, [name]: e.target.value });
            setSelectedUser(prevState => ({ ...prevState, [name]: e.target.value }));
            setIsUpdating(true)
        }
    };

    const handleDeleteUser = async (userId) => {
        // window.location.reload() 
        setTimeout(() => {
            window.location.reload(); // or router.back();
        }, 4000)
        const response = await fetch(`/api/delete-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }), // Stringify the object
        });
        handleRefresh()
        if (response.ok) {
            const result = await response.json(); // Parse the response
            setUsers(users.filter(user => user.id !== userId)); // Remove user from state
            setIsModalOpen(false); // Close modal if user was deleted
            console.log(result.message); // Optionally log success message
        } else {
            const error = await response.json(); // Parse the error response
            console.error('Failed to delete user:', error.error);
        }
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
        setIsUpdating(false); // Reset updating state
    };

    // Function to refresh the page
    const handleRefresh = () => {
        window.location.reload(); // Refresh the page
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h1>
            {/* Refresh Button */}
            <div className="flex justify-end mb-4">
                <button
                    onClick={handleRefresh}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    Refresh
                </button>
            </div>
            <div className="overflow-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border px-4 py-2 text-left text-gray-600">Name</th>
                            <th className="border px-4 py-2 text-left text-gray-600">Address</th>
                            <th className="border px-4 py-2 text-left text-gray-600">Mobile</th>
                            <th className="border px-4 py-2 text-left text-gray-600">Email</th>
                            <th className="border px-4 py-2 text-left text-gray-600">Status</th>
                            <th className="border px-4 py-2 text-left text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-gray-100 transition duration-200">
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.address}</td>
                                <td className="border px-4 py-2">{user.mobile}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.active ? 'Active' : 'Inactive'}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => toggleActiveStatus(user.id, user.active)}
                                        className={`py-1 px-2 rounded transition duration-200 ${user.active ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'
                                            }`}
                                    >
                                        {user.active ? 'Deactivate' : 'Activate'}
                                    </button>
                                    <button
                                        onClick={() => handleShowMoreInfo(user)}
                                        className="ml-4 py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                                    >
                                        Show More Info
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for showing and updating user information */}
            {isModalOpen && selectedUser && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl overflow-y-auto max-h-screen">
                        <h2 className="text-2xl font-bold mb-4">User Information</h2>
                        <form className="space-y-4">
                            {/* Form fields */}
                            <div>
                                <label className="block font-medium">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Mobile:</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Whatsapp Number:</label>
                                <input
                                    type="text"
                                    name="whatsapp"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.whatsapp}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Designation:</label>
                                <input
                                    type="text"
                                    name="designation"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.designation}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Company Name:</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.companyName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block font-medium">Profile Picture:</label>
                                <input
                                    type="file"
                                    name="profilePicture"
                                    accept="image/*"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Background Photo:</label>
                                <input
                                    type="file"
                                    name="backgroundPhoto"
                                    accept="image/*"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleUpdateUser}
                                disabled={isUpdating} // Disable button if isUpdating is true
                                className={` ${isUpdating ? 'bg-yellow-400 text-black rounded hover:bg-yellow-600   hover:text-white' : 'bg-green-500 text-white rounded hover:bg-green-600'} px-4 py-2 transition duration-200`}
                            >
                                {isUpdating ? 'Update User' : 'Update User'}
                            </button>

                            <button
                                onClick={() => handleDeleteUser(selectedUser.id)} // Pass function reference
                                className="ml-2 bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition duration-200"
                            >
                                Delete User
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="ml-2 bg-gray-300 text-gray-700 rounded px-4 py-2 hover:bg-gray-400 transition duration-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
