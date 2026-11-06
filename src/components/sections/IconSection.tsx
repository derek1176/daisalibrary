import React, { useState, useMemo } from 'react';
import {
  LucideIcon,
  Download,
  Check,
  Search,
  Sparkles,
  Ban,
  ShieldCheck,
  // 30 Moving & Cleaning Icons
  Truck, Package, Boxes, MapPin, Building2, Home, Layers, FileText, Receipt,
  Star, Calendar, Clock, Armchair, Tv, Refrigerator, Bed, Warehouse, Car,
  Fuel, Wrench, Hammer, Trash2, Brush, Droplets, Wind, Navigation, Compass, Award,
  // 70 App Core & Controller Icons
  Menu, User, Users, Bell, BellOff, Filter, SlidersHorizontal, Settings, LogOut,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, ExternalLink, CornerDownRight,
  Plus, Minus, X, Check as CheckIcon, CheckCircle2, XCircle, Edit3, Copy, Share2,
  Upload, RefreshCw, Save, Trash, MoreHorizontal,
  Phone, PhoneCall, MessageCircle, MessageSquare, Mail, Send, Heart, ThumbsUp, AlertCircle, AlertTriangle,
  Info, HelpCircle, CheckCheck, Eye, EyeOff,
  Image, Camera, Folder, Paperclip, File, FileCheck, Printer, QrCode, Scan, Link,
  Lock, Unlock, Shield, Smartphone, Monitor, CreditCard, Wallet, Coins, ToggleLeft, ToggleRight
} from 'lucide-react';

interface IconMeta {
  name: string;
  label: string;
  icon: LucideIcon;
  category: '이사/청소 특화' | '앱 필수 공통';
  desc: string;
}

