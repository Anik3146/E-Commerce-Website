import { useTranslation } from "next-i18next";
import { Breadcrumb, NarrowContainer } from "~/components";
import { DefaultLayout } from "~/layouts";

const MetaverseMall = () => {
  const { t } = useTranslation("offers");
  const breadcrumbs: Breadcrumb[] = [
    { name: t("Home"), link: "/" },
    { name: t("Offers"), link: "/offers" },
  ];

  const shoppingMalls = [
    {
      id: 1,
      name: "Mall A",
      offers: [
        {
          title: "Summer Sale",
          description: "Up to 50% off on selected items!",
          type: "percentage",
          value: 50,
        },
        {
          title: "Reward Points Boost",
          description: "Earn double points on all purchases.",
          type: "points",
          value: "Double Points",
        },
      ],
    },
    {
      id: 2,
      name: "Mall B",
      offers: [
        {
          title: "Flash Sale",
          description: "Extra 20% off on clearance items.",
          type: "percentage",
          value: 20,
        },
        {
          title: "Gift Card Giveaway",
          description: "Get a $20 gift card with purchases over $100.",
          type: "giftcard",
          value: "$20 Gift Card",
        },
      ],
    },
    // Add more malls as needed
  ];

  const OfferCard = ({ offer }: any) => {
    let badgeClass = "";
    let badgeText = "";

    switch (offer.type) {
      case "percentage":
        badgeClass = "bg-blue-500";
        badgeText = `${offer.value}% OFF`;
        break;
      case "points":
        badgeClass = "bg-green-500";
        badgeText = offer.value;
        break;
      case "giftcard":
        badgeClass = "bg-yellow-500";
        badgeText = offer.value;
        break;
      default:
        break;
    }

    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className={`px-6 py-4 ${badgeClass} text-white font-bold uppercase text-center`}
        >
          {badgeText}
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
          <p className="text-gray-700">{offer.description}</p>
        </div>
      </div>
    );
  };

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Exclusive Offers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shoppingMalls.map((mall) => (
              <div key={mall.id}>
                <h2 className="text-2xl font-semibold mb-4">{mall.name}</h2>
                <div className="grid gap-4">
                  {mall.offers.map((offer, index) => (
                    <OfferCard key={index} offer={offer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MetaverseMall;
