# daisalibrary - 다이사(da24) 디자인시스템 & 컴포넌트 라이브러리

당근 **Seed Design** 스타일을 벤치마킹하여 제작된 **다이사(da24)**의 공식 디자인시스템 웹사이트입니다.

## 🚀 빠른 시작

```bash
cd /Users/marketdesigners/.gemini/antigravity/scratch/daisalibrary
npm install
npm run dev
```

- 로컬 서버: [http://localhost:5173](http://localhost:5173)

---

## 🎨 주요 디자인 토큰 및 규칙

### 1. Colors
- **main-01 (`#1219F7`)**: 다이사 Primary Blue 키컬러 (CTA, 주요 활성 상태)
- **main-02 (`#595EF9`)**: 보조 블루 (일러스트, 포인트)
- **main-04 (`#F4F5FF`)**: 틴트 배경 (강조 박스 배경)
- **text-01 (`#121212`)**: 헤드라인 및 주요 텍스트
- **text-02 (`#333333`)**: 일반 본문 텍스트
- **text-03 (`#666666`)**: 보조 텍스트, 설명
- **text-04 (`#888888`)**: 플레이스홀더, 캡션
- **etc-02 (`#D7DBE2`)**: 표준 테두리 (Border)
- **etc-03 (`#EBEEF2`)**: 구분선 (Divider), 취소 버튼 배경
- **etc-04 (`#F7F8FA`)**: 비활성 배경 (Disabled BG)
- **error (`#F34765`)**: 에러 피드백
- **dimmed (`rgba(0, 0, 0, 0.6)`)**: 모달 및 바텀시트 딤드 60%

### 2. Typography (짝수 6개 규격 엄격 준수)
- **Font Family**: Pretendard 단일 사용
- **Letter-spacing**: `-1px` (`-0.01em`) 고정
- **규격 (6대 짝수)**: `12px`, `14px`, `16px`, `18px`, `20px`, `24px` 외 홀수 및 소수점 절대 차단
  - `headline_B_24`: 24px Bold (lh 140%)
  - `title_B_20`: 20px Bold (lh 150%)
  - `button_B_18`: 18px Bold (lh 140%)
  - `body_B_16` / `body_R_16`: 16px (lh 150%)
  - `sub_B_14` / `sub_R_14`: 14px (lh 140%)
  - `caption_B_12` / `caption_R_12`: 12px (lh 130%)

### 3. Buttons (위치별 4대 규격)
1. **Floating CTA**: 모바일 360px 너비, 높이 56px, Corner Radius 0px, 18px Bold White
2. **Public In-Content**: 너비 312px, 높이 56px, Corner Radius 10px, 16px Bold White
3. **Modal Button**: 높이 48/56px, Corner Radius 10px
   - 단일: 280px 전폭
   - 2분할: 취소 136px (`#EBEEF2`) + 8px 간격 + 확인 136px (`#1219F7`) = 280px
4. **Segmented 3-Split**: 너비 312px, 3분할 시 중앙 1px 추가 (103-104-103px) 룰 적용

### 4. Form Inputs
- `input-text`, `input-number`, `select`: 너비 312px, 높이 56px, Corner Radius 10px, 패딩 16px
- 상태: Normal (Border `#D7DBE2`), Focus (Border `#1219F7`), Disabled (BG `#F7F8FA`)

### 5. Modals & Bottom Sheets
- **Alert / Confirm Modal**: 너비 312px 중앙 정렬, Radius 16px, Dimmed 60%, Title 20px Bold, Radius 10px 내부 버튼
- **Bottom Sheet**: 너비 360px, 상단만 Radius 16px, 헤더 56px (18px Title + 24x24 닫기), 리스트 높이 56px, 최대 높이 284px (5개 노출)

---

## 📱 실제 재현 화면
- [개발] v1.2 에어컨 페이지 리뉴얼 (`7785:11499`)
- [개발] v1.2 후기 페이지 리뉴얼 & 모달 (`6813:9676`)
- [개발] v1.1 인터넷 가격 비교 (`7349:334`)
- [개발] v1.1 빠크 방문견적 모달 (`6458:2639`)
