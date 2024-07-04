import { useTranslation } from "next-i18next";
import { Breadcrumb, NarrowContainer } from "~/components";
import MetaverseMallHero from "~/components/ui/Hero/MetaverseMallHeroSection";
import { DefaultLayout } from "~/layouts";

export default function MetaverseMall() {
  const { t } = useTranslation("metaverseMall");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Metaverse Malls"), link: "/metaverseMall" },
  ];
  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <NarrowContainer>
        <MetaverseMallHero />
      </NarrowContainer>
    </DefaultLayout>
  );
}
