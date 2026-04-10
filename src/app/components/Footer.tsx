import { FileText } from 'lucide-react';
import { KAKAO_CHANNEL_URL } from '../links';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0064FF] flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">HealthNote</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">
              서비스 소개
            </a>
            <a
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-2">HealthNote는 의료 서비스가 아닌 건강정보 정리 서비스입니다.</p>
          <p>© 2026 HealthNote. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
