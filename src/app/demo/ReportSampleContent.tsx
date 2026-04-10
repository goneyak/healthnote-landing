import {
  FileText,
  Heart,
  LayoutDashboard,
  Pill,
  ShieldAlert,
} from 'lucide-react';
import { reportSample as s } from './reportSample';

function StatusChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
      {text}
    </span>
  );
}

type Props = {
  /** 랜딩 미리보기: 핵심만 표시 */
  compact?: boolean;
};

export function ReportSampleContent({ compact }: Props) {
  const { profile, bodyMetrics, coverBadge, documentTypeLabel } = s;
  const coverDescription = compact
    ? s.coverDescriptionPreview
    : s.coverDescription;

  return (
    <div className={`text-left ${compact ? 'space-y-5' : 'space-y-10'}`}>
      {/* Cover */}
      <div className={`text-center space-y-4 ${compact ? 'space-y-2' : ''}`}>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
          <FileText className="h-4 w-4 shrink-0" />
          {coverBadge}
        </div>
        {!compact && (
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Heart className="h-8 w-8 fill-current" />
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Master File
            </span>
          </div>
        )}
        <h3
          className={`font-extrabold tracking-tight text-slate-900 ${
            compact ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
          }`}
        >
          {profile.name}
        </h3>
        <p
          className={`mx-auto max-w-2xl leading-relaxed text-slate-600 ${
            compact ? 'text-sm' : 'text-base sm:text-lg'
          }`}
        >
          {coverDescription}
        </p>
      </div>

      <div
        className={`grid gap-3 ${
          compact ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'
        }`}
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm sm:p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            문서 유형
          </p>
          <p className="text-xs font-bold text-slate-800 sm:text-sm md:text-base">
            {documentTypeLabel}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm sm:p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            기본 정보
          </p>
          <p className="text-xs font-bold text-slate-800 sm:text-sm md:text-base">
            {profile.gender} · {profile.birthDate}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm sm:p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            신체 지표
          </p>
          <p className="text-xs font-bold text-slate-800 sm:text-sm md:text-base">
            {bodyMetrics.heightCm}cm / {bodyMetrics.weightKg}kg
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm sm:p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            최근 업데이트
          </p>
          <p className="text-xs font-bold text-slate-800 sm:text-sm md:text-base">
            {bodyMetrics.updatedAt}
          </p>
        </div>
      </div>

      {!compact && (
        <div className="flex flex-wrap justify-center gap-2">
          <StatusChip text={`현재 복용 제품: ${s.counts.takingMeds}개`} />
          <StatusChip text={`관리 중인 질환: ${s.counts.conditions}개`} />
          <StatusChip text={`현재 주요 관심: ${s.counts.concerns}개`} />
          <StatusChip text={`보관 문서: ${s.counts.documents}개`} />
        </div>
      )}

      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 font-bold text-slate-700">
          <LayoutDashboard className="h-5 w-5 text-blue-600" />
          {compact ? '한 줄 요약' : 'Snapshot'}
        </div>
        <div className="rounded-2xl bg-blue-600 p-4 text-white shadow-lg shadow-blue-100 sm:p-5">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-100 sm:text-xs">
            핵심 요약
          </p>
          <p className="text-xs font-semibold leading-relaxed sm:text-sm md:text-base">
            “{s.oneLine}”
          </p>
        </div>
      </div>

      {!compact && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-slate-800">
              <ShieldAlert className="h-5 w-5 text-red-500" />
              관리 중인 질환
            </h4>
            <ul className="flex flex-wrap gap-2">
              {s.conditions.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-slate-800">
              <Pill className="h-5 w-5 text-blue-500" />
              복용 제품 요약
            </h4>
            <ul className="space-y-2">
              {s.medications.map((m) => (
                <li
                  key={m.name}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm"
                >
                  <p className="font-semibold text-slate-900">{m.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{m.schedule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <p
        className={`text-center text-slate-500 ${
          compact ? 'text-[11px] not-italic' : 'text-xs italic'
        }`}
      >
        {compact
          ? '참고용 예시이며, 진단·치료를 대신하지 않습니다.'
          : '본 내용은 건강정보의 구조화·정리·보관을 위한 참고용 예시이며, 진단이나 치료를 대신하지 않습니다.'}
      </p>
    </div>
  );
}
