import React, { useState } from 'react';

const PostComponent = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = () => {
    // Open comment modal or perform comment action
    setCommentCount(commentCount + 1);
  };

  const handleSave = () => {
    // Save post logic
  };

  const handleOptions = () => {
    // Open options modal or perform options action
  };

  return (
    <div>
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src="https://avatar.iran.liara.run/public/9"
            alt="Profile"
            className="rounded-full mr-2 w-10 h-10 object-cover"
          />
          <div>
            <span className="font-semibold">John Doe</span>
            <p className="text-gray-400 text-xs">New York, USA</p>
          </div>
        </div>
        <button
          onClick={handleOptions}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>    
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/547049062/photo/handsome-young-man-on-motorcycle.jpg?s=612x612&w=0&k=20&c=VuVpZhUnCJsc7uXcsZN1LP4SBiNWp7VV3KatSnT4XoA="
          alt="Post"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="mt-4">
        <p className="text-gray-700">
          This is a sample caption for the post. #nature #travel #photography
        </p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button
              onClick={handleLike}
              className={`mr-4 flex items-center text-red-500 ${
                liked ? 'text-red-600' : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="ml-2">{likeCount}</span>
            </button>
            <button
              onClick={handleComment}
              className="mr-4 flex items-center text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="ml-2">{commentCount}</span>
            </button>
          </div>
          <button
            onClick={handleSave}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PostComponent;