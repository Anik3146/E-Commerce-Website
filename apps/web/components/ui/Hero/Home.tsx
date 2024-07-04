import MetaverseMallHero from "./MetaverseMallHeroSection";
import ShoppingMallHero from "./ShoppingMallHeroSection";
import GalleryWithBullets from "./carousel";
import LocationNavigation from "./locationNavigationSection";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto mt-4 px-4 rounded-lg sm:px-6 lg:px-8">
          <div className="grid justify-center gap-6 md:gap-8 sm:gap-12">
            <GalleryWithBullets />
          </div>
        </div>

        <LocationNavigation />

        <ShoppingMallHero />

        <MetaverseMallHero />
      </div>
    </>
  );
}
