# 다이사 AI 개발 협업 가이드

## 적용 범위

고객향과 파트너향은 독립적인 디자인 시스템이다. 사용자가 명시적으로 요청하지 않는 한 규칙을 통합하거나 서로 적용하지 않는다.

## 고객향 작업

1. [START-HERE.md](./START-HERE.md)를 읽고 사용하는 도구에 맞는 작업 절차를 따른다.
2. [DESIGN.md](./DESIGN.md)를 필수 시각 기준의 원문으로 전달한다.
3. GPT에서 기획 프롬프트를 만들더라도 Figma Make 등 실제 제작 도구에 같은 버전의 원문을 다시 전달한다.
4. AS-IS·레퍼런스는 내용과 구조 참고용으로 사용하고 시각 스타일은 다이사 기준으로 다시 적용한다.
5. 아이콘이 필요할 때만 검색 API로 소수 후보를 찾고 선택한 SVG만 가져온다. 전체 manifest를 AI 대화에 넣지 않는다. 검색 결과 부재와 사이트 접근 실패를 구분한다.

이 파일에 폰트·색상·모서리 수치를 중복 작성하지 않는다. 이전 복사용 프롬프트가 DESIGN.md와 충돌하면 최신 원문을 따른다. 웹사이트의 탐색·카드·레이아웃 스타일과 서비스 컴포넌트 명세는 별개의 대상이다. 문서 내용 갱신만 요청받았다면 사이트 UI를 리디자인하지 않는다.

## 파트너향 작업

기존 [DAISA_PARTNER_DESIGN_SYSTEM.md](./DAISA_PARTNER_DESIGN_SYSTEM.md)를 적용한다. 고객향 DESIGN.md와 START-HERE.md를 파트너향에 적용하지 않는다. 기존 파트너향 규칙의 변경은 별도 요청 범위에서 진행한다.

## 사이트 내용 갱신

- 고객향 문서 원문: 루트 DESIGN.md와 START-HERE.md
- 고객향 표 데이터: src/data/customerRules.ts
- 리소스 미리보기·복사·다운로드: src/components/sections/ArchiveSection.tsx에서 원문 직접 불러오기
- 공개 MD 및 기존 경로: scripts/sync-design-docs.ts로 동기화
- 아이콘 원본: src/data/iconCatalog.tsx

기존 문서를 여러 곳에서 각각 수정하지 않는다. 표 데이터와 원문 간 일치는 검사로 확인한다.

```bash
npm run docs:sync
npm run test:design
npm run test:icons
npm run build
```

실제 확인한 항목과 확인할 수 없었던 항목을 구분한다. AI 자체 확인만으로 완벽한 준수를 주장하지 않는다. 포함된 Figma Linter는 기존 고객향 판정 로직이므로 최신 DESIGN.md와 일치하도록 별도 갱신하기 전에는 고객향 검증의 기준으로 사용하지 않는다.
