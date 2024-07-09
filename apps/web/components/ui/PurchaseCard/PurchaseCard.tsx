import { useCartStore } from "./../../../store/cart";
import {
  SfRating,
  SfButton,
  SfLink,
  SfCounter,
  SfIconShoppingCart,
  SfIconCompareArrows,
  SfIconFavorite,
  SfIconSell,
  SfIconPackage,
  SfIconWarehouse,
  SfIconSafetyCheck,
  SfIconShoppingCartCheckout,
} from "@storefront-ui/react";
import { clamp } from "@storefront-ui/shared";
import { Trans, useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useCounter } from "react-use";
import { QuantitySelector, Tag } from "~/components";
import type { PurchaseCardProps } from "~/components";

export function PurchaseCard({ product }: any) {
  const { t } = useTranslation("merchants");
  const minProductQuantity = 1;
  const maxProductQuantity = 999;
  const [productQuantity, { set }] = useCounter(minProductQuantity);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { cart, count, add, remove, removeAll } = useCartStore(); //imported properties from usecart store
  const [countVal, setCount] = useState(1);

  function handleOnChange(nextValue: number) {
    set(clamp(nextValue, minProductQuantity, maxProductQuantity));
  }

  const handleAddToCart = (product: any) => {
    add(product, countVal);
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 1000);
  };

  useEffect(() => {}, [cart, handleAddToCart, countVal]);

  return (
    <div
      className="p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20"
      data-testid="purchase-card"
    >
      <Tag variant="secondary" strong className="mb-4">
        <SfIconSell size="sm" className="ml-1" />
        <span className="mr-1">{t("sale")}</span>
      </Tag>
      <h1
        className="mb-1 font-bold typography-headline-4"
        data-testid="product-name"
      >
        {product?.name}
      </h1>
      <div className="my-1">
        <span
          className="mr-2 text-secondary-700 font-bold font-headings text-2xl"
          data-testid="price"
        >
          ${product?.selling_price * countVal}
        </span>
        <span className="text-base font-normal text-neutral-500 line-through">
          ${1000}
        </span>
      </div>
      <div className="inline-flex items-center mt-4 mb-2">
        <SfRating size="xs" value={5.0} max={5} />
        <SfCounter className="ml-1" size="xs">
          {20}
        </SfCounter>
        <SfLink
          href="#"
          variant="secondary"
          className="ml-2 text-xs text-neutral-500"
        >
          {t("reviewsCount", { count: 3 })}
        </SfLink>
      </div>
      <p
        className="mb-4 font-normal typography-text-sm"
        data-testid="product-description"
      >
        {"description"}
      </p>
      <div className="py-4 mb-4 border-gray-200 border-y">
        <Tag className="w-full mb-4">
          <SfIconShoppingCartCheckout />
          {t("common:numberInCart", { count: countVal })}
        </Tag>
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <QuantitySelector
            className="h-12  min-w-[145px] flex-grow flex-shrink-0 basis-0"
            value={countVal}
            minValue={minProductQuantity}
            maxValue={maxProductQuantity}
            onChange={handleOnChange}
            setCount={setCount}
          ></QuantitySelector>
          <SfButton
            type="button"
            size="lg"
            className={
              !isButtonClicked
                ? "flex-grow-[2] flex-shrink basis-auto whitespace-nowrap"
                : "flex-grow-[2] flex-shrink basis-auto whitespace-nowrap bg-primary-2"
            }
            slotPrefix={<SfIconShoppingCart size="sm" />}
            onClick={() => handleAddToCart(product)}
          >
            {isButtonClicked ? "Added!" : "Add To Cart"}
          </SfButton>
        </div>
        <div className="flex justify-center mt-4 gap-x-4">
          <SfButton
            type="button"
            size="sm"
            variant="tertiary"
            slotPrefix={<SfIconCompareArrows size="sm" />}
          >
            {t("common:compare")}
          </SfButton>
          <SfButton
            type="button"
            size="sm"
            variant="tertiary"
            slotPrefix={<SfIconFavorite size="sm" />}
          >
            {t("common:addToList")}
          </SfButton>
        </div>
      </div>
      <div className="flex first:mt-4">
        <SfIconPackage
          size="sm"
          className="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p className="text-sm">
          Free shipping, arrives by Thu, Apr 7. Want it faster?&nbsp;
          <SfLink href="#" variant="secondary">
            Add an address
          </SfLink>
          &nbsp;to see options
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconWarehouse
          size="sm"
          className="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p className="text-sm">
          Pickup not available at Super center.&nbsp;
          <SfLink href="#" variant="secondary">
            Check availability nearby
          </SfLink>
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconSafetyCheck
          size="sm"
          className="flex-shrink-0 mr-1 text-neutral-500"
        />
        <p className="text-sm">
          Free 30-Day returns.&nbsp;
          <SfLink href="#" variant="secondary">
            Details
          </SfLink>
        </p>
      </div>
    </div>
  );
}
