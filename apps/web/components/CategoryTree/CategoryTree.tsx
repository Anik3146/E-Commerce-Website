import { CategoryTreeItem } from "./CategoryTreeItem";
import { SfIconArrowBack } from "@storefront-ui/react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import type { CategoryTreeProps } from "~/components";
import Category from "~/models/catergoryModel";

export function CategoryTree({ parent, categories }: any) {
  const { t } = useTranslation("category");
  const [unique, setUnique] = useState<any>([]);

  const retrieveUnique = () => {
    let categoryMap: any = {};

    categories.forEach((category: any) => {
      let { id, name } = category;
      if (categoryMap[id]) {
        categoryMap[id].count++;
      } else {
        categoryMap[id] = {
          id,
          name,
          count: 1,
        };
      }
    });
    // Update state with unique categories
    setUnique(categoryMap);
  };

  useEffect(() => {
    retrieveUnique();
  }, [categories]);

  return (
    <>
      <span
        className="block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-tree"
      >
        {t("category")}
      </span>
      <h2 className="ml-3 font-semibold">Items List</h2>
      <div className="mt-4 mb-6 md:mt-2" data-testid="categories">
        {Object.values(unique).map(({ id, name, count }: any) => (
          <CategoryTreeItem
            key={id}
            name={name}
            count={count}
            href="/category"
          />
        ))}
      </div>
    </>
  );
}
