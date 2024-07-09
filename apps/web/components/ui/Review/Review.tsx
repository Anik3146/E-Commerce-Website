import {
  SfRating,
  SfIconCheck,
  SfIconThumbUp,
  SfIconThumbDown,
  SfCounter,
} from "@storefront-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import type { ReviewProps } from "~/components";

export function Review() {
  const { t } = useTranslation("product");

  const [isCollapsed, setIsCollapsed] = useState(true);
  const charLimit = 400;
  const isButtonVisible = 10 || 0 > charLimit;
  const truncatedContent = isButtonVisible && isCollapsed ? `yes` : "no";

  return (
    <article className="w-full p-4 border rounded-md mb-4">
      <p className="pb-2 font-medium">Title</p>
      <header className="flex flex-col pb-2 md:flex-row md:justify-between">
        <div className="flex flex-col items-start">
          <span className="flex items-center pr-2 text-xs text-neutral-500">
            <SfRating value={5 as number} max={5} size="xs" className="mr-2" />
            date
          </span>
        </div>
        <div className="flex items-end">
          <p className="flex items-center text-xs truncate text-primary-700">
            <span className="mr-2 text-xs text-neutral-500">reviewer</span>
            <SfIconCheck size="xs" className="mr-1" /> verified purchage
          </p>
        </div>
      </header>
      <div className="pb-2 text-sm text-neutral-900">{truncatedContent}</div>
      {isButtonVisible ? (
        <button
          type="button"
          className="inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800"
          onClick={() => {
            setIsCollapsed((currentState) => !currentState);
          }}
        >
          {isCollapsed ? "Read more" : "Read less"}
        </button>
      ) : null}
      <footer className="flex items-center justify-between">
        <div className="text-sm text-neutral-500">
          <button type="button" className="mr-6 hover:text-primary-800">
            <SfIconThumbUp size="sm" className="mr-2.5" />
            <SfCounter size="sm" className="text-inherit">
              6
            </SfCounter>
          </button>
          <button type="button" className="hover:text-primary-800">
            <SfIconThumbDown size="sm" className="mr-2.5" />
            <SfCounter size="sm" className="text-inherit">
              2
            </SfCounter>
          </button>
        </div>

        <button
          className="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800"
          type="button"
        >
          report abuse
        </button>
      </footer>
    </article>
  );
}
