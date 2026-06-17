"use client";

import { useState } from "react";
import { products } from "@/data/products";

export default function ProductsPage() {
  const categories = [
    "Todos",
    "Eletrônicos",
    "Áudio",
    "Acessórios",
    "Fotografia",
    "Periféricos",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "Todos" ||
    product.category === selectedCategory;

  const matchesSearch =
    product.name.toLowerCase().includes(search.toLowerCase());

  return matchesCategory && matchesSearch;
});

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Todos os Produtos
      </h1>

      <p className="text-xl font-medium text-gray-900 mb-8">
        Explore nosso catálogo completo.
      </p>

      {/* Categorias */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-lg font-medium transition ${
              selectedCategory === category
                ? "bg-emerald-500 text-white"
                : "bg-gray-200 text-gray-900 hover:bg-emerald-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-8">
  <input
    type="text"
    placeholder="Buscar produto..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
  />
</div>

      {/* Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="text-5xl mb-3">
              {product.emoji}
            </div>

            <h3 className="font-semibold text-lg">
              {product.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {product.category}
            </p>

            <p className="text-emerald-600 font-bold mt-2">
              R$ {product.price.toLocaleString("pt-BR")}
            </p>

            <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition">
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}