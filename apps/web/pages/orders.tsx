import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { Breadcrumb, CartProductCard, NarrowContainer } from "~/components";
import OrderCard from "~/components/OrderSummary/orderCard";
import { DefaultLayout } from "~/layouts";
import { Product } from "~/models/product";
import { useCartStore } from "~/store/cart";

export default function MetaverseMall() {
  const { t } = useTranslation("orders");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Orders"), link: "/orders" },
  ];

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <div className="md:grid md:grid-cols-12 md:gap-x-6">
        <div className="col-span-7 mb-10 md:mb-0">
          <div className="col-span-7 mb-10 md:mb-0">
            <OrderCard />
            <OrderCard />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
