import { useTranslation } from "next-i18next";
import { Breadcrumb, NarrowContainer } from "~/components";
import MetaverseMallHero from "~/components/ui/Hero/MetaverseMallHeroSection";
import { DefaultLayout } from "~/layouts";

export default function MetaverseMall() {
  const { t } = useTranslation("signup");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("SignUp"), link: "/signup" },
  ];
  return <DefaultLayout breadcrumbs={breadcrumbs}></DefaultLayout>;
}
