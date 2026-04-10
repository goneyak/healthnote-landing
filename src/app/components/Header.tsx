import { FileText } from 'lucide-react';
import { KAKAO_CHANNEL_URL } from '../links';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0064FF] flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-gray-900">HealthNote</span>
        </div>
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
