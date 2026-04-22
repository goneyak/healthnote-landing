import { Search, FileQuestion, MessageSquare } from 'lucide-react';

const problems = [
  {
    icon: Search,
    title: '복용 중인 약을 매번 다시 찾게 됩니다',
    description:
      '약 이름, 용량, 복용 시간이 흩어져 있어 병원이나 약국에서 설명할 때마다 헷갈립니다.',
  },
  {
    icon: FileQuestion,
    title: '검진·처방 자료가 한곳에 모이지 않습니다',
    description:
      '사진, PDF, 종이가 섞여 있어 “작년 검사 결과가 어디 있더라”를 자주 찾게 됩니다.',
  },
  {
    icon: MessageSquare,
    title: '대신 연락하거나 동행할 때 참고할 자료가 없습니다',
    description:
      '보호자가 대신 설명해야 할 때, 한 번에 보여줄 수 있는 정리된 자료가 없어 같은 설명을 반복하게 됩니다.',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl text-gray-900 leading-snug">
            평소 건강을 대신 챙기다 보면,
            <br />
            아래와 같은 상황이 자주 생깁니다.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-[#0064FF]" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
