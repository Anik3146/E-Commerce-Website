// MallPage.jsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumb } from "~/components";
import SingleLevel from "~/components/Extras/singleLevel";
import { DefaultLayout } from "~/layouts";
import ShopData from "~/models/shopModel";
import baseUrl from "~/utils/constant";

const MallPage = () => {
  const { query } = useRouter(); //for dynamic routing
  const { t } = useTranslation("login");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t(`${query.index}`), link: `shopping-mall/${query.index}` }, //dynamic routing
  ];

  const [data, setData] = useState<ShopData[]>([]);
  const [selectedOption, setSelectedOption] = useState("Show All");
  const [mallIndex, setMallIndex] = useState<Number>(-1);
  const [mallLevel, setMallLevel] = useState<Number[]>([]);

  // Simulating fetching data (replace with actual fetch logic)
  const fetchData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        `${baseUrl}/api/mallitems/shop?page=1&mall_type=mall`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData.data.data); //data : {{}}
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //selected option handle

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    event.target.value == "Show All"
      ? setMallIndex(-1)
      : setMallIndex(parseInt(event.target.value));
    // Perform any other actions based on the selected option
  };

  useEffect(() => {
    fetchData();
    // Call fetchData when component mounts
  }, []);

  useEffect(() => {
    let levels: any[] = [];
    if (data && data[0]?.shopping_mall?.level) {
      for (let i = 1; i <= data[0].shopping_mall.levels.length; i++) {
        levels.push(i);
      }
      setMallLevel(levels);
    } else {
      console.error("Wait for some time to laod data from the backend.");
    }
  }, [data]);

  // Example data for levels and shops (you can replace this with actual data from your backend or mock data)

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <h1 className="max-w-7xl md:mx-auto px-4 mt-3 sm:px-6 lg:px-8 text-3xl font-bold mb-4">
        {query.index}
      </h1>
      <div className="flex xl:mr-16 2xl:mr-10">
        <div className="flex max-w-7xl justify-end items-end mt-8 md:mt-0 lg:mt-0 mr-5 ml-auto xl:pr-20 xl:mr-20 lg:mr-20 ">
          <h2 className="mr-2 pb-4 font-semibold text-lg">Filter By :</h2>
          <div className="flex items-center rounded-md bg-gray-300 px-4 py-2 mb-2 xl:mr-8 md:mr-0">
            <select
              className="outline-none bg-gray-300"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="Show All">Show All</option>
              {data.length > 0 &&
                mallLevel.map((option: any, index: any) => (
                  <option key={index} value={option}>
                    Level {option}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {mallIndex == -1 ? (
        data.length > 0 &&
        mallLevel.map((value, index) => (
          <SingleLevel value={value} data={data} />
        ))
      ) : (
        <SingleLevel value={mallIndex} data={data} />
      )}
    </DefaultLayout>
  );
};

export default MallPage;
