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
    { name: t(`${query.index[0]}`), link: `/shopping-mall/${query.index[0]}` },
  ];

  if (query.index.length > 2) {
    breadcrumbs.push({
      name: t(`${query.index[1]}`),
      link: `/${query.index[0]}/${query.index[1]}/${query.index[2]}`,
    });
  }

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

  useEffect(() => {
    if (shopData.length > 0 && query.index.length > 2) {
      const foundItem = shopData.find((item) => item.name === query.index[2]);
      if (foundItem) {
        setItem(foundItem);
      }
    }

    fetchCategories();
  }, [shopData, query.index]);

  useEffect(() => {}, [item]);

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
  if (query.index.length > 2) {
    return (
      <DefaultLayout breadcrumbs={breadcrumbs}>
        <Head>
          <title>{`Thikana`}</title>
        </Head>
        <NarrowContainer>
          <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
            <section className="grid-in-left-top md:h-full xl:max-h-[700px]"></section>
            <section className="mb-10 grid-in-right md:mb-0">
              <PurchaseCard product={item} />{" "}
            </section>
            <section className="grid-in-left-bottom md:mt-8"></section>
            <Divider className="mt-4 mb-2" />
            <ProductProperties />
            <Divider className="mt-4 mb-2 md:mt-8" />
            <ProductAccordion />
          </div>
          <section className="mx-4 mt-28 mb-20"></section>
        </NarrowContainer>
      </DefaultLayout>
    );
  } else {
    return (
      <DefaultLayout breadcrumbs={breadcrumbs}>
        <CategoryPageContent
          title={t(`${query.index[1]}`)}
          products={shopData}
          totalProducts={shopData.length}
          query={query}
          sidebar={
            <>
              <CategoryTree
                parent={{ name: t("allProducts"), href: `${query.index}` }}
                categories={categoriesList}
              />
              <CategorySorting />
              <CategoryFilters facets={facets} />
            </>
          }
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </DefaultLayout>
    );
  }
}
