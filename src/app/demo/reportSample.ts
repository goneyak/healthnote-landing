/**
 * 리포트 데모·랜딩 미리보기용 고정 예시 (실제 서비스 데이터 아님)
 * 마스터 파일(Cover + Snapshot 일부) 구조를 반영합니다.
 */
export const reportSample = {
  profile: {
    name: '김○○',
    gender: '남',
    birthDate: '1955.03.15',
  },
  bodyMetrics: {
    heightCm: 168,
    weightKg: 72,
    updatedAt: '2026년 4월',
  },
  /** Cover 상단 뱃지 문구 */
  coverBadge: '가족용 건강정보 마스터 파일',
  /** Cover 본문 (샘플 리포트 톤) */
  coverDescription:
    '개인의 건강정보를 구조화해 보관하고, 필요할 때 최신 상태로 다시 확인할 수 있도록 정리한 기준 파일입니다.',
  /** 랜딩 미리보기용 짧은 문구 */
  coverDescriptionPreview:
    '제출 자료를 바탕으로 구성한 예시입니다. 실제 파일은 내용에 따라 달라집니다.',
  documentTypeLabel: '가족 정리본',
  counts: {
    takingMeds: 2,
    conditions: 2,
    concerns: 2,
    documents: 5,
  },
  oneLine:
    '고혈압·당뇨 관리 중이며, 정기 검진과 복약 일정을 꾸준히 지키고 있는 상태로 요약할 수 있습니다.',
  conditions: ['고혈압', '당뇨병'] as const,
  medications: [
    { name: '아스피린 100mg', schedule: '1일 1회, 아침 식후' },
    { name: '메트포르민 500mg', schedule: '1일 2회, 식후' },
  ] as const,
};
