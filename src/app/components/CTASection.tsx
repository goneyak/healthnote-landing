import { ArrowRight, MessageCircle, Eye } from 'lucide-react';
import { BETA_APPLICATION_FORM_URL, KAKAO_CHANNEL_URL } from '../links';
import { MASTER_FILE_SAMPLE_HTML } from '../sampleAssets';

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#0064FF] to-[#0052CC] rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-2xl md:text-3xl mb-3">
            베타에 참여해 보시겠습니까
          </h2>
          <p className="text-blue-100 text-sm md:text-base mb-6">
            성인 자녀·보호자 대상 · 선착순 30명
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BETA_APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0064FF] rounded-xl hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2 group font-medium"
            >
              <span>베타 신청하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={MASTER_FILE_SAMPLE_HTML}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              aria-label="건강정보 마스터 파일 예시 HTML을 새 탭에서 엽니다"
            >
              <Eye className="w-5 h-5" aria-hidden />
              <span>미리보기</span>
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          <a
            href={KAKAO_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0064FF] hover:text-[#0052CC] transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span>카카오톡 문의</span>
          </a>
        </div>
      </div>
    </section>
  );
}
