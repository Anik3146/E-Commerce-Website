import { SfScrollable } from "@storefront-ui/react";
import { ProductCard } from "~/components";
import type { ProductSliderProps } from "~/components";

export function ProductSlider() {
  return (
    <SfScrollable buttonsPlacement="floating" className="items-center pb-4">
      <ProductCard className="max-w-[192px]" />
    </SfScrollable>
  );
}
