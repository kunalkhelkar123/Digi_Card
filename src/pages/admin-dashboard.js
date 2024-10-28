import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // For storing user info for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [isUpdating, setIsUpdating] = useState(false); // Track if updating
    const [formData, setFormData] = useState({
        id: '',
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

    // State for filter
    const [filter, setFilter] = useState('yearly'); // Default to yearly
    const [selectedDate, setSelectedDate] = useState(''); // Single date for date-wise filtering
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const router = useRouter();

    // Fetch users on component load
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
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
            userName: user.userName,
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

        const response = await fetch('/api/update-user', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            const updatedUser = await response.json();
            setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
            setIsModalOpen(false); // Close the modal after update
            // window.reload();
            window.location.reload();
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
            setIsUpdating(true);
        }
    };

    const handleDeleteUser = async (userId) => {
        const response = await fetch(`/api/delete-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }), // Stringify the object
        });

        if (response.ok) {
            setUsers(users.filter(user => user.id !== userId)); // Remove user from state
            setIsModalOpen(false); // Close modal if user was deleted
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
    const current_Date = new Date();
    const registrationDate  = current_Date.toLocaleDateString();

    // Filter users based on the selected timeframe
    const filteredUsers = users.filter(user => {
        const registrationDate = new Date(user.registrationDate);
        const now = new Date();

        switch (filter) {
            case 'daily':
                return registrationDate.toDateString() === new Date(selectedDate).toDateString();
            case 'weekly':
                const weekStart = new Date(now);
                weekStart.setDate(now.getDate() - now.getDay());
                return registrationDate >= weekStart && registrationDate <= now;
            case 'monthly':
                return registrationDate.getMonth() === now.getMonth() && registrationDate.getFullYear() === now.getFullYear();
            case 'yearly':
                return registrationDate.getFullYear() === now.getFullYear();
            case 'custom':
                const start = new Date(startDate);
                const end = new Date(endDate);
                return registrationDate >= start && registrationDate <= end;
            default:
                return true;
        }
    });

    return (
        <div className="min-h-screen bg-gray-100 p-6 "   >
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h1>
            {/* Refresh Button */}
            <div className="flex justify-end mb-4" >
                <button
                    onClick={() => window.location.reload()} // Refresh the page
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    Refresh
                </button>
            </div>

            {/* Filter Options */}
            <div className="mb-4 flex space-x-2" >
                <select
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        if (e.target.value !== 'custom') {
                            setStartDate(''); // Reset dates when changing filter
                            setEndDate('');
                            setSelectedDate(''); // Reset selected date
                        }
                    }}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="daily">Date Wise</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="custom">Custom Date Range</option>
                </select>


                {filter === 'daily' && (
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                )}

                {filter === 'custom' && (
                    <>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                        />
                    </>
                )}

                {/* <div className="flex justify-end ">
                    <button
                        onClick={() => window.location.reload()} // Refresh the page
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    >
                        Search
                    </button>
                </div> */}
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="border px-2 py-2 text-sm text-left text-gray-600">Sr. No</th>
                            <th className="border px-2 py-2 text-sm text-left text-gray-600">Name</th>
                            <th className="border px-2 py-2 text-sm text-left text-gray-600">Address</th>
                            <th className="border px-2 py-2 text-left text-sm  text-gray-600">Mobile</th>
                            <th className="border px-2 py-2  text-sm text-left text-gray-600">Email</th>
                            <th className="border px-2 py-2  text-sm text-left text-gray-600">Registration Date</th>
                            <th className="border px-2 py-2 text-sm  text-left text-gray-600">Status</th>
                            <th className="border px-24 py-2 text-sm  text-left text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={user.id} className="hover:bg-gray-100 transition duration-200">
                                <td className="border text-sm w-10 px-2 py-2">{index + 1}</td>
                                <td className="border text-sm  px-2 py-2">{user.name}</td>
                                <td className="border text-sm w-80  px-2 py-2">{user.address}</td>
                                <td className="border text-sm w-30  px-2 py-2">{user.mobile}</td>
                                <td className="border text-sm w-30  px-2 py-2">{user.email}</td>
                                <td className="border text-sm w-12  px-2 py-2">{user.registrationDate}</td>
                                <td className="border text-sm  px-2 py-2">{user.active ? 'Active' : 'Inactive'}</td>
                                <td className="border text-sm  px-2 py-2">
                                    <button
                                        onClick={() => toggleActiveStatus(user.id, user.active)}
                                        className={`py-1 px-1 rounded transition duration-200 ${user.active ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'
                                            }`}
                                    >
                                        {user.active ? 'Deactivate' : 'Activate'}
                                    </button>
                                    <button
                                        onClick={() => handleShowMoreInfo(user)}
                                        className="ml-2 py-1 px-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                                    >
                                        Show More Info
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)} // Call delete function with user ID
                                        className="ml-2 py-1 px-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* User Info Modal */}
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
                                <label className="block font-medium">UserName:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.userName}
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
                                className={` ${isUpdating ? 'bg-yellow-400 text-black rounded hover:bg-yellow-600 hover:text-white' : 'bg-green-500 text-white rounded hover:bg-green-600'} px-4 py-2 transition duration-200`}
                            >
                                {isUpdating ? 'Update User' : 'Update User'}
                            </button>

                            <button
                                onClick={() => handleDeleteUser(selectedUser.id)} // Call delete function with user ID
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
