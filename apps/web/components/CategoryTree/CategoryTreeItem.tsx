import { SfCounter, SfListItem } from "@storefront-ui/react";
import Link from "next/link";
import type { CategoryTreeItemProps } from "~/components";
import { categories } from "~/mocks";

export function CategoryTreeItem({ name, id, href, count }: any): JSX.Element {
  return (
    <Link href={href} data-testid="category-tree-item">
      <SfListItem
        as="span"
        size="lg"
        className="md:sf-list-item-sm md:py-1.5 sf-list-item"
      >
        <span className="flex gap-2 items-center">
          <span
            className="text-base md:text-sm capitalize flex items-center"
            data-testid="list-item-menu-label"
          >
            {name} {`(${count})`}
          </span>
        </span>
      </SfListItem>
    </Link>
  );
}
