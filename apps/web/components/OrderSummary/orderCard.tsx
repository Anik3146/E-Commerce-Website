import { useState } from "react";

export default function OrderCard() {
  const [isCancelled, setIsCancelled] = useState(false);

  // Function to handle cancellation
  const handleCancel = () => {
    setIsCancelled(true);
    // Add logic here for cancellation action (e.g., API call, state update, etc.)
  };

  if (isCancelled) {
    return null; // Render nothing if order is cancelled
  }

  return (
    <div
      className="relative flex first:border-t border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] p-4 last:mb-0"
      data-testid="cart-product-card"
    >
      <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
        <div className="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium">
          Icon
        </div>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">product name</h3>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        <div className="my-2 sm:mb-0">
          <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700"></ul>
        </div>
        <div className="items-start sm:items-center sm:mt-auto flex flex-col sm:flex-row">
          <span className="text-secondary-700 sm:order-1 font-bold typography-text-sm sm:typography-text-lg sm:ml-auto">
            total Price : $200
            <span className="text-neutral-500 ml-2 line-through typography-text-xs sm:typography-text-sm font-normal">
              item names
            </span>
          </span>
          {/* Other buttons or actions can be added here */}
        </div>
      </div>
    </div>
  );
}
