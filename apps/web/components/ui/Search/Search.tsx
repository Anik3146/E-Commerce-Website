import SearchWithIcon from "./customSearch";
import { offset } from "@floating-ui/react-dom";
import {
  SfInput,
  SfIconSearch,
  SfIconCancel,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  SfDropdown,
} from "@storefront-ui/react";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import type { SearchProps } from "~/components";

export function Search({ className }: SearchProps) {
  const inputReference = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { isOpen, close, open } = useDisclosure();
  const { refs } = useDropdown({
    isOpen,
    onClose: close,
    placement: "bottom-end",
    middleware: [offset(4)],
  });
  useTrapFocus(refs.floating, {
    arrowKeysOn: true,
    activeState: isOpen,
    initialFocus: false,
  });

  const [searchButtonToggler, setSearchButtonToggler] = useState(false);

  // Effect to handle click outside to close search bar

  /*
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    close();
    await router.push(`/search?search=${searchValue}`);
  };
  */
  /*
  const handleReset = () => {
    setSearchValue("");
    close();
    inputReference.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    if (phrase) {
      setSearchValue(phrase);
    } else {
      handleReset();
    }
  };
*/
  return (
    <div className="relative inline-block text-left">
      {/* Desktop View */}

      <div className="hidden md:block">
        {/* Dropdown Button */}
        <button
          onClick={() => setSearchButtonToggler(!searchButtonToggler)}
          type="button"
          className="inline-flex hover:text-white hover:bg-primary-100 items-start px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaSearch className="text-black" />
        </button>

        {/* Dropdown Content */}
        {searchButtonToggler && (
          <div className="absolute mt-4 w-100 rounded-md shadow-lg bg-transparent ring-1 ring-blue ring-opacity-20 divide-y divide-gray-100 z-10">
            <SearchWithIcon />
          </div>
        )}
      </div>

      {/* Mobile View 
      <div className="block md:hidden">
        <SearchWithIcon />
      </div>
      */}
    </div>
  );
}
