import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../store-data';
import { useCart } from '../cart-context';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const isYonsei = product.team === 'yonsei';
  const teamColor = isYonsei ? '#003876' : '#8B0029';
  const teamBg = isYonsei ? 'bg-[#003876]' : 'bg-[#8B0029]';
  const teamBgLight = isYonsei ? 'bg-blue-50' : 'bg-red-50';

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} 담김!`, {
      description: '장바구니에 추가되었습니다.',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className={`relative overflow-hidden ${teamBgLight}`}>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${teamBg} text-white px-3 py-1 rounded-full text-[0.625rem] tracking-wider`}
          >
            {product.badge}
          </span>
        )}
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[0.625rem] text-white"
          style={{ backgroundColor: teamColor }}
        >
          {isYonsei ? '연세' : '고려'}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-gray-900 mb-1 text-[0.9375rem]">{product.name}</h3>
        <p className="text-gray-500 text-[0.75rem] mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-900 text-[1.125rem]" style={{ fontFamily: "'Black Han Sans', sans-serif" }}>
              {product.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-[0.75rem] ml-1">원</span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            style={{ backgroundColor: teamColor }}
          >
            <Plus className="w-4 h-4" />
            <span className="text-[0.75rem]">담기</span>
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5">
          <ShoppingCart className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400 text-[0.6875rem]">
            {product.soldCount.toLocaleString()}개 판매
          </span>
        </div>
      </div>
    </motion.div>
  );
}
