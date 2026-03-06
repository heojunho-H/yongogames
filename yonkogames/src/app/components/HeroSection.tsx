import { motion } from 'motion/react';
import { ArrowDown, Zap } from 'lucide-react';

function CookieSvg({ color, chipColor }: { color: string; chipColor: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Cookie body */}
      <ellipse cx="100" cy="105" rx="82" ry="78" fill={color} />
      <ellipse cx="100" cy="100" rx="82" ry="78" fill={color} />
      {/* Lighter top highlight */}
      <ellipse cx="90" cy="85" rx="55" ry="45" fill="white" opacity="0.1" />
      {/* Chocolate chips / chunks */}
      <circle cx="65" cy="75" r="12" fill={chipColor} opacity="0.7" />
      <circle cx="120" cy="60" r="10" fill={chipColor} opacity="0.6" />
      <circle cx="135" cy="110" r="13" fill={chipColor} opacity="0.7" />
      <circle cx="80" cy="125" r="11" fill={chipColor} opacity="0.65" />
      <circle cx="105" cy="95" r="9" fill={chipColor} opacity="0.55" />
      <circle cx="55" cy="105" r="8" fill={chipColor} opacity="0.5" />
      <circle cx="115" cy="140" r="7" fill={chipColor} opacity="0.5" />
      {/* Surface cracks */}
      <path d="M70 90 Q80 85 85 95" stroke={chipColor} strokeWidth="1.5" opacity="0.3" fill="none" />
      <path d="M110 105 Q120 100 125 108" stroke={chipColor} strokeWidth="1.5" opacity="0.3" fill="none" />
      <path d="M90 130 Q100 125 105 132" stroke={chipColor} strokeWidth="1.5" opacity="0.25" fill="none" />
      {/* Subtle shadow */}
      <ellipse cx="100" cy="185" rx="60" ry="8" fill="black" opacity="0.06" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#003876]/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#8B0029]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      {/* Left Blue Cookie (Yonsei) */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -20 }}
        animate={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden md:block absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 w-40 lg:w-56 pointer-events-none"
      >
        <CookieSvg color="#2a5ea8" chipColor="#001f4d" />
      </motion.div>

      {/* Right Red Cookie (Korea) */}
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 20 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden md:block absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 w-40 lg:w-56 pointer-events-none"
      >
        <CookieSvg color="#b8003a" chipColor="#4d0018" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full mb-6 text-[0.8125rem]"
        >
          <Zap className="w-4 h-4" />
          2026 연고전 한정 에디션
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4"
        >
          <span
            className="text-[2.5rem] sm:text-[4rem] leading-tight block"
            style={{ fontFamily: "'Black Han Sans', sans-serif" }}
          >
            <span className="text-[#003876]">연세</span>
            <span className="text-gray-300 mx-2 sm:mx-4">vs</span>
            <span className="text-[#8B0029]">고려</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[1.5rem] sm:text-[2rem] text-gray-900 mb-4"
          style={{ fontFamily: "'Black Han Sans', sans-serif" }}
        >
          어느 학교가 더 많이 팔릴까?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-500 text-[0.9375rem] sm:text-[1.0625rem] max-w-lg mx-auto mb-10"
        >
          쫀득한 두쫀쿠키로 펼쳐지는 세기의 대결!
          <br />
          당신의 선택이 승부를 가릅니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-[#003876] text-white px-8 py-3 rounded-full hover:bg-[#002654] transition-colors text-[0.9375rem] no-underline"
          >
            연세팀 보기
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-[#8B0029] text-white px-8 py-3 rounded-full hover:bg-[#6d0020] transition-colors text-[0.9375rem] no-underline"
          >
            고려팀 보기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <ArrowDown className="w-5 h-5 text-gray-300 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}