import { DefaultLayout } from "./DefaultLayout";
import { PropsWithChildren } from "react";
import { Footer, NarrowContainer, NavbarTop } from "~/components";

export function OrderLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <DefaultLayout>
        <main>
          <NarrowContainer>{children}</NarrowContainer>
        </main>
      </DefaultLayout>
    </>
  );
}
