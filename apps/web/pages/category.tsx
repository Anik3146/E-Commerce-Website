import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  CategoryPageContent,
  CategoryTree,
  CategorySorting,
  CategoryFilters,
  Breadcrumb,
  CategoryTreeItem,
  Divider,
  NarrowContainer,
  ProductAccordion,
  ProductProperties,
  PurchaseCard,
} from "~/components";
import { createGetServerSideProps } from "~/helpers";
import { prefetchProducts, useProducts } from "~/hooks";
import { DefaultLayout } from "~/layouts";
import AllShop from "~/models/allShopModel";
import Category from "~/models/catergoryModel";
import { useCartStore } from "~/store/cart";
import baseUrl from "~/utils/constant";

export const getServerSideProps = createGetServerSideProps(
  { i18nNamespaces: ["category"] },
  async (context) => {
    context.res.setHeader("Cache-Control", "no-cache");
    const products = await prefetchProducts(context);

    if (!products) {
      return {
        notFound: true,
      };
    }

    return { props: {} };
  }
);

export default function CategoryPage() {
  const { query }: any = useRouter(); //for dynamic routing
  const { t } = useTranslation("merchants");
  const [shopData, setShopData] = useState<AllShop[]>([]);
  const [categoriesList, setCategories] = useState<Category[]>([]);
  const [item, setItem] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t(`All Products`), link: `/category` },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/products-by-merchant/1`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setShopData(jsonData.data); // Return the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCategories = () => {
    const categories = shopData.flatMap((item: any) => item.category); // Extract all categories
    setCategories(categories);
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only on mount

  const { data: productsCatalog } = useProducts();

  if (!productsCatalog) {
    return null;
  }

  const { products, pagination, subCategories, facets } = productsCatalog;
  const categories: CategoryTreeItem[] = subCategories.map(
    ({ name, productCount }) => ({
      name,
      count: productCount || 0,
      href: "/category",
    })
  );

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>All products page</DefaultLayout>
  );
}
