import Spinner from "./Spinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { FaRegCalendarTimes } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import MallData from "~/models/mallModel";
import baseUrl from "~/utils/constant";

export default function ShoppingMallHero() {
  const [data, setData] = useState<MallData[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to toggle show more cards
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Simulating fetching data (replace with actual fetch logic)
  const fetchData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${baseUrl}/api/shopping-mall`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData.data); //data : {{}}
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //router section
  const router = useRouter();
  const handleViewDetails = (mall: String) => {
    router.push(`/shopping-mall/${mall}`); //mall is the index for dynamic routing
  };
  useEffect(() => {
    fetchData(); // Call fetchData when component mounts
  }, []);

  useEffect(() => {
    if (data.length > 0) setLoading(false); // Call fetchData when component mounts
  }, [data]);

  return (
    <div>
      {/* Shopping mall section */}

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <a href="/shoppingMall">
              {" "}
              <h2 className="text-3xl font-bold text-gray-800">
                Shopping Malls
              </h2>
            </a>

            {/* Filter section */}
            <div className="relative">
              <div
                className="block appearance-none  bg-gray-300 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                Show All
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700 pointer-events-none">
                <BsSliders2 className="h-5 w-5" />
              </div>
            </div>
          </div>
          {/* Grid for cards */}
          {loading && <Spinner />}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through sample data */}

            {data.slice(0, showMore ? data.length : 3).map((mall) => (
              <div
                key={mall.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <a href={`/shopping-mall/${mall.name}`}>
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d3/dd/d2/jamuna-future-park.jpg?w=1200&h=-1&s=1"
                      alt="Shopping Mall"
                      className="w-full h-100 object-cover rounded-t-lg"
                    />
                  </a>

                  <div className="absolute top-5 right-0 flex items-center">
                    <div className="bg-gray-600 bg-opacity-50 py-1 px-2 rounded-l-lg flex items-center">
                      <FaRegCalendarTimes className="text-white mr-1" />
                      <p className="text-sm text-white">
                        Off Day - {mall.offday}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex">
                      <span className="text-gray-400 mr-1">
                        No. of Levels :
                      </span>
                      <span className="font-semibold text-gray-400">
                        {mall.level}
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

                  <button
                    onClick={() => handleViewDetails(mall.name)}
                    className="text-blue-500 inline-block mt-2 hover:underline active:underline"
                  >
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
