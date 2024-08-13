import Image from "next/image";
import React from "react";

function TestinomialCard() {
  return (
    <div className="bg-green-50 p-6 md:p-8 rounded-lg  max-w-lg mx-auto flex flex-col space-y-4 mb-4">
      <div className="flex items-center space-x-4">
        <Image src="/avatar.png" alt="user" width={100} height={100} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-semibold text-gray-800">James Darwin</h4>
          <p className="text-gray-600 text-sm">Kolkata, West Bengal</p>
        </div>
      </div>

      <p className="text-gray-700">
        “Joining MyFastX has been a game-changer for me. The flexible hours and
        reliable income have made my life so much easier.”
      </p>

      <div className="flex items-center justify-between">
        <div className="flex space-x-1 text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 17.27l5.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
            </svg>
          ))}
        </div>

        
      </div>
      {/* Controls */}
      <div className="flex items-center justify-between px-1">
          {/* Dots */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === 0 ? "bg-green-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-300 rounded-full p-1 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-white border border-gray-300 rounded-full p-1 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>
  );
}

export default TestinomialCard;