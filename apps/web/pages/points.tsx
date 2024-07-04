import { useTranslation } from "next-i18next";
import { Breadcrumb, NarrowContainer } from "~/components";
import { DefaultLayout } from "~/layouts";

export default function MetaverseMall() {
  const { t } = useTranslation("points");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Points"), link: "/points" },
  ];
  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <div className="bg-gray-100 pt-5 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full p-4 space-y-4">
          {/* First Row: Reward Points and Gift Card Balance */}
          <div className="flex space-x-4 pb-5">
            {/* Orange Card: Reward Points */}
            <button className="flex-1 bg-orange-500 p-4 rounded-lg">
              <div>
                <h2 className="text-orange-200 text-lg md:mb-1 lg:mb-1 xl:mb-1">
                  Reward Points
                </h2>
                <p className="text-white text-3xl font-bold">2,500</p>
              </div>
            </button>

            {/* White Card: Gift Card Balance */}
            <button className="flex-1 bg-white p-4 rounded-lg">
              <div>
                <h2 className="text-gray-400 text-sm md:text-lg lg:text-lg xl:text-lg font-semibold md:mb-0 md:mr-4">
                  Gift Card Balance
                  <p className="text-gray-500 text-3xl font-bold md:text-3xl md:font-bold mt-2">
                    ৳5,000
                  </p>
                </h2>
              </div>
            </button>
          </div>

          {/* Second Row: Recent Activities */}
          <div className="pb-2">
            <h2 className="text-md mb-2 font-semibold text-gray-400">Recent</h2>
            {/* Activity Rows */}
            <div className="border-b border-gray-300 pb-3 mb-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Easy Fashions - Basundhara City
                </p>
                <p className="text-green-500 font-bold">+250</p>
              </div>
              <p className="text-gray-500 font-semibold text-sm">28-06-24</p>
            </div>
            <div className="border-b border-gray-300 pb-3 mb-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Aarong - Mirpur 12</p>
                <p className="text-green-500 font-bold">+250</p>
              </div>
              <p className="text-gray-500 font-semibold text-sm">25-06-24</p>
            </div>
            <div className="border-b border-gray-300 pb-3 mb-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Ecstacy - Basundhara City</p>
                <p className="text-red-500 font-bold">-550</p>
              </div>
              <p className="text-gray-500 font-semibold text-sm">20-06-24</p>
            </div>
            <div className="border-b border-gray-300 pb-3 mb-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Rong Fashions - Basundhara City
                </p>
                <p className="text-green-500 font-bold">+250</p>
              </div>
              <p className="text-gray-500 font-semibold">18-06-24</p>
            </div>
            <div className="border-b border-gray-300 pb-3 mb-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Biswarong - Basundhara City
                </p>
                <p className="text-green-500 font-bold">+250</p>
              </div>
              <p className="text-gray-500 font-semibold text-sm">15-06-24</p>
            </div>
          </div>

          {/* Third Row: Convert Reward Points Button */}
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Convert Reward Points
            </button>
          </div>

          {/* Fourth Row: Details by Shop */}
          <div className="text-center text-gray-600">
            <p>Detailed by Shop</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
