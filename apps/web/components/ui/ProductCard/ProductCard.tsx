import { useCartStore } from "./../../../store/cart";
import {
  SfButton,
  SfRating,
  SfCounter,
  SfLink,
  SfIconShoppingCart,
} from "@storefront-ui/react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ProductCardProps } from "~/components";

export function ProductCard({
  name,
  description,
  imageUrl,
  imageAlt,
  price,
  rating,
  ratingCount,
  slug,
  className,
  priority,
  query,
  product,
  index,
}: any) {
  const { t } = useTranslation();
  const { cart, count, add, remove, removeAll } = useCartStore();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleAddToCart = (product: any) => {
    add(product, 1);
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 1000);
  };

  useEffect(() => {}, [cart, handleAddToCart]);

  return (
    <div
      className={classNames(
        "border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0",
        className
      )}
      data-testid="product-card"
    >
      <div className="relative">
        <SfLink
          href={`/${query.index[0]}/${query.index[1]}/${name}`}
          as={Link}
          className="relative block w-full pb-[100%]"
        >
          <Image
            src={imageUrl ?? ""}
            alt={imageAlt || "primary image"}
            className="object-cover rounded-md aspect-square w-full h-full"
            data-testid="image-slot"
            fill
            sizes="(max-width: 768px) 50vw, 190px"
            priority={priority}
          />
        </SfLink>
      </div>
      <div className="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink
          href={`/${query.index[0]}/${query.index[1]}/${name}`}
          as={Link}
          variant="secondary"
          className="no-underline"
        >
          {name}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={rating} max={5} />

          <SfLink
            href="#"
            variant="secondary"
            as={Link}
            className="ml-1 no-underline"
          >
            <SfCounter size="xs">{ratingCount}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">
          {description}
        </p>
        <span
          className="block pb-2 font-bold typography-text-sm"
          data-testid="product-card-vertical-price"
        >
          ${price}
        </span>
        <SfButton
          type="button"
          size="sm"
          disabled={isButtonClicked}
          slotPrefix={<SfIconShoppingCart size="sm" />}
          onClick={() => handleAddToCart(product[index])}
          className={isButtonClicked ? "bg-primary-2" : ""}
        >
          {isButtonClicked ? "Added!" : "Add"}
        </SfButton>
      </div>
    </div>
  );
}
