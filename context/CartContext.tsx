"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export interface CartItem {
  id: string;
  title: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  drawerOpen: boolean;
}

type Action =
  | { type: "ADD"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; id: string }
  | { type: "UPDATE_QTY"; id: string; qty: number }
  | { type: "TOGGLE_DRAWER"; open: boolean }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          drawerOpen: true,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
        drawerOpen: true,
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_QTY":
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.qty } : i
        ),
      };
    case "TOGGLE_DRAWER":
      return { ...state, drawerOpen: action.open };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const STORAGE_KEY = "form-cart";

interface CartContextValue extends CartState {
  add: (item: Omit<CartItem, "quantity">) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  clear: () => void;
  total: number;
  itemCount: number;
  freeShippingRemaining: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const FREE_SHIPPING_THRESHOLD = 50;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    drawerOpen: false,
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const items = JSON.parse(saved) as CartItem[];
        items.forEach((item) => dispatch({ type: "ADD", item }));
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items, hydrated]);

  const total = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total);

  return (
    <CartContext.Provider
      value={{
        ...state,
        add: (item) => dispatch({ type: "ADD", item }),
        remove: (id) => dispatch({ type: "REMOVE", id }),
        updateQty: (id, qty) => dispatch({ type: "UPDATE_QTY", id, qty }),
        openDrawer: () => dispatch({ type: "TOGGLE_DRAWER", open: true }),
        closeDrawer: () => dispatch({ type: "TOGGLE_DRAWER", open: false }),
        clear: () => dispatch({ type: "CLEAR" }),
        total,
        itemCount,
        freeShippingRemaining,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
