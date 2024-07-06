import React from "react";

const OfferCard = ({ mallName, shopName, flatDiscount, uptoDiscount }: any) => {
  return (
    <div className="bg-gradient-to-tr from-green-200 via-gray-300 to-yellow-300 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="text-xl font-bold mb-2 text-gray-800">{shopName}</div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="font-semibold text-green-600 text-lg">
              {flatDiscount}% OFF
            </span>
            <span className="text-gray-500 font-semibold ml-1"> Flat</span>
          </div>
          <div>
            <span className="font-semibold text-green-600 text-lg">
              Upto {uptoDiscount}% OFF
            </span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-teal-500 via-blue-500 via-indigo-500 via-purple-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-105">
          View Offer
        </button>
      </div>
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 text-center text-sm text-gray-600 py-2">
        {mallName}
      </div>
    </div>
  );
};

export default OfferCard;
