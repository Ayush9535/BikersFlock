import React from 'react'

const ProfileCardComponent = () => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md" id="posts" role="tabpanel">
            <img
                className="w-full h-48 object-cover mb-4"
                src="https://via.placeholder.com/400x300"
                alt="Product"
            />
            <h4 className="text-lg font-semibold mb-2">Brown skirt</h4>
            <p className="text-gray-600 mb-2">New, lightly worn, with tags.</p>
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">$45</span>
                <span className="text-gray-600">&#9829; 24</span>
            </div>
        </div>
    )
}

export default ProfileCardComponent
