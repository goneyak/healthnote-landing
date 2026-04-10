import { ArrowRight } from 'lucide-react';
import { BETA_APPLICATION_FORM_URL } from '../links';

export function BetaSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-5">베타 참여 안내</h2>
          <p className="text-gray-600 leading-relaxed">
            소규모로 진행되는 베타에 참여하실 분을 모집합니다.
            <br />
            선착순 30명으로, 실제로 사용해 보신 뒤 의견을 나눠주시면 서비스 개선에
            반영합니다.
          </p>
        </div>

        <div
          id="beta-apply"
          className="scroll-mt-28 bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10 border border-gray-100"
        >
          <div className="text-center">
            <p className="text-gray-800 font-medium mb-4">
              베타 참여 금액 (1인 1회)
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 flex-wrap">
              <span className="text-xl text-gray-400 line-through md:text-2xl">
                49,000원
              </span>
              <span className="text-gray-400 text-xl md:text-2xl" aria-hidden>
                →
              </span>
              <span className="text-5xl text-[#0064FF] font-semibold md:text-6xl">
                19,000원
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-8">
              현재 베타 참여자에게만 적용되는 가격입니다.
            </p>

            <a
              href={BETA_APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-12 py-4 bg-[#0064FF] text-white text-lg rounded-xl hover:bg-[#0052CC] transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 mx-auto group"
            >
              <span>베타 신청하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-5 max-w-md mx-auto leading-relaxed">
              신청은 약 2~3분 소요되며, 자료만 전달해 주시면 정리는 저희가 진행합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200">
          <h3 className="text-gray-900 text-xl mb-2 text-center">진행 방식</h3>
          <p className="text-center text-gray-500 text-sm mb-8">
            신청부터 정리본 전달까지, 보통 7일 이내로 진행됩니다.
          </p>
          <ol className="space-y-5 max-w-2xl mx-auto">
            <li className="flex gap-4">
              <span className="text-[#0064FF] font-semibold flex-shrink-0 w-6">
                1
              </span>
              <div>
                <p className="text-gray-900 font-medium">신청</p>
                <p className="text-gray-600 text-sm mt-0.5">
                  대상자 정보와 현재 상황을 간단히 작성해 주세요.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#0064FF] font-semibold flex-shrink-0 w-6">
                2
              </span>
              <div>
                <p className="text-gray-900 font-medium">개별 안내</p>
                <p className="text-gray-600 text-sm mt-0.5">
                  카카오톡으로 필요한 자료와 제출 방법을 안내드립니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#0064FF] font-semibold flex-shrink-0 w-6">
                3
              </span>
              <div>
                <p className="text-gray-900 font-medium">자료 전달</p>
                <p className="text-gray-600 text-sm mt-0.5">
                  처방전, 약 봉투, 검진 결과 등 보유 자료를 전달해 주세요.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#0064FF] font-semibold flex-shrink-0 w-6">
                4
              </span>
              <div>
                <p className="text-gray-900 font-medium">건강정보 정리</p>
                <p className="text-gray-600 text-sm mt-0.5">
                  복용약, 병력, 검사 결과를 하나의 흐름으로 구조화합니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-[#0064FF] font-semibold flex-shrink-0 w-6">
                5
              </span>
              <div>
                <p className="text-gray-900 font-medium">PDF 전달</p>
                <p className="text-gray-600 text-sm mt-0.5">
                  정리된 건강정보 마스터 파일을 전달드립니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
