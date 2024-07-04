import { useTranslation } from "next-i18next";
import { Breadcrumb, NarrowContainer } from "~/components";
import { DefaultLayout } from "~/layouts";

export default function MetaverseMall() {
  const { t } = useTranslation("orders");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Orders"), link: "/orders" },
  ];
  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>From order section</DefaultLayout>
  );
}
