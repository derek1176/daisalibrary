import React, { useState, useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import {
  type LucideIcon,
  Check as CheckIcon,
  AirVent,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Armchair,
  ArrowDown,
  ArrowDownLeft,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUp,
  ArrowUpDown,
  ArrowUpRight,
  Award,
  BadgePercent,
  Ban,
  Bath,
  BatteryCharging,
  Bed,
  Bell,
  BellOff,
  BellRing,
  Blinds,
  Boxes,
  Brush,
  Bug,
  Building,
  Building2,
  Cable,
  Calendar,
  CalendarCheck,
  CalendarDays,
  Camera,
  Car,
  CheckCheck,
  CheckCircle,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  Circle,
  Clock,
  Coffee,
  Coins,
  Compass,
  Container,
  CookingPot,
  Copy,
  CornerDownLeft,
  CornerDownRight,
  CreditCard,
  DollarSign,
  DoorClosed,
  Download,
  Drill,
  Droplets,
  Edit,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Fan,
  File,
  FileCheck,
  FilePlus,
  FileSpreadsheet,
  FileText,
  Filter,
  Flame,
  Folder,
  FolderOpen,
  FolderPlus,
  Fuel,
  Globe,
  Hammer,
  HardHat,
  Headphones,
  Heart,
  HelpCircle,
  Home,
  Image,
  Info,
  Key,
  Lamp,
  Laptop,
  Layers,
  Link,
  Lock,
  LockKeyhole,
  LogOut,
  Mail,
  MailOpen,
  MapPin,
  Maximize,
  Menu,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Microwave,
  Minimize,
  Minus,
  Monitor,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Move,
  Navigation,
  Package,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  Paintbrush,
  Paperclip,
  Percent,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOff,
  PhoneOutgoing,
  Pipette,
  Plug,
  Plus,
  Printer,
  QrCode,
  Radio,
  Receipt,
  RefreshCcw,
  RefreshCw,
  Refrigerator,
  Repeat,
  RotateCcw,
  RotateCw,
  Router,
  Save,
  Scan,
  Scroll,
  Search,
  Send,
  Settings,
  Share,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  ShowerHead,
  SlidersHorizontal,
  Smartphone,
  Snowflake,
  Sofa,
  Sparkle,
  Sparkles,
  SprayCan,
  Square,
  Star,
  Sun,
  Tablet,
  Tag,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  ToggleLeft,
  ToggleRight,
  Trash,
  Trash2,
  Trees,
  Truck,
  Tv,
  Undo2,
  Unlink,
  Unlock,
  Upload,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Utensils,
  Video,
  Volume2,
  VolumeX,
  Wallet,
  Warehouse,
  WashingMachine,
  Wifi,
  Wind,
  Wrench,
  X,
  XCircle,
  XSquare,
  Zap
} from "lucide-react";


type CategoryType = "전체" | "이사·청소·홈케어" | "앱 필수 공통 컨트롤러";

interface IconMeta {
  name: string;
  label: string;
  icon: LucideIcon;
  category: "이사·청소·홈케어" | "앱 필수 공통 컨트롤러";
  desc: string;
}

const strokeOnlyIcons = new Set([
  "Search", "Menu", "SlidersHorizontal", "Filter", "ExternalLink", "Undo2", 
  "RotateCcw", "RotateCw", "RefreshCw", "RefreshCcw", "Link", "Unlink", 
  "Volume2", "VolumeX", "Wifi", "Navigation", "Compass", "Move", "Cable",
  "ToggleLeft", "ToggleRight", "Clock", "MoreHorizontal", "MoreVertical",
  "Paperclip", "Scan", "Undo", "CornerDownLeft", "CornerDownRight",
  "ChevronLeft", "ChevronRight", "ChevronUp", "ChevronDown",
  "ChevronsLeft", "ChevronsRight", "ChevronsUp", "ChevronsDown",
  "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
  "ArrowUpRight", "ArrowDownLeft", "ArrowLeftRight", "ArrowUpDown",
  "Plus", "Minus", "X", "Check", "CheckIcon"
]);

function buildSolidSvg(name: string, IconComponent: LucideIcon, size: number, cutoutColor: string = "#FAFBFD"): string {
  const raw = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { size, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
  );

  const match = raw.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/);
  if (!match) return raw;
  const svgAttrs = match[1];
  const innerHtml = match[2];

  const tagRegex = /<([a-z0-9]+)([^>]*?)(\/>|>(.*?)<\/\1>)/gi;
  const tags: { full: string; type: string }[] = [];
  let m;
  while ((m = tagRegex.exec(innerHtml)) !== null) {
    tags.push({ full: m[0], type: m[1] });
  }

  const isEnclosedShape = (t: { full: string; type: string }) => {
    if (strokeOnlyIcons.has(name)) return false;
    if (/[zZ]/.test(t.full)) return true;
    if (t.type === "rect" || t.type === "polygon") return true;
    if (t.type === "circle") {
      const rMatch = t.full.match(/r="([^"]*)"/);
      if (rMatch && parseFloat(rMatch[1]) >= 4.5) return true;
    }
    return false;
  };

  const hasEnclosure = tags.some(isEnclosedShape);

  if (!hasEnclosure) {
    return `<svg${svgAttrs.replace(/stroke-width="[^"]*"/, 'stroke-width="2.4"').replace(/fill="[^"]*"/, 'fill="none"')}>${innerHtml}</svg>`;
  }

  let firstEnclosedFound = false;
  const transformedTags = tags.map((t) => {
    if (!firstEnclosedFound && isEnclosedShape(t)) {
      firstEnclosedFound = true;
      let newTag = t.full;
      if (!newTag.includes("fill=")) {
        newTag = newTag.replace(`<${t.type}`, `<${t.type} fill="currentColor"`);
      } else {
        newTag = newTag.replace(/fill="[^"]*"/, 'fill="currentColor"');
      }
      return newTag;
    }

    if (firstEnclosedFound) {
      let newTag = t.full;
      if (t.type === "circle") {
        newTag = newTag.replace("<circle", `<circle fill="${cutoutColor}" stroke="${cutoutColor}" stroke-width="1.5"`);
      } else if (t.type === "line" || t.type === "polyline") {
        newTag = newTag.replace(`<${t.type}`, `<${t.type} stroke="${cutoutColor}" stroke-width="2.5" fill="none"`);
      } else if (t.type === "path") {
        newTag = newTag.replace("<path", `<path stroke="${cutoutColor}" stroke-width="2.5" fill="none"`);
      }
      return newTag;
    }

    return t.full;
  });

  return `<svg${svgAttrs.replace(/fill="[^"]*"/, 'fill="none"')}>${transformedTags.join("")}</svg>`;
}

