"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Meu Carrinho
      </h1>

      <p className="text-gray-600 mb-8">
        Produtos adicionados ao carrinho.
      </p>

      {cart.length === 0 ? (
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <p className="text-gray-500">
            Seu carrinho está vazio.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center"
              >
                <div>
                  <div className="text-4xl mb-2">
                    {product.emoji}
                  </div>

                  <h3 className="font-semibold text-lg">
                    {product.name}
                  </h3>

                  <p className="text-gray-500">
                    {product.category}
                  </p>

                  <p className="text-emerald-600 font-bold mt-2">
                    R$ {(product.price * product.quantity).toLocaleString("pt-BR")}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="text-lg font-bold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="w-10 h-10 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Remover
                  </button>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Total: R$ {total.toLocaleString("pt-BR")}
            </h2>

            <div className="flex gap-4">

              <button
                onClick={clearCart}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"
              >
                Limpar Carrinho
              </button>

              <Link
  href="/checkout"
  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg"
>
  Finalizar Compra
</Link>

            </div>

          </div>
        </>
      )}
    </main>
  );
}