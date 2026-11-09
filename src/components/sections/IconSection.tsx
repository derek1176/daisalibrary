import React, { useState, useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import JSZip from "jszip";
import {
  type LucideIcon,
  Activity,
  AirVent,
  AlarmClock,
  AlertCircle,
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
  AtSign,
  Award,
  Badge,
  BadgeCheck,
  BadgePercent,
  Ban,
  Banknote,
  Barcode,
  Bath,
  Battery,
  BatteryCharging,
  Bed,
  Bell,
  BellRing,
  Blinds,
  Bluetooth,
  Bookmark,
  BookmarkCheck,
  Boxes,
  Brush,
  Bug,
  Building,
  Building2,
  Cable,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  Camera,
  Car,
  Cast,
  Check,
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
  CircleDollarSign,
  CircleDot,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  Clock,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock6,
  Clock8,
  Code,
  Coins,
  Columns,
  Compass,
  Container,
  Copy,
  CopyCheck,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreditCard,
  Crosshair,
  Database,
  DoorOpen,
  Download,
  DownloadCloud,
  Droplets,
  Edit,
  Edit2,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Fan,
  File,
  FileCheck,
  FileDown,
  FileMinus,
  FilePlus,
  FileQuestion,
  FileSearch,
  FileSignature,
  FileSpreadsheet,
  FileText,
  Files,
  Filter,
  Flag,
  Flame,
  Folder,
  FolderArchive,
  FolderCheck,
  FolderOpen,
  FolderPlus,
  Footprints,
  Forklift,
  Fuel,
  Gauge,
  Grid,
  GripHorizontal,
  GripVertical,
  Hammer,
  HardDrive,
  Hash,
  Headphones,
  Headset,
  Heart,
  HeartHandshake,
  History,
  Home,
  Hourglass,
  Image,
  Images,
  Inbox,
  Key,
  KeyRound,
  Lamp,
  Landmark,
  Laptop,
  Layers,
  LayoutGrid,
  LayoutList,
  Link,
  Link2,
  List,
  ListFilter,
  ListOrdered,
  Locate,
  LocateFixed,
  Lock,
  LogIn,
  LogOut,
  MapPin,
  MapPinOff,
  MapPinned,
  Maximize,
  Maximize2,
  Megaphone,
  Menu,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Mic,
  MicOff,
  Microwave,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  Move,
  MoveHorizontal,
  MoveVertical,
  Navigation,
  Navigation2,
  Network,
  Package,
  PackageCheck,
  PackageOpen,
  Paperclip,
  Pause,
  PenTool,
  Percent,
  Phone,
  PhoneCall,
  Pin,
  PinOff,
  Play,
  Plug,
  Plus,
  PlusCircle,
  Power,
  Printer,
  QrCode,
  Radio,
  Receipt,
  ReceiptText,
  RefreshCcw,
  RefreshCw,
  Refrigerator,
  Repeat,
  RotateCcw,
  RotateCw,
  Router,
  Rows,
  Ruler,
  Scale,
  Scan,
  ScrollText,
  Search,
  Send,
  SendHorizontal,
  Server,
  Settings,
  Settings2,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldMinus,
  ShieldQuestion,
  Shuffle,
  Signal,
  Sliders,
  SlidersHorizontal,
  Smartphone,
  Smile,
  Snowflake,
  SortAsc,
  SortDesc,
  Sparkle,
  Sparkles,
  Speaker,
  SprayCan,
  Square,
  Star,
  StarHalf,
  Store,
  Tablet,
  Tag,
  Terminal,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  Timer,
  ToggleLeft,
  ToggleRight,
  TrafficCone,
  Trash,
  Trash2,
  TrendingDown,
  TrendingUp,
  Trophy,
  Truck,
  Tv,
  Unlink,
  Unlock,
  Upload,
  UploadCloud,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Utensils,
  Video,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Wallet,
  Warehouse,
  WashingMachine,
  Wifi,
  WifiOff,
  Wind,
  Wrench,
  X,
  XCircle,
  XOctagon,
  Zap,
  ZoomIn,
  ZoomOut
} from "lucide-react";

export type CategoryType = "전체" | "이사·청소·파트너 서비스" | "앱 필수 공통 컨트롤러";

// Custom Review Management Icon (말풍선 안에 별이 빛나는 정통 후기 관리 아이콘)
const ReviewStarIcon: React.FC<{
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  [key: string]: any;
}> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <polygon points="12 6.5 13.2 9.2 16.2 9.5 13.9 11.6 14.6 14.5 12 13 9.4 14.5 10.1 11.6 7.8 9.5 10.8 9.2 12 6.5" />
  </svg>
);

interface IconMeta {
  name: string;
  label: string;
  icon: any;
  category: CategoryType;
  desc: string;
}

