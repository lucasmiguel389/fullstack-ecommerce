import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "shop.co",
  description: "Sua loja online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold tracking-tight">
              shop<span className="text-emerald-500">.</span>co
            </a>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Produtos</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Categorias</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Ofertas</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Sobre</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
              </button>
              <button className="relative p-2 text-gray-400 hover:text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9"/></svg>
                <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-500 text-white text-[10px] font-medium rounded-full flex items-center justify-center">3</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-white border-t border-gray-100 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <p className="text-xl font-semibold mb-3">shop<span className="text-emerald-500">.</span>co</p>
              <p className="text-sm text-gray-400 leading-relaxed">Qualidade garantida com entrega rápida para todo o Brasil.</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Loja</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-700">Produtos</a></li>
                <li><a href="#" className="hover:text-gray-700">Categorias</a></li>
                <li><a href="#" className="hover:text-gray-700">Ofertas</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Ajuda</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-700">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-700">Trocas e devoluções</a></li>
                <li><a href="#" className="hover:text-gray-700">Rastrear pedido</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Empresa</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-700">Sobre nós</a></li>
                <li><a href="#" className="hover:text-gray-700">Contato</a></li>
                <li><a href="#" className="hover:text-gray-700">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-300">
            © 2026 shop.co — Todos os direitos reservados
          </div>
        </footer>
      </body>
    </html>
  );
}