import { SfButton, SfIconTune, useDisclosure } from "@storefront-ui/react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import {
  NarrowContainer,
  Pagination,
  ProductCard,
  CategorySidebar,
} from "~/components";
import type { CategoryPageContentProps } from "~/components";
import { useCartStore } from "~/store/cart";

const CategoryEmptyState = dynamic(
  () => import("~/components/CategoryEmptyState")
);

export function CategoryPageContent({
  title,
  sidebar,
  products,
  totalProducts,
  itemsPerPage = 9,
  query,
  currentPage,
  setCurrentPage,
}: any): JSX.Element {
  const { t } = useTranslation("category");
  const isWideScreen = useMedia("(min-width: 1024px)", false);
  const isTabletScreen = useMedia("(min-width: 768px)", false);
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const maxVisiblePages = isWideScreen ? 5 : 1;

  if (isTabletScreen && isOpen) {
    close();
  }

  useEffect(() => {}, [currentPage]);
  return (
    <NarrowContainer>
      <div className="mb-20 px-4 md:px-0" data-testid="category-layout">
        <h1 className="my-10 font-bold typography-headline-3 md:typography-headline-2">
          {title}
        </h1>
        <div className="md:flex gap-6" data-testid="category-page-content">
          <CategorySidebar isOpen={isOpen} closeSidebar={close}>
            {sidebar}
          </CategorySidebar>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold font-headings md:text-lg">
                {t("numberOfProducts", { count: totalProducts })}
              </span>
              <SfButton
                onClick={open}
                variant="tertiary"
                className="md:hidden whitespace-nowrap"
                slotPrefix={<SfIconTune />}
              >
                {t("listSettings")}
              </SfButton>
            </div>
            {products.length > 0 ? (
              <section
                className="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
                data-testid="category-grid"
              >
                {/* Assuming pageNo starts from 1 */}
                {products
                  .slice((currentPage - 1) * 9, (currentPage - 1) * 9 + 9)
                  .map(({ id, name, selling_price }: any, index: any) => (
                    <ProductCard
                      key={id}
                      name={name}
                      ratingCount={20} // Example ratingCount value
                      rating={10} // Example rating value
                      price={selling_price} // Example price value
                      imageUrl={""} // Example imageUrl value
                      imageAlt={"N/A"} // Example imageAlt value
                      slug={"slug"} // Example slug value
                      priority={index === 0} // Check if it's the first element on the current page
                      query={query}
                      product={products}
                      index={(currentPage - 1) * itemsPerPage + index}
                    />
                  ))}
              </section>
            ) : (
              <CategoryEmptyState />
            )}
            {totalProducts > itemsPerPage && (
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalItems={totalProducts}
                pageSize={itemsPerPage}
                maxVisiblePages={maxVisiblePages}
              />
            )}
          </div>
        </div>
      </div>
    </NarrowContainer>
  );
}
