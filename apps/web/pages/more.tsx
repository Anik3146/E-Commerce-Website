import { useTranslation } from "next-i18next";
import { Breadcrumb, NarrowContainer } from "~/components";
import { DefaultLayout } from "~/layouts";

export default function MetaverseMall() {
  const { t } = useTranslation("metaverseMall");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("More"), link: "/more" },
  ];
  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <NarrowContainer></NarrowContainer>
    </DefaultLayout>
  );
}
