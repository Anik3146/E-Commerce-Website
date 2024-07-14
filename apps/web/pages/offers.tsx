import { useTranslation } from "next-i18next";
import { useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { Breadcrumb, NarrowContainer } from "~/components";
import OfferCard from "~/components/OfferCard";
import { DefaultLayout } from "~/layouts";

const Offers = () => {
  const { t } = useTranslation("offers");

  // Example data for offers (replace with actual data from API or state)
  const offers = [
    {
      id: 1,
      mallName: "Jamuna Future Park",
      shops: [
        { id: 1, shopName: "Shop A", flatDiscount: 20, uptoDiscount: 50 },
        { id: 2, shopName: "Shop B", flatDiscount: 15, uptoDiscount: 40 },
        // Add more shops for Premium Mall 1
        { id: 3, shopName: "Shop C", flatDiscount: 25, uptoDiscount: 60 },
        { id: 4, shopName: "Shop D", flatDiscount: 10, uptoDiscount: 30 },
        { id: 5, shopName: "Shop E", flatDiscount: 18, uptoDiscount: 45 },
        { id: 6, shopName: "Shop F", flatDiscount: 12, uptoDiscount: 35 },
        { id: 7, shopName: "Shop G", flatDiscount: 30, uptoDiscount: 70 },
        { id: 8, shopName: "Shop H", flatDiscount: 22, uptoDiscount: 55 },
        { id: 9, shopName: "Shop I", flatDiscount: 17, uptoDiscount: 42 },
        { id: 10, shopName: "Shop J", flatDiscount: 28, uptoDiscount: 65 },
      ],
    },
    {
      id: 2,
      mallName: "Bashundhara City",
      shops: [
        { id: 11, shopName: "Shop K", flatDiscount: 18, uptoDiscount: 45 },
        { id: 12, shopName: "Shop L", flatDiscount: 12, uptoDiscount: 35 },
        // Add more shops for Premium Mall 2
        { id: 13, shopName: "Shop M", flatDiscount: 30, uptoDiscount: 70 },
        { id: 14, shopName: "Shop N", flatDiscount: 22, uptoDiscount: 55 },
        { id: 15, shopName: "Shop O", flatDiscount: 17, uptoDiscount: 42 },
        { id: 16, shopName: "Shop P", flatDiscount: 28, uptoDiscount: 65 },
        { id: 17, shopName: "Shop Q", flatDiscount: 20, uptoDiscount: 50 },
        { id: 18, shopName: "Shop R", flatDiscount: 15, uptoDiscount: 40 },
        { id: 19, shopName: "Shop S", flatDiscount: 25, uptoDiscount: 60 },
        { id: 20, shopName: "Shop T", flatDiscount: 10, uptoDiscount: 30 },
      ],
    },
    // Add more malls with their respective shops as needed
  ];

  // Extract mall names for select dropdown options
  const mallNames = offers.map((mall) => mall.mallName);

  const [selectedOption, setSelectedOption] = useState("Show All");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const breadcrumbs = [
    { name: t("Home"), link: "/" },
    { name: t("Offers"), link: "/offers" },
  ];

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <NarrowContainer>
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-4 mx-2">
            {t("Exclusive Offers")}
          </h1>
          <div className="flex justify-end items-end mt-8 md:mt-0 lg:mt-0 ml-auto mr-2">
            <h2 className="mr-2 pb-4 font-semibold text-lg">Filter By:</h2>
            <div className="flex items-center rounded-md bg-gray-300 px-1 py-2 mb-2 xl:mr-8 md:mr-0">
              <select
                className="outline-none bg-gray-300"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="Show All">Show All</option>
                {mallNames.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {selectedOption == "Show All"
            ? offers.map((mall) => (
                <div key={mall.id}>
                  <h2 className="text-2xl font-bold mb-5 m-4 ">
                    {mall.mallName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mall.shops.map((shop) => (
                      <OfferCard
                        key={shop.id}
                        mallName={mall.mallName}
                        shopName={shop.shopName}
                        flatDiscount={shop.flatDiscount}
                        uptoDiscount={shop.uptoDiscount}
                      />
                    ))}
                  </div>
                </div>
              ))
            : // Show selected mall and its offers
              offers
                .filter((mall) => mall.mallName === selectedOption)
                .map((mall) => (
                  <div key={mall.id}>
                    <h2 className="text-2xl font-bold mb-2 m-4">
                      {mall.mallName}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mall.shops.map((shop) => (
                        <OfferCard
                          key={shop.id}
                          mallName={mall.mallName}
                          shopName={shop.shopName}
                          flatDiscount={shop.flatDiscount}
                          uptoDiscount={shop.uptoDiscount}
                        />
                      ))}
                    </div>
                  </div>
                ))}
        </div>
      </NarrowContainer>
    </DefaultLayout>
  );
};

export default Offers;
