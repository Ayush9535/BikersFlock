import React, { useState } from 'react';
import { FaPlus, FaUpload } from 'react-icons/fa';

function NewPost() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    console.log('Image uploaded:', selectedImage);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-full">
      <label htmlFor="fileInput" className="w-24 h-12 bg-bforange text-white rounded-md hover:bg-orange-600 cursor-pointer mb-4 sm:mb-0 mr-4 ml-4 flex items-center justify-center">
        <FaPlus className="h-6 w-6 mr-2" />
        File
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      {imagePreview && (
        <div className="mb-4 sm:mb-0">
          <img src={imagePreview} alt="Selected" className="w-60 h-60 object-cover rounded-md" />
        </div>
      )}
      <button
        onClick={handleUploadClick}
        disabled={!selectedImage}
        className={`w-24 h-12 px-2 rounded-md mt-4 mr-4 ml-4 sm:mt-0 ${selectedImage ? 'bg-bforange text-white' : 'bg-bforange text-white cursor-not-allowed'} focus:outline-none flex items-center justify-center`}
      >
        <FaUpload className="h-6 w-6 mr-2" />
        Upload
      </button>
    </div>
  );
}

export default NewPost;
