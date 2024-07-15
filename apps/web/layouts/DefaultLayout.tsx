import DrawerMenu from "./drawerMenu";
import {
  SfButton,
  SfDrawer,
  SfIconClose,
  SfIconExpandMore,
  SfIconFavorite,
  SfIconMenu,
  SfIconPerson,
  SfIconShoppingCart,
  useDisclosure,
} from "@storefront-ui/react";
import { divide } from "lodash-es";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import {
  Badge,
  Footer,
  BottomNav,
  ScrollToTopButton,
  NavbarTop,
  Search,
  Breadcrumb,
  NarrowContainer,
  Breadcrumbs,
} from "~/components";
import SearchWithIcon from "~/components/ui/Search/customSearch";
import { useCart } from "~/hooks";
import { useCartStore } from "~/store/cart";
import { useLoginInfo } from "~/store/login";

type LayoutPropsType = PropsWithChildren & {
  breadcrumbs?: Breadcrumb[];
};

export function DefaultLayout({
  children,
  breadcrumbs = [],
}: LayoutPropsType): JSX.Element {
  const { t } = useTranslation();
  const { cart, count, add, remove, removeAll } = useCartStore();
  const cartLineItemsCount = count();
  const { close, open, isOpen } = useDisclosure();
  const [activeNode, setActiveNode] = useState<string[]>([]);
  const drawerRef = useRef(null);
  const handleOpenMenu = (menuType: string[]) => () => {
    setActiveNode(menuType);
    open();
  };

  const handleBack = () => {
    setActiveNode((menu) => menu.slice(0, menu.length - 1));
  };

  const handleNext = (key: string) => () => {
    setActiveNode((menu) => [...menu, key]);
  };

  //For mobile view search bar
  const [searchButtonToggler, setSearchButtonToggler] = useState(false);
  const { isLoggedIn } = useLoginInfo();
  useEffect(() => {}, [cart, isLoggedIn]);

  return (
    <>
      <NavbarTop filled>
        {/* Logo centered on medium and larger screens */}

        <div className="flex justify-center md:justify-start items-center md:w-auto  md:ml-0 lg:ml-0 xl:ml-0 md:pl-0 lg:pl-0 xl:pl-0">
          <a href="/">
            <Image
              src="/images/logo.png" // Replace with your image path
              alt="Logo"
              width={140} // Adjust width as needed
              height={100} // Adjust height as needed
            />
          </a>
        </div>

        {/* Menu button moved to the right */}

        <div className="ml-auto md:hidden">
          {/* Add md:hidden here */}
          <button
            className="mr-3 text-primary-3 focus:outline-none focus:bg-blue-200  hover:text-white active:bg-primary-900 active:text-white"
            onClick={() => setSearchButtonToggler(!searchButtonToggler)}
          >
            <IoSearch className="text-2xl" />{" "}
          </button>

          <SfButton
            className="-ml-0.5 text-primary-3 focus:outline-none focus:bg-blue-200  hover:text-white active:bg-primary-900 active:text-white"
            as={Link}
            href="/cart"
            aria-label={`Number in Cart: ${cartLineItemsCount}`}
            variant="tertiary"
            square
            slotPrefix={
              <Badge
                bordered
                value={cartLineItemsCount}
                className="text-neutral-900 bg-white"
              >
                <SfIconShoppingCart className="text-black" />
              </Badge>
            }
          />

          <SfButton
            onClick={handleOpenMenu([])}
            variant="tertiary"
            square
            aria-label="Open menu"
            className="bg-transparent mt-2 focus:outline-none focus:bg-blue-200  hover:text-white active:bg-primary-900 active:text-white"
          >
            <SfIconMenu className="text-black" />
          </SfButton>
        </div>

        {/* Mobile drawer */}
        {isOpen && (
          <>
            <div className="md:hidden fixed inset-0 bg-neutral-700 backdrop-blur-md bg-opacity-90 h-screen z-100">
              <SfDrawer
                ref={drawerRef}
                open={isOpen}
                onClose={close}
                placement="left"
                className="md:hidden left-[50px] max-w-full text-black fixed h-screen" // Adjusted className
              >
                <nav className="h-full bg-gray-100">
                  <div className="flex items-center justify-between p-4 border-b border-b-gray-400 border-b-solid bg-white">
                    <p className="typography-text-base font-medium">
                      <a href="/">
                        <Image
                          src="/images/logo.png"
                          alt="Logo"
                          width={120}
                          height={150}
                        />
                      </a>
                    </p>
                    <SfButton
                      onClick={close}
                      variant="tertiary"
                      square
                      aria-label="Close menu"
                      className="ml-2"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </div>
                  <DrawerMenu />
                </nav>
              </SfDrawer>
            </div>
          </>
        )}
        <div className="">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-between items-center space-x-3 py-4">
              <div className="flex items-center space-x-4">
                <SfButton
                  className="px-4 bg-gray-200 active:bg-primary-900 active:text-white focus:outline-none focus:bg-blue-200 font-body hidden md:inline-flex flex-1 sm:flex-initial"
                  as={Link}
                  href="/category"
                  variant="tertiary"
                >
                  <span className="text-sm sm:text-base text-black flex items-center gap-2">
                    <FaList className="ml-1" /> PRODUCTS
                  </span>
                </SfButton>

                <SfButton
                  className="px-4  bg-transparent focus:outline-none focus:bg-blue-200  active:bg-primary-900 font-body hidden md:inline-flex flex-1 sm:flex-initial"
                  as={Link}
                  href="/"
                  variant="tertiary"
                >
                  <span className="text-sm text-black sm:text-base">HOME</span>
                </SfButton>

                <SfButton
                  className="px-4 text-primary-3 bg-transparent  focus:outline-none focus:bg-blue-200  active:bg-primary-900 active:text-white font-body hidden md:inline-flex flex-1 sm:flex-initial"
                  as={Link}
                  href="/shoppingMall"
                  variant="tertiary"
                >
                  <span className="text-sm text-black  sm:text-base">
                    SHOPPING MALLS
                  </span>
                </SfButton>

                <SfButton
                  className="px-4 text-primary-3 bg-transparent  focus:outline-none focus:bg-blue-200  active:bg-primary-900 active:text-white font-body hidden md:inline-flex flex-1 sm:flex-initial"
                  as={Link}
                  href="/metaverseMall"
                  variant="tertiary"
                >
                  <span className="text-sm text-black sm:text-base">
                    METAVERSE MALLS
                  </span>
                </SfButton>

                <SfButton
                  className="px-4 bg-gray-200 border-none  focus:outline-none focus:bg-blue-200 font-body rounded-md hidden md:inline-flex transition duration-300 ease-in-out flex-1 sm:flex-initial hover:bg-transparent"
                  as={Link}
                  href="/offers"
                  variant="tertiary"
                >
                  <span className="text-xs sm:text-sm text-primary-2 font-bold">
                    OFFERS
                  </span>
                </SfButton>

                {isLoggedIn && (
                  <SfButton
                    className="px-4 bg-transparent  focus:outline-none focus:bg-blue-200 active:bg-primary-900 active:text-white font-body hidden md:inline-flex flex-1 sm:flex-initial"
                    as={Link}
                    href="/orders"
                    variant="tertiary"
                  >
                    <span className="text-sm text-black   sm:text-base">
                      ORDERS
                    </span>
                  </SfButton>
                )}
              </div>{" "}
              <div className="flex items-center space-x-4 ml-auto">
                <Search className="flex-1 pl-2 " />

                <nav className="hidden md:flex md:flex-row md:flex-nowrap items-center ml-2">
                  <SfButton
                    className="mr-2 -ml-0.5 text-primary-3   focus:outline-none focus:bg-blue-200  hover:text-white active:bg-primary-900 active:text-white"
                    as={Link}
                    href="/cart"
                    aria-label={`Number in Cart: ${cartLineItemsCount}`}
                    variant="tertiary"
                    square
                    slotPrefix={
                      <Badge
                        bordered
                        value={cartLineItemsCount}
                        className="text-neutral-900 bg-white text-sm font-bold"
                      >
                        <SfIconShoppingCart className="text-black text-lg" />
                      </Badge>
                    }
                  />
                </nav>
                {!isLoggedIn ? (
                  <SfButton
                    className="px-4 text-white  focus:outline-none focus:bg-blue-200 bg-primary-1 hover:bg-primary-900 active:bg-primary-700 font-body hidden md:inline-flex flex-1 sm:flex-initial"
                    as={Link}
                    href="/login"
                    variant="tertiary"
                  >
                    <span className="text-sm text-white sm:text-base">
                      LOGIN
                    </span>
                  </SfButton>
                ) : (
                  <SfButton
                    className="mr-2 -ml-0.5 text-primary-3 hidden md:inline-flex flex-1 sm:flex-initial  focus:outline-none focus:bg-blue-200  hover:text-white active:bg-primary-900 active:text-white"
                    as={Link}
                    href="/cart"
                    aria-label={`Number in Cart: ${cartLineItemsCount}`}
                    variant="tertiary"
                    square
                    slotPrefix={
                      <SfIconFavorite className="text-black text-lg" />
                    }
                  />
                )}

                {!isLoggedIn ? (
                  <SfButton
                    className="px-4 bg-transparent  focus:outline-none focus:bg-blue-200 active:bg-primary-900 active:text-white font-body hidden md:inline-flex flex-1 sm:flex-initial"
                    as={Link}
                    href="/signup"
                    variant="tertiary"
                  >
                    <span className="text-sm text-black   sm:text-base">
                      SIGN UP
                    </span>
                  </SfButton>
                ) : (
                  <SfButton
                    className="mr-2 -ml-0.5 text-primary-3 hidden md:inline-flex flex-1 sm:flex-initial focus:outline-none focus:bg-blue-200  hover:text-white active:bg-primary-900 active:text-white"
                    as={Link}
                    href="/cart"
                    aria-label={`Number in Cart: ${cartLineItemsCount}`}
                    variant="tertiary"
                    square
                    slotPrefix={<SfIconPerson className="text-black text-lg" />}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </NavbarTop>
      {!isOpen && (
        <div>
          {searchButtonToggler && (
            <div className="absolute px-1 w-full rounded-md shadow-lg bg-transparent  divide-y divide-gray-100 z-20">
              <SearchWithIcon />
            </div>
          )}
        </div>
      )}
      {!isOpen && (
        <>
          {breadcrumbs?.length > 0 && (
            <NarrowContainer>
              <div className="p-4 md:px-0">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
              </div>
            </NarrowContainer>
          )}
          <main>{children}</main>
          <button className="fixed bottom-20 mb-5 right-3 md:right-8 px-5 py-3 md:bottom-10 lg:bottom-10 xl:bottom-10 bg-orange-500 active:bg-teal-600 text-white text-base md:text-xl rounded-md shadow-lg flex items-center justify-center transition duration-300 ease-in-out chatbot-button">
            <RiMessage2Line className="mr-2" /> AI Chatbot
          </button>

          <ScrollToTopButton />
          <Footer className="mb-[58px] md:mb-0 " />
        </>
      )}

      <BottomNav />
    </>
  );
}

DefaultLayout.defaultProps = {
  breadcrumbs: [],
};
