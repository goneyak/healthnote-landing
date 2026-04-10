import { Pill, Activity, FileText, StickyNote, Upload } from 'lucide-react';

const features = [
  {
    icon: Pill,
    title: '복용약',
    description: '이름, 용량, 복약 시간을 한곳에 정리합니다.',
  },
  {
    icon: Activity,
    title: '병력',
    description: '질환·수술·알레르기 등 이력을 순서대로 담습니다.',
  },
  {
    icon: FileText,
    title: '검사·검진',
    description: '건강검진 및 주요 수치를 찾아 보기 쉽게 묶습니다.',
  },
  {
    icon: StickyNote,
    title: '메모·특이사항',
    description: '의료기관 안내와 가족 메모를 함께 남깁니다.',
  },
  {
    icon: Upload,
    title: '원본 인덱스',
    description: '사진·파일 등 원본이 무엇인지 목록으로 연결합니다.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl text-gray-900 mb-3">
            PDF 한 부에 담기는 내용
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            위 항목을 바탕으로 건강정보 마스터 파일을 구성합니다.
            <br />
            포함 범위는 제출해 주신 자료에 따라 달라질 수 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0064FF] flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#0064FF] flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
