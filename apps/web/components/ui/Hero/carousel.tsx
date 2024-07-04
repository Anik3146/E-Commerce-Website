import Banner01 from "./Banners/Banner01";
import Banner02 from "./Banners/Banner02";
import Banner03 from "./Banners/Banner03";
import Banner04 from "./Banners/Banner04";
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
} from "@storefront-ui/react";
import classNames from "classnames";
import { useState } from "react";

export default function GalleryWithBullets() {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [<Banner01 />, <Banner02 />, <Banner03 />, <Banner04 />]; // Replace with your actual banner components

  return (
    <div>
      <div className="container max-h-[600px] flex flex-col w-full aspect-[4/2] gap-1">
        <SfScrollable
          className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          wrapperClassName="group/scrollable h-full"
          activeIndex={activeIndex}
          isActiveIndexCentered
          prevDisabled={activeIndex === 0}
          nextDisabled={activeIndex === banners.length - 1}
          buttonsPlacement="block"
          onPrev={() => {
            setActiveIndex(activeIndex - 1);
          }}
          onNext={() => {
            setActiveIndex(activeIndex + 1);
          }}
          slotPreviousButton={
            <SfButton
              className="hidden group-hover/scrollable:block disabled:!hidden absolute !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
              variant="secondary"
              size="lg"
              slotPrefix={<SfIconChevronLeft />}
            />
          }
          slotNextButton={
            <SfButton
              className="hidden group-hover/scrollable:block disabled:!hidden absolute !rounded-full !p-3 z-10 top-1/2 right-4 bg-white"
              variant="secondary"
              size="lg"
              slotPrefix={<SfIconChevronRight />}
            />
          }
        >
          {banners.map((BannerComponent, index) => (
            <div
              className="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
              key={`banner-${index}`}
            >
              {BannerComponent}
            </div>
          ))}
        </SfScrollable>
        <div className="flex-shrink-0 basis-auto">
          <div className="flex w-full justify-center gap-3 mt-5 overflow-x-auto scrollbar-hidden">
            {banners.map((_, index) => (
              <button
                key={`bullet-${index}`}
                aria-label={`Banner ${index + 1}`}
                aria-current={activeIndex === index}
                type="button"
                className={classNames(
                  "w-2 h-2 md:h-4 lg:h-4 xl:h-4 md:w-4 lg:w-4 xl:w-4 rounded-full transition-colors focus-visible:outline focus-visible:outline-offset-0",
                  {
                    "bg-orange-500": activeIndex === index,
                    "bg-gray-200": activeIndex !== index,
                  }
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
