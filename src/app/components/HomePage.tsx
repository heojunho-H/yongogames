import { useState } from 'react';
import { products } from '../store-data';
import { HeroSection } from './HeroSection';
import { ScoreBoard } from './ScoreBoard';
import { ProductCard } from './ProductCard';

type Filter = 'all' | 'yonsei' | 'korea';

export function HomePage() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? products : products.filter(p => p.team === filter);

  const filterBtns: { key: Filter; label: string; color: string }[] = [
    { key: 'all', label: '전체', color: 'bg-gray-900 text-white' },
    { key: 'yonsei', label: '연세팀 🦅', color: 'bg-[#003876] text-white' },
    { key: 'korea', label: '고려팀 🐯', color: 'bg-[#8B0029] text-white' },
  ];

  return (
    <div>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Scoreboard */}
        <div className="mb-12">
          <ScoreBoard />
        </div>

        {/* Products */}
        <div id="products">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2
              className="text-gray-900 text-[1.25rem]"
              style={{ fontFamily: "'Black Han Sans', sans-serif" }}
            >
              두쫀쿠키 라인업
            </h2>
            <div className="flex gap-2">
              {filterBtns.map(btn => (
                <button
                  key={btn.key}
                  onClick={() => setFilter(btn.key)}
                  className={`px-4 py-2 rounded-full text-[0.75rem] transition-all cursor-pointer ${
                    filter === btn.key
                      ? btn.color
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#003876]/10 via-amber-50 to-[#8B0029]/10 rounded-2xl p-8 sm:p-12">
          <h3
            className="text-gray-900 text-[1.125rem] sm:text-[1.375rem] mb-3"
            style={{ fontFamily: "'Black Han Sans', sans-serif" }}
          >
            당신의 한 입이 승부를 가릅니다!
          </h3>
          <p className="text-gray-500 text-[0.8125rem] max-w-md mx-auto">
            두쫀쿠키를 구매할 때마다 해당 학교의 판매 수에 반영됩니다.
            <br />
            올해 연고전의 진짜 승자는 누가 될까요?
          </p>
        </div>
      </div>
    </div>
  );
}
