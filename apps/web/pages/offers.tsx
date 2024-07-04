import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfIconMenu,
  SfCounter,
  SfIconArrowBack,
  useDropdown,
  useTrapFocus,
  useDisclosure,
  SfInput,
  SfIconSearch,
} from "@storefront-ui/react";
import { useTranslation } from "next-i18next";
import {
  type FocusEvent,
  Fragment,
  useRef,
  useState,
  useMemo,
  createRef,
  RefObject,
} from "react";
import { Breadcrumb, NarrowContainer } from "~/components";
import { DefaultLayout } from "~/layouts";

export default function MetaverseMall() {
  const { t } = useTranslation("offers");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Offers"), link: "/offers" },
  ];

  return <DefaultLayout breadcrumbs={breadcrumbs}></DefaultLayout>;
}
