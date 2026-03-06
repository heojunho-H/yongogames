import { ShoppingCart, Cookie } from 'lucide-react';
import { useCart } from '../cart-context';
import { Link } from 'react-router';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Cookie className="w-7 h-7 text-amber-500" />
            <span
              className="text-[1.25rem] tracking-tight text-gray-900"
              style={{ fontFamily: "'Black Han Sans', sans-serif" }}
            >
              두쫀쿠 연고전
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors no-underline text-[0.875rem]">
              홈
            </Link>
            <Link to="/products/yonsei" className="text-[#003876] hover:text-[#002654] transition-colors no-underline text-[0.875rem]">
              연세팀
            </Link>
            <Link to="/products/korea" className="text-[#8B0029] hover:text-[#6d0020] transition-colors no-underline text-[0.875rem]">
              고려팀
            </Link>
          </nav>

          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors no-underline">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
