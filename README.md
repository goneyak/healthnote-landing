# HealthNote — 베타 랜딩 페이지

부모님 건강정보를 **건강정보 마스터 파일(PDF)** 로 정리하는 유료 정리 서비스 **HealthNote**의 베타 모집용 단일 페이지입니다. 의료 진단·치료 서비스가 아닙니다.

| 항목 | 링크 |
|------|------|
| **라이브 사이트** | [healthnote-landing.vercel.app](https://healthnote-landing.vercel.app) |
| **소스 저장소** | [github.com/goneyak/healthnote-landing](https://github.com/goneyak/healthnote-landing) |

## 기술 스택

- [Vite](https://vitejs.dev/) 6 · [React](https://react.dev/) 18  
- TypeScript · [Tailwind CSS](https://tailwindcss.com/) 4 (`@tailwindcss/vite`)  
- UI 베이스: [shadcn/ui](https://ui.shadcn.com/) 스타일 컴포넌트 (출처는 [ATTRIBUTIONS.md](./ATTRIBUTIONS.md))

## 로컬에서 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:5173` 에서 뜹니다.

```bash
npm run build   # 결과물은 dist/
```

## 배포

- **호스팅:** [Vercel](https://vercel.com)  
- `main` 브랜치에 푸시하면 자동 빌드·배포됩니다.  
- 빌드 설정은 저장소 루트의 [`vercel.json`](./vercel.json) 을 참고합니다. (`npm run build` → `dist`)

## 외부 링크 (수정 위치)

구글폼·카카오 채널 URL은 코드에서 한곳만 바꾸면 됩니다.

| 용도 | 파일 |
|------|------|
| 베타 신청 폼 · 카카오 채널 | [`src/app/links.ts`](src/app/links.ts) |
| 마스터 파일 HTML 예시 경로 | [`src/app/sampleAssets.ts`](src/app/sampleAssets.ts) (`public/samples/` 파일과 함께 관리) |

## 디렉터리 개요

```
src/app/
  components/     # 랜딩 섹션 (Hero, Problems, Features, Preview …)
  demo/           # 인페이지 미리보기용 샘플 데이터·컴포넌트
  links.ts        # 베타 폼·카카오 URL
  sampleAssets.ts # 정적 예시 HTML 경로
public/samples/   # 배포 시 그대로 제공되는 풀 예시 HTML
```

## 디자인 출처

초기 UI는 Figma Make에서 내려받은 번들을 기반으로 하며, 원본 디자인 파일은 다음과 연결됩니다.

[Figma — 부모님 건강정보 홍보 페이지](https://www.figma.com/design/jrshepWsGk5bSiqEXwUN9v/%EB%B6%80%EB%AA%A8%EB%8B%98-%EA%B1%B4%EA%B0%95%EC%A0%95%EB%B3%B4-%ED%99%8D%EB%B3%B4-%ED%8E%98%EC%9D%B4%EC%A7%80)

## 라이선스·출처

서드파티 컴포넌트·에셋 출처는 [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) 를 참고하세요.

---

© 2026 HealthNote (랜딩 페이지 저장소)
