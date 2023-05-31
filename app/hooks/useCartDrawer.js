import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the interface of the Cart state
const INITIAL_STATE = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the store with Zustand, combining the status interface and actions
const useCartStore = create(
  persist(
    (set, get) => ({
      items: INITIAL_STATE.items,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (product) => {
        const items = get().items;
        const cartItem = items.find((item) => item.id === product.id);

        // If the item already exists in the Cart, increase its quantity
        if (cartItem) {
          const updatedCart = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set((state) => ({
            items: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...items, { ...product, quantity: 1 }];

          set((state) => ({
            items: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      decrementQuantity: (product) => {
        const items = get().items;
        const cartItem = items.find((item) => item.id === product.id);

        if (cartItem) {
          if (cartItem.quantity === 1) {
            // Remove the product from the cart if its quantity becomes 0
            set((state) => ({
              items: state.items.filter((item) => item.id !== product.id),
              totalItems: state.totalItems - 1,
              totalPrice: state.totalPrice - product.price,
            }));
          } else {
            const updatedCart = items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            set((state) => ({
              items: updatedCart,
              totalItems: state.totalItems - 1,
              totalPrice: state.totalPrice - product.price,
            }));
          }
        }
      },
      incrementQuantity: (product) => {
        const items = get().items;
        const cartItem = items.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set((state) => ({
            items: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      removeFromCart: (product) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        }));
      },
    }),
    {
      name: "cart-stroge",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
