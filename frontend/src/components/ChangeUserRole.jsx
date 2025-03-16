import React, { useState } from 'react';
import ROLE from '../common/role';
import { IoMdClose } from "react-icons/io";
import domain from '../common';
import { toast } from 'react-toastify';

const ChangeUserRole = ({
    name,
    email,
    role,
    userId,
    onClose,
    callFunc,
}) => {
    const [userRole, setUserRole] = useState(role);

    const handleOnChangeSelect = (e) => {
        setUserRole(e.target.value);
    };

    const updateUserRole = async () => {
        const fetchResponse = await fetch(domain.updateUser.url, {
            method: domain.updateUser.method,
            credentials: 'include',
            // headers: {
            //     "content-type": "application/json"
            // },
            // body: JSON.stringify({
            //     userId: userId,
            //     role: userRole
            // })
        });

        const responseData = await fetchResponse.json();
        console.log("target",responseData);

        if (responseData.success) {
            toast.success(responseData.message);
            onClose();
            callFunc();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 transition-opacity">
            <div className="bg-white shadow-lg p-6 w-full max-w-md rounded-2xl transform transition-all duration-300 scale-95 hover:scale-100">
                
                {/* Close Button */}
                <button className="ml-auto block text-gray-500 hover:text-red-600 transition" onClick={onClose}>
                    <IoMdClose className="text-2xl" />
                </button>

                {/* Title */}
                <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">Change User Role</h1>

                {/* User Info */}
                <div className="text-gray-700 space-y-2">
                    <p><span className="font-semibold">Name:</span> {name}</p>
                    <p><span className="font-semibold">Email:</span> {email}</p>
                </div>

                {/* Role Selector */}
                <div className="mt-4">
                    <label className="block text-gray-600 font-medium">Role:</label>
                    <select
                        className="w-full mt-2 border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={userRole}
                        onChange={handleOnChangeSelect}
                    >
                        {Object.values(ROLE).map(el => (
                            <option value={el} key={el}>{el}</option>
                        ))}
                    </select>
                </div>

                {/* Change Role Button */}
                <button
                    className="mt-5 w-full py-2 px-4 rounded-lg bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition-all"
                    onClick={updateUserRole}
                >
                    Change Role
                </button>
            </div>
        </div>
    );
};

export default ChangeUserRole;
