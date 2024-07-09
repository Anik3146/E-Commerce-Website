import React from "react";

const OfferCard = ({ mallName, shopName, flatDiscount, uptoDiscount }: any) => {
  return (
    <div className="bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-100 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="text-xl font-bold mb-2 text-gray-800">{shopName}</div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="font-semibold text-blue-600 text-lg">
              {flatDiscount}% OFF
            </span>
            <span className="text-gray-500 font-semibold ml-1"> Flat</span>
          </div>
          <div>
            <span className="font-semibold text-blue-600 text-lg">
              Upto {uptoDiscount}% OFF
            </span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105">
          View Offer
        </button>
      </div>
      <div className="bg-gradient-to-br from-blue-900 via-blue-300 to-blue-400 text-center text-sm text-gray-600 py-2">
        {mallName}
      </div>
    </div>
  );
};

export default OfferCard;
