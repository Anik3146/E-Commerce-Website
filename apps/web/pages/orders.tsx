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

  // Dummy data for shop groups and products (replace with actual data)
  const order = {
    orderId: "ORD123456",
    date: "July 14, 2024",
    totalAmount: 129.99,
    shopGroups: [
      {
        name: "Fashion Store",
        products: [
          { name: "Product A", price: 59.99 },
          { name: "Product B", price: 39.99 },
        ],
      },
      {
        name: "Electronics Store",
        products: [{ name: "Product C", price: 30.0 }],
      },
    ],
  };

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto py-8">
          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("Order Details")}
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {/* Order ID, Date, Total Amount */}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {t("Order ID")}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {order.orderId}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {t("Date")}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {order.date}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {t("Total Amount")}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    ${order.totalAmount.toFixed(2)}
                  </dd>
                </div>
                {/* Shop Groups and Products */}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Items</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {order.shopGroups.map((group, index) => (
                      <div key={index} className="mt-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          {group.name}
                        </h4>
                        <ul className="divide-y divide-gray-200">
                          {group.products.map((product, pIndex) => (
                            <li
                              key={pIndex}
                              className="flex justify-between py-1"
                            >
                              <span>{product.name}</span>
                              <span>${product.price.toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("Shipping Information")}
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {/* Shipping details */}
                {/* ... existing shipping details ... */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
