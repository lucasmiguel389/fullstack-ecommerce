"use client";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { cart } = useCart();

  return (
    <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
      {cart.length}
    </span>
  );
}