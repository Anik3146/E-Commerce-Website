import Home from "./Home";
import MetaverseMallHero from "./MetaverseMallHeroSection";
import ShoppingMallHero from "./ShoppingMallHeroSection";
import GalleryWithBullets from "./carousel";
import LocationNavigation from "./locationNavigationSection";
import { SfButton } from "@storefront-ui/react";
import { divide } from "lodash-es";
import Image from "next/image";
import Link from "next/link";
import type { HeroProps } from "~/components";

export function Hero({
  image,
  subtitle,
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  ...attributes
}: HeroProps) {
  return (
    <div>
      <Home />
    </div>
  );
}
