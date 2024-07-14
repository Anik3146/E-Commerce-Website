import Image from "next/image";
import React from "react";

const OfferCard = ({ mallName, shopName, flatDiscount, uptoDiscount }: any) => {
  return (
    <div className="mx-3 bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="relative">
        <div className="px-6 py-4 rounded-lg shadow-lg ">
          <div className="text-xl font-bold text-gray-800">{shopName}</div>
          <div className="flex items-end">
            <div className="flex justify-between w-full">
              <div className="rounded-lg overflow-hidden mt-5">
                <Image
                  src="/images/offer.jpg" // Replace with your image path
                  alt="Offer Image"
                  width={80}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/discount.jpg" // Replace with your image path
                  alt="Discount Image"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105">
            View Offer
          </button>
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 text-center text-sm text-white px-2 py-1 rounded-full">
          Offer valid until 02/03/2025
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
