import { SfButton, SfIconShoppingCart } from "@storefront-ui/react";
import Link from "next/link";
import { FaList } from "react-icons/fa";
import { Badge, Search } from "~/components";

export default function DrawerMenu() {
  return (
    <ul className="flex flex-wrap list-none p-0 text-black bg-primary md:hidden">
      <li className="w-full border-b border-gray-300">
        <a
          href="/"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          HOME
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/category"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          PRODUCTS
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/shoppingMall"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          SHOPPING MALLS
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/metaverseMall"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          METAVERSE MALLS
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/offers"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          OFFERS
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/cart"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          MY CART
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/login"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          LOGIN
        </a>
      </li>
      <li className="w-full border-b border-gray-300">
        <a
          href="/signup"
          className="block w-full text-lg font-semibold text-center px-5 py-3 active:bg-primary-200"
        >
          SIGN UP
        </a>
      </li>
    </ul>
  );
}
