import React, { useState } from 'react';
import { FaPlus, FaUpload } from 'react-icons/fa';

function NewPost() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState('');
  const [caption, setCaption] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(location , caption)
    console.log('Image uploaded:', selectedImage);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto">
      <h1 className='text-4xl font-semibold my-10 text-orange-500'>ADD POST</h1>
      <form className='w-[60%] lg:w-[30%] flex flex-col' onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="location" className="block text-xl font-medium leading-6 text-gray-900">
            Location
          </label>
          <div className="mt-2">
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Enter Location"
              onChange={(e) => setLocation(e.target.value)}
              className="block w-full rounded-md border-0 px-6 py-3 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:leading-6 text-md"
            />
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="caption" className="block text-xl font-medium leading-6 text-gray-900">
            Caption
          </label>
          <div className="mt-2">
            <input
              id="caption"
              name="caption"
              type="text"
              required
              placeholder="Enter Caption"
              onChange={(e) => setCaption(e.target.value)}
              className="block w-full rounded-md border-0 px-6 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-md sm:leading-6"
            />
          </div>
        </div>
        <div className='flex gap-5 items-center mt-3'>
          <label htmlFor="fileInput" className={`w-20 h-10 text-bforange rounded-md mb-4 sm:mb-0 mr-4  flex items-center justify-center border-2 border-bforange ${selectedImage !== null ? "cursor-not-allowed" : "cursor-pointer"}`}>
            <FaPlus className="h-4 w-4 mr-2" />
            File
            <input
              id="fileInput"  
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              disabled={selectedImage !== null}
              />
          </label>
          {selectedImage && <div className='flex items-center'>
            <p>{selectedImage.name}</p>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={()=>{setSelectedImage(null); setImagePreview(null)}}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ff6600" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ff6600" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>  
          </div> }
        </div> 
        {imagePreview && (
          <div className="mb-4 sm:mb-0 my-6">
            <h1 className='text-2xl mb-3' >Image Preview</h1>
            <div className='flex'>
              <img src={imagePreview} alt="Selected" className="w-60 h-60 object-cover rounded-md mr-2" />
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={()=>setImagePreview(null)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ff6600" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ff6600" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </div>
          </div>
        )}
        <button type='submit' className='bg-orange-600 px-6 py-2 text-white rounded text-xl my-7 self-center'>Add</button>
      </form>
    </div>
  );
}

export default NewPost;