export const IconSection: React.FC<{ mode?: 'customer' | 'partner' }> = ({ mode = 'customer' }) => {
  // 파트너향도 고객향과 동일하게 눈이 편안한 라이트모드로 통일
  const isDark = false;
  const [activeSize, setActiveSize] = useState<"24" | "20" | "16">("24");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedName, setDownloadedName] = useState<string | null>(null);

  // 300 Official System Icons for Daisa (150 Service & Partner + 150 Core App Controllers)
  const systemIcons: IconMeta[] = useMemo(() => [
    // 1. 이사·청소·파트너 서비스 (150종)
    { name: "Megaphone", label: "공지사항", icon: Megaphone, category: "이사·청소·파트너 서비스", desc: "전체 공지 및 긴급 안내 사항" },
    { name: "Inbox", label: "받은 오더", icon: Inbox, category: "이사·청소·파트너 서비스", desc: "신규 배차 및 수신된 오더 목록" },
    { name: "Hourglass", label: "마감 / 마감임박", icon: Hourglass, category: "이사·청소·파트너 서비스", desc: "견적 오더 마감 및 접수 종료" },
    { name: "Zap", label: "하이패스 바로연결", icon: Zap, category: "이사·청소·파트너 서비스", desc: "우선 배차 및 하이패스 즉시 연결" },
    { name: "CalendarClock", label: "일정관리", icon: CalendarClock, category: "이사·청소·파트너 서비스", desc: "기사님 현장 작업 일정 스케줄러" },
    { name: "MessagesSquare", label: "채팅목록", icon: MessagesSquare, category: "이사·청소·파트너 서비스", desc: "고객 1:1 견적 상담 채팅 목록" },
    { name: "ReviewStarIcon", label: "받은 후기 관리", icon: ReviewStarIcon, category: "이사·청소·파트너 서비스", desc: "고객 시공 후기 및 평점 리뷰 관리" },
    { name: "Receipt", label: "포인트 내역", icon: Receipt, category: "이사·청소·파트너 서비스", desc: "충전 적립금 및 오더 차감 내역" },
    { name: "Store", label: "업체 정보설정", icon: Store, category: "이사·청소·파트너 서비스", desc: "기사님 업체 소개 및 사업자 정보 설정" },
    { name: "CreditCard", label: "결제정보 관리", icon: CreditCard, category: "이사·청소·파트너 서비스", desc: "정산 계좌 등록 및 세금계산서 관리" },
    { name: "MapPin", label: "지역설정", icon: MapPin, category: "이사·청소·파트너 서비스", desc: "출동 가능 관할 지역 및 반경 설정" },
    { name: "ClipboardCheck", label: "접수 / 접수완료", icon: ClipboardCheck, category: "이사·청소·파트너 서비스", desc: "견적 오더 접수 확인 및 처리" },
    { name: "Send", label: "신청 / 견적제출", icon: Send, category: "이사·청소·파트너 서비스", desc: "이사/청소 견적 신청 및 제출" },
    { name: "Truck", label: "이사업체 / 용달차", icon: Truck, category: "이사·청소·파트너 서비스", desc: "1톤/5톤 이사 트럭 및 화물 운송" },
    { name: "Package", label: "이사 짐 / 박스", icon: Package, category: "이사·청소·파트너 서비스", desc: "포장 이사 및 개별 짐 박스" },
    { name: "Boxes", label: "다량 포장 박스", icon: Boxes, category: "이사·청소·파트너 서비스", desc: "이사 전체 짐 적재 및 다량 박스" },
    { name: "PackageOpen", label: "짐 풀기 / 언패킹", icon: PackageOpen, category: "이사·청소·파트너 서비스", desc: "이사 후 짐 정리 및 가구 배치" },
    { name: "PackageCheck", label: "포장 완료 박스", icon: PackageCheck, category: "이사·청소·파트너 서비스", desc: "검수 및 포장 완료 패킹" },
    { name: "Home", label: "출발지 / 도착지 주택", icon: Home, category: "이사·청소·파트너 서비스", desc: "단독주택 빌라 아파트 주거지" },
    { name: "Building", label: "아파트 / 빌라", icon: Building, category: "이사·청소·파트너 서비스", desc: "고층 아파트 및 공동주택" },
    { name: "Building2", label: "사무실 / 빌딩", icon: Building2, category: "이사·청소·파트너 서비스", desc: "사무실 이전 및 상업용 건물" },
    { name: "Warehouse", label: "보관 창고", icon: Warehouse, category: "이사·청소·파트너 서비스", desc: "이사 짐 장단기 보관 창고" },
    { name: "Container", label: "5톤 탑차 컨테이너", icon: Container, category: "이사·청소·파트너 서비스", desc: "대형 포장이사 전용 탑차" },
    { name: "Forklift", label: "중량물 운반 지게차", icon: Forklift, category: "이사·청소·파트너 서비스", desc: "피아노 금고 중량 화물 운반" },
    { name: "Car", label: "소형 용달 / 라보", icon: Car, category: "이사·청소·파트너 서비스", desc: "원룸 소형 가전 화물차" },
    { name: "TrafficCone", label: "사다리차 주차 통제", icon: TrafficCone, category: "이사·청소·파트너 서비스", desc: "사다리차 작업 구역 확보" },
    { name: "Scale", label: "화물 무게 / 톤수 측정", icon: Scale, category: "이사·청소·파트너 서비스", desc: "이사 물량 및 화물 톤수" },
    { name: "Ruler", label: "가구 사이즈 실측", icon: Ruler, category: "이사·청소·파트너 서비스", desc: "엘리베이터 및 문틀 통과 실측" },
    { name: "DoorOpen", label: "현관문 통과 작업", icon: DoorOpen, category: "이사·청소·파트너 서비스", desc: "문틀 및 중문 탈착 통과" },
    { name: "Layers", label: "바닥 보양재 패드", icon: Layers, category: "이사·청소·파트너 서비스", desc: "강마루 스크래치 방지 패드" },
    { name: "Footprints", label: "덧신 착용 위생", icon: Footprints, category: "이사·청소·파트너 서비스", desc: "실내 덧신 필수 착용 안내" },
    { name: "Sparkles", label: "입주 / 이사 청소", icon: Sparkles, category: "이사·청소·파트너 서비스", desc: "입주 전후 전문 클리닝 서비스" },
    { name: "Brush", label: "먼지 제거 / 브러시", icon: Brush, category: "이사·청소·파트너 서비스", desc: "창틀 바닥 틈새 먼지 청소" },
    { name: "SprayCan", label: "소독 / 방역 방제", icon: SprayCan, category: "이사·청소·파트너 서비스", desc: "피톤치드 살균 및 방역 케어" },
    { name: "Droplets", label: "고압 물세척", icon: Droplets, category: "이사·청소·파트너 서비스", desc: "화장실 및 베란다 고압 세척" },
    { name: "Bath", label: "욕실 / 화장실 케어", icon: Bath, category: "이사·청소·파트너 서비스", desc: "욕실 물때 곰팡이 특수 청소" },
    { name: "Sparkle", label: "새집증후군 케어", icon: Sparkle, category: "이사·청소·파트너 서비스", desc: "포름알데히드 제거 시공" },
    { name: "Bug", label: "해충 방제 / 바퀴벌레", icon: Bug, category: "이사·청소·파트너 서비스", desc: "싱크대 배수구 살충 소독" },
    { name: "Trash", label: "이사 쓰레기 배출", icon: Trash, category: "이사·청소·파트너 서비스", desc: "종량제 봉투 및 잡동사니" },
    { name: "Trash2", label: "대형 폐기물 스티커", icon: Trash2, category: "이사·청소·파트너 서비스", desc: "폐가구 폐가전 배출 신고" },
    { name: "AirVent", label: "에어컨 분해청소", icon: AirVent, category: "이사·청소·파트너 서비스", desc: "벽걸이 스탠드 에어컨 필터 청소" },
    { name: "Fan", label: "환풍기 / 서큘레이터", icon: Fan, category: "이사·청소·파트너 서비스", desc: "주방 후드 및 환풍기 찌든 때" },
    { name: "Wind", label: "냉매 가스 충전", icon: Wind, category: "이사·청소·파트너 서비스", desc: "에어컨 냉매 가스 보충" },
    { name: "Snowflake", label: "냉장고 내부 살균", icon: Snowflake, category: "이사·청소·파트너 서비스", desc: "냉장고 선반 탈취 스팀 살균" },
    { name: "Refrigerator", label: "양문형 냉장고 운반", icon: Refrigerator, category: "이사·청소·파트너 서비스", desc: "대형 냉장고 문짝 분리 운반" },
    { name: "WashingMachine", label: "세탁기 / 건조기 직렬", icon: WashingMachine, category: "이사·청소·파트너 서비스", desc: "드럼 세탁기 수평 및 급배수관" },
    { name: "Tv", label: "벽걸이 TV 타공", icon: Tv, category: "이사·청소·파트너 서비스", desc: "대형 TV 벽걸이 브라켓 설치" },
    { name: "Microwave", label: "전자레인지 / 오븐", icon: Microwave, category: "이사·청소·파트너 서비스", desc: "주방 소형 가전 전용 박스" },
    { name: "Armchair", label: "소파 / 1인 안락의자", icon: Armchair, category: "이사·청소·파트너 서비스", desc: "거실 소파 및 의자 운반" },
    { name: "Bed", label: "침대 / 매트리스 케어", icon: Bed, category: "이사·청소·파트너 서비스", desc: "침대 프레임 분해 및 진드기 케어" },
    { name: "Blinds", label: "커튼 / 블라인드 철거", icon: Blinds, category: "이사·청소·파트너 서비스", desc: "커튼 레일 및 블라인드 시공" },
    { name: "Lamp", label: "조명 / 등기구", icon: Lamp, category: "이사·청소·파트너 서비스", desc: "천장 LED 조명 탈착 이전" },
    { name: "Flame", label: "가스레인지 철거", icon: Flame, category: "이사·청소·파트너 서비스", desc: "도시가스 및 주방 가스레인지" },
    { name: "Plug", label: "가전 전원 콘센트 연결", icon: Plug, category: "이사·청소·파트너 서비스", desc: "세탁기 TV 전원 연결 확인" },
    { name: "Utensils", label: "식기 에어캡 포장", icon: Utensils, category: "이사·청소·파트너 서비스", desc: "그릇 컵 유리 식기 안심 뽁뽁이" },
    { name: "Wrench", label: "가구 분해 / 조립 공구", icon: Wrench, category: "이사·청소·파트너 서비스", desc: "붙박이장 침대 조립 공구" },
    { name: "Hammer", label: "못 박기 / 액자 시공", icon: Hammer, category: "이사·청소·파트너 서비스", desc: "벽걸이 타공 및 마감 작업" },
    { name: "Thermometer", label: "보관 창고 항온항습", icon: Thermometer, category: "이사·청소·파트너 서비스", desc: "가구 곰팡이 방지 온도 관리" },
    { name: "Cable", label: "인터넷 / 와이파이", icon: Cable, category: "이사·청소·파트너 서비스", desc: "광랜 인터넷 이전 설치 개통" },
    { name: "Wifi", label: "와이파이 공유기", icon: Wifi, category: "이사·청소·파트너 서비스", desc: "가정용 유무선 공유기 설치" },
    { name: "Router", label: "통신 셋톱박스", icon: Router, category: "이사·청소·파트너 서비스", desc: "IPTV 셋톱박스 및 모뎀 연결" },
    { name: "MapPinned", label: "도착지 위치 핀", icon: MapPinned, category: "이사·청소·파트너 서비스", desc: "이사 목적지 도로명 주소" },
    { name: "Navigation", label: "최적 운송 경로", icon: Navigation, category: "이사·청소·파트너 서비스", desc: "화물 트럭 전용 내비게이션" },
    { name: "Navigation2", label: "현장 빠른 길 안내", icon: Navigation2, category: "이사·청소·파트너 서비스", desc: "골목길 우회 화물 경로" },
    { name: "LocateFixed", label: "현재 기사님 위치", icon: LocateFixed, category: "이사·청소·파트너 서비스", desc: "실시간 트럭 GPS 위치" },
    { name: "Locate", label: "출발지 GPS 탐색", icon: Locate, category: "이사·청소·파트너 서비스", desc: "근처 기사님 매칭" },
    { name: "Crosshair", label: "정확한 주차 위치", icon: Crosshair, category: "이사·청소·파트너 서비스", desc: "탑차 주차 포인트" },
    { name: "MapPinOff", label: "배차 제외 지역", icon: MapPinOff, category: "이사·청소·파트너 서비스", desc: "작업 불가 제외 구역" },
    { name: "Compass", label: "이사 방위 / 길일", icon: Compass, category: "이사·청소·파트너 서비스", desc: "풍수지리 길방 확인" },
    { name: "Fuel", label: "유류비 / 톨게이트비", icon: Fuel, category: "이사·청소·파트너 서비스", desc: "장거리 이동 실비 정산" },
    { name: "Phone", label: "기사님 안심 전화", icon: Phone, category: "이사·청소·파트너 서비스", desc: "안심번호 050 통화 연결" },
    { name: "PhoneCall", label: "방문 견적 예약 전화", icon: PhoneCall, category: "이사·청소·파트너 서비스", desc: "고객 사전 상담 통화" },
    { name: "Headset", label: "고객 만족 상담센터", icon: Headset, category: "이사·청소·파트너 서비스", desc: "다이사 공식 고객센터 문의" },
    { name: "MessageSquare", label: "고객 문의 메시지", icon: MessageSquare, category: "이사·청소·파트너 서비스", desc: "사전 특이사항 전달" },
    { name: "MessageCircle", label: "실시간 상담 알림", icon: MessageCircle, category: "이사·청소·파트너 서비스", desc: "신규 고객 채팅 상담" },
    { name: "Bell", label: "신규 오더 알림", icon: Bell, category: "이사·청소·파트너 서비스", desc: "실시간 견적 알림 푸시" },
    { name: "BellRing", label: "긴급 배차 호출", icon: BellRing, category: "이사·청소·파트너 서비스", desc: "당일 긴급 이사 배차" },
    { name: "CalendarDays", label: "손 없는 날 달력", icon: CalendarDays, category: "이사·청소·파트너 서비스", desc: "이사 길일 및 손 없는 날" },
    { name: "CalendarCheck", label: "이사 일정 확정", icon: CalendarCheck, category: "이사·청소·파트너 서비스", desc: "최종 일정 조율 완료" },
    { name: "CalendarCheck2", label: "손 없는 날 확정", icon: CalendarCheck2, category: "이사·청소·파트너 서비스", desc: "예약금 입금 일정 확정" },
    { name: "CalendarRange", label: "보관 이사 기간", icon: CalendarRange, category: "이사·청소·파트너 서비스", desc: "보관 시작 및 만료 일정" },
    { name: "AlarmClock", label: "현장 모닝콜 알림", icon: AlarmClock, category: "이사·청소·파트너 서비스", desc: "출동 1시간 전 알림" },
    { name: "Clock3", label: "오전 작업 시작", icon: Clock3, category: "이사·청소·파트너 서비스", desc: "오전 8시 현장 출동 시작" },
    { name: "Clock8", label: "오후 청소 완료", icon: Clock8, category: "이사·청소·파트너 서비스", desc: "작업 완료 및 퇴근 확인" },
    { name: "Timer", label: "작업 소요 시간 측정", icon: Timer, category: "이사·청소·파트너 서비스", desc: "총 이사 작업 소요시간" },
    { name: "Clock", label: "작업 대기 시간", icon: Clock, category: "이사·청소·파트너 서비스", desc: "엘리베이터 대기 시간" },
    { name: "FileCheck", label: "사업자등록 인증", icon: FileCheck, category: "이사·청소·파트너 서비스", desc: "검증된 정식 관허 이사업체" },
    { name: "FileSignature", label: "전자 견적서 서명", icon: FileSignature, category: "이사·청소·파트너 서비스", desc: "현장 비대면 모바일 서명" },
    { name: "FileText", label: "표준 견적서 서식", icon: FileText, category: "이사·청소·파트너 서비스", desc: "공정거래위원회 표준 약관" },
    { name: "FileSpreadsheet", label: "화물 견적 내역서", icon: FileSpreadsheet, category: "이사·청소·파트너 서비스", desc: "엑셀 데이터 세부 목록" },
    { name: "FileSearch", label: "견적서 조회 검색", icon: FileSearch, category: "이사·청소·파트너 서비스", desc: "과거 견적서 이력 찾기" },
    { name: "FileQuestion", label: "미확인 견적서", icon: FileQuestion, category: "이사·청소·파트너 서비스", desc: "추가 확인 필요한 견적" },
    { name: "ClipboardList", label: "이사 체크리스트", icon: ClipboardList, category: "이사·청소·파트너 서비스", desc: "포장 전 귀중품 확인 목록" },
    { name: "ClipboardCopy", label: "견적 내용 복사", icon: ClipboardCopy, category: "이사·청소·파트너 서비스", desc: "화물 리스트 클립보드 복사" },
    { name: "PenTool", label: "현장 계약서 작성", icon: PenTool, category: "이사·청소·파트너 서비스", desc: "작업 현장 서명 날인" },
    { name: "ScrollText", label: "이용 약관 동의", icon: ScrollText, category: "이사·청소·파트너 서비스", desc: "파트너 제휴 약관" },
    { name: "Calculator", label: "이사 견적 계산기", icon: Calculator, category: "이사·청소·파트너 서비스", desc: "거리 및 층수별 실시간 견적" },
    { name: "Banknote", label: "계약금 영수증", icon: Banknote, category: "이사·청소·파트너 서비스", desc: "무통장 입금 및 현금 영수증" },
    { name: "Coins", label: "다이사 캐시백 포인트", icon: Coins, category: "이사·청소·파트너 서비스", desc: "리뷰 작성 시 지급 포인트" },
    { name: "Landmark", label: "파트너 정산 은행", icon: Landmark, category: "이사·청소·파트너 서비스", desc: "정산 계좌 은행 정보" },
    { name: "CircleDollarSign", label: "추가 운임 요금", icon: CircleDollarSign, category: "이사·청소·파트너 서비스", desc: "엘리베이터 사용료 등 추가" },
    { name: "ReceiptText", label: "세금계산서 발행", icon: ReceiptText, category: "이사·청소·파트너 서비스", desc: "전자 세금계산서 청구" },
    { name: "BadgePercent", label: "제휴 렌탈 할인", icon: BadgePercent, category: "이사·청소·파트너 서비스", desc: "정수기 공기청정기 결합 할인" },
    { name: "Tag", label: "이사 이벤트 특가", icon: Tag, category: "이사·청소·파트너 서비스", desc: "평일 한정 이사비 할인" },
    { name: "Percent", label: "수수료율 확인", icon: Percent, category: "이사·청소·파트너 서비스", desc: "다이사 플랫폼 중개 수수료" },
    { name: "UserCheck", label: "팀장 패커 전담 배정", icon: UserCheck, category: "이사·청소·파트너 서비스", desc: "경력 10년 이상 전문 패커" },
    { name: "UserPlus", label: "사다리 보조 인력 추가", icon: UserPlus, category: "이사·청소·파트너 서비스", desc: "인력 추가 옵션 신청" },
    { name: "Users", label: "이사 전담 크루 명단", icon: Users, category: "이사·청소·파트너 서비스", desc: "남성 3인 여성 1인 4인 1조" },
    { name: "ShieldCheck", label: "적재물 배상책임 보험", icon: ShieldCheck, category: "이사·청소·파트너 서비스", desc: "파손 분실 대비 안심 보험" },
    { name: "ShieldAlert", label: "파손 주의 물품", icon: ShieldAlert, category: "이사·청소·파트너 서비스", desc: "유리 도자기 정밀 취급" },
    { name: "ShieldMinus", label: "취소 수수료 면제", icon: ShieldMinus, category: "이사·청소·파트너 서비스", desc: "고객 귀책 취소 면제" },
    { name: "ShieldQuestion", label: "보험 청구 심사", icon: ShieldQuestion, category: "이사·청소·파트너 서비스", desc: "파손 접수 조사 진행" },
    { name: "Shield", label: "기사님 안심 보장", icon: Shield, category: "이사·청소·파트너 서비스", desc: "불공정 거래 보호" },
    { name: "Lock", label: "개인정보 안심 잠금", icon: Lock, category: "이사·청소·파트너 서비스", desc: "고객 연락처 마스킹" },
    { name: "Unlock", label: "안심번호 확인", icon: Unlock, category: "이사·청소·파트너 서비스", desc: "배차 수락 후 번호 조회" },
    { name: "Key", label: "입주 아파트 키 불출", icon: Key, category: "이사·청소·파트너 서비스", desc: "이사 당일 현관 비밀번호" },
    { name: "KeyRound", label: "현관 도어락 비밀번호", icon: KeyRound, category: "이사·청소·파트너 서비스", desc: "비대면 이사 번호키" },
    { name: "Award", label: "다이사 명예의 전당", icon: Award, category: "이사·청소·파트너 서비스", desc: "고객 만족도 최우수 업체" },
    { name: "Trophy", label: "이달의 우수 파트너", icon: Trophy, category: "이사·청소·파트너 서비스", desc: "월간 최우수 시공 업체" },
    { name: "BadgeCheck", label: "공식 안심 인증 마크", icon: BadgeCheck, category: "이사·청소·파트너 서비스", desc: "다이사 품질 검증 마크" },
    { name: "ThumbsUp", label: "추천 이사업체", icon: ThumbsUp, category: "이사·청소·파트너 서비스", desc: "평점 4.9 이상 추천 기사" },
    { name: "ThumbsDown", label: "서비스 불만족 접수", icon: ThumbsDown, category: "이사·청소·파트너 서비스", desc: "A/S 및 클레임 인입" },
    { name: "Smile", label: "고객 만족 후기", icon: Smile, category: "이사·청소·파트너 서비스", desc: "칭찬 및 만족 피드백" },
    { name: "HeartHandshake", label: "이사 계약 성사", icon: HeartHandshake, category: "이사·청소·파트너 서비스", desc: "온라인 전자 계약 체결" },
    { name: "Camera", label: "현장 사진 촬영", icon: Camera, category: "이사·청소·파트너 서비스", desc: "파손 전 가구 상태 촬영" },
    { name: "Image", label: "이사 짐 사진 첨부", icon: Image, category: "이사·청소·파트너 서비스", desc: "고객 업로드 사진 조회" },
    { name: "Images", label: "다량 짐 사진 모음", icon: Images, category: "이사·청소·파트너 서비스", desc: "방별 가구 사진 확인" },
    { name: "Video", label: "현장 동영상 녹화", icon: Video, category: "이사·청소·파트너 서비스", desc: "가전 작동 테스트 영상" },
    { name: "Paperclip", label: "보험 서류 첨부", icon: Paperclip, category: "이사·청소·파트너 서비스", desc: "사고 접수 증빙 서류" },
    { name: "Folder", label: "월별 정산 명세서", icon: Folder, category: "이사·청소·파트너 서비스", desc: "세무 신고 정산 폴더" },
    { name: "FolderCheck", label: "완료된 정산서", icon: FolderCheck, category: "이사·청소·파트너 서비스", desc: "세금계산서 승인 완료" },
    { name: "FolderArchive", label: "완료 오더 아카이브", icon: FolderArchive, category: "이사·청소·파트너 서비스", desc: "보관된 지난 오더 서류" },
    { name: "QrCode", label: "현장 확인 QR", icon: QrCode, category: "이사·청소·파트너 서비스", desc: "작업 착수 고객 서명 QR" },
    { name: "Scan", label: "바코드 영수증 스캔", icon: Scan, category: "이사·청소·파트너 서비스", desc: "자재 구매 영수증" },
    { name: "Barcode", label: "물류 바코드 라벨", icon: Barcode, category: "이사·청소·파트너 서비스", desc: "보관 박스 고유 번호" },
    { name: "Share2", label: "견적서 고객 공유", icon: Share2, category: "이사·청소·파트너 서비스", desc: "카카오톡 알림톡 전송" },
    { name: "Printer", label: "견적서 즉시 인쇄", icon: Printer, category: "이사·청소·파트너 서비스", desc: "포터블 모바일 프린터" },
    { name: "Smartphone", label: "기사님 전용 앱", icon: Smartphone, category: "이사·청소·파트너 서비스", desc: "파트너 모바일 앱 콘솔" },
    { name: "Tablet", label: "현장 태블릿 견적", icon: Tablet, category: "이사·청소·파트너 서비스", desc: "방문 견적 태블릿 입력" },
    { name: "Monitor", label: "PC 오더 관리자", icon: Monitor, category: "이사·청소·파트너 서비스", desc: "사무실 웹 관리 콘솔" },
    { name: "Laptop", label: "노트북 배차 콘솔", icon: Laptop, category: "이사·청소·파트너 서비스", desc: "원격 오더 배차 관리" },
    { name: "History", label: "지난 작업 이력", icon: History, category: "이사·청소·파트너 서비스", desc: "완료된 이사 오더 기록" },
    { name: "Eye", label: "견적 상세 조회", icon: Eye, category: "이사·청소·파트너 서비스", desc: "화물 내역 자세히 보기" },
    { name: "EyeOff", label: "고객명 익명화", icon: EyeOff, category: "이사·청소·파트너 서비스", desc: "개인정보 보호 처리" },
    { name: "CheckCircle2", label: "작업 완료 승인", icon: CheckCircle2, category: "이사·청소·파트너 서비스", desc: "고객 최종 서명 완료" },
    { name: "CheckSquare", label: "필수 작업 완료 체크", icon: CheckSquare, category: "이사·청소·파트너 서비스", desc: "체크리스트 확인" },
    { name: "AlertCircle", label: "긴급 오더 알림", icon: AlertCircle, category: "이사·청소·파트너 서비스", desc: "미수락 취소 임박 경고" },
    { name: "AlertTriangle", label: "도로 통제 주의", icon: AlertTriangle, category: "이사·청소·파트너 서비스", desc: "사다리차 진입로 장애물" },
    { name: "Ban", label: "운송 불가 품목", icon: Ban, category: "이사·청소·파트너 서비스", desc: "인화물 동물 현금 귀금속" },
    { name: "Settings", label: "알림 및 작업 설정", icon: Settings, category: "이사·청소·파트너 서비스", desc: "푸시 알림 수신 설정" },

    // 2. 앱 필수 공통 컨트롤러 (150종)
    { name: "ArrowRight", label: "다음 / 우측 이동", icon: ArrowRight, category: "앱 필수 공통 컨트롤러", desc: "다음 화면 및 우측 링크" },
    { name: "ArrowLeft", label: "이전 / 좌측 이동", icon: ArrowLeft, category: "앱 필수 공통 컨트롤러", desc: "이전 화면 및 좌측 이동" },
    { name: "ArrowUp", label: "위로 이동", icon: ArrowUp, category: "앱 필수 공통 컨트롤러", desc: "상단 스크롤 및 승강" },
    { name: "ArrowDown", label: "아래로 이동", icon: ArrowDown, category: "앱 필수 공통 컨트롤러", desc: "하단 스크롤 및 하강" },
    { name: "ArrowUpDown", label: "상하 양방향 이동", icon: ArrowUpDown, category: "앱 필수 공통 컨트롤러", desc: "위아래 위치 변경" },
    { name: "ArrowLeftRight", label: "좌우 양방향 이동", icon: ArrowLeftRight, category: "앱 필수 공통 컨트롤러", desc: "순서 맞교환" },
    { name: "ArrowUpRight", label: "외부 링크 열기", icon: ArrowUpRight, category: "앱 필수 공통 컨트롤러", desc: "새 탭 열기" },
    { name: "ArrowDownLeft", label: "수신 / 다운로드 이동", icon: ArrowDownLeft, category: "앱 필수 공통 컨트롤러", desc: "받은 파일 위치" },
    { name: "ChevronRight", label: "우측 꺾쇠", icon: ChevronRight, category: "앱 필수 공통 컨트롤러", desc: "리스트 상세 진입" },
    { name: "ChevronLeft", label: "좌측 꺾쇠 (뒤로가기)", icon: ChevronLeft, category: "앱 필수 공통 컨트롤러", desc: "네비게이션 뒤로" },
    { name: "ChevronUp", label: "상단 접기", icon: ChevronUp, category: "앱 필수 공통 컨트롤러", desc: "아코디언 접기" },
    { name: "ChevronDown", label: "하단 펼치기", icon: ChevronDown, category: "앱 필수 공통 컨트롤러", desc: "옵션 드롭다운 펼치기" },
    { name: "ChevronsRight", label: "맨 끝으로 이동", icon: ChevronsRight, category: "앱 필수 공통 컨트롤러", desc: "페이지네이션 마지막" },
    { name: "ChevronsLeft", label: "처음으로 이동", icon: ChevronsLeft, category: "앱 필수 공통 컨트롤러", desc: "페이지네이션 첫 페이지" },
    { name: "ChevronsUp", label: "최상단 탑 이동", icon: ChevronsUp, category: "앱 필수 공통 컨트롤러", desc: "맨 위로 스크롤" },
    { name: "ChevronsDown", label: "최하단 다운", icon: ChevronsDown, category: "앱 필수 공통 컨트롤러", desc: "맨 아래로 스크롤" },
    { name: "CornerDownLeft", label: "엔터 / 줄바꿈", icon: CornerDownLeft, category: "앱 필수 공통 컨트롤러", desc: "입력 완료 엔터 키" },
    { name: "CornerDownRight", label: "하단 분기", icon: CornerDownRight, category: "앱 필수 공통 컨트롤러", desc: "세부 하위 항목" },
    { name: "CornerUpLeft", label: "답글 달기", icon: CornerUpLeft, category: "앱 필수 공통 컨트롤러", desc: "문의 답글 작성" },
    { name: "CornerUpRight", label: "전달하기", icon: CornerUpRight, category: "앱 필수 공통 컨트롤러", desc: "메시지 전달" },
    { name: "Check", label: "단일 체크 선택", icon: Check, category: "앱 필수 공통 컨트롤러", desc: "완료 및 유효성 통과" },
    { name: "CheckCheck", label: "모두 읽음 / 2중 확인", icon: CheckCheck, category: "앱 필수 공통 컨트롤러", desc: "수신 확인 완료" },
    { name: "CheckCircle", label: "원형 체크 확인", icon: CheckCircle, category: "앱 필수 공통 컨트롤러", desc: "작업 성공 피드백" },
    { name: "Plus", label: "항목 추가", icon: Plus, category: "앱 필수 공통 컨트롤러", desc: "옵션 및 폼 추가" },
    { name: "PlusCircle", label: "원형 추가", icon: PlusCircle, category: "앱 필수 공통 컨트롤러", desc: "신규 요청 등록" },
    { name: "Minus", label: "항목 삭제 / 감소", icon: Minus, category: "앱 필수 공통 컨트롤러", desc: "수량 감소 및 제거" },
    { name: "MinusCircle", label: "원형 감소", icon: MinusCircle, category: "앱 필수 공통 컨트롤러", desc: "수량 빼기" },
    { name: "X", label: "닫기 / 취소", icon: X, category: "앱 필수 공통 컨트롤러", desc: "모달 닫기 및 입력 삭제" },
    { name: "XCircle", label: "원형 닫기", icon: XCircle, category: "앱 필수 공통 컨트롤러", desc: "입력값 전체 초기화" },
    { name: "XOctagon", label: "오류 정지", icon: XOctagon, category: "앱 필수 공통 컨트롤러", desc: "치명적 오류 차단" },
    { name: "Edit", label: "내용 편집", icon: Edit, category: "앱 필수 공통 컨트롤러", desc: "견적 조건 수정" },
    { name: "Edit2", label: "간편 수정", icon: Edit2, category: "앱 필수 공통 컨트롤러", desc: "인라인 텍스트 편집" },
    { name: "Edit3", label: "메모 작성", icon: Edit3, category: "앱 필수 공통 컨트롤러", desc: "추가 요청 메모" },
    { name: "Copy", label: "클립보드 복사", icon: Copy, category: "앱 필수 공통 컨트롤러", desc: "계좌 및 주소 복사" },
    { name: "CopyCheck", label: "복사 완료", icon: CopyCheck, category: "앱 필수 공통 컨트롤러", desc: "성공 피드백" },
    { name: "Download", label: "파일 다운로드", icon: Download, category: "앱 필수 공통 컨트롤러", desc: "견적서 PDF 저장" },
    { name: "Upload", label: "파일 업로드", icon: Upload, category: "앱 필수 공통 컨트롤러", desc: "첨부파일 등록" },
    { name: "FileDown", label: "문서 다운로드", icon: FileDown, category: "앱 필수 공통 컨트롤러", desc: "계약서 파일 받기" },
    { name: "DownloadCloud", label: "클라우드 다운로드", icon: DownloadCloud, category: "앱 필수 공통 컨트롤러", desc: "백업 복원" },
    { name: "UploadCloud", label: "클라우드 업로드", icon: UploadCloud, category: "앱 필수 공통 컨트롤러", desc: "백업 저장" },
    { name: "Search", label: "통합 검색", icon: Search, category: "앱 필수 공통 컨트롤러", desc: "지역 키워드 검색" },
    { name: "Sliders", label: "필터 설정", icon: Sliders, category: "앱 필수 공통 컨트롤러", desc: "상세 조건 필터" },
    { name: "SlidersHorizontal", label: "가로 슬라이더", icon: SlidersHorizontal, category: "앱 필수 공통 컨트롤러", desc: "범위 조절 슬라이더" },
    { name: "Filter", label: "단일 필터", icon: Filter, category: "앱 필수 공통 컨트롤러", desc: "카테고리 분류 필터" },
    { name: "ListFilter", label: "목록 다중 필터", icon: ListFilter, category: "앱 필수 공통 컨트롤러", desc: "다중 조건 필터링" },
    { name: "SortAsc", label: "오름차순 정렬", icon: SortAsc, category: "앱 필수 공통 컨트롤러", desc: "낮은 가격순 정렬" },
    { name: "SortDesc", label: "내림차순 정렬", icon: SortDesc, category: "앱 필수 공통 컨트롤러", desc: "높은 가격순 정렬" },
    { name: "ListOrdered", label: "순번 리스트", icon: ListOrdered, category: "앱 필수 공통 컨트롤러", desc: "번호 순차 정렬" },
    { name: "List", label: "목록형 뷰", icon: List, category: "앱 필수 공통 컨트롤러", desc: "리스트 형태로 보기" },
    { name: "Grid", label: "그리드 뷰", icon: Grid, category: "앱 필수 공통 컨트롤러", desc: "바둑판형 카드 보기" },
    { name: "LayoutGrid", label: "대형 카드 배치", icon: LayoutGrid, category: "앱 필수 공통 컨트롤러", desc: "2열/3열 카드 그리드" },
    { name: "LayoutList", label: "상세 리스트 배치", icon: LayoutList, category: "앱 필수 공통 컨트롤러", desc: "세로형 목록 뷰" },
    { name: "Columns", label: "다중 컬럼", icon: Columns, category: "앱 필수 공통 컨트롤러", desc: "화면 분할 뷰" },
    { name: "Rows", label: "행 분할 뷰", icon: Rows, category: "앱 필수 공통 컨트롤러", desc: "테이블 행 표시" },
    { name: "RefreshCw", label: "새로고침", icon: RefreshCw, category: "앱 필수 공통 컨트롤러", desc: "화면 및 데이터 갱신" },
    { name: "RefreshCcw", label: "반대방향 새로고침", icon: RefreshCcw, category: "앱 필수 공통 컨트롤러", desc: "실시간 리로드" },
    { name: "RotateCw", label: "다시 실행 (Redo)", icon: RotateCw, category: "앱 필수 공통 컨트롤러", desc: "취소한 작업 복구" },
    { name: "RotateCcw", label: "실행 취소 (Undo)", icon: RotateCcw, category: "앱 필수 공통 컨트롤러", desc: "입력 되돌리기" },
    { name: "ZoomIn", label: "확대 돋보기", icon: ZoomIn, category: "앱 필수 공통 컨트롤러", desc: "지도 및 도면 확대" },
    { name: "ZoomOut", label: "축소 돋보기", icon: ZoomOut, category: "앱 필수 공통 컨트롤러", desc: "전체 지도 축소" },
    { name: "User", label: "사용자 프로필", icon: User, category: "앱 필수 공통 컨트롤러", desc: "마이페이지 및 내 정보" },
    { name: "UserMinus", label: "사용자 제외", icon: UserMinus, category: "앱 필수 공통 컨트롤러", desc: "팀원 삭제" },
    { name: "UserX", label: "회원 탈퇴 / 차단", icon: UserX, category: "앱 필수 공통 컨트롤러", desc: "계정 차단 처리" },
    { name: "LogIn", label: "로그인", icon: LogIn, category: "앱 필수 공통 컨트롤러", desc: "계정 로그인 접속" },
    { name: "LogOut", label: "로그아웃", icon: LogOut, category: "앱 필수 공통 컨트롤러", desc: "안전 로그아웃" },
    { name: "Power", label: "시스템 전원 종료", icon: Power, category: "앱 필수 공통 컨트롤러", desc: "앱 종료" },
    { name: "Settings2", label: "고급 환경설정", icon: Settings2, category: "앱 필수 공통 컨트롤러", desc: "시스템 정밀 옵션" },
    { name: "Pin", label: "상단 고정 핀", icon: Pin, category: "앱 필수 공통 컨트롤러", desc: "중요 공지 상단 고정" },
    { name: "PinOff", label: "고정 핀 해제", icon: PinOff, category: "앱 필수 공통 컨트롤러", desc: "상단 고정 취소" },
    { name: "Bookmark", label: "북마크 저장", icon: Bookmark, category: "앱 필수 공통 컨트롤러", desc: "관심 견적 보관" },
    { name: "BookmarkCheck", label: "저장된 북마크", icon: BookmarkCheck, category: "앱 필수 공통 컨트롤러", desc: "스크랩 완료" },
    { name: "Heart", label: "찜하기 / 좋아요", icon: Heart, category: "앱 필수 공통 컨트롤러", desc: "단골 업체 등록" },
    { name: "Star", label: "별점 평가", icon: Star, category: "앱 필수 공통 컨트롤러", desc: "리뷰 별점 5점 만점" },
    { name: "Flag", label: "신고하기 / 깃발", icon: Flag, category: "앱 필수 공통 컨트롤러", desc: "허위 견적 신고" },
    { name: "Flame", label: "인기 급상승", icon: Flame, category: "앱 필수 공통 컨트롤러", desc: "실시간 인기 업체" },
    { name: "Sparkles", label: "AI 추천 견적", icon: Sparkles, category: "앱 필수 공통 컨트롤러", desc: "스마트 자동 매칭" },
    { name: "Badge", label: "회원 등급 뱃지", icon: Badge, category: "앱 필수 공통 컨트롤러", desc: "VIP 파트너 등급" },
    { name: "Shield", label: "보안 정책", icon: Shield, category: "앱 필수 공통 컨트롤러", desc: "데이터 암호화" },
    { name: "Key", label: "접근 토큰 키", icon: Key, category: "앱 필수 공통 컨트롤러", desc: "API 인증 키" },
    { name: "Lock", label: "비밀번호 잠금", icon: Lock, category: "앱 필수 공통 컨트롤러", desc: "보안 잠금 모드" },
    { name: "ToggleLeft", label: "토글 스위치 꺼짐", icon: ToggleLeft, category: "앱 필수 공통 컨트롤러", desc: "비활성 상태 토글" },
    { name: "ToggleRight", label: "토글 스위치 켜짐", icon: ToggleRight, category: "앱 필수 공통 컨트롤러", desc: "활성 상태 토글" },
    { name: "Circle", label: "라디오 미선택", icon: Circle, category: "앱 필수 공통 컨트롤러", desc: "단일 선택 라디오" },
    { name: "CircleDot", label: "라디오 선택됨", icon: CircleDot, category: "앱 필수 공통 컨트롤러", desc: "라디오 활성화" },
    { name: "Square", label: "체크박스 미선택", icon: Square, category: "앱 필수 공통 컨트롤러", desc: "다중 선택 기본 박스" },
    { name: "CheckSquare", label: "체크박스 선택됨", icon: CheckSquare, category: "앱 필수 공통 컨트롤러", desc: "동의 체크 완료" },
    { name: "Maximize", label: "전체 화면 확대", icon: Maximize, category: "앱 필수 공통 컨트롤러", desc: "전체 창 보기" },
    { name: "Minimize", label: "화면 최소화", icon: Minimize, category: "앱 필수 공통 컨트롤러", desc: "작은 창 모드" },
    { name: "Maximize2", label: "창 최대화", icon: Maximize2, category: "앱 필수 공통 컨트롤러", desc: "화면 가득 채우기" },
    { name: "Minimize2", label: "창 원래대로", icon: Minimize2, category: "앱 필수 공통 컨트롤러", desc: "기본 크기 복귀" },
    { name: "AtSign", label: "이메일 주소 골뱅이", icon: AtSign, category: "앱 필수 공통 컨트롤러", desc: "이메일 계정 입력" },
    { name: "Hash", label: "해시태그 / 번호(#)", icon: Hash, category: "앱 필수 공통 컨트롤러", desc: "주문 고유 식별 번호" },
    { name: "MousePointer", label: "마우스 포인터", icon: MousePointer, category: "앱 필수 공통 컨트롤러", desc: "클릭 지점 가이드" },
    { name: "Move", label: "자유 이동", icon: Move, category: "앱 필수 공통 컨트롤러", desc: "요소 드래그 앤 드롭" },
    { name: "MoveHorizontal", label: "가로 순서 이동", icon: MoveHorizontal, category: "앱 필수 공통 컨트롤러", desc: "좌우 드래그 정렬" },
    { name: "MoveVertical", label: "세로 순서 이동", icon: MoveVertical, category: "앱 필수 공통 컨트롤러", desc: "상하 드래그 정렬" },
    { name: "GripHorizontal", label: "가로 그립 핸들", icon: GripHorizontal, category: "앱 필수 공통 컨트롤러", desc: "드래그 정렬 손잡이" },
    { name: "GripVertical", label: "세로 그립 핸들", icon: GripVertical, category: "앱 필수 공통 컨트롤러", desc: "리스트 순서 변경 손잡이" },
    { name: "Menu", label: "햄버거 전체 메뉴", icon: Menu, category: "앱 필수 공통 컨트롤러", desc: "모바일 사이드바 열기" },
    { name: "MoreHorizontal", label: "가로 더보기 (…)", icon: MoreHorizontal, category: "앱 필수 공통 컨트롤러", desc: "추가 액션 팝오버" },
    { name: "MoreVertical", label: "세로 더보기 (⋮)", icon: MoreVertical, category: "앱 필수 공통 컨트롤러", desc: "행 옵션 메뉴" },
    { name: "ExternalLink", label: "외부 링크 새창", icon: ExternalLink, category: "앱 필수 공통 컨트롤러", desc: "아웃링크 연결" },
    { name: "Link", label: "URL 링크", icon: Link, category: "앱 필수 공통 컨트롤러", desc: "하이퍼링크 연결" },
    { name: "Link2", label: "주소 복사 링크", icon: Link2, category: "앱 필수 공통 컨트롤러", desc: "공유 링크 복사" },
    { name: "Unlink", label: "연동 해제", icon: Unlink, category: "앱 필수 공통 컨트롤러", desc: "외부 계정 연결 끊기" },
    { name: "Volume", label: "기본 음량", icon: Volume, category: "앱 필수 공통 컨트롤러", desc: "안내 방송 사운드" },
    { name: "Volume1", label: "작은 소리", icon: Volume1, category: "앱 필수 공통 컨트롤러", desc: "1단계 알림음" },
    { name: "Volume2", label: "큰 소리 켜짐", icon: Volume2, category: "앱 필수 공통 컨트롤러", desc: "최대 알림 음량" },
    { name: "VolumeX", label: "음소거 무음", icon: VolumeX, category: "앱 필수 공통 컨트롤러", desc: "진동 및 무음 전환" },
    { name: "Mic", label: "음성 마이크 입력", icon: Mic, category: "앱 필수 공통 컨트롤러", desc: "음성 메모 녹음" },
    { name: "MicOff", label: "마이크 끄기", icon: MicOff, category: "앱 필수 공통 컨트롤러", desc: "통화 음소거" },
    { name: "Paperclip", label: "파일 첨부 클립", icon: Paperclip, category: "앱 필수 공통 컨트롤러", desc: "문서 첨부" },
    { name: "FilePlus", label: "새 파일 추가", icon: FilePlus, category: "앱 필수 공통 컨트롤러", desc: "문서 신규 생성" },
    { name: "FileMinus", label: "파일 제거", icon: FileMinus, category: "앱 필수 공통 컨트롤러", desc: "첨부파일 삭제" },
    { name: "FolderPlus", label: "새 폴더 생성", icon: FolderPlus, category: "앱 필수 공통 컨트롤러", desc: "보관함 만들기" },
    { name: "FolderOpen", label: "열린 폴더", icon: FolderOpen, category: "앱 필수 공통 컨트롤러", desc: "현재 디렉토리" },
    { name: "Battery", label: "배터리 상태", icon: Battery, category: "앱 필수 공통 컨트롤러", desc: "단말기 배터리 잔량" },
    { name: "BatteryCharging", label: "충전 중", icon: BatteryCharging, category: "앱 필수 공통 컨트롤러", desc: "전자기기 충전" },
    { name: "WifiOff", label: "오프라인 통신 두절", icon: WifiOff, category: "앱 필수 공통 컨트롤러", desc: "네트워크 연결 실패" },
    { name: "Bluetooth", label: "블루투스 페어링", icon: Bluetooth, category: "앱 필수 공통 컨트롤러", desc: "카드 결제기 연결" },
    { name: "SendHorizontal", label: "가로 전송 버튼", icon: SendHorizontal, category: "앱 필수 공통 컨트롤러", desc: "메시지 발송" },
    { name: "Repeat", label: "반복 실행", icon: Repeat, category: "앱 필수 공통 컨트롤러", desc: "주기적 정기 이사" },
    { name: "Shuffle", label: "랜덤 셔플", icon: Shuffle, category: "앱 필수 공통 컨트롤러", desc: "순서 섞기" },
    { name: "Clock1", label: "새벽 시간대", icon: Clock1, category: "앱 필수 공통 컨트롤러", desc: "심야 작업" },
    { name: "Clock2", label: "오전 시간대", icon: Clock2, category: "앱 필수 공통 컨트롤러", desc: "오전 작업" },
    { name: "Clock4", label: "오후 시간대", icon: Clock4, category: "앱 필수 공통 컨트롤러", desc: "낮 작업" },
    { name: "Clock6", label: "저녁 시간대", icon: Clock6, category: "앱 필수 공통 컨트롤러", desc: "퇴근 후 작업" },
    { name: "Calendar", label: "기본 달력", icon: Calendar, category: "앱 필수 공통 컨트롤러", desc: "날짜 선택 팝업" },
    { name: "Wallet", label: "전자 지갑", icon: Wallet, category: "앱 필수 공통 컨트롤러", desc: "간편 결제 지갑" },
    { name: "CreditCard", label: "신용/체크카드", icon: CreditCard, category: "앱 필수 공통 컨트롤러", desc: "카드 결제 모듈" },
    { name: "Play", label: "동영상 재생", icon: Play, category: "앱 필수 공통 컨트롤러", desc: "설명 동영상 재생" },
    { name: "Pause", label: "일시 정지", icon: Pause, category: "앱 필수 공통 컨트롤러", desc: "재생 일시 정지" },
    { name: "Activity", label: "실시간 활동 지표", icon: Activity, category: "앱 필수 공통 컨트롤러", desc: "접속 현황 모니터링" },
    { name: "TrendingUp", label: "실적 상승 추이", icon: TrendingUp, category: "앱 필수 공통 컨트롤러", desc: "오더 수주량 증가" },
    { name: "TrendingDown", label: "실적 하락 추이", icon: TrendingDown, category: "앱 필수 공통 컨트롤러", desc: "취소율 변동" },
    { name: "Gauge", label: "계기판 / 속도", icon: Gauge, category: "앱 필수 공통 컨트롤러", desc: "운행 속도 및 처리율" },
    { name: "File", label: "일반 텍스트 파일", icon: File, category: "앱 필수 공통 컨트롤러", desc: "표준 서류 파일" },
    { name: "Files", label: "다중 서류 묶음", icon: Files, category: "앱 필수 공통 컨트롤러", desc: "복수 첨부 문서" },
    { name: "Terminal", label: "콘솔 명령 프롬프트", icon: Terminal, category: "앱 필수 공통 컨트롤러", desc: "시스템 디버깅 콘솔" },
    { name: "Code", label: "개발자 코드", icon: Code, category: "앱 필수 공통 컨트롤러", desc: "API 연동 개발 코드" },
    { name: "Cpu", label: "서버 프로세서", icon: Cpu, category: "앱 필수 공통 컨트롤러", desc: "중앙 연산 처리 장치" },
    { name: "Database", label: "고객 데이터베이스", icon: Database, category: "앱 필수 공통 컨트롤러", desc: "견적 원장 데이터" },
    { name: "Server", label: "클라우드 호스팅 서버", icon: Server, category: "앱 필수 공통 컨트롤러", desc: "다이사 백엔드 인프라" },
    { name: "HardDrive", label: "외장 하드 저장장치", icon: HardDrive, category: "앱 필수 공통 컨트롤러", desc: "로컬 스토리지" },
    { name: "Network", label: "네트워크 연결망", icon: Network, category: "앱 필수 공통 컨트롤러", desc: "전사 네트워크 망" },
    { name: "Radio", label: "무전 통신 / 주파수", icon: Radio, category: "앱 필수 공통 컨트롤러", desc: "현장 무전 연락" },
    { name: "Signal", label: "안테나 수신 감도", icon: Signal, category: "앱 필수 공통 컨트롤러", desc: "모바일 데이터 통신 신호" },
    { name: "Cast", label: "무선 화면 공유", icon: Cast, category: "앱 필수 공통 컨트롤러", desc: "스마트 TV 화면 미러링" },
    { name: "Headphones", label: "고객 음성 상담", icon: Headphones, category: "앱 필수 공통 컨트롤러", desc: "헤드셋 통화 청취" },
    { name: "Speaker", label: "안내 스피커 방송", icon: Speaker, category: "앱 필수 공통 컨트롤러", desc: "현장 음성 안내" }
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
    let svgString = ReactDOMServer.renderToStaticMarkup(
      React.createElement(IconComponent, {
        size: sizePixel,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        stroke: "currentColor",
      })
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
    link.download = `daisa-icon-${name.toLowerCase()}-${sizePixel}px.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedName(name);
    setTimeout(() => setDownloadedName(null), 1500);
  };

  const [isZipping, setIsZipping] = useState(false);

  // 300종 전체 아이콘 .zip 일괄 다운로드
  const handleDownloadAll = async () => {
    setIsZipping(true);
    try {
      const zip = new JSZip();
      const folder = zip.folder(`daisa-icons-${activeSize}px`);

      systemIcons.forEach((item) => {
        let svgString = ReactDOMServer.renderToStaticMarkup(
          React.createElement(item.icon, {
            size: sizePixel,
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
            stroke: "currentColor",
          })
        );

        if (!svgString.includes('xmlns=')) {
          svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        }

        svgString = svgString
          .replace(/width="[^"]*"/, `width="${sizePixel}"`)
          .replace(/height="[^"]*"/, `height="${sizePixel}"`);

        const cleanSvg = `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`;
        folder?.file(`daisa-icon-${item.name.toLowerCase()}-${activeSize}px.svg`, cleanSvg);
      });

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `daisa_icons_all_${activeSize}px.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate zip:", err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header (심플 영문 타이틀만) */}
      <div className="border-b pb-4 border-[#E5E8EB]">
        <h2 className="text-[28px] md:text-[32px] font-extrabold tracking-tight text-[#191F28]">
          Icons
        </h2>
      </div>

      {/* 1단: 규격 + 이모지 금지 조화로운 단일 슬림 바 */}
      <div className="bg-white rounded-[14px] px-4 py-2.5 shadow-xs border border-[#E5E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-[12px]">
        <div className="flex items-center gap-3 text-[#4E5968]">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#191F28]">규격:</span>
            <span>24px (20·16px)</span>
          </div>
          <span className="text-[#D1D6DB]">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#191F28]">두께:</span>
            <span>1.5px</span>
          </div>
          <span className="text-[#D1D6DB]">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#191F28]">마감:</span>
            <span>Round</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[#F34766] font-semibold bg-[#FFF5F6] px-2.5 py-1 rounded-[8px]">
          <Ban className="w-3.5 h-3.5 shrink-0" />
          <span>이모지 사용 엄격 금지 (공식 SVG 전용)</span>
        </div>
      </div>

      {/* 2단: 검색 + 카테고리 탭 + 사이즈 컨트롤 바 (흰배경 + 테두리 + 그림자) */}
      <div className="bg-white rounded-[16px] p-3.5 space-y-3 shadow-xs border border-[#E5E8EB]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-[12px] overflow-x-auto scrollbar-none bg-[#F2F4F6]">
            {(["전체", "이사·청소·파트너 서비스", "앱 필수 공통 컨트롤러"] as const).map((cat) => {
              const count = cat === "전체" ? 300 : 150;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-[9px] text-[12px] font-bold transition-all whitespace-nowrap ${
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
          <div className="flex items-center gap-1 p-1 rounded-[10px] bg-[#F2F4F6] self-end lg:self-auto">
            {(["24", "20", "16"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                className={`px-2.5 py-1 rounded-[7px] text-[12px] font-bold transition-all ${
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

        {/* Search Box */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B95A1]" />
          <input
            type="text"
            placeholder="300종 아이콘 이름 또는 설명 검색 (예: 트럭, 견적, 설정, 검색, 결제 등)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-[10px] pl-10 pr-10 py-2 text-[13px] outline-none transition-all bg-[#F9FAFB] text-[#191F28] placeholder-[#8B95A1] focus:bg-white focus:ring-2 focus:ring-[#1219F7]/15"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#8B95A1] hover:text-[#191F28]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Counter & Download All Button */}
      <div className={`flex items-center justify-between px-1 text-[13px] flex-wrap gap-2 ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
        <div>
          검색 결과: <strong className={isDark ? 'text-white' : 'text-[#191F28]'}>{filteredIcons.length}개</strong>
          {searchQuery && <span className={isDark ? 'text-[#65656E]' : 'text-[#8B95A1]'}> (&apos;{searchQuery}&apos; 검색 중)</span>}
        </div>

        <div className="flex items-center gap-3">
          <span className={`text-[12px] hidden sm:inline ${isDark ? 'text-[#65656E]' : 'text-[#8B95A1]'}`}>
            카드 클릭 시 <strong>.{activeSize}px.svg</strong> 파일 자동 다운로드
          </span>

          {/* 작게 전체 아이콘 다운로드할 수 있는 버튼 */}
          <button
            type="button"
            onClick={handleDownloadAll}
            disabled={isZipping}
            className="h-[30px] px-2.5 rounded-[8px] bg-white text-[#1219F7] hover:bg-[#EEF2FF] shadow-2xs text-[12px] font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 select-none"
            title="공식 300종 전체 아이콘 SVG를 .zip으로 압축 다운로드합니다."
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isZipping ? '압축 생성 중...' : '전체 아이콘 다운로드 (.zip)'}</span>
          </button>
        </div>
      </div>

        {/* Icon Grid (Pure Clean Outline Icons) */}
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
                  className="group p-4 rounded-[16px] bg-white border border-[#E5E8EB] hover:border-[#1219F7] shadow-xs hover:shadow-md flex flex-col items-center justify-center gap-2 transition-all cursor-pointer relative select-none"
                >
                  {/* Category Tag on Top Right */}
                  <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    item.category === "이사·청소·파트너 서비스"
                      ? isDark ? 'bg-[#0C234F] text-[#4B89FF]' : 'bg-[#E8F3FF] text-[#1B64DA]'
                      : isDark ? 'bg-[#292832] text-[#8B8B94]' : 'bg-[#F2F4F6] text-[#8B95A1]'
                  }`}>
                    {item.category === "이사·청소·파트너 서비스" ? "서비스/파트너" : "공통"}
                  </span>

                  {/* Clean Stroke Icon */}
                  <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center transition-colors mt-2 ${
                    isDark
                      ? 'bg-[#141319] group-hover:bg-[#25242E] text-white group-hover:text-[#4B89FF]'
                      : 'bg-[#FAFBFD] group-hover:bg-[#E8F3FF] text-[#191F28] group-hover:text-[#1219F7]'
                  }`}>
                    <Icon size={sizePixel} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </div>

                  <div className="text-center w-full">
                    <div className={`text-[12px] font-bold truncate transition-colors ${
                      isDark ? 'text-white group-hover:text-[#4B89FF]' : 'text-[#191F28] group-hover:text-[#1219F7]'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-[10px] font-mono truncate ${isDark ? 'text-[#65656E]' : 'text-[#8B95A1]'}`}>
                      {item.name}
                    </div>
                  </div>

                  {/* Download notification overlay */}
                  {isDownloaded && (
                    <div className="absolute inset-0 bg-[#1219F7] text-white rounded-[16px] flex flex-col items-center justify-center gap-1 text-[11px] font-bold animate-fadeIn z-20 shadow-md">
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>SVG 다운로드 완료</span>
                    </div>
                  )}

                  {/* Hover Overlay: Subtle Blur + Download Icon */}
                  <div
                    className={`absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col items-center justify-center gap-1.5 z-10 pointer-events-none ${
                      isDark
                        ? 'bg-[#191F28]/80 backdrop-blur-[2px]'
                        : 'bg-white/85 backdrop-blur-[2px]'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shadow-xs transform scale-90 group-hover:scale-100 transition-transform ${
                        isDark ? 'bg-[#4B89FF] text-white' : 'bg-[#1219F7] text-white'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] font-bold ${
                        isDark ? 'text-white' : 'text-[#1219F7]'
                      }`}
                    >
                      SVG 다운로드
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`rounded-[18px] border p-12 text-center space-y-2 ${
            isDark ? 'bg-[#1C1B22] border-[#26252D]' : 'bg-white border-[#E5E8EB]'
          }`}>
            <Search className="w-8 h-8 text-[#8B95A1] mx-auto opacity-50" />
            <h4 className={`text-[15px] font-bold ${isDark ? 'text-white' : 'text-[#191F28]'}`}>일치하는 아이콘이 없습니다</h4>
            <p className={`text-[13px] ${isDark ? 'text-[#9E9EA4]' : 'text-[#6B7684]'}`}>
              다른 검색어로 다시 검색해 보세요.
            </p>
          </div>
        )}
    </div>
  );
};
