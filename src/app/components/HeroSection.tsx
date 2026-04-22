import { BETA_APPLICATION_FORM_URL } from '../links';
import { MASTER_FILE_SAMPLE_HTML } from '../sampleAssets';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#0064FF] text-sm rounded-full mb-6">
          HealthNote 베타 · 성인 자녀·보호자 대상
        </div>
        <h1 className="text-5xl leading-tight text-gray-900 mb-6">
          건강정보를
          <br />
          PDF 한 부로 정리합니다
        </h1>
        <p className="text-xl text-gray-600 mb-3 leading-relaxed max-w-2xl mx-auto">
          제출해 주신 자료를 바탕으로 복용약·검진·병력을 구조화해,
          <br />
          <span className="font-medium text-gray-800">건강정보 마스터 파일(PDF)</span>로 제공합니다.
        </p>
        <p className="text-sm text-gray-500 mb-12 max-w-xl mx-auto">
          진단·치료를 대신하는 서비스가 아니라, 정보 정리·보관을 돕는 유료 정리 서비스입니다.
          <br />
          베타는 선착순 30명, 정식 오픈 전 조건으로 진행합니다.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={BETA_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0064FF] text-white rounded-xl hover:bg-[#0052CC] transition-colors shadow-lg shadow-blue-500/20"
          >
            베타 신청하기
          </a>
          <a
            href={MASTER_FILE_SAMPLE_HTML}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-gray-700 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
            aria-label="건강정보 마스터 파일 예시 HTML을 새 탭에서 엽니다"
          >
            결과물 미리보기
          </a>
        </div>
      </div>
    </section>
  );
}
