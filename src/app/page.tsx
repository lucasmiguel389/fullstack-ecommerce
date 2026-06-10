export default function Home() {
  const products = [
    { id: 1, name: "Notebook Pro 15", category: "Eletrônicos", price: 3499, emoji: "💻" },
    { id: 2, name: "Fone Bluetooth", category: "Áudio", price: 249, emoji: "🎧" },
    { id: 3, name: "Smartwatch X", category: "Acessórios", price: 899, emoji: "⌚" },
    { id: 4, name: "Câmera 4K", category: "Fotografia", price: 2199, emoji: "📷" },
    { id: 5, name: "Teclado Mecânico", category: "Periféricos", price: 599, emoji: "⌨️" },
    { id: 6, name: "Monitor UltraWide", category: "Eletrônicos", price: 1899, emoji: "🖥️" },
  ];

  const categories = [
    { name: "Eletrônicos", emoji: "💻", count: 48 },
    { name: "Áudio", emoji: "🎧", count: 32 },
    { name: "Acessórios", emoji: "⌚", count: 27 },
    { name: "Fotografia", emoji: "📷", count: 19 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-5">
              Nova coleção 2026
            </span>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight mb-5">
              Produtos que<br />
              <span className="text-emerald-500">você vai amar</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
              Qualidade garantida com entrega rápida para todo o Brasil. Encontre tudo em um só lugar.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="/products" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors">
                Ver produtos →
              </a>
              <a href="#" className="border border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl text-sm font-medium transition-colors">
                Ver ofertas
              </a>
            </div>
            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-2xl font-semibold text-gray-900">500+</p>
                <p className="text-xs text-gray-400 mt-0.5">Produtos</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">12k</p>
                <p className="text-xs text-gray-400 mt-0.5">Clientes</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">4.9★</p>
                <p className="text-xs text-gray-400 mt-0.5">Avaliação</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-72 h-72 bg-emerald-50 rounded-3xl flex items-center justify-center text-9xl">
              🛍️
            </div>
          </div>
        </div>
      </section>

      {/* Banner frete */}
      <div className="bg-emerald-500 text-white py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-2 text-sm font-medium">
          🚚 Frete grátis para compras acima de R$ 299 · Entrega em até 3 dias úteis
        </div>
      </div>

      {/* Categorias */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Categorias</h2>
          <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700">Ver todas →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-sm transition-all cursor-pointer text-center">
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <p className="font-medium text-gray-800 text-sm">{cat.name}</p>
              <p className="text-xs text-gray-400 mt-1">{cat.count} produtos</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos mais vendidos */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Mais vendidos</h2>
          <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700">Ver todos →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-emerald-200 hover:shadow-sm transition-all cursor-pointer group">
              <div className="h-44 bg-gray-50 flex items-center justify-center text-6xl group-hover:bg-emerald-50 transition-colors">
                {product.emoji}
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                <p className="font-medium text-gray-900 text-sm mb-3">{product.name}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    R$ {product.price.toLocaleString("pt-BR")}
                  </span>
                  <button className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center text-lg transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-gray-900 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white text-2xl font-semibold mb-2">Ofertas especiais da semana</p>
            <p className="text-gray-400 text-sm">Até 40% de desconto em produtos selecionados</p>
          </div>
          <a href="#" className="bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-colors">
            Ver ofertas →
          </a>
        </div>
      </section>
    </>
  );
}