import { SfButton } from "@storefront-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OrderSummary, CartProductCard } from "~/components";
import { useCart } from "~/hooks";
import { Product } from "~/models/product";
import emptyCartImage from "~/public/images/empty-cart.svg";
import { useCartStore } from "~/store/cart";

const product1: Product = {
  id: 1,
  name: "Product A",
  description: "This is product A",
  category: {
    id: 1,
    name: "Category A",
    description: "Category A description",
    merchant_id: 1,
    created_at: "2024-07-13T12:00:00Z",
  },
  category_id: 1,
  count: 10,
  created_at: "2024-07-13T12:00:00Z",
  expired_date: "2024-12-31",
  merchant_id: 1,
  mrp: 100,
  no_stock_sale: 0,
  product_type: "Type A",
  product_type_id: 1,
  selling_price: 80,
  status: "active",
  tax_active: 1,
  thumbnail: "path/to/thumbnail1.jpg",
  unit_of_measure_id: 1,
  updated_at: "2024-07-13T12:00:00Z",
};

const product2: Product = {
  id: 2,
  name: "Product B",
  description: "This is product B",
  category: {
    id: 2,
    name: "Category B",
    description: "Category B description",
    merchant_id: 2,
    created_at: "2024-07-13T12:00:00Z",
  },
  category_id: 2,
  count: 5,
  created_at: "2024-07-13T12:00:00Z",
  expired_date: "2024-12-31",
  merchant_id: 2,
  mrp: 120,
  no_stock_sale: 0,
  product_type: "Type B",
  product_type_id: 2,
  selling_price: 100,
  status: "active",
  tax_active: 1,
  thumbnail: "path/to/thumbnail2.jpg",
  unit_of_measure_id: 1,
  updated_at: "2024-07-13T12:00:00Z",
};

export function CartPageContent() {
  const { t } = useTranslation("cart");

  const {
    cart,
    count,
    add,
    remove,
    removeAll,
    placeOrder,
    orders,
    removeSingleOrder,
    removeAllOrders,
  } = useCartStore();

  const [total, setTotal] = useState(0);

  useEffect(() => {}, [cart, total]);

  const getTotalPrice = () => {
    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      newTotal += cart[i].selling_price * cart[i].count;
    }
    setTotal(newTotal);
  };
  useEffect(() => {
    getTotalPrice();
  }, []);

  useEffect(() => {}, [total]);

  return cart?.length ? (
    <div className="md:grid md:grid-cols-12 md:gap-x-6">
      <div className="col-span-7 mb-10 md:mb-0">
        {cart.map((item, index) => (
          <div key={item.id} className="col-span-7 mb-10 md:mb-0">
            <CartProductCard
              key={item.id}
              imageUrl={""}
              imageAlt={item.name}
              name={item.name}
              price={item.selling_price || 0}
              specialPrice={item.selling_price || 0}
              maxValue={10}
              minValue={1}
              value={item.count}
              slug={"slug"}
              cart={cart}
              index={index}
              setTotal={setTotal}
              total={total}
            />
          </div>
        ))}
      </div>
      <OrderSummary
        className="col-span-5 md:sticky md:top-20 h-fit"
        total={total}
      >
        <SfButton
          as={Link}
          href="/checkout"
          size="lg"
          className="w-full mb-4 md:mb-0"
        >
          {t("goToCheckout")}
        </SfButton>
      </OrderSummary>
    </div>
  ) : (
    <div
      className="flex items-center justify-center flex-col pt-24 pb-32"
      data-testid="cart-page-content"
    >
      <Image src={emptyCartImage} alt={t("emptyCartImgAlt")} />
      <h2 className="mt-8">{t("emptyCart")}</h2>
    </div>
  );
}
