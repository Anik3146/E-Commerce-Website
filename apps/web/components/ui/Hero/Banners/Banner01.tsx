import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-100 bg-cover bg-center mt-3"
      style={{
        backgroundImage: "url('images/HomepageBanner.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-start p-6 ml-10 md:ml-5 lg:ml-5 xl:ml-5">
        {" "}
        {/* Changed justify-start to justify-center */}
        <div className="text-white space-x-3 mt-6 space-y-20">
          <a href="/offers">
            <button className="px-4 py-2 text-sm md:text-lg lg:text-lg xl:text-lg font-semibold text-white bg-primary-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              GRAB OFFER
            </button>
          </a>

          <button className="px-4 py-2 text-sm md:text-lg lg:text-lg xl:text-lg font-semibold text-gray-500 bg-gray-300 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            <a href="/testPage">SEE MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
