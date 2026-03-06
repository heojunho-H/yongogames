import { useState, useEffect, useRef } from 'react';
import { products } from '../store-data';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Zap, Trophy, TrendingUp, Users } from 'lucide-react';

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const start = prev.current;
    const end = value;
    const diff = end - start;
    if (diff === 0) return;
    const duration = 600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    prev.current = value;
  }, [value]);

  return <>{display.toLocaleString()}</>;
}

export function ScoreBoard() {
  const yonseiBase = products.filter(p => p.team === 'yonsei').reduce((s, p) => s + p.soldCount, 0);
  const koreaBase = products.filter(p => p.team === 'korea').reduce((s, p) => s + p.soldCount, 0);

  const [yonseiCount, setYonseiCount] = useState(yonseiBase);
  const [koreaCount, setKoreaCount] = useState(koreaBase);
  const [flash, setFlash] = useState<'yonsei' | 'korea' | null>(null);
  const [recentBuys, setRecentBuys] = useState<{ id: number; team: 'yonsei' | 'korea'; amount: number }[]>([]);
  const buyIdRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const amount = Math.floor(Math.random() * 5) + 1;
      const team: 'yonsei' | 'korea' = Math.random() > 0.5 ? 'yonsei' : 'korea';
      if (team === 'yonsei') {
        setYonseiCount(p => p + amount);
      } else {
        setKoreaCount(p => p + amount);
      }
      setFlash(team);
      buyIdRef.current += 1;
      const newBuy = { id: buyIdRef.current, team, amount };
      setRecentBuys(prev => [newBuy, ...prev].slice(0, 5));
      setTimeout(() => setFlash(null), 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const total = yonseiCount + koreaCount;
  const yonseiPercent = (yonseiCount / total) * 100;
  const koreaPercent = 100 - yonseiPercent;
  const leader = yonseiCount > koreaCount ? 'yonsei' : yonseiCount < koreaCount ? 'korea' : null;
  const gap = Math.abs(yonseiCount - koreaCount);

  return (
    <div className="relative">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003876]/10 via-transparent to-[#8B0029]/10 rounded-3xl blur-xl" />

      <div className="relative bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Flame className="w-5 h-5 text-orange-400 animate-pulse" />
            <h2
              className="text-white text-[1.25rem] sm:text-[1.5rem]"
              style={{ fontFamily: "'Black Han Sans', sans-serif" }}
            >
              실시간 판매 대결
            </h2>
            <Flame className="w-5 h-5 text-orange-400 animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-[0.6875rem]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            LIVE
            <span className="mx-1">·</span>
            <Users className="w-3 h-3" />
            총 <AnimatedNumber value={total} />개 판매
          </div>
        </div>

        {/* Main Score Area */}
        <div className="px-4 sm:px-8 py-8">
          <div className="grid grid-cols-3 items-center gap-4 mb-8">
            {/* Yonsei Side */}
            <motion.div
              animate={flash === 'yonsei' ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#003876]/10 flex items-center justify-center mb-3 relative">
                <span className="text-[1.75rem] sm:text-[2rem]">🦅</span>
                {leader === 'yonsei' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center"
                  >
                    <Trophy className="w-3 h-3 text-white" />
                  </motion.div>
                )}
                {flash === 'yonsei' && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 rounded-full border-2 border-[#003876]"
                  />
                )}
              </div>
              <h3
                className="text-[#003876] text-[0.9375rem] sm:text-[1.0625rem] mb-1"
                style={{ fontFamily: "'Black Han Sans', sans-serif" }}
              >
                연세대
              </h3>
              <div
                className="text-[1.5rem] sm:text-[2rem] text-[#003876]"
                style={{ fontFamily: "'Black Han Sans', sans-serif" }}
              >
                <AnimatedNumber value={yonseiCount} />
              </div>
              <span className="text-gray-400 text-[0.6875rem]">개 판매</span>
            </motion.div>

            {/* VS Center */}
            <div className="text-center">
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 mx-auto" />
                </motion.div>
                <span
                  className="text-gray-300 text-[1.25rem] sm:text-[1.5rem] block mt-1"
                  style={{ fontFamily: "'Black Han Sans', sans-serif" }}
                >
                  VS
                </span>
              </div>
              {leader && (
                <motion.div
                  key={gap}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-[0.625rem] inline-block"
                >
                  {gap.toLocaleString()}개 차이
                </motion.div>
              )}
            </div>

            {/* Korea Side */}
            <motion.div
              animate={flash === 'korea' ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#8B0029]/10 flex items-center justify-center mb-3 relative">
                <span className="text-[1.75rem] sm:text-[2rem]">🐯</span>
                {leader === 'korea' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center"
                  >
                    <Trophy className="w-3 h-3 text-white" />
                  </motion.div>
                )}
                {flash === 'korea' && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 rounded-full border-2 border-[#8B0029]"
                  />
                )}
              </div>
              <h3
                className="text-[#8B0029] text-[0.9375rem] sm:text-[1.0625rem] mb-1"
                style={{ fontFamily: "'Black Han Sans', sans-serif" }}
              >
                고려대
              </h3>
              <div
                className="text-[1.5rem] sm:text-[2rem] text-[#8B0029]"
                style={{ fontFamily: "'Black Han Sans', sans-serif" }}
              >
                <AnimatedNumber value={koreaCount} />
              </div>
              <span className="text-gray-400 text-[0.6875rem]">개 판매</span>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3 flex items-center justify-between text-[0.6875rem]">
            <span className="text-[#003876]">{yonseiPercent.toFixed(1)}%</span>
            <span className="text-gray-300">판매 점유율</span>
            <span className="text-[#8B0029]">{koreaPercent.toFixed(1)}%</span>
          </div>
          <div className="relative h-5 rounded-full overflow-hidden bg-gray-100 mb-6">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#003876] to-[#1a6fd4] rounded-full"
              animate={{ width: `${yonseiPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute right-0 top-0 h-full bg-gradient-to-l from-[#8B0029] to-[#d4003c] rounded-full"
              animate={{ width: `${koreaPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            {/* Center clash effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 z-10" />
          </div>

          {/* Live Feed */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-1.5 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-500 text-[0.6875rem]">실시간 구매 현황</span>
            </div>
            <div className="space-y-2 min-h-[80px]">
              <AnimatePresence mode="popLayout">
                {recentBuys.map(buy => (
                  <motion.div
                    key={buy.id}
                    initial={{ opacity: 0, x: -20, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[0.5625rem] text-white px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: buy.team === 'yonsei' ? '#003876' : '#8B0029' }}
                      >
                        {buy.team === 'yonsei' ? '연세' : '고려'}
                      </span>
                      <span className="text-gray-600 text-[0.75rem]">
                        누군가 {buy.amount}개 구매!
                      </span>
                    </div>
                    <span className="text-gray-300 text-[0.625rem]">방금 전</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {recentBuys.length === 0 && (
                <p className="text-gray-300 text-[0.75rem] text-center py-4">구매를 기다리는 중...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
