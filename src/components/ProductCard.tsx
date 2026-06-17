type ProductCardProps = {
  name: string;
  category: string;
  price: number;
  emoji: string;
};

export default function ProductCard({
  name,
  category,
  price,
  emoji,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-emerald-200 hover:shadow-sm transition-all cursor-pointer group">
      <div className="h-44 bg-gray-50 flex items-center justify-center text-6xl">
        {emoji}
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">
          {category}
        </p>

        <p className="font-medium text-gray-900 text-sm mb-3">
          {name}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">
            R$ {price.toLocaleString("pt-BR")}
          </span>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm">
  Adicionar
</button>
        </div>
      </div>
    </div>
  );
}