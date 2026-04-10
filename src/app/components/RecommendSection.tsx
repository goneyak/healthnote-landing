import { Check } from 'lucide-react';

const recommendations = [
  '복용 중인 약이 많아지면서 이름, 용량, 복약 시간을 가족도 함께 정리해둘 필요가 있을 때',
  '검진 결과와 처방 자료가 여기저기 흩어져 있어 필요할 때마다 다시 찾게 될 때',
  '형제자매와 부모님 건강정보를 같은 기준으로 공유하고 싶을 때',
  '대신 병원에 가거나 전화로 설명할 때 참고할 정리본이 필요할 때',
  '베타 참여 후 솔직한 의견을 나눠주실 수 있을 때',
];

export function RecommendSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">이런 분께 맞습니다</h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            이 서비스는 부모님 건강정보를 대신 챙기기 시작한 성인 자녀·보호자에게 특히
            유용합니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
          <div className="space-y-3">
            {recommendations.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0064FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