export const IconSection: React.FC = () => {
  const [activeSize, setActiveSize] = useState<"24" | "20" | "16">("24");
  const [activeStyle, setActiveStyle] = useState<"outline" | "fill">("outline");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedName, setDownloadedName] = useState<string | null>(null);

  // 200 Official System Icons for Daisa (80 Homecare/Moving + 120 Core App)
  const systemIcons: IconMeta[] = useMemo(() => [
    // 1. 이사·청소·홈케어 (80종)
    { name: "Truck", label: "이사업체 / 용달차", icon: Truck, category: "이사·청소·홈케어", desc: "1톤/5톤 이사 트럭 및 화물 운송" },
    { name: "Package", label: "이사 짐 / 박스", icon: Package, category: "이사·청소·홈케어", desc: "포장 이사 및 개별 짐 박스" },
    { name: "Boxes", label: "다량 포장 박스", icon: Boxes, category: "이사·청소·홈케어", desc: "이사 전체 짐 적재 및 다량 박스" },
    { name: "PackageOpen", label: "짐 풀기 / 언패킹", icon: PackageOpen, category: "이사·청소·홈케어", desc: "이사 후 짐 정리 및 가구 배치" },
    { name: "PackageCheck", label: "짐 확인 완료", icon: PackageCheck, category: "이사·청소·홈케어", desc: "분실/파손 없는 이사 짐 인수인계" },
    { name: "PackagePlus", label: "짐 추가", icon: PackagePlus, category: "이사·청소·홈케어", desc: "이사 당일 추가 물품 접수" },
    { name: "PackageMinus", label: "짐 제외", icon: PackageMinus, category: "이사·청소·홈케어", desc: "불필요한 짐 제외 및 수량 조정" },
    { name: "PackageSearch", label: "물품 조회", icon: PackageSearch, category: "이사·청소·홈케어", desc: "보관 물품 및 짐 추적 확인" },
    { name: "Warehouse", label: "보관 이사 / 창고", icon: Warehouse, category: "이사·청소·홈케어", desc: "단기/장기 컨테이너 보관 이사" },
    { name: "Container", label: "컨테이너 보관", icon: Container, category: "이사·청소·홈케어", desc: "대용량 화물 보관 컨테이너" },
    { name: "Move", label: "운반 / 이동", icon: Move, category: "이사·청소·홈케어", desc: "가구 및 대형 가전 이동 조작" },
    { name: "Navigation", label: "이동 경로 / 배차", icon: Navigation, category: "이사·청소·홈케어", desc: "실시간 이사 차량 경로 안내" },
    { name: "Compass", label: "손 없는 날 / 방위", icon: Compass, category: "이사·청소·홈케어", desc: "길일 확인 및 이사 방위 안내" },
    { name: "MapPin", label: "출발지 / 도착지", icon: MapPin, category: "이사·청소·홈케어", desc: "이사 주소 검색 및 위치 핀" },
    { name: "Car", label: "주차 공간 / 차량", icon: Car, category: "이사·청소·홈케어", desc: "이사 당일 사다리차/트럭 주차 확보" },
    { name: "Building2", label: "아파트 / 오피스텔", icon: Building2, category: "이사·청소·홈케어", desc: "공동주택 및 고층 아파트 단지" },
    { name: "Building", label: "빌딩 / 상가 이사", icon: Building, category: "이사·청소·홈케어", desc: "사무실, 빌딩, 기업 이전" },
    { name: "Home", label: "원룸 / 단독 주택", icon: Home, category: "이사·청소·홈케어", desc: "원룸, 투룸, 단독주택 이사" },
    { name: "DoorClosed", label: "방문 / 현관문", icon: DoorClosed, category: "이사·청소·홈케어", desc: "방문 크기 및 도어락 출입구" },
    { name: "Layers", label: "층수 / 엘리베이터", icon: Layers, category: "이사·청소·홈케어", desc: "건물 층수 및 사다리차 진입" },
    { name: "Trees", label: "조경 / 마당 정원", icon: Trees, category: "이사·청소·홈케어", desc: "전원주택 및 외부 조경 환경" },
    { name: "Sun", label: "일조량 / 채광", icon: Sun, category: "이사·청소·홈케어", desc: "남향 채광 및 실내 환기 조건" },
    { name: "Moon", label: "야간 작업 / 심야", icon: Moon, category: "이사·청소·홈케어", desc: "야간 이사 및 심야 소음 주의" },
    { name: "Key", label: "열쇠 / 입주 키", icon: Key, category: "이사·청소·홈케어", desc: "신규 입주 열쇠 수령 및 반납" },
    { name: "LockKeyhole", label: "도어락 / 보안키", icon: LockKeyhole, category: "이사·청소·홈케어", desc: "디지털 도어락 설치 및 변경" },
    { name: "AirVent", label: "에어컨 / 환기구", icon: AirVent, category: "이사·청소·홈케어", desc: "시스템/벽걸이 에어컨 설치 및 청소" },
    { name: "Fan", label: "실외기 / 송풍팬", icon: Fan, category: "이사·청소·홈케어", desc: "에어컨 실외기 배관 및 송풍팬 케어" },
    { name: "Thermometer", label: "냉난방 온도 조절", icon: Thermometer, category: "이사·청소·홈케어", desc: "에어컨 냉매 가스 충전 점검" },
    { name: "Snowflake", label: "에어컨 냉방 / 쿨링", icon: Snowflake, category: "이사·청소·홈케어", desc: "에어컨 완전분해 살균 청소" },
    { name: "Flame", label: "보일러 / 가스레인지", icon: Flame, category: "이사·청소·홈케어", desc: "가스레인지 연결 및 난방 점검" },
    { name: "Sparkles", label: "입주 청소 / 클리닝", icon: Sparkles, category: "이사·청소·홈케어", desc: "입주/이사/거주 전문 종합 청소" },
    { name: "Sparkle", label: "특수 오염 케어", icon: Sparkle, category: "이사·청소·홈케어", desc: "줄눈, 상판 코팅, 곰팡이 특수 케어" },
    { name: "WashingMachine", label: "세탁기 / 건조기", icon: WashingMachine, category: "이사·청소·홈케어", desc: "통돌이/드럼 세탁기 분해 세척" },
    { name: "Refrigerator", label: "냉장고 분해 세척", icon: Refrigerator, category: "이사·청소·홈케어", desc: "양문형 냉장고 스팀 살균 청소" },
    { name: "Tv", label: "TV / 벽걸이 설치", icon: Tv, category: "이사·청소·홈케어", desc: "대형 TV 운송 및 무타공 벽걸이" },
    { name: "Microwave", label: "전자레인지 / 오븐", icon: Microwave, category: "이사·청소·홈케어", desc: "주방 소형 가전 청소 및 배치" },
    { name: "CookingPot", label: "주방 쿡탑 / 인덕션", icon: CookingPot, category: "이사·청소·홈케어", desc: "인덕션 설치 및 주방 기름때 세척" },
    { name: "Coffee", label: "정수기 / 커피머신", icon: Coffee, category: "이사·청소·홈케어", desc: "정수기 렌탈 설치 및 필터 교체" },
    { name: "Utensils", label: "식기세척기 / 싱크대", icon: Utensils, category: "이사·청소·홈케어", desc: "식기세척기 배관 연결 및 싱크대 케어" },
    { name: "Shirt", label: "의류 / 스타일러", icon: Shirt, category: "이사·청소·홈케어", desc: "의류 관리기 설치 및 침구 케어" },
    { name: "Armchair", label: "소파 / 1인용 안락의자", icon: Armchair, category: "이사·청소·홈케어", desc: "가죽/패브릭 소파 청소 및 운송" },
    { name: "Sofa", label: "거실 4인 소파", icon: Sofa, category: "이사·청소·홈케어", desc: "대형 모듈 소파 이동 및 배치" },
    { name: "Bed", label: "침대 / 매트리스", icon: Bed, category: "이사·청소·홈케어", desc: "매트리스 건식/습식 진드기 케어" },
    { name: "Lamp", label: "조명 / 스탠드 전등", icon: Lamp, category: "이사·청소·홈케어", desc: "LED 실내 조명 교체 및 인테리어" },
    { name: "Blinds", label: "커튼 / 블라인드", icon: Blinds, category: "이사·청소·홈케어", desc: "암막 커튼 맞춤 시공 및 레일 설치" },
    { name: "Bath", label: "욕실 / 화장실 청소", icon: Bath, category: "이사·청소·홈케어", desc: "욕조 물때 제거 및 바닥 타일 케어" },
    { name: "ShowerHead", label: "샤워기 / 비데 설치", icon: ShowerHead, category: "이사·청소·홈케어", desc: "샤워기 필터 및 비데 렌탈 설치" },
    { name: "Paintbrush", label: "페인트 / 도배 시공", icon: Paintbrush, category: "이사·청소·홈케어", desc: "실내 친환경 페인트 및 도배 장판" },
    { name: "Drill", label: "전동 드릴 / 타공", icon: Drill, category: "이사·청소·홈케어", desc: "벽면 타공 및 선반/액자 브라켓" },
    { name: "Hammer", label: "가구 조립 / 시공", icon: Hammer, category: "이사·청소·홈케어", desc: "이케아 등 조립식 가구 전문 조립" },
    { name: "Wrench", label: "배관 / 설비 수리", icon: Wrench, category: "이사·청소·홈케어", desc: "싱크대 배수구 및 수전 교체" },
    { name: "Bug", label: "해충 방제 / 소독", icon: Bug, category: "이사·청소·홈케어", desc: "바퀴벌레, 개미 등 방역 소독 서비스" },
    { name: "SprayCan", label: "소독약 / 방역 스프레이", icon: SprayCan, category: "이사·청소·홈케어", desc: "공간 분무 살균 및 살충 케어" },
    { name: "Pipette", label: "약품 코팅 / 줄눈", icon: Pipette, category: "이사·청소·홈케어", desc: "오염 방지 나노 코팅제 도포" },
    { name: "Droplets", label: "고압 스팀 물청소", icon: Droplets, category: "이사·청소·홈케어", desc: "고온 스팀 살균 및 찌든때 제거" },
    { name: "Wind", label: "피톤치드 / 새집증후군", icon: Wind, category: "이사·청소·홈케어", desc: "공기 정화 및 포름알데히드 제거" },
    { name: "Brush", label: "틈새 브러시 청소", icon: Brush, category: "이사·청소·홈케어", desc: "창틀, 베란다 배수구 솔 청소" },
    { name: "Trash2", label: "폐기물 / 스티커 처리", icon: Trash2, category: "이사·청소·홈케어", desc: "폐가구/폐가전 배출 대행" },
    { name: "Fuel", label: "추가 유류비 없음", icon: Fuel, category: "이사·청소·홈케어", desc: "표준 운송료 정찰제 적용" },
    { name: "Zap", label: "전기 / 누전 점검", icon: Zap, category: "이사·청소·홈케어", desc: "콘센트 전력 및 차단기 안전 점검" },
    { name: "Plug", label: "가전 전원 플러그", icon: Plug, category: "이사·청소·홈케어", desc: "대형 가전 안전 접지 플러그" },
    { name: "Cable", label: "케이블 / 배선 정리", icon: Cable, category: "이사·청소·홈케어", desc: "TV 셋톱박스 및 멀티탭 매립" },
    { name: "BatteryCharging", label: "배터리 충전 / 전동 장비", icon: BatteryCharging, category: "이사·청소·홈케어", desc: "사다리차 및 전동 리프트 장비" },
    { name: "Repeat", label: "정기 구독 / 렌탈 케어", icon: Repeat, category: "이사·청소·홈케어", desc: "매월 정기 가전 방문 클리닝" },
    { name: "RefreshCcw", label: "주기적 필터 교체", icon: RefreshCcw, category: "이사·청소·홈케어", desc: "공기청정기, 정수기 필터 교체" },
    { name: "Wifi", label: "인터넷 / 와이파이", icon: Wifi, category: "이사·청소·홈케어", desc: "기가 인터넷 신규 가입 및 이전 설치" },
    { name: "Router", label: "공유기 / 네트워크", icon: Router, category: "이사·청소·홈케어", desc: "무선 공유기 설치 및 음영지역 개선" },
    { name: "Globe", label: "초고속 통신망", icon: Globe, category: "이사·청소·홈케어", desc: "통신 3사 결합 혜택 및 현금 사은품" },
    { name: "Radio", label: "IPTV / 셋톱박스", icon: Radio, category: "이사·청소·홈케어", desc: "인터넷 TV 셋톱박스 연결 설치" },
    { name: "Headphones", label: "전문 상담원 연결", icon: Headphones, category: "이사·청소·홈케어", desc: "렌탈 및 통신 전문 상담 매니저" },
    { name: "FileText", label: "비교 견적서", icon: FileText, category: "이사·청소·홈케어", desc: "파트너사 실시간 맞춤 견적서" },
    { name: "Receipt", label: "정산 영수증 / 비용", icon: Receipt, category: "이사·청소·홈케어", desc: "부가세 포함 투명한 정산 영수증" },
    { name: "Scroll", label: "약관 및 보증서", icon: Scroll, category: "이사·청소·홈케어", desc: "시공 품질 보증서 및 표준 계약서" },
    { name: "BadgePercent", label: "프로모션 / 제휴 할인", icon: BadgePercent, category: "이사·청소·홈케어", desc: "다이사 회원 전용 특별 할인" },
    { name: "Tag", label: "정찰제 / 가격표", icon: Tag, category: "이사·청소·홈케어", desc: "항목별 투명한 기준 가격표" },
    { name: "ShieldCheck", label: "보증보험 가입 파트너", icon: ShieldCheck, category: "이사·청소·홈케어", desc: "적재물/영업배상책임보험 100% 가입" },
    { name: "ShieldAlert", label: "파손 주의 / 보상 규정", icon: ShieldAlert, category: "이사·청소·홈케어", desc: "운송 중 귀중품 사전 고지 확인" },
    { name: "Star", label: "고객 별점 / 평점", icon: Star, category: "이사·청소·홈케어", desc: "실제 이용 고객 100% 검증 평점" },
    { name: "Award", label: "명예의 전당 베스트 파트너", icon: Award, category: "이사·청소·홈케어", desc: "고객 만족도 최우수 업체 뱃지" },
    { name: "HardHat", label: "안전 시공 / 전문가", icon: HardHat, category: "이사·청소·홈케어", desc: "전문 기술 자격 보유 베테랑 기사님" },
    // 2. 앱 필수 공통 컨트롤러 (120종)
    { name: "Menu", label: "전체 메뉴", icon: Menu, category: "앱 필수 공통 컨트롤러", desc: "햄버거 전체 서비스 메뉴" },
    { name: "User", label: "내 정보", icon: User, category: "앱 필수 공통 컨트롤러", desc: "마이페이지 및 내 계정 정보" },
    { name: "Users", label: "팀 / 다중 사용자", icon: Users, category: "앱 필수 공통 컨트롤러", desc: "팀 작업자 및 다중 사용자" },
    { name: "UserCheck", label: "사용자 인증 완료", icon: UserCheck, category: "앱 필수 공통 컨트롤러", desc: "휴대폰 본인 인증 성공" },
    { name: "UserPlus", label: "회원가입 / 팀원 초대", icon: UserPlus, category: "앱 필수 공통 컨트롤러", desc: "신규 고객 가입 및 팀원 초대" },
    { name: "UserMinus", label: "회원 탈퇴 / 팀원 제외", icon: UserMinus, category: "앱 필수 공통 컨트롤러", desc: "계정 삭제 및 팀원 연결 해제" },
    { name: "UserX", label: "차단 / 접근 거부", icon: UserX, category: "앱 필수 공통 컨트롤러", desc: "악성 사용자 차단" },
    { name: "Bell", label: "알림", icon: Bell, category: "앱 필수 공통 컨트롤러", desc: "견적 도착 및 중요 알림" },
    { name: "BellOff", label: "알림 끄기", icon: BellOff, category: "앱 필수 공통 컨트롤러", desc: "푸시 알림 방해 금지 모드" },
    { name: "BellRing", label: "새 알림 도착", icon: BellRing, category: "앱 필수 공통 컨트롤러", desc: "미확인 새 알림 배지 상태" },
    { name: "Search", label: "검색", icon: Search, category: "앱 필수 공통 컨트롤러", desc: "주소, 업체명 검색" },
    { name: "Filter", label: "간편 필터", icon: Filter, category: "앱 필수 공통 컨트롤러", desc: "리스트 조건 필터링" },
    { name: "SlidersHorizontal", label: "상세 조건 필터", icon: SlidersHorizontal, category: "앱 필수 공통 컨트롤러", desc: "세부 옵션 및 범위 슬라이더" },
    { name: "Settings", label: "환경설정", icon: Settings, category: "앱 필수 공통 컨트롤러", desc: "앱 환경설정 및 버전 정보" },
    { name: "LogOut", label: "로그아웃", icon: LogOut, category: "앱 필수 공통 컨트롤러", desc: "계정 로그아웃 및 세션 종료" },
    { name: "ChevronLeft", label: "이전 단계", icon: ChevronLeft, category: "앱 필수 공통 컨트롤러", desc: "스텝 뒤로가기" },
    { name: "ChevronRight", label: "다음 / 상세 이동", icon: ChevronRight, category: "앱 필수 공통 컨트롤러", desc: "다음 스텝 및 목록 상세 이동" },
    { name: "ChevronUp", label: "위로 접기", icon: ChevronUp, category: "앱 필수 공통 컨트롤러", desc: "아코디언 및 드롭다운 접기" },
    { name: "ChevronDown", label: "아래로 펼치기", icon: ChevronDown, category: "앱 필수 공통 컨트롤러", desc: "아코디언 및 옵션 펼치기" },
    { name: "ChevronsLeft", label: "처음 페이지로", icon: ChevronsLeft, category: "앱 필수 공통 컨트롤러", desc: "페이징 처음으로 이동" },
    { name: "ChevronsRight", label: "마지막 페이지로", icon: ChevronsRight, category: "앱 필수 공통 컨트롤러", desc: "페이징 끝으로 이동" },
    { name: "ChevronsUp", label: "맨 위로 접기", icon: ChevronsUp, category: "앱 필수 공통 컨트롤러", desc: "전체 목록 접기" },
    { name: "ChevronsDown", label: "전체 펼치기", icon: ChevronsDown, category: "앱 필수 공통 컨트롤러", desc: "전체 목록 일괄 펼치기" },
    { name: "ArrowLeft", label: "뒤로가기 화살표", icon: ArrowLeft, category: "앱 필수 공통 컨트롤러", desc: "헤더 뒤로가기 화살표" },
    { name: "ArrowRight", label: "계속하기 / 진행", icon: ArrowRight, category: "앱 필수 공통 컨트롤러", desc: "버튼 우측 액션 진행" },
    { name: "ArrowUp", label: "맨 위로 스크롤", icon: ArrowUp, category: "앱 필수 공통 컨트롤러", desc: "화면 맨 위로 스크롤" },
    { name: "ArrowDown", label: "아래로 스크롤", icon: ArrowDown, category: "앱 필수 공통 컨트롤러", desc: "하단 섹션 스크롤 이동" },
    { name: "ArrowUpRight", label: "새 창 열기 화살표", icon: ArrowUpRight, category: "앱 필수 공통 컨트롤러", desc: "외부 링크 및 상세보기" },
    { name: "ArrowDownLeft", label: "수신 / 다운로드 방향", icon: ArrowDownLeft, category: "앱 필수 공통 컨트롤러", desc: "데이터 수신 인디케이터" },
    { name: "ArrowLeftRight", label: "양방향 전환", icon: ArrowLeftRight, category: "앱 필수 공통 컨트롤러", desc: "출발지/도착지 위치 교환" },
    { name: "ArrowUpDown", label: "정렬 순서 변경", icon: ArrowUpDown, category: "앱 필수 공통 컨트롤러", desc: "오름차순/내림차순 정렬" },
    { name: "ExternalLink", label: "외부 링크", icon: ExternalLink, category: "앱 필수 공통 컨트롤러", desc: "약관 및 외부 웹사이트 새창" },
    { name: "CornerDownRight", label: "답글 / 하위 항목", icon: CornerDownRight, category: "앱 필수 공통 컨트롤러", desc: "문의 답변 인덴트" },
    { name: "CornerDownLeft", label: "엔터 / 줄바꿈", icon: CornerDownLeft, category: "앱 필수 공통 컨트롤러", desc: "입력 완료 및 줄바꿈" },
    { name: "Undo2", label: "실행 취소", icon: Undo2, category: "앱 필수 공통 컨트롤러", desc: "이전 작업 되돌리기" },
    { name: "Plus", label: "항목 추가", icon: Plus, category: "앱 필수 공통 컨트롤러", desc: "새 항목 추가 및 옵션 확장" },
    { name: "Minus", label: "항목 감소", icon: Minus, category: "앱 필수 공통 컨트롤러", desc: "수량 축소 및 항목 접기" },
    { name: "X", label: "닫기 / 입력 지우기", icon: X, category: "앱 필수 공통 컨트롤러", desc: "모달 닫기 및 텍스트 삭제" },
    { name: "Check", label: "확인 / 체크", icon: CheckIcon, category: "앱 필수 공통 컨트롤러", desc: "단일 선택 및 체크 표시" },
    { name: "CheckCircle2", label: "완료 상태 (원형)", icon: CheckCircle2, category: "앱 필수 공통 컨트롤러", desc: "성공 피드백 및 신청 완료" },
    { name: "CheckCircle", label: "인증 완료 상태", icon: CheckCircle, category: "앱 필수 공통 컨트롤러", desc: "정상 승인 완료 표시" },
    { name: "CheckSquare", label: "사각 체크박스 선택", icon: CheckSquare, category: "앱 필수 공통 컨트롤러", desc: "다중 선택 체크박스" },
    { name: "XCircle", label: "오류 / 취소 (원형)", icon: XCircle, category: "앱 필수 공통 컨트롤러", desc: "취소 완료 및 처리 실패" },
    { name: "XSquare", label: "사각 체크박스 거부", icon: XSquare, category: "앱 필수 공통 컨트롤러", desc: "체크박스 미동의/해제" },
    { name: "Edit3", label: "내용 수정", icon: Edit3, category: "앱 필수 공통 컨트롤러", desc: "입력 정보 및 텍스트 수정" },
    { name: "Edit", label: "작성하기", icon: Edit, category: "앱 필수 공통 컨트롤러", desc: "견적서 및 후기 작성" },
    { name: "Copy", label: "복사하기", icon: Copy, category: "앱 필수 공통 컨트롤러", desc: "클립보드 복사 액션" },
    { name: "Share2", label: "공유하기 (노드형)", icon: Share2, category: "앱 필수 공통 컨트롤러", desc: "SNS 및 링크 공유" },
    { name: "Share", label: "내보내기", icon: Share, category: "앱 필수 공통 컨트롤러", desc: "문서 및 견적 내보내기" },
    { name: "Download", label: "다운로드", icon: Download, category: "앱 필수 공통 컨트롤러", desc: "파일 및 명세서 저장" },
    { name: "Upload", label: "업로드", icon: Upload, category: "앱 필수 공통 컨트롤러", desc: "사진 및 문서 파일 첨부" },
    { name: "RefreshCw", label: "새로고침 / 재시도", icon: RefreshCw, category: "앱 필수 공통 컨트롤러", desc: "실시간 견적 갱신" },
    { name: "RotateCcw", label: "반시계방향 초기화", icon: RotateCcw, category: "앱 필수 공통 컨트롤러", desc: "필터 조건 전체 초기화" },
    { name: "RotateCw", label: "시계방향 회전", icon: RotateCw, category: "앱 필수 공통 컨트롤러", desc: "이미지 방향 회전" },
    { name: "Save", label: "임시 저장", icon: Save, category: "앱 필수 공통 컨트롤러", desc: "작성 중인 신청서 저장" },
    { name: "Trash", label: "삭제하기", icon: Trash, category: "앱 필수 공통 컨트롤러", desc: "항목 및 데이터 영구 삭제" },
    { name: "MoreHorizontal", label: "가로 더보기", icon: MoreHorizontal, category: "앱 필수 공통 컨트롤러", desc: "카드 서브 메뉴 펼치기" },
    { name: "MoreVertical", label: "세로 더보기", icon: MoreVertical, category: "앱 필수 공통 컨트롤러", desc: "헤더 컨텍스트 메뉴" },
    { name: "Maximize", label: "전체화면 확대", icon: Maximize, category: "앱 필수 공통 컨트롤러", desc: "사진 및 모달 전폭 확대" },
    { name: "Minimize", label: "원래 크기 축소", icon: Minimize, category: "앱 필수 공통 컨트롤러", desc: "전체화면 닫기 및 축소" },
    { name: "Phone", label: "전화 상담", icon: Phone, category: "앱 필수 공통 컨트롤러", desc: "파트너 기사님 전화 연결" },
    { name: "PhoneCall", label: "통화 연결 중", icon: PhoneCall, category: "앱 필수 공통 컨트롤러", desc: "실시간 통화 발신 상태" },
    { name: "PhoneIncoming", label: "수신 전화", icon: PhoneIncoming, category: "앱 필수 공통 컨트롤러", desc: "파트너 상담 전화 수신" },
    { name: "PhoneOutgoing", label: "발신 전화", icon: PhoneOutgoing, category: "앱 필수 공통 컨트롤러", desc: "고객센터 통화 요청" },
    { name: "PhoneOff", label: "통화 종료", icon: PhoneOff, category: "앱 필수 공통 컨트롤러", desc: "통화 종료 및 거절" },
    { name: "MessageCircle", label: "1:1 채팅 문의", icon: MessageCircle, category: "앱 필수 공통 컨트롤러", desc: "실시간 알림톡 및 채팅" },
    { name: "MessageSquare", label: "댓글 / 메시지", icon: MessageSquare, category: "앱 필수 공통 컨트롤러", desc: "요청사항 메모 및 리뷰 댓글" },
    { name: "MessagesSquare", label: "대화 목록", icon: MessagesSquare, category: "앱 필수 공통 컨트롤러", desc: "상담 내역 전체 대화 목록" },
    { name: "Mail", label: "이메일 문의", icon: Mail, category: "앱 필수 공통 컨트롤러", desc: "이메일 견적서 발송" },
    { name: "MailOpen", label: "읽은 이메일", icon: MailOpen, category: "앱 필수 공통 컨트롤러", desc: "수신 확인된 이메일" },
    { name: "Send", label: "메시지 전송", icon: Send, category: "앱 필수 공통 컨트롤러", desc: "문의 메시지 전송하기" },
    { name: "Heart", label: "찜하기 / 단골", icon: Heart, category: "앱 필수 공통 컨트롤러", desc: "관심 업체 즐겨찾기 저장" },
    { name: "ThumbsUp", label: "추천 / 만족", icon: ThumbsUp, category: "앱 필수 공통 컨트롤러", desc: "기사님 서비스 만족 추천" },
    { name: "ThumbsDown", label: "비추천 / 불만족", icon: ThumbsDown, category: "앱 필수 공통 컨트롤러", desc: "서비스 피드백 개선 접수" },
    { name: "AlertCircle", label: "경고 / 오류", icon: AlertCircle, category: "앱 필수 공통 컨트롤러", desc: "필수 입력 누락 에러" },
    { name: "AlertTriangle", label: "주의 안내", icon: AlertTriangle, category: "앱 필수 공통 컨트롤러", desc: "귀중품 사전 보관 주의" },
    { name: "AlertOctagon", label: "위험 / 중단", icon: AlertOctagon, category: "앱 필수 공통 컨트롤러", desc: "작업 취소 및 중대 오류" },
    { name: "Info", label: "정보 안내", icon: Info, category: "앱 필수 공통 컨트롤러", desc: "서비스 규정 및 이용 팁" },
    { name: "HelpCircle", label: "도움말 / FAQ", icon: HelpCircle, category: "앱 필수 공통 컨트롤러", desc: "자주 묻는 질문 안내" },
    { name: "CheckCheck", label: "확인 완료 / 읽음", icon: CheckCheck, category: "앱 필수 공통 컨트롤러", desc: "파트너 확인 완료 상태" },
    { name: "Image", label: "사진 첨부", icon: Image, category: "앱 필수 공통 컨트롤러", desc: "방 및 짐 사진 선택" },
    { name: "Camera", label: "직접 촬영", icon: Camera, category: "앱 필수 공통 컨트롤러", desc: "가구 및 주택 전경 촬영" },
    { name: "Video", label: "동영상 첨부", icon: Video, category: "앱 필수 공통 컨트롤러", desc: "이사 현장 동영상 첨부" },
    { name: "Folder", label: "문서함 / 폴더", icon: Folder, category: "앱 필수 공통 컨트롤러", desc: "보관 견적서 영수증 폴더" },
    { name: "FolderOpen", label: "열린 폴더", icon: FolderOpen, category: "앱 필수 공통 컨트롤러", desc: "선택된 문서함 폴더" },
    { name: "FolderPlus", label: "새 폴더 생성", icon: FolderPlus, category: "앱 필수 공통 컨트롤러", desc: "신규 견적 보관함 만들기" },
    { name: "Paperclip", label: "파일 첨부", icon: Paperclip, category: "앱 필수 공통 컨트롤러", desc: "계약서 서류 파일 첨부" },
    { name: "File", label: "일반 문서", icon: File, category: "앱 필수 공통 컨트롤러", desc: "표준 문서 파일 포맷" },
    { name: "FilePlus", label: "새 문서 추가", icon: FilePlus, category: "앱 필수 공통 컨트롤러", desc: "신규 요청서 양식 추가" },
    { name: "FileCheck", label: "검증된 서류", icon: FileCheck, category: "앱 필수 공통 컨트롤러", desc: "사업자등록증 보험 증권" },
    { name: "FileSpreadsheet", label: "엑셀 명세서", icon: FileSpreadsheet, category: "앱 필수 공통 컨트롤러", desc: "엑셀 데이터 견적 파일" },
    { name: "Printer", label: "인쇄하기", icon: Printer, category: "앱 필수 공통 컨트롤러", desc: "견적서 출력 및 PDF 저장" },
    { name: "QrCode", label: "QR 코드", icon: QrCode, category: "앱 필수 공통 컨트롤러", desc: "현장 방문 확인 QR 스캔" },
    { name: "Scan", label: "바코드 / 스캔", icon: Scan, category: "앱 필수 공통 컨트롤러", desc: "문서 자동 인식 스캐너" },
    { name: "Link", label: "링크 복사", icon: Link, category: "앱 필수 공통 컨트롤러", desc: "URL 링크 연결 및 복사" },
    { name: "Unlink", label: "링크 해제", icon: Unlink, category: "앱 필수 공통 컨트롤러", desc: "계정 연동 및 링크 해제" },
    { name: "Eye", label: "비밀번호 보기", icon: Eye, category: "앱 필수 공통 컨트롤러", desc: "숨김 텍스트 표시" },
    { name: "EyeOff", label: "비밀번호 숨김", icon: EyeOff, category: "앱 필수 공통 컨트롤러", desc: "개인정보 마스킹" },
    { name: "Volume2", label: "알림 소리 켜짐", icon: Volume2, category: "앱 필수 공통 컨트롤러", desc: "안내 음성 및 사운드" },
    { name: "VolumeX", label: "알림 소리 음소거", icon: VolumeX, category: "앱 필수 공통 컨트롤러", desc: "알림 무음 모드" },
    { name: "Lock", label: "보안 잠금", icon: Lock, category: "앱 필수 공통 컨트롤러", desc: "개인 안심번호 잠금" },
    { name: "Unlock", label: "잠금 해제", icon: Unlock, category: "앱 필수 공통 컨트롤러", desc: "인증 성공 잠금 해제" },
    { name: "Shield", label: "개인정보 보호", icon: Shield, category: "앱 필수 공통 컨트롤러", desc: "안심번호 050 보안 정책" },
    { name: "Smartphone", label: "모바일 디바이스", icon: Smartphone, category: "앱 필수 공통 컨트롤러", desc: "모바일 360px 및 전용 앱" },
    { name: "Tablet", label: "태블릿 디바이스", icon: Tablet, category: "앱 필수 공통 컨트롤러", desc: "태블릿 반응형 뷰포트" },
    { name: "Monitor", label: "PC 데스크톱", icon: Monitor, category: "앱 필수 공통 컨트롤러", desc: "웹 1200px 및 파트너 웹 콘솔" },
    { name: "Laptop", label: "노트북 화면", icon: Laptop, category: "앱 필수 공통 컨트롤러", desc: "노트북 데스크톱 뷰포트" },
    { name: "CreditCard", label: "카드 결제", icon: CreditCard, category: "앱 필수 공통 컨트롤러", desc: "계약금 카드 결제" },
    { name: "Wallet", label: "계좌 이체 / 지갑", icon: Wallet, category: "앱 필수 공통 컨트롤러", desc: "무통장 입금 및 전자 영수증" },
    { name: "Coins", label: "포인트 / 할인", icon: Coins, category: "앱 필수 공통 컨트롤러", desc: "이사 지원금 및 할인 혜택" },
    { name: "DollarSign", label: "금액 / 예산", icon: DollarSign, category: "앱 필수 공통 컨트롤러", desc: "예산 범위 및 통화 단위" },
    { name: "Percent", label: "할인율 / 수수료", icon: Percent, category: "앱 필수 공통 컨트롤러", desc: "할인 프로모션 백분율" },
    { name: "ToggleLeft", label: "토글 꺼짐", icon: ToggleLeft, category: "앱 필수 공통 컨트롤러", desc: "옵션 미선택 비활성 상태" },
    { name: "ToggleRight", label: "토글 켜짐", icon: ToggleRight, category: "앱 필수 공통 컨트롤러", desc: "옵션 적용 활성화 상태" },
    { name: "Circle", label: "라디오 미선택", icon: Circle, category: "앱 필수 공통 컨트롤러", desc: "단일 선택 라디오 버튼" },
    { name: "Square", label: "체크박스 미선택", icon: Square, category: "앱 필수 공통 컨트롤러", desc: "다중 선택 기본 체크박스" },
    { name: "Clock", label: "시간 / 일정", icon: Clock, category: "앱 필수 공통 컨트롤러", desc: "희망 방문 및 작업 시간" },
    { name: "Calendar", label: "달력 / 날짜", icon: Calendar, category: "앱 필수 공통 컨트롤러", desc: "이사 날짜 및 일정 선택" },
    { name: "CalendarCheck", label: "예약 확정 날짜", icon: CalendarCheck, category: "앱 필수 공통 컨트롤러", desc: "방문 견적 확정 일정" },
    { name: "CalendarDays", label: "월간 달력 뷰", icon: CalendarDays, category: "앱 필수 공통 컨트롤러", desc: "손 없는 날 월간 달력" }
  ], []);

  const sizePixel = parseInt(activeSize, 10);

  const filteredIcons = useMemo(() => {
    return systemIcons.filter((item) => {
      const matchCategory =
        selectedCategory === "전체" || item.category === selectedCategory;
      const matchSearch =
        searchQuery === "" ||
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [systemIcons, selectedCategory, searchQuery]);

  const downloadSvgFile = (name: string, IconComponent: LucideIcon) => {
    let svgString = activeStyle === "fill"
      ? buildSolidSvg(name, IconComponent, sizePixel, "#FFFFFF")
      : ReactDOMServer.renderToStaticMarkup(
          React.createElement(IconComponent, { size: sizePixel, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
        );

    if (!svgString.includes('xmlns=')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    svgString = svgString
      .replace(/width="[^"]*"/, `width="${sizePixel}"`)
      .replace(/height="[^"]*"/, `height="${sizePixel}"`);

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `daisa-icon-${name.toLowerCase()}-${sizePixel}px-${activeStyle}.svg`;
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
          아이콘 (Icons) · 공식 200종
        </h2>
        <p className="text-[15px] text-[#4E5968] mt-2 leading-relaxed max-w-2xl">
          다이사(da24) 서비스의 <strong>공식 시스템 아이콘 200종 (선형 Outline & 면형 Fill 전수 지원)</strong>입니다. 이사·가전·청소·인터넷 80종과 앱 필수 공통 컨트롤러 120종으로 구성되며, 이모지 사용을 엄격히 금지합니다. 아이콘 카드를 클릭하면 <strong>.{activeSize}px-{activeStyle}.svg 파일로 즉시 다운로드</strong>됩니다.
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
            <h4 className="text-[15px] font-extrabold">선형 & 면형 200종 완비</h4>
          </div>
          <p className="text-[13px] text-[#1B64DA] leading-relaxed">
            이사·가전 80종 및 컨트롤러 120종 전체에 Outline과 Fill 2가지 스타일을 완벽 지원합니다.
          </p>
        </div>

        {/* Rule 3: AI Creation */}
        <div className="p-5 bg-white border border-[#E5E8EB] rounded-[18px] space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-[#191F28]">
            <Sparkles className="w-5 h-5 text-[#1219F7] shrink-0" />
            <h4 className="text-[15px] font-extrabold">AI 신규 아이콘 제작</h4>
          </div>
          <p className="text-[13px] text-[#6B7684] leading-relaxed">
            목록 외 추가 아이콘은 일관성을 위해 표준 규격(24px, 1.5px, round)에 맞춰 AI로 제작합니다.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">스타일 규격</span>
            <div className="text-[18px] font-extrabold text-[#1219F7]">선형 & 면형</div>
            <p className="text-[11px] text-[#6B7684]">Outline(기본) · Fill(활성/강조)</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">기본 사이즈</span>
            <div className="text-[18px] font-extrabold text-[#191F28]">24px</div>
            <p className="text-[11px] text-[#6B7684]">터치 타겟 및 네비게이션 전사 표준</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">보조 사이즈</span>
            <div className="text-[18px] font-extrabold text-[#191F28]">20px · 16px</div>
            <p className="text-[11px] text-[#6B7684]">인풋 내부(20px), 미니 뱃지(16px)</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">선 두께 (Stroke)</span>
            <div className="text-[18px] font-extrabold text-[#191F28]">1.5px</div>
            <p className="text-[11px] text-[#6B7684]">24px 캔버스 기준 1.5px 선 굵기 통일</p>
          </div>

          <div className="p-4 bg-[#FAFBFD] border border-[#E5E8EB] rounded-[14px] space-y-1">
            <span className="text-[11px] font-bold text-[#8B95A1]">엔드포인트 (Cap/Join)</span>
            <div className="text-[18px] font-extrabold text-[#191F28]">Round</div>
            <p className="text-[11px] text-[#6B7684]">부드러운 곡선 친화적 라운드 마감</p>
          </div>
        </div>

        {/* AI Icon Standard Prompt */}
        <div className="bg-[#FAFBFD] border border-[#E5E8EB] rounded-[16px] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1219F7]" />
              <span className="text-[13px] font-bold text-[#191F28]">
                AI 아이콘 제작 표준 프롬프트 가이드 (선형 & 면형)
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#1B64DA] bg-[#E8F3FF] px-2.5 py-0.5 rounded-full">
              프롬프트 템플릿
            </span>
          </div>

          <p className="text-[12px] text-[#6B7684] leading-relaxed">
            Gemini, ChatGPT, Claude 등 AI에게 아래 프롬프트를 복사하여 요청하면 200종 시스템 아이콘과 동일한 규격의 단일 SVG 코드로 생성됩니다.
          </p>

          <div className="space-y-2.5">
            <div>
              <span className="text-[11px] font-bold text-[#191F28] mb-1 block">1. 선형 (Outline) 프롬프트</span>
              <code className="block text-[11px] font-mono text-[#191F28] bg-white p-3 rounded-[10px] border border-[#E5E8EB] overflow-x-auto select-all leading-relaxed">
                &quot;Design a 24x24 SVG icon with a 1.5px stroke weight, round stroke-linecap, and round stroke-linejoin. Outline style only (fill=none), stroke=currentColor, minimalistic modern Korean product style. Target object: [원하는 아이콘 이름]&quot;
              </code>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#191F28] mb-1 block">2. 면형 (Fill) 프롬프트</span>
              <code className="block text-[11px] font-mono text-[#191F28] bg-white p-3 rounded-[10px] border border-[#E5E8EB] overflow-x-auto select-all leading-relaxed">
                &quot;Design a 24x24 SVG icon in solid fill style (fill=currentColor, stroke=currentColor, stroke-width=1.5, stroke-linecap=round, stroke-linejoin=round), minimalistic modern Korean product style. Target object: [원하는 아이콘 이름]&quot;
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Icon Showcase Grid (200 Icons with Category Tabs & Instant Search) */}
      <div className="space-y-6">
        {/* Controls: Search, Category Filter, Style Switcher, and Size Switcher */}
        <div className="bg-white border border-[#E5E8EB] rounded-[20px] p-4 space-y-4 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 bg-[#F2F4F6] p-1 rounded-[12px] overflow-x-auto scrollbar-none">
              {(["전체", "이사·청소·홈케어", "앱 필수 공통 컨트롤러"] as const).map((cat) => {
                const count =
                  cat === "전체"
                    ? 200
                    : cat === "이사·청소·홈케어"
                    ? 80
                    : 120;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-[9px] text-[12px] font-bold transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-white text-[#191F28] shadow-2xs"
                        : "text-[#6B7684] hover:text-[#191F28]"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Switchers: Style & Size */}
            <div className="flex items-center gap-2 self-end lg:self-auto flex-wrap">
              {/* Style Switcher: Outline vs Fill */}
              <div className="flex items-center gap-1 bg-[#F2F4F6] p-1 rounded-[12px] border border-[#E5E8EB]/50">
                <button
                  onClick={() => setActiveStyle("outline")}
                  className={`px-3 py-1 rounded-[8px] text-[12px] font-bold transition-all ${
                    activeStyle === "outline"
                      ? "bg-white text-[#191F28] shadow-2xs"
                      : "text-[#6B7684] hover:text-[#191F28]"
                  }`}
                >
                  선형 (Outline)
                </button>
                <button
                  onClick={() => setActiveStyle("fill")}
                  className={`px-3 py-1 rounded-[8px] text-[12px] font-bold transition-all ${
                    activeStyle === "fill"
                      ? "bg-white text-[#191F28] shadow-2xs"
                      : "text-[#6B7684] hover:text-[#191F28]"
                  }`}
                >
                  면형 (Fill)
                </button>
              </div>

              {/* Size Switcher */}
              <div className="flex items-center gap-1 bg-[#F2F4F6] p-1 rounded-[12px] border border-[#E5E8EB]/50">
                {(["24", "20", "16"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`px-2.5 py-1 rounded-[8px] text-[12px] font-bold transition-all ${
                      activeSize === s
                        ? "bg-white text-[#191F28] shadow-2xs"
                        : "text-[#6B7684] hover:text-[#191F28]"
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
              placeholder="200종 아이콘 이름 또는 설명 검색 (예: 트럭, 에어컨, 인터넷, 정수기, 소파, 청소, 달력 등)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F9FAFB] border border-[#E5E8EB] focus:border-[#3182F6] focus:bg-white rounded-[12px] pl-10 pr-10 py-2.5 text-[13px] text-[#191F28] placeholder-[#8B95A1] outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
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
            {searchQuery && <span className="text-[#8B95A1]"> (&apos;{searchQuery}&apos; 검색 중)</span>}
          </div>
          <span className="text-[12px] text-[#8B95A1]">
            카드 클릭 시 <strong>.{activeSize}px-{activeStyle}.svg</strong> 파일 자동 다운로드
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
                  key={`${item.category}-${item.name}`}
                  onClick={() => downloadSvgFile(item.name, item.icon)}
                  title={`${item.label} (${item.name}) SVG 다운로드`}
                  className="group p-4 bg-white border border-[#E5E8EB] rounded-[18px] flex flex-col items-center justify-center gap-2 hover:border-[#1219F7] hover:shadow-[0_10px_24px_rgba(18,25,247,0.08)] transition-all cursor-pointer relative select-none"
                >
                  {/* Category Tag on Top Right */}
                  <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    item.category === "이사·청소·홈케어"
                      ? "bg-[#E8F3FF] text-[#1B64DA]"
                      : "bg-[#F2F4F6] text-[#8B95A1]"
                  }`}>
                    {item.category === "이사·청소·홈케어" ? "이사/홈케어" : "공통"}
                  </span>

                  {/* Visual SVG Icon (Outline or Smart Solid Cutout Fill) */}
                  <div
                    className="w-12 h-12 rounded-[12px] bg-[#FAFBFD] group-hover:bg-[#E8F3FF] flex items-center justify-center text-[#191F28] group-hover:text-[#1219F7] transition-colors mt-2"
                    dangerouslySetInnerHTML={{
                      __html: activeStyle === "fill"
                        ? buildSolidSvg(item.name, Icon, sizePixel, "#FAFBFD")
                        : ReactDOMServer.renderToStaticMarkup(
                            React.createElement(Icon, { size: sizePixel, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })
                          )
                    }}
                  />

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
                      <span>{activeStyle.toUpperCase()} SVG 저장</span>
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
