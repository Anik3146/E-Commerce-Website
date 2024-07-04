import classNames from "classnames";
import Link from "next/link";
import { VsfLogo } from "~/components";
import type { NavbarTopProps } from "~/components";

export function NavbarTop({ children, filled, ...attributes }: NavbarTopProps) {
  return (
    <header
      className={classNames(
        "h-14 md:h-20 flex z-50 md:sticky md:-top-5 md:pt-2.5 md:shadow-md",
        filled
          ? "bg-white text-black"
          : "bg-white text-[#02C652] border-b border-neutral-200"
      )}
      data-testid="navbar-top"
      {...attributes}
    >
      <div className="flex md:gap-[clamp(1rem,3vw,3rem)] lg:gap-[clamp(1rem,3vw,3rem)] xl:gap-[clamp(1rem,3vw,3rem)]  items-center w-full md:h-[60px] max-w-screen-3xl py-6 pl-4 pr-0 md:px-6 lg:px-10 mx-auto sticky top-0">
        {children}
      </div>
    </header>
  );
}
