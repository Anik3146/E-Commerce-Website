import { create } from "zustand";
import { Product } from "~/models/product";

interface CartItem extends Product {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  //orders type
  orders: Order[];
  count: () => number;
  add: (product: Product, quantity: any) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
  placeOrder: () => void;
  removeAllOrders: () => void;
  removeSingleOrder: (orderId: number) => void;
};

//for order interface
interface Order {
  id: number;
  items: CartItem[];
  totalPrice: number;
  date: Date;
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  //orders array
  orders: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },
  add: (product: Product, quantity: any) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart, quantity);
    set({ cart: updatedCart });
  },
  remove: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
  placeOrder: () => {
    const { cart, orders } = get();
    const totalPrice = cart.reduce(
      (total, item) => total + item.selling_price * item.count,
      0
    );
    const newOrder: Order = {
      id: orders.length + 1,
      items: [...cart],
      totalPrice,
      date: new Date(),
    };
    set({
      orders: [...orders, newOrder],
      cart: [],
    });
  },
  removeAllOrders: () => set({ orders: [] }),
  removeSingleOrder: (orderId: number) => {
    const { orders } = get();
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    set({ orders: updatedOrders });
  },
}));

function updateCart(
  product: Product,
  cart: CartItem[],
  quantity: any
): CartItem[] {
  const cartItem = { ...product, count: quantity } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + quantity } as CartItem;
      return item;
    });
  }

  return cart;
}

function removeCart(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}
