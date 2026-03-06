import { Outlet } from 'react-router';
import { Header } from './Header';
import { Toaster } from 'sonner';
import { Cookie, Instagram, MessageCircle } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <Toaster position="top-center" richColors />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-amber-500" />
              <span className="text-gray-400 text-[0.75rem]">
                © 2026 두쫀쿠 연고전. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-500 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
