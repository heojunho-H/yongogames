import { useParams, Link } from 'react-router';
import { products } from '../store-data';
import { ProductCard } from './ProductCard';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function TeamPage() {
  const { team } = useParams<{ team: string }>();
  const isYonsei = team === 'yonsei';
  const teamProducts = products.filter(p => p.team === team);
  const teamColor = isYonsei ? '#003876' : '#8B0029';
  const teamName = isYonsei ? '연세대학교' : '고려대학교';
  const teamEmoji = isYonsei ? '🦅' : '🐯';
  const teamSlogan = isYonsei ? '진리가 너희를 자유롭게 하리라' : '자유·정의·진리';

  return (
    <div>
      {/* Team Hero */}
      <div
        className="py-16 sm:py-20 text-white text-center"
        style={{ background: `linear-gradient(135deg, ${teamColor}, ${isYonsei ? '#1a5fa8' : '#c4003c'})` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[3rem] sm:text-[4rem] mb-2"
        >
          {teamEmoji}
        </motion.div>
        <h1
          className="text-[1.75rem] sm:text-[2.25rem] mb-2"
          style={{ fontFamily: "'Black Han Sans', sans-serif" }}
        >
          {teamName}
        </h1>
        <p className="text-white/70 text-[0.875rem]">{teamSlogan}</p>
        <p className="text-white/50 text-[0.75rem] mt-4">
          {teamProducts.reduce((s, p) => s + p.soldCount, 0).toLocaleString()}개 판매 중
        </p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors text-[0.875rem] mb-8 no-underline"
        >
          <ArrowLeft className="w-4 h-4" />
          전체 메뉴로
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
