import { SfChip, SfThumbnail } from "@storefront-ui/react";
import { useTranslation } from "next-i18next";
import type { ProductPropertiesProps } from "~/components";
import { useProductAttribute } from "~/hooks";

export function ProductProperties(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="px-4">
      <>
        <span className="block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900">
          {t("size")}
        </span>

        <div className="mr-2 mb-2 uppercase inline-block">
          <SfChip
            className="min-w-[48px]"
            size="sm"
            inputProps={{
              checked: true,
            }}
          >
            Label
          </SfChip>
        </div>
      </>

      <>
        <span className="block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900">
          {t("color")}
        </span>

        <div className="mr-2 mb-2 inline-block">
          <SfChip
            slotPrefix={<SfThumbnail size="sm" style={{ background: "red" }} />}
            size="sm"
            inputProps={{
              checked: true,
            }}
          >
            Label
          </SfChip>
        </div>
      </>
    </div>
  );
}
