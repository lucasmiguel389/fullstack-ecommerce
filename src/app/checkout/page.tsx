"use client";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function finalizarPedido() {
    alert("Pedido realizado com sucesso! 🎉");
    clearCart();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Checkout
      </h1>

      <p className="text-gray-500 mb-10">
        Preencha seus dados para concluir a compra.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Dados do Cliente
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Nome completo"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Telefone"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Endereço"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Cidade"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="CEP"
              className="w-full border rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-semibold mb-6">
            Resumo do Pedido
          </h2>

          <div className="space-y-3">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>

                <span>
                  R$ {(item.price * item.quantity).toLocaleString("pt-BR")}
                </span>
              </div>
            ))}

          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-xl font-bold">

            <span>Total</span>

            <span>
              R$ {total.toLocaleString("pt-BR")}
            </span>

          </div>

          <button
            onClick={finalizarPedido}
            className="mt-8 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl text-lg font-semibold"
          >
            Finalizar Compra
          </button>

        </div>

      </div>

    </main>
  );
}