export const IconSection: React.FC = () => {
  const [activeSize, setActiveSize] = useState<'24' | '20' | '16'>('24');
  const [selectedCategory, setSelectedCategory] = useState<'전체' | '이사/청소 특화' | '앱 필수 공통'>('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadedName, setDownloadedName] = useState<string | null>(null);

  // 100 Official System Icons for Daisa (30 Moving/Cleaning + 70 Core App)
  const systemIcons: IconMeta[] = [
    // =========================================================================
    // 1. 이사 & 청소 특화 아이콘 (30종)
    // =========================================================================
    { name: 'Truck', label: '이사업체 / 용달차', icon: Truck, category: '이사/청소 특화', desc: '용달, 1톤/5톤 이사 트럭 운송' },
    { name: 'Package', label: '이사 짐 / 단일 박스', icon: Package, category: '이사/청소 특화', desc: '포장 이사 및 개별 짐 물품' },
    { name: 'Boxes', label: '포장 짐 / 다량 박스', icon: Boxes, category: '이사/청소 특화', desc: '전체 이사 물량 및 박스 적재' },
    { name: 'Sparkles', label: '입주 청소 / 클리닝', icon: Sparkles, category: '이사/청소 특화', desc: '입주, 이사, 거주 전문 청소 서비스' },
    { name: 'MapPin', label: '출발지 / 도착지 주소', icon: MapPin, category: '이사/청소 특화', desc: '이사 출발지/도착지 위치 설정' },
    { name: 'Building2', label: '주거 형태 / 아파트', icon: Building2, category: '이사/청소 특화', desc: '아파트, 오피스텔, 빌라 건물' },
    { name: 'Home', label: '주택 / 원룸·투룸', icon: Home, category: '이사/청소 특화', desc: '단독주택, 다세대, 원룸 이사' },
    { name: 'Layers', label: '층수 / 엘리베이터 유무', icon: Layers, category: '이사/청소 특화', desc: '건물 층수 및 사다리차 진입 조건' },
    { name: 'FileText', label: '비교 견적서 / 신청서', icon: FileText, category: '이사/청소 특화', desc: '업체별 비교 견적 및 견적 신청서' },
    { name: 'Receipt', label: '이사 비용 / 영수증', icon: Receipt, category: '이사/청소 특화', desc: '이사 정산 비용 및 계약금 내역' },
    { name: 'ShieldCheck', label: '안심 보증 / 보험 인증', icon: ShieldCheck, category: '이사/청소 특화', desc: '피해보상 이행보증보험 가입 파트너' },
    { name: 'Star', label: '고객 후기 / 별점', icon: Star, category: '이사/청소 특화', desc: '실제 이용 고객 평점 및 이사 후기' },
    { name: 'Calendar', label: '이사 희망일', icon: Calendar, category: '이사/청소 특화', desc: '손 없는 날 및 방문 견적 희망일' },
    { name: 'Clock', label: '희망 시간대', icon: Clock, category: '이사/청소 특화', desc: '작업 시작 시간 및 방문 시간 선택' },
    { name: 'Armchair', label: '가구 / 소파·테이블', icon: Armchair, category: '이사/청소 특화', desc: '거실 가구, 의자, 소파 운송' },
    { name: 'Tv', label: 'TV / 대형 가전', icon: Tv, category: '이사/청소 특화', desc: '벽걸이 TV 및 전자제품 포장' },
    { name: 'Refrigerator', label: '냉장고 / 주방 가전', icon: Refrigerator, category: '이사/청소 특화', desc: '양문형 냉장고 및 분해 조립 가전' },
    { name: 'Bed', label: '침대 / 매트리스', icon: Bed, category: '이사/청소 특화', desc: '침대 프레임 분해 및 매트리스 전용 커버' },
    { name: 'Warehouse', label: '보관 이사 / 창고', icon: Warehouse, category: '이사/청소 특화', desc: '단기/장기 컨테이너 보관 이사' },
    { name: 'Car', label: '차량 / 주차 공간', icon: Car, category: '이사/청소 특화', desc: '이사 당일 트럭 주차 공간 확보' },
    { name: 'Fuel', label: '운송료 / 추가요금 없음', icon: Fuel, category: '이사/청소 특화', desc: '유류비 및 거리별 추가비용 안내' },
    { name: 'Wrench', label: '분해 조립 / 설치', icon: Wrench, category: '이사/청소 특화', desc: '붙박이장, 에어컨 등 가전 설치' },
    { name: 'Hammer', label: '벽걸이 / 시공 타공', icon: Hammer, category: '이사/청소 특화', desc: '선반 부착 및 벽걸이 타공 작업' },
    { name: 'Trash2', label: '폐기물 / 스티커 처리', icon: Trash2, category: '이사/청소 특화', desc: '가구 폐기 및 대형 쓰레기 처리' },
    { name: 'Brush', label: '청소 도구 / 브러시', icon: Brush, category: '이사/청소 특화', desc: '창틀 및 바닥 전문 세척 도구' },
    { name: 'Droplets', label: '고압 물청소 / 세척', icon: Droplets, category: '이사/청소 특화', desc: '외창 및 주방 기름때 고온 스팀' },
    { name: 'Wind', label: '새집증후군 / 피톤치드', icon: Wind, category: '이사/청소 특화', desc: '공기 정화 및 살균 소독 케어' },
    { name: 'Navigation', label: '이동 경로 / 배차', icon: Navigation, category: '이사/청소 특화', desc: '실시간 이동 경로 및 기사 배차 안내' },
    { name: 'Compass', label: '손 없는 날 / 방위', icon: Compass, category: '이사/청소 특화', desc: '길일 확인 및 이사 방위 추천' },
    { name: 'Award', label: '우수 파트너 / 인증', icon: Award, category: '이사/청소 특화', desc: '다이사 인증 명예의 전당 베스트 파트너' },

    // =========================================================================
    // 2. 앱 필수 공통 컨트롤러 & UI 아이콘 (70종)
    // =========================================================================
    // 2.1 네비게이션 & 계정 (10종)
    { name: 'Menu', label: '전체 메뉴', icon: Menu, category: '앱 필수 공통', desc: '햄버거 전체 서비스 메뉴' },
    { name: 'User', label: '내 정보', icon: User, category: '앱 필수 공통', desc: '마이페이지 및 내 계정 정보' },
    { name: 'Users', label: '파트너 / 고객 모임', icon: Users, category: '앱 필수 공통', desc: '팀 작업자 및 다중 사용자' },
    { name: 'Bell', label: '알림', icon: Bell, category: '앱 필수 공통', desc: '견적 도착 및 중요 공지 알림' },
    { name: 'BellOff', label: '알림 끄기', icon: BellOff, category: '앱 필수 공통', desc: '푸시 알림 및 방해 금지 모드' },
    { name: 'Search', label: '검색', icon: Search, category: '앱 필수 공통', desc: '주소, 업체명 검색' },
    { name: 'Filter', label: '필터', icon: Filter, category: '앱 필수 공통', desc: '리스트 간편 조건 필터링' },
    { name: 'SlidersHorizontal', label: '상세 조건 설정', icon: SlidersHorizontal, category: '앱 필수 공통', desc: '세부 옵션 및 범위 슬라이더' },
    { name: 'Settings', label: '환경설정', icon: Settings, category: '앱 필수 공통', desc: '앱 환경설정 및 버전 정보' },
    { name: 'LogOut', label: '로그아웃', icon: LogOut, category: '앱 필수 공통', desc: '계정 로그아웃 및 세션 종료' },

    // 2.2 방향 & 탐색 (10종)
    { name: 'ChevronLeft', label: '이전 단계', icon: ChevronLeft, category: '앱 필수 공통', desc: '스텝 뒤로가기 네비게이션' },
    { name: 'ChevronRight', label: '다음 / 상세 이동', icon: ChevronRight, category: '앱 필수 공통', desc: '다음 스텝 및 목록 상세 이동' },
    { name: 'ChevronUp', label: '위로 접기', icon: ChevronUp, category: '앱 필수 공통', desc: '아코디언 및 드롭다운 접기' },
    { name: 'ChevronDown', label: '아래로 펼치기', icon: ChevronDown, category: '앱 필수 공통', desc: '아코디언 및 옵션 펼치기' },
    { name: 'ArrowLeft', label: '뒤로가기', icon: ArrowLeft, category: '앱 필수 공통', desc: '헤더 뒤로가기 화살표' },
    { name: 'ArrowRight', label: '계속하기 / 진행', icon: ArrowRight, category: '앱 필수 공통', desc: '버튼 우측 액션 진행 화살표' },
    { name: 'ArrowUp', label: '맨 위로', icon: ArrowUp, category: '앱 필수 공통', desc: '스크롤 맨 위로 (Top) 이동' },
    { name: 'ArrowDown', label: '아래로 이동', icon: ArrowDown, category: '앱 필수 공통', desc: '하단 섹션 스크롤 이동' },
    { name: 'ExternalLink', label: '외부 링크', icon: ExternalLink, category: '앱 필수 공통', desc: '약관 및 외부 웹사이트 새창' },
    { name: 'CornerDownRight', label: '답글 / 하위 항목', icon: CornerDownRight, category: '앱 필수 공통', desc: '문의 답변 및 하위 리스트 인덴트' },

    // 2.3 액션 & 편집 (15종)
    { name: 'Plus', label: '항목 추가', icon: Plus, category: '앱 필수 공통', desc: '새 항목 추가 및 옵션 확장' },
    { name: 'Minus', label: '항목 감소', icon: Minus, category: '앱 필수 공통', desc: '수량 축소 및 항목 접기' },
    { name: 'X', label: '닫기 / 입력 취소', icon: X, category: '앱 필수 공통', desc: '모달 닫기 및 검색어 삭제' },
    { name: 'Check', label: '확인 / 선택', icon: CheckIcon, category: '앱 필수 공통', desc: '단일 선택 및 체크 표시' },
    { name: 'CheckCircle2', label: '완료 상태', icon: CheckCircle2, category: '앱 필수 공통', desc: '성공 피드백 및 신청 완료' },
    { name: 'XCircle', label: '오류 / 취소 상태', icon: XCircle, category: '앱 필수 공통', desc: '취소 완료 및 처리 실패' },
    { name: 'Edit3', label: '내용 수정', icon: Edit3, category: '앱 필수 공통', desc: '입력 정보 및 텍스트 수정' },
    { name: 'Copy', label: '복사하기', icon: Copy, category: '앱 필수 공통', desc: '클립보드 복사 액션' },
    { name: 'Share2', label: '공유하기', icon: Share2, category: '앱 필수 공통', desc: '견적서 및 카카오톡 공유' },
    { name: 'Download', label: '다운로드', icon: Download, category: '앱 필수 공통', desc: '파일 및 명세서 저장' },
    { name: 'Upload', label: '업로드', icon: Upload, category: '앱 필수 공통', desc: '사진 및 문서 파일 첨부 업로드' },
    { name: 'RefreshCw', label: '새로고침 / 재시도', icon: RefreshCw, category: '앱 필수 공통', desc: '실시간 견적 갱신 및 재조회' },
    { name: 'Save', label: '임시 저장', icon: Save, category: '앱 필수 공통', desc: '작성 중인 신청서 저장' },
    { name: 'Trash', label: '삭제하기', icon: Trash, category: '앱 필수 공통', desc: '견적 취소 및 데이터 삭제' },
    { name: 'MoreHorizontal', label: '더보기 메뉴', icon: MoreHorizontal, category: '앱 필수 공통', desc: '카드 서브 메뉴 펼치기' },

    // 2.4 커뮤니케이션 & 피드백 (15종)
    { name: 'Phone', label: '전화 상담', icon: Phone, category: '앱 필수 공통', desc: '파트너 기사님 전화 걸기' },
    { name: 'PhoneCall', label: '통화 연결 중', icon: PhoneCall, category: '앱 필수 공통', desc: '실시간 통화 발신 상태' },
    { name: 'MessageCircle', label: '1:1 채팅 상담', icon: MessageCircle, category: '앱 필수 공통', desc: '실시간 알림톡 및 채팅' },
    { name: 'MessageSquare', label: '댓글 / 메시지', icon: MessageSquare, category: '앱 필수 공통', desc: '요청사항 메모 및 리뷰 댓글' },
    { name: 'Mail', label: '이메일 문의', icon: Mail, category: '앱 필수 공통', desc: '이메일 견적서 발송' },
    { name: 'Send', label: '전송하기', icon: Send, category: '앱 필수 공통', desc: '메시지 및 문의 전송' },
    { name: 'Heart', label: '찜하기 / 단골', icon: Heart, category: '앱 필수 공통', desc: '관심 업체 즐겨찾기 저장' },
    { name: 'ThumbsUp', label: '추천 / 만족', icon: ThumbsUp, category: '앱 필수 공통', desc: '기사님 서비스 만족 추천' },
    { name: 'AlertCircle', label: '경고 / 오류', icon: AlertCircle, category: '앱 필수 공통', desc: '필수 입력 누락 및 에러 알림' },
    { name: 'AlertTriangle', label: '주의 안내', icon: AlertTriangle, category: '앱 필수 공통', desc: '귀중품 사전 보관 주의사항' },
    { name: 'Info', label: '정보 안내', icon: Info, category: '앱 필수 공통', desc: '서비스 규정 및 이용 팁 안내' },
    { name: 'HelpCircle', label: '도움말 / FAQ', icon: HelpCircle, category: '앱 필수 공통', desc: '자주 묻는 질문 및 이용 안내' },
    { name: 'CheckCheck', label: '읽음 / 확인 완료', icon: CheckCheck, category: '앱 필수 공통', desc: '파트너 확인 완료 상태' },
    { name: 'Eye', label: '비밀번호 보기', icon: Eye, category: '앱 필수 공통', desc: '숨김 텍스트 및 비밀번호 표시' },
    { name: 'EyeOff', label: '비밀번호 숨김', icon: EyeOff, category: '앱 필수 공통', desc: '개인정보 및 비밀번호 마스킹' },

    // 2.5 미디어 & 파일 (10종)
    { name: 'Image', label: '사진 첨부', icon: Image, category: '앱 필수 공통', desc: '방 사진 및 짐 사진 선택' },
    { name: 'Camera', label: '직접 촬영', icon: Camera, category: '앱 필수 공통', desc: '가구 및 주택 전경 촬영' },
    { name: 'Folder', label: '문서함 / 폴더', icon: Folder, category: '앱 필수 공통', desc: '보관 견적서 및 영수증 폴더' },
    { name: 'Paperclip', label: '파일 첨부', icon: Paperclip, category: '앱 필수 공통', desc: '임대차 계약서 서류 첨부' },
    { name: 'File', label: '일반 문서', icon: File, category: '앱 필수 공통', desc: '표준 문서 파일 포맷' },
    { name: 'FileCheck', label: '검증된 서류', icon: FileCheck, category: '앱 필수 공통', desc: '사업자등록증 및 보험 증권' },
    { name: 'Printer', label: '인쇄하기', icon: Printer, category: '앱 필수 공통', desc: '견적서 출력 및 PDF 저장' },
    { name: 'QrCode', label: 'QR 코드', icon: QrCode, category: '앱 필수 공통', desc: '현장 방문 확인 QR 스캔' },
    { name: 'Scan', label: '바코드 / 스캔', icon: Scan, category: '앱 필수 공통', desc: '문서 자동 인식 스캐너' },
    { name: 'Link', label: '링크 복사', icon: Link, category: '앱 필수 공통', desc: 'URL 링크 연결 및 복사' },

    // 2.6 시스템 & 보안 / 결제 (10종)
    { name: 'Lock', label: '보안 잠금', icon: Lock, category: '앱 필수 공통', desc: '개인 안심번호 및 비밀번호 잠금' },
    { name: 'Unlock', label: '잠금 해제', icon: Unlock, category: '앱 필수 공통', desc: '인증 성공 및 잠금 해제' },
    { name: 'Shield', label: '개인정보 보호', icon: Shield, category: '앱 필수 공통', desc: '안심번호 050 및 보안 정책' },
    { name: 'Smartphone', label: '모바일 디바이스', icon: Smartphone, category: '앱 필수 공통', desc: '모바일 360px 및 전용 앱' },
    { name: 'Monitor', label: 'PC 데스크톱', icon: Monitor, category: '앱 필수 공통', desc: '웹 1200px 및 파트너 웹 콘솔' },
    { name: 'CreditCard', label: '카드 결제', icon: CreditCard, category: '앱 필수 공통', desc: '계약금 신용/체크카드 결제' },
    { name: 'Wallet', label: '계좌 이체 / 지갑', icon: Wallet, category: '앱 필수 공통', desc: '무통장 입금 및 전자 영수증' },
    { name: 'Coins', label: '포인트 / 할인', icon: Coins, category: '앱 필수 공통', desc: '이사 지원금 및 할인 혜택' },
    { name: 'ToggleLeft', label: '토글 꺼짐', icon: ToggleLeft, category: '앱 필수 공통', desc: '옵션 미선택 및 비활성 상태' },
    { name: 'ToggleRight', label: '토글 켜짐', icon: ToggleRight, category: '앱 필수 공통', desc: '옵션 적용 및 활성화 상태' },
  ];

  const sizePixel = activeSize === '24' ? 24 : activeSize === '20' ? 20 : 16;

  // Filter icons based on category and search query
  const filteredIcons = useMemo(() => {
    return systemIcons.filter((item) => {
      const matchCategory =
        selectedCategory === '전체' || item.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [systemIcons, selectedCategory, searchQuery]);

  const downloadSvgFile = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    const cardEl = e.currentTarget;
    const svgEl = cardEl.querySelector('svg');
    if (!svgEl) return;

    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgEl);

    if (!svgString.includes('xmlns=')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    svgString = svgString
      .replace(/width="[^"]*"/, `width="${sizePixel}"`)
      .replace(/height="[^"]*"/, `height="${sizePixel}"`);

    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `daisa-icon-${name.toLowerCase()}-${sizePixel}px.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedName(name);
    setTimeout(() => setDownloadedName(null), 1500);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#E5E8EB] pb-6">
        <span className="text-[13px] font-bold text-[#3182F6]">
          파운데이션 / 기초 규격
        </span>
        <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#191F28] tracking-tight mt-1">
          아이콘 (Icons) · 공식 100종
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 서비스의 <strong>공식 시스템 아이콘 100종 (이사/청소 특화 30종 + 앱 필수 공통 70종)</strong>입니다. 이모지 사용을 엄격히 금지하고 정식 벡터 SVG 아이콘만 사용합니다. 아이콘 카드를 클릭하면 <strong>.svg 파일로 즉시 다운로드</strong>됩니다.
        </p>
      </div>

      {/* 3 Core Rules Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rule 1: No Emoji */}
        <div className="p-5 bg-[#FFF5F6] border border-[#F34766]/30 rounded-[18px] space-y-2">
          <div className="flex items-center gap-2 text-[#F34766]">
            <Ban className="w-5 h-5 shrink-0" />
            <h4 className="text-[15px] font-extrabold">이모지 사용 금지</h4>
          </div>
          <p className="text-[13px] text-[#591420] leading-relaxed">
            모든 텍스트, 뱃지, 버튼, 툴팁 등에서 이모지 사용을 금지하며, 공식 SVG 아이콘만 사용합니다.
          </p>
        </div>

        {/* Rule 2: System Icon First */}
        <div className="p-5 bg-[#F2F7FF] border border-[#3182F6]/30 rounded-[18px] space-y-2">
          <div className="flex items-center gap-2 text-[#1B64DA]">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h4 className="text-[15px] font-extrabold">System Icon 100종 기반</h4>
          </div>
          <p className="text-[13px] text-[#1B64DA] leading-relaxed">
            이사 특화 30종과 앱 필수 70종의 검증된 시스템 아이콘을 최우선으로 적용합니다.
          </p>
        </div>

        {/* Rule 3: AI Creation */}
        <div className="p-5 bg-white border border-[#E5E8EB] rounded-[18px] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-[#191F28]">
            <Sparkles className="w-5 h-5 text-[#1219F7] shrink-0" />
            <h4 className="text-[15px] font-extrabold">AI 신규 아이콘 제작</h4>
          </div>
          <p className="text-[13px] text-[#6B7684] leading-relaxed">
            목록 외 추가 아이콘은 일관성을 위해 규격(24px, 1.5px, round)에 맞춰 AI로 제작합니다.
          </p>
        </div>
      </div>

      {/* Specifications Block */}
      <div className="bg-white border border-[#E5E8EB] rounded-[24px] p-6 md:p-8 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h3 className="text-[18px] font-extrabold text-[#191F28]">
            아이콘 제작 및 렌더링 규격
          </h3>
          <p className="text-[13px] text-[#6B7684]">
            디자이너 및 AI 에이전트가 아이콘을 추가할 때 반드시 준수해야 하는 파라미터입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">기본 사이즈</span>
            <div className="text-[20px] font-extrabold text-[#191F28]">24px</div>
            <p className="text-[11px] text-[#6B7684]">터치 타겟 및 네비게이션 전사 표준</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">보조 사이즈</span>
            <div className="text-[20px] font-extrabold text-[#191F28]">20px · 16px</div>
            <p className="text-[11px] text-[#6B7684]">인풋 내부(20px), 미니 뱃지(16px)</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">선 두께 (Stroke)</span>
            <div className="text-[20px] font-extrabold text-[#1219F7]">1.5px</div>
            <p className="text-[11px] text-[#6B7684]">24px 캔버스 기준 1.5px 선 굵기 통일</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">엔드포인트</span>
            <div className="text-[20px] font-extrabold text-[#1219F7]">Round</div>
            <p className="text-[11px] text-[#6B7684]">stroke-linecap / linejoin 둥근 처리</p>
          </div>
        </div>

        {/* AI Prompt Snippet Box */}
        <div className="bg-[#F9FAFB] border border-[#E5E8EB] rounded-[14px] p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1219F7]" />
              <span className="text-[13px] font-bold text-[#191F28]">
                AI 아이콘 제작 표준 프롬프트 가이드
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#1B64DA] bg-[#E8F3FF] px-2.5 py-0.5 rounded-full">
              표준 프롬프트 템플릿
            </span>
          </div>

          <p className="text-[12px] text-[#6B7684] leading-relaxed">
            Gemini, ChatGPT, Claude 등의 AI에게 아래 프롬프트를 복사하여 뒤에 원하는 아이콘(예: <em>"사다리차 아이콘", "포장이사 박스 아이콘", "세탁기 아이콘"</em>)을 요청하면, 100종 시스템 아이콘과 100% 동일한 선 두께(1.5px)와 둥근 끝점(round)의 단일 SVG 코드로 생성됩니다.
          </p>

          <code className="block text-[12px] font-mono text-[#191F28] bg-white p-3.5 rounded-[10px] border border-[#E5E8EB] overflow-x-auto select-all leading-relaxed">
            "Design a 24x24 SVG icon with a 1.5px stroke weight, round stroke-linecap, and round stroke-linejoin. Outline style only (fill=none), stroke=currentColor, minimalistic modern Korean product style. Target object: [원하는 아이콘 이름]"
          </code>
        </div>
      </div>

      {/* Interactive Icon Showcase Grid (100 Icons with Category Tabs & Instant Search) */}
      <div className="space-y-6">
        {/* Controls: Search, Category Filter, and Size Switcher */}
        <div className="bg-white border border-[#E5E8EB] rounded-[20px] p-4 space-y-4 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 bg-[#F2F4F6] p-1 rounded-[12px] overflow-x-auto scrollbar-none">
              {(['전체', '이사/청소 특화', '앱 필수 공통'] as const).map((cat) => {
                const count =
                  cat === '전체'
                    ? 100
                    : cat === '이사/청소 특화'
                    ? 30
                    : 70;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-[9px] text-[12px] font-bold transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-white text-[#191F28] shadow-2xs'
                        : 'text-[#6B7684] hover:text-[#191F28]'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Size Switcher */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <span className="text-[12px] text-[#8B95A1] font-medium hidden sm:inline">크기:</span>
              <div className="flex items-center gap-1 bg-[#F2F4F6] p-1 rounded-[12px] border border-[#E5E8EB]/50">
                {(['24', '20', '16'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`px-3 py-1 rounded-[8px] text-[12px] font-bold transition-all ${
                      activeSize === s
                        ? 'bg-white text-[#191F28] shadow-2xs'
                        : 'text-[#6B7684] hover:text-[#191F28]'
                    }`}
                  >
                    {s}px
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8B95A1] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="100종 아이콘 이름 또는 설명 검색 (예: 트럭, 주소, 달력, 설정, 알림, 청소 등)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F9FAFB] border border-[#E5E8EB] focus:border-[#3182F6] focus:bg-white rounded-[12px] pl-10 pr-10 py-2.5 text-[13px] text-[#191F28] placeholder-[#8B95A1] outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B95A1] hover:text-[#191F28] text-[12px]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between px-1 text-[13px] text-[#6B7684]">
          <div>
            검색 결과: <strong className="text-[#191F28]">{filteredIcons.length}개</strong>
            {searchQuery && <span className="text-[#8B95A1]"> ('{searchQuery}' 검색 중)</span>}
          </div>
          <span className="text-[12px] text-[#8B95A1]">
            카드 클릭 시 <strong>.{activeSize}px.svg</strong> 파일 자동 다운로드
          </span>
        </div>

        {/* Icon Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredIcons.map((item) => {
              const Icon = item.icon;
              const isDownloaded = downloadedName === item.name;
              return (
                <div
                  key={item.name}
                  onClick={(e) => downloadSvgFile(item.name, e)}
                  title={`${item.label} (${item.name}) SVG 다운로드`}
                  className="group p-4 bg-white border border-[#E5E8EB] rounded-[18px] flex flex-col items-center justify-center gap-2 hover:border-[#1219F7] hover:shadow-[0_10px_24px_rgba(18,25,247,0.08)] transition-all cursor-pointer relative select-none"
                >
                  {/* Category Tag on Top Right */}
                  <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                    item.category === '이사/청소 특화'
                      ? 'bg-[#E8F3FF] text-[#1B64DA]'
                      : 'bg-[#F2F4F6] text-[#8B95A1]'
                  }`}>
                    {item.category === '이사/청소 특화' ? '이사/청소' : '공통'}
                  </span>

                  {/* Visual SVG Icon */}
                  <div className="w-12 h-12 rounded-[12px] bg-[#FAFBFD] group-hover:bg-[#E8F3FF] flex items-center justify-center text-[#191F28] group-hover:text-[#1219F7] transition-colors mt-2">
                    <Icon
                      size={sizePixel}
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </div>

                  <div className="text-center w-full">
                    <div className="text-[12px] font-bold text-[#191F28] group-hover:text-[#1219F7] truncate">
                      {item.label}
                    </div>
                    <div className="text-[10px] font-mono text-[#8B95A1] truncate">
                      {item.name}
                    </div>
                  </div>

                  {/* Download notification overlay */}
                  {isDownloaded && (
                    <div className="absolute inset-0 bg-[#1219F7] text-white rounded-[18px] flex flex-col items-center justify-center gap-1 text-[11px] font-bold animate-fadeIn z-10 shadow-md">
                      <Download className="w-4 h-4 animate-bounce" />
                      <span>SVG 저장됨</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-[18px] border border-[#E5E8EB] p-12 text-center space-y-2">
            <Search className="w-8 h-8 text-[#8B95A1] mx-auto opacity-50" />
            <h4 className="text-[15px] font-bold text-[#191F28]">일치하는 아이콘이 없습니다</h4>
            <p className="text-[13px] text-[#6B7684]">
              다른 검색어를 입력하시거나 상단 표준 프롬프트 가이드를 통해 AI로 새로 생성해보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
