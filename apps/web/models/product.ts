export type Product = {
  id: number;
  name: string;
  description: string;
  category: {
    id: number;
    name: string;
    description: string;
    merchant_id: number;
    created_at: string;
    // Add other properties if needed
  };
  category_id: number;
  count: number;
  created_at: string;
  expired_date: string;
  merchant_id: number;
  mrp: number;
  no_stock_sale: number;
  product_type: string;
  product_type_id: number;
  selling_price: number;
  status: string;
  tax_active: number;
  thumbnail: string;
  unit_of_measure_id: number;
  updated_at: string;
};
