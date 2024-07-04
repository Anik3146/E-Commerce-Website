import { t } from "i18next";
import { useTranslation } from "react-i18next";
import {
  CategoryPageContent,
  CategoryTree,
  CategorySorting,
  CategoryFilters,
  Breadcrumb,
  CategoryTreeItem,
} from "~/components";
import ShoppingMallHero from "~/components/ui/Hero/ShoppingMallHeroSection";
import { DefaultLayout } from "~/layouts";

export default function ShoppingMall() {
  const { t } = useTranslation("shoppingMall");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Shopping Malls"), link: "/shoppingMall" },
  ];
  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <ShoppingMallHero />
    </DefaultLayout>
  );
}
