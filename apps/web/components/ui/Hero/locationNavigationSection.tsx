import { CiGrid42 } from "react-icons/ci";

export default function LocationNavigation() {
  return (
    <>
      {/* navigation of location */}
      <div className="pb-12 pt-5 px-2">
        <div className="mx-auto max-w-7xl">
          <div className="container md:p-5 lg:p-5 xl:p-5 pr-2">
            <h2 className="text-3xl ml-3 font-bold text-gray-800 mb-6">
              Find shop by location
            </h2>

            <div className="flex flex-wrap justify-center md:ml-3 lg:ml-3 xl:ml-3 sm:justify-start space-x-3">
              <button className="bg-primary-1000 px-4 py-2 md:px-6 lg:px-6 xl:px-6 md:py-3 lg:py-3 xl:py-3 text-white  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                Uttara
              </button>
              <button className="bg-primary-1000  px-2 py-2 md:px-6 lg:px-6 xl:px-6 md:py-3 lg:py-3 xl:py-3 text-white  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                Farmgate
              </button>
              <button className="bg-primary-1000 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 hidden sm:inline-block">
                New Market
              </button>
              <button className="bg-primary-1000 px-2 py-2 text-white md:px-6 lg:px-6 xl:px-6 md:py-3 lg:py-3 xl:py-3  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">
                Gulshan
              </button>
              <button className="bg-primary-1000 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 hidden sm:inline-block">
                Panthapath
              </button>
              <button className="bg-primary-1000 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 hidden sm:inline-block">
                Pragati Sarani
              </button>
              <a
                className="bg-primary-1000  px-2 py-2 md:px-6 lg:px-6 xl:px-6 md:py-3 lg:py-3 xl:py-3 text-white  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                href="/more"
              >
                <button className="flex items-center">
                  <CiGrid42 className="inline-block text-xl" /> More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
