import { useCart } from '../cart-context';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-4" />
        <h2 className="text-gray-900 text-[1.25rem] mb-2" style={{ fontFamily: "'Black Han Sans', sans-serif" }}>
          장바구니가 비어있어요
        </h2>
        <p className="text-gray-400 text-[0.875rem] mb-8">
          두쫀쿠키를 담아 연고전에 참여해보세요!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors text-[0.875rem] no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          쇼핑 계속하기
        </Link>
      </div>
    );
  }

  const yonseiItems = items.filter(i => i.product.team === 'yonsei');
  const koreaItems = items.filter(i => i.product.team === 'korea');
  const yonseiTotal = yonseiItems.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const koreaTotal = koreaItems.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[1.5rem] text-gray-900" style={{ fontFamily: "'Black Han Sans', sans-serif" }}>
          장바구니
        </h1>
        <button
          onClick={() => {
            clearCart();
            toast('장바구니를 비웠습니다.');
          }}
          className="text-gray-400 hover:text-red-500 transition-colors text-[0.75rem] cursor-pointer"
        >
          전체 삭제
        </button>
      </div>

      {/* Team contribution */}
      {yonseiItems.length > 0 && koreaItems.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center justify-between text-[0.8125rem]">
          <span className="text-[#003876]">연세 {yonseiTotal.toLocaleString()}원</span>
          <span className="text-gray-300">|</span>
          <span className="text-[#8B0029]">고려 {koreaTotal.toLocaleString()}원</span>
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, i) => {
          const isYonsei = item.product.team === 'yonsei';
          const teamColor = isYonsei ? '#003876' : '#8B0029';
          return (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100"
            >
              <ImageWithFallback
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[0.5625rem] text-white px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: teamColor }}
                  >
                    {isYonsei ? '연세' : '고려'}
                  </span>
                  <h3 className="text-gray-900 text-[0.875rem] truncate">{item.product.name}</h3>
                </div>
                <p className="text-gray-900 text-[0.9375rem]">
                  {(item.product.price * item.quantity).toLocaleString()}원
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center text-[0.875rem]">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <button
                onClick={() => {
                  removeFromCart(item.product.id);
                  toast('상품을 삭제했습니다.');
                }}
                className="p-2 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Total and Checkout */}
      <div className="mt-8 bg-gray-50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-[0.875rem]">총 상품 금액</span>
          <span className="text-gray-900 text-[0.875rem]">{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 text-[0.875rem]">배송비</span>
          <span className="text-green-600 text-[0.875rem]">무료</span>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <span className="text-gray-900" style={{ fontFamily: "'Black Han Sans', sans-serif" }}>
            결제 금액
          </span>
          <span className="text-[1.5rem] text-gray-900" style={{ fontFamily: "'Black Han Sans', sans-serif" }}>
            {totalPrice.toLocaleString()}원
          </span>
        </div>
        <button
          onClick={() => toast.success('주문이 완료되었습니다! 🎉')}
          className="w-full mt-6 bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors text-[0.9375rem] cursor-pointer"
        >
          주문하기
        </button>
      </div>

      <Link
        to="/"
        className="flex items-center justify-center gap-2 mt-6 text-gray-400 hover:text-gray-600 transition-colors text-[0.875rem] no-underline"
      >
        <ArrowLeft className="w-4 h-4" />
        쇼핑 계속하기
      </Link>
    </div>
  );
}
