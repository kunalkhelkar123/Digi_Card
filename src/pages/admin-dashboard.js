import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // For storing user info for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [isUpdating, setIsUpdating] = useState(false); // Track if updating

    // Fetch users on component load
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
        setIsModalOpen(true);  // Open the modal
    };

    // Update the selectedUser state on input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser(prevState => ({ ...prevState, [name]: value }));
        setIsUpdating(true); // Mark as updating if any change happens
    };

    // Update user data in the database
    const handleUpdateUser = async () => {
        const response = await fetch('/api/update-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedUser), // Send the updated user data
        });

        if (response.ok) {
            const updatedUser = await response.json();
            setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
            setIsUpdating(false);
            setIsModalOpen(false); // Close the modal after update
            handleRefresh()
        } else {
            console.error('Failed to update user');
        }
    };

    // Delete user from the database
    const handleDeleteUser = async (userId) => {
        console.log("user id ", userId);
        const response = await fetch(`/api/delete-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });
        console.log("responseeeee ===> ", response);

        if (response.ok) {
            console.log("user deleted");
            alert("User is deleted"); // Show confirmation message
            setUsers(users.filter(user => user.id !== userId)); // Remove user from state
            setIsModalOpen(false); // Close modal if user was deleted
            window.location.reload(); // Refresh the page
            handleRefresh()
        } else {
            console.log("failed  to user deleted");
            console.error('Failed to delete user');
            handleRefresh()
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
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
                        <h2 className="text-2xl font-bold mb-4">User Information</h2>
                        <form className="space-y-4">
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
                                <label className="block font-medium">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Add more fields as needed */}
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
                                <label className="block font-medium">Website:</label>
                                <input
                                    type="url"
                                    name="website"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={selectedUser.website}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleCloseModal}
                                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdateUser}
                                className={`px-4 py-2 rounded transition duration-200 ${isUpdating ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white hover:bg-green-600'}`}
                                // disabled={isUpdating}
                            >
                                {isUpdating ? 'Update User' : 'Update User'}
                            </button>
                            <button
                                onClick={() => handleDeleteUser(selectedUser.id)}
                                className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                            >
                                Delete User
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
