import Spinner from "../ui/Hero/Spinner";
import { useEffect, useState } from "react";
import { FaRegCalendarTimes } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";

export default function SingleLevel({ data, value }: any) {
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (data.length > 0) setLoading(false);
  }, [data]);

  return (
    <div>
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <a href="/shoppingMall">
              {" "}
              <h2 className="text-3xl font-bold text-gray-800">
                Level-{value}
              </h2>
            </a>
          </div>
          {/* Grid for cards */}
          {loading && <Spinner />}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through sample data */}

            {data
              .filter((mall: any) => mall.shopping_mall_level_id === value) // Filter by shopping_mall_level_id equal to 1
              .slice(0, showMore ? data.length : 3) // Limit the number of items shown
              .map((mall: any) => (
                <div
                  key={mall.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d3/dd/d2/jamuna-future-park.jpg?w=1200&h=-1&s=1"
                      alt="Shopping Mall"
                      className="w-full h-100 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-5 right-0 flex items-center">
                      <div className="bg-gray-600 bg-opacity-50 py-1 px-2 rounded-l-lg flex items-center">
                        <FaRegCalendarTimes className="text-white mr-1" />
                        <p className="text-sm text-white">Off Day - offday</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex">
                        <span className="text-gray-400 mr-1">Level :</span>
                        <span className="font-semibold text-gray-400">
                          {mall.shopping_mall_level_id}
                        </span>
                      </div>
                      <button className="bg-gray-100 text-primary-2 px-3 py-1 rounded font-semibold text-md hover:bg-gray-600 hover:text-white">
                        See Map
                      </button>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {mall.name}
                    </h3>

                    <p className="text-gray-600 flex items-center">
                      <LuCalendarClock className="text-orange-500 mr-2 text-lg" />
                      Open 10:00 AM - 8:00 PM
                    </p>

                    <button className="text-blue-500 inline-block mt-2 hover:underline active:underline">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {/* Show more button */}
          {!loading && (
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleShowMore}
                className="relative bg-blue-500 text-white px-4 py-2 z-auto rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 z-10"
              >
                <span>{showMore ? "Show Less" : "Show More"}</span>
                {showMore ? (
                  <IoIosArrowDropup className="text-xl" />
                ) : (
                  <IoIosArrowDropdown className="text-xl" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
