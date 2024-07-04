import classNames from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Divider } from "~/components";
import {
  bottomLinks,
  categories,
  companyName,
  contactOptions,
  socialMedia,
} from "~/mocks";

export function Footer({
  className = "",
}: {
  className?: string;
}): JSX.Element {
  const { t } = useTranslation("footer");

  return (
    <footer
      className={classNames("pt-10 bg-primary-1200 text-white", className)}
      data-testid="footer"
    >
      {/* Top Section: Categories, Help, Newsletter */}
      <div
        className="grid gap-5 justify-center grid-cols-1 md:grid-cols-3 px-4 md:px-6 pb-10 mx-auto max-w-screen-3xl py-4"
        data-testid="section-top"
      >
        {/* Categories */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Woman Fashion
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Man Fashion
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kids Wear
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Footwear
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kitchen
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electronics
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Help</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Purchase Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Quality Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Newsletter</h3>
          <p className="mb-4 text-gray-300">
            Enter your email address below to subscribe to our newsletter and
            keep up to date with discounts and special offers.
          </p>
          <form className="flex space-x-2 ">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white px-3 py-2 rounded-md flex-1"
            />
            <button
              type="submit"
              className="bg-neutral-800 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <br />
          <div className="text-gray-300">We accept</div>
          <div className="text-gray-300 flex flex-wrap items-center">
            <button
              type="button"
              className="flex items-center py-2 pl-0 mr-2 rounded"
            >
              <img
                src="/images/visa.png"
                alt="Visa Icon"
                style={{ height: "50px", width: "auto" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center pl-0 mr-2 bg-white rounded"
            >
              <img
                src="/images/master.png"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "auto" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center py-2 pl-0 rounded"
            >
              <img
                src="/images/american.png"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "80%" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center  pl-0 mr-2 rounded"
            >
              <img
                src="/images/bkash.jpg"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "auto" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center  pl-0 mr-2 rounded"
            >
              <img
                src="/images/rocket.webp"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "73px" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center  pl-0 mr-2 rounded bg-white"
            >
              <img
                src="/images/nagad.png"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "auto" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center  pl-0 mr-2 rounded bg-white"
            >
              <img
                src="/images/dbbl.png"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "70px" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center py-2 mr-2 pl-0 rounded"
            >
              <img
                src="/images/mkash.png"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "100%" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center  pl-0 mr-2 rounded bg-white"
            >
              <img
                src="/images/ipay.webp"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "auto" }}
              />
            </button>
            <button
              type="button"
              className="flex items-center  pl-0 mr-2 rounded bg-white"
            >
              <img
                src="/images/upay.png"
                alt="Mastercard Icon"
                style={{ height: "50px", width: "70px" }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900" data-testid="section-bottom">
        <div className="mx-auto max-w-screen-3xl text-sm leading-5 text-white justify-between px-4 py-10 lg:flex lg:py-6">
          <div className="flex justify-center lg:self-end gap-6 mb-4 lg:mb-0">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          <p className="flex items-center justify-center leading-5 text-center text-white/50 font-body md:ml-6">
            @www.thikana.com
          </p>
        </div>
      </div>

      <footer className="bg-neutral-900 text-white text-sm py-4 text-center">
        <p>&copy; 2024 thikana.xyz. All rights reserved.</p>
      </footer>
    </footer>
  );
}
