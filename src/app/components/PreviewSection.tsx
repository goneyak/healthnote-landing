import { ExternalLink } from 'lucide-react';
import { ReportSampleContent } from '../demo/ReportSampleContent';
import { MASTER_FILE_SAMPLE_HTML } from '../sampleAssets';

export function PreviewSection() {
  return (
    <section
      id="preview-sample"
      className="scroll-mt-28 py-20 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-gray-900 mb-3">결과물 미리보기</h2>
          <p className="text-gray-600 text-base max-w-lg mx-auto leading-relaxed">
            실제 파일은 제출 자료에 맞춰 달라집니다. 구조만 참고해 주세요.
          </p>
          <a
            href={MASTER_FILE_SAMPLE_HTML}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[#0064FF] text-sm font-medium hover:text-[#0052CC] transition-colors"
          >
            <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
            전체 예시(HTML) 새 탭에서 보기
          </a>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-lg sm:p-6 md:p-8">
          <ReportSampleContent compact />
        </div>
      </div>
    </section>
  );
}
