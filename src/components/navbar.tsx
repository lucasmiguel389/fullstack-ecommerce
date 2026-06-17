export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-400">
          FullStack Commerce
        </h1>

        <div className="flex items-center gap-6">
          <a href="/" className="hover:text-emerald-400 transition">
            Home
          </a>

          <a href="/products" className="hover:text-emerald-400 transition">
            Produtos
          </a>

          <a href="#" className="hover:text-emerald-400 transition">
            Ofertas
          </a>
        </div>

        <input
          type="text"
          placeholder="Buscar produtos..."
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 w-64 text-white"
        />
      </div>
    </nav>
  );
}