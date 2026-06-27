import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="text-8xl mb-6 text-center">
          {product.emoji}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>

        <p className="text-gray-500 mb-2">
          Categoria: {product.category}
        </p>

        <p className="text-3xl font-bold text-emerald-600 mb-6">
          R$ {product.price.toLocaleString("pt-BR")}
        </p>

        <p className="text-gray-700 mb-8">
          Produto premium com excelente qualidade e garantia.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl">
          Adicionar ao Carrinho
        </button>
      </div>
    </main>
  );
}