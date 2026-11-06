# 🤝 다이사 라이브러리(daisalibrary) 인수인계 가이드 (Handover Guide)

> 이 문서는 본 프로젝트의 원작성자가 퇴사하거나 담당자가 변경될 때, 후임자 또는 회사 조직에 저장소 및 Vercel 배포 시스템을 원활하게 이양하기 위한 공식 인수인계 절차서입니다.

---

## 📋 인수인계 체크리스트 요약

| 순번 | 작업 항목 | 담당 주체 | 소요 시간 |
| :---: | :--- | :--- | :---: |
| 1 | GitHub 저장소 소유권 이전 (Transfer Ownership) | 인계자 (기존 담당자) | 3분 |
| 2 | Vercel 프로젝트 이전 또는 팀원 초대 | 인계자 (기존 담당자) | 2분 |
| 3 | 도메인 연결 설정 (선택 사항: 회사 전용 도메인) | 후임자 / 인프라팀 | 5분 |
| 4 | 로컬 개발 환경 검증 (`git pull` & `npm run build`) | 인수자 (후임자) | 5분 |

---

## 1. GitHub 저장소 소유권 이전 방법

현재 개인 계정(`github.com/[개인계정]/daisalibrary`)에 생성되어 있는 저장소를 회사 공식 계정(Organization 또는 후임자 계정)으로 안전하게 이전합니다.

1. 웹 브라우저에서 본인의 `daisalibrary` GitHub 저장소 페이지에 접속합니다.
2. 상단 메뉴에서 **Settings** 탭을 클릭합니다.
3. 좌측 메뉴의 **General** 화면에서 스크롤을 맨 아래로 내려 **Danger Zone** 섹션을 찾습니다.
4. **Transfer ownership** 버튼을 클릭합니다.
5. 이전 대상 정보 입력:
   * **New owner's GitHub username or organization name**: 회사 조직명(예: `marketdesigners` 또는 후임자 GitHub ID)
   * 확인 문구(저장소 이름 `daisalibrary`)를 입력하고 **I understand, transfer this repository**를 클릭합니다.
6. **결과**:
   * 커밋 히스토리, 이슈, PR, 브랜치 등 모든 내역이 100% 보존된 상태로 즉시 소유권이 이전됩니다.
   * 기존 URL로 접속하더라도 GitHub가 자동으로 신규 URL로 영구 리다이렉션해 줍니다.

---

## 2. Vercel 배포 프로젝트 소유권 이전 방법

GitHub 저장소와 연동된 Vercel 자동 배포 프로젝트의 관리 권한을 회사 팀원에게 이양합니다.

### 방법 A: Vercel Team 계정으로 프로젝트 통째로 이전 (권장)
1. [Vercel Dashboard](https://vercel.com)에 로그인합니다.
2. `daisalibrary` 프로젝트 카드를 클릭합니다.
3. 상단 **Settings** > 좌측 **General** 메뉴로 이동합니다.
4. 페이지 하단의 **Transfer** 섹션을 찾습니다.
5. **Transfer Project** 버튼을 누르고 회사의 Vercel Team이나 후임자 계정을 선택하여 이전을 승인합니다.

### 방법 B: 프로젝트에 관리자(Admin)로 후임자 추가
1. **Settings** > **Members** 메뉴로 이동합니다.
2. 후임자의 이메일 주소를 입력하고 권한을 **Admin** 또는 **Owner**로 지정하여 초대장을 발송합니다.

---

## 3. 회사 공식 도메인 연결 (옵션)

만약 `daisalibrary.vercel.app` 외에 회사의 공식 서브도메인(예: `design.da24.co.kr` 또는 `ds.marketdesigners.com`)을 연결하고 싶다면:

1. Vercel 대시보드 > `daisalibrary` > **Settings** > **Domains** 메뉴로 이동합니다.
2. 원하는 도메인을 입력하고 **Add**를 누릅니다.
3. Vercel이 안내하는 CNAME 레코드(`cname.vercel-dns.com`)를 회사의 DNS 관리 콘솔(가비아, Route53, Cloudflare 등)에 등록합니다.
4. DNS 등록 후 1~5분 이내에 SSL 인증서(HTTPS)가 자동 발급되며 연결됩니다.

---

## 4. 후임자 최초 개발자 온보딩 가이드

후임자가 프로젝트를 전달받은 뒤 최초로 동작을 확인하는 방법:

```bash
# 1. 새 저장소 주소에서 클론
git clone https://github.com/[NEW_OWNER]/daisalibrary.git
cd daisalibrary

# 2. 패키지 의존성 설치
npm install

# 3. 로컬 개발 서버 실행 및 브라우저 확인
npm run dev

# 4. 빌드 무결성 테스트
npm run build
```

빌드가 성공하고 에러가 없다면 인수인계가 완벽히 완료된 상태입니다!
이후 디자인 수정이나 컴포넌트 추가 작업은 [AI_DEVELOPMENT_GUIDE.md](./AI_DEVELOPMENT_GUIDE.md)를 참고하여 AI와 함께 안전하게 진행할 수 있습니다.
