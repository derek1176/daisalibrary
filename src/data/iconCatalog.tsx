import React from "react";
import {
  Activity,
  AirVent,
  Airplay,
  AlarmClock,
  AlarmSmoke,
  AlertCircle,
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Anchor,
  Anvil,
  ArchiveRestore,
  ArchiveX,
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
  Axe,
  Badge,
  BadgeAlert,
  BadgeCheck,
  BadgeHelp,
  BadgeInfo,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BaggageClaim,
  Ban,
  Banknote,
  Barcode,
  Baseline,
  Bath,
  Battery,
  BatteryCharging,
  Bed,
  Bell,
  BellRing,
  Bike,
  Biohazard,
  Blinds,
  Blocks,
  Bluetooth,
  Bold,
  Bookmark,
  BookmarkCheck,
  Box,
  BoxSelect,
  Boxes,
  BrickWall,
  Brush,
  Bug,
  Building,
  Building2,
  BusFront,
  Cable,
  CableCar,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CalendarHeart,
  CalendarRange,
  Camera,
  Car,
  CarFront,
  CarTaxiFront,
  Caravan,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  Cast,
  Cctv,
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
  CloudRainWind,
  Code,
  Code2,
  Cog,
  Coins,
  Columns,
  Columns2,
  Columns3,
  Compass,
  Construction,
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
  DoorClosed,
  DoorOpen,
  Download,
  DownloadCloud,
  DraftingCompass,
  Drill,
  Droplet,
  Droplets,
  Edit,
  Edit2,
  Edit3,
  ExternalLink,
  Eye,
  EyeOff,
  Factory,
  Fan,
  FastForward,
  Fence,
  File,
  FileArchive,
  FileBadge,
  FileBox,
  FileCheck,
  FileClock,
  FileCode,
  FileDown,
  FileKey,
  FileMinus,
  FilePlus,
  FileQuestion,
  FileSearch,
  FileSignature,
  FileSpreadsheet,
  FileSymlink,
  FileText,
  Files,
  Filter,
  Fingerprint,
  FireExtinguisher,
  Flag,
  Flame,
  FlameKindling,
  Flashlight,
  FlashlightOff,
  FlaskConical,
  Folder,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderMinus,
  FolderOpen,
  FolderPlus,
  FolderRoot,
  FolderSync,
  Footprints,
  Forklift,
  Fuel,
  Gauge,
  Glasses,
  Globe,
  Grid,
  GripHorizontal,
  GripVertical,
  Hammer,
  Hand,
  HardDrive,
  HardHat,
  Hash,
  Heading1,
  Heading2,
  Heading3,
  Headphones,
  Headset,
  Heart,
  HeartHandshake,
  Heater,
  Highlighter,
  History,
  Home,
  Hotel,
  Hourglass,
  Image,
  Images,
  Inbox,
  Italic,
  Key,
  KeyRound,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Landmark,
  Laptop,
  Layers,
  LayoutGrid,
  LayoutList,
  LayoutTemplate,
  LifeBuoy,
  LightbulbOff,
  Link,
  Link2,
  List,
  ListCollapse,
  ListFilter,
  ListMinus,
  ListOrdered,
  ListPlus,
  ListTree,
  Locate,
  LocateFixed,
  Lock,
  LogIn,
  LogOut,
  Luggage,
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
  Milestone,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  Monitor,
  MonitorSpeaker,
  Moon,
  MoreHorizontal,
  MoreVertical,
  MousePointer,
  MousePointer2,
  Move,
  MoveHorizontal,
  MoveVertical,
  Navigation,
  Navigation2,
  Network,
  Nut,
  NutOff,
  Package,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  Paintbrush2,
  PanelBottom,
  PanelLeft,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRight,
  PanelRightClose,
  PanelRightOpen,
  PanelTop,
  Paperclip,
  Pause,
  PauseCircle,
  PenTool,
  PencilRuler,
  Percent,
  Phone,
  PhoneCall,
  Pickaxe,
  Pilcrow,
  Pin,
  PinOff,
  Pipette,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  PlayCircle,
  Plug,
  Plug2,
  PlugZap,
  PlugZap2,
  Plus,
  PlusCircle,
  Power,
  PowerOff,
  PowerSquare,
  Printer,
  QrCode,
  Radio,
  Receipt,
  ReceiptText,
  Recycle,
  Redo,
  Redo2,
  RefreshCcw,
  RefreshCw,
  Refrigerator,
  Repeat,
  Repeat1,
  Rewind,
  RockingChair,
  RotateCcw,
  RotateCw,
  Route,
  RouteOff,
  Router,
  Rows,
  Rows2,
  Rows3,
  Ruler,
  Scale,
  Scan,
  ScissorsLineDashed,
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
  Ship,
  ShipWheel,
  Shovel,
  ShowerHead,
  Shuffle,
  Signal,
  SignalHigh,
  SignalLow,
  Siren,
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
  SplitSquareHorizontal,
  SplitSquareVertical,
  SprayCan,
  Sprout,
  Square,
  Stamp,
  Star,
  StarHalf,
  StopCircle,
  Store,
  Strikethrough,
  Subscript,
  Sun,
  Superscript,
  Tablet,
  Tag,
  Terminal,
  TextQuote,
  Theater,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  Timer,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  TrafficCone,
  TrainFront,
  TrainTrack,
  Trash,
  Trash2,
  TreePine,
  TrendingDown,
  TrendingUp,
  Trophy,
  Truck,
  Tv,
  Tv2,
  Type,
  Underline,
  Undo,
  Undo2,
  Unlink,
  Unlock,
  Unplug,
  Upload,
  UploadCloud,
  User,
  UserCheck,
  UserCog,
  UserMinus,
  UserPlus,
  UserX,
  Users,
  Utensils,
  Video,
  VideoOff,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Wallet,
  Warehouse,
  WashingMachine,
  Watch,
  Wifi,
  WifiOff,
  Wind,
  WrapText,
  Wrench,
  X,
  XCircle,
  XOctagon,
  Zap,
  ZoomIn,
  ZoomOut,
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

// 체크박스 내장형 (박스 테두리 안쪽에 체크가 온전히 들어간 아웃라인 체크박스)
const CheckboxSquare: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <rect width="18" height="18" x="3" y="3" rx="4" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);

// 체크박스 채움형 (솔리드 박스 배경에 체크 표시가 깔끔하게 음각으로 파내진 형태)
const CheckboxSquareFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm9.707 6.293a1 1 0 0 0-1.414 0L10.5 14.086l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 원형 체크박스 채움형 (솔리드 원형 배경에 체크 표시가 음각으로 파내진 형태)
const CheckboxCircleFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.707 7.293a1 1 0 0 0-1.414 0L10.5 14.086l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 라디오 미선택 (24px 캔버스 기준 r=9 원형 외곽선)
const RadioUnchecked: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <circle cx="12" cy="12" r="9" />
  </svg>
);

// 라디오 선택됨 (외곽선 링 + r=5 대형 솔리드 원형으로 시인성 확보)
const RadioCheckedFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />
  </svg>
);

// 원형 체크 채움 (성공 및 검증 완료 강조)
const CheckCircleFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.707 7.293a1 1 0 0 0-1.414 0L10.5 14.086l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 원형 삭제/닫기 채움 (오류 및 거절 상태 강조)
const XCircleFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.707 6.293a1 1 0 0 0-1.414 0L12 10.586 9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0 0-1.414z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 원형 경고 채움 (주의 알림 강조)
const AlertCircleFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-1 6a1 1 0 0 1 2 0v5a1 1 0 1 1-2 0V8zm1 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 원형 도움말 채움 (가이드 툴팁 안내)
const HelpCircleFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 13.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm0-8.5a3 3 0 0 0-3 3 1 1 0 1 0 2 0 1 1 0 1 1 2 1c-.8 0-1.5.7-1.5 1.5V13a1 1 0 1 0 2 0v-.35c1.4-.6 2.5-1.9 2.5-3.65a3 3 0 0 0-3-3z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 원형 정보 채움 (시스템 공지 및 안내)
const InfoCircleFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path
      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-1 5a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </svg>
);

// 하트 채움 (위시리스트 활성화)
const HeartFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" stroke="none" />
  </svg>
);

// 별 채움 (리뷰 평점 만점)
const StarFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
  </svg>
);

// 북마크 채움 (스크랩 활성화)
const BookmarkFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" fill="currentColor" stroke="none" />
  </svg>
);

// 알림벨 채움 (새 알림 도착)
const BellFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" fill="currentColor" stroke="none" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

// 고정핀 채움 (상단 고정 활성화)
const PinFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M12 2v4m5.5 5.5a1.5 1.5 0 0 1-2.12 0L12 8.12 8.62 11.5a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12L9 5M12 17.5V22" fill="currentColor" />
  </svg>
);

// 태그 채움 (카테고리 라벨)
const TagFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2zm-5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none" />
  </svg>
);

// 폴더 채움 (자료 보관함)
const FolderFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16z" fill="currentColor" stroke="none" />
  </svg>
);

// 보안 방패 채움 (보안 인증)
const ShieldFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="currentColor" stroke="none" />
  </svg>
);

// 인증 방패 채움 (안전 보증 확인)
const ShieldCheckFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M12 2.28C10.24 3.8 7.74 5 5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.66 8.95.22.08.45.08.67 0C16.5 20.5 20 18 20 13V6a1 1 0 0 0-1-1c-2.74 0-5.24-1.2-7-2.72zm3.707 7.013a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none" />
  </svg>
);

// 공식 인증 뱃지 채움 (우수 파트너 엠블럼)
const BadgeCheckFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76zm11.857 2.087a1 1 0 0 0-1.414-1.414L10.5 13.086l-1.443-1.443a1 1 0 0 0-1.414 1.414l2.15 2.15a1 1 0 0 0 1.414 0l4.5-4.5z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none" />
  </svg>
);

// 자물쇠 잠금 채움 (보안 잠금 활성화)
const LockFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" fill="currentColor" stroke="none" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// 엄지척 추천 채움 (적극 추천)
const ThumbsUpFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M7 10v12M15 10.5a3 3 0 0 0-3-3l.5-3.5a1.8 1.8 0 0 0-1.8-2 1.8 1.8 0 0 0-1.7 1.2L7 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14.5a3 3 0 0 0 3-2.5l1.2-7a3 3 0 0 0-3-3.5H15z" fill="currentColor" stroke="none" />
  </svg>
);

// 엄지다운 채움 (부정 피드백)
const ThumbsDownFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M17 14V2M9 13.5a3 3 0 0 0 3 3l-.5 3.5a1.8 1.8 0 0 0 1.8 2 1.8 1.8 0 0 0 1.7-1.2L17 14h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.5a3 3 0 0 0-3 2.5l-1.2 7a3 3 0 0 0 3 3.5H9z" fill="currentColor" stroke="none" />
  </svg>
);

// 눈 채움 (조회 및 확인 활성화)
const EyeFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none" />
  </svg>
);

// 재생 채움 (미디어 재생 버튼)
const PlayFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" stroke="none" />
  </svg>
);

// 일시정지 채움 (미디어 일시 정지)
const PauseFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none" />
    <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none" />
  </svg>
);

// 번개 채움 (빠른 매칭 활성화)
const ZapFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none" />
  </svg>
);

// 어워드 메달 채움 (우수 시상 엠블럼)
const AwardFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <circle cx="12" cy="8" r="6" fill="currentColor" stroke="none" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

// 지도 위치핀 채움 (현재 위치 마커)
const MapPinFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none" />
  </svg>
);

// 사용자 프로필 채움 (내 계정 활성화)
const UserFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-8 18c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1z" fill="currentColor" stroke="none" />
  </svg>
);

// 말풍선 채움 (채팅 활성화)
const MessageSquareFill: React.FC<any> = ({ size = 24, strokeWidth = 1.5, className = '', ...props }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" stroke="none" />
  </svg>
);

export interface IconMeta {
  name: string;
  label: string;
  icon: React.ElementType;
  category: CategoryType;
  desc: string;
}

export const systemIcons: IconMeta[] = [
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
    { name: "Speaker", label: "안내 스피커 방송", icon: Speaker, category: "앱 필수 공통 컨트롤러", desc: "현장 음성 안내" },

  // ==========================================
  // [신규 확장 100종] 이사·청소·파트너 서비스 아이콘
  // ==========================================
  { name: "BusFront", label: "셔틀버스", icon: BusFront, category: "이사·청소·파트너 서비스", desc: "작업팀 현장 이동용 단체 셔틀 및 출퇴근 버스" },
  { name: "CableCar", label: "케이블카/리프트", icon: CableCar, category: "이사·청소·파트너 서비스", desc: "고층 화물 운반용 특수 리프트 및 케이블 장비" },
  { name: "CarFront", label: "현장방문차량", icon: CarFront, category: "이사·청소·파트너 서비스", desc: "방문 견적 및 현장 점검용 이동 차량" },
  { name: "CarTaxiFront", label: "긴급출동차량", icon: CarTaxiFront, category: "이사·청소·파트너 서비스", desc: "당일 긴급 배차 및 긴급 지원 차량" },
  { name: "Caravan", label: "현장이동사무소", icon: Caravan, category: "이사·청소·파트너 서비스", desc: "대규모 이전 현장 임시 베이스캠프 및 휴게 공간" },
  { name: "Milestone", label: "이동이정표", icon: Milestone, category: "이사·청소·파트너 서비스", desc: "이사 경로 주요 경유지 및 도착 거리 이정표" },
  { name: "Route", label: "운송경로", icon: Route, category: "이사·청소·파트너 서비스", desc: "출발지에서 도착지까지 최적 화물 운송 노선" },
  { name: "RouteOff", label: "경로이탈경고", icon: RouteOff, category: "이사·청소·파트너 서비스", desc: "지정 운송 경로 이탈 시 알림 안내" },
  { name: "Ship", label: "해상화물운송", icon: Ship, category: "이사·청소·파트너 서비스", desc: "제주도 및 도서산간 이사용 페리·해상 화물선" },
  { name: "ShipWheel", label: "운송방향키", icon: ShipWheel, category: "이사·청소·파트너 서비스", desc: "도서지역 물류 배차 및 운송 컨트롤" },
  { name: "TrainFront", label: "철도화물", icon: TrainFront, category: "이사·청소·파트너 서비스", desc: "장거리 대량 화물 및 철도 연계 물류" },
  { name: "TrainTrack", label: "철도화물노선", icon: TrainTrack, category: "이사·청소·파트너 서비스", desc: "전국 철도 화물 물류 허브 및 연계망" },
  { name: "BaggageClaim", label: "수하물수취", icon: BaggageClaim, category: "이사·청소·파트너 서비스", desc: "해외이사 및 장거리 이사 짐 수취 구역" },
  { name: "Luggage", label: "개인귀중품", icon: Luggage, category: "이사·청소·파트너 서비스", desc: "고객 직접 운반 필수 귀중품 및 여행용 가방" },
  { name: "Plane", label: "항공화물운송", icon: Plane, category: "이사·청소·파트너 서비스", desc: "해외 이사 및 긴급 화물 항공 특송" },
  { name: "PlaneLanding", label: "화물항공도착", icon: PlaneLanding, category: "이사·청소·파트너 서비스", desc: "도착지 공항 화물 인도 및 통관" },
  { name: "PlaneTakeoff", label: "화물항공출발", icon: PlaneTakeoff, category: "이사·청소·파트너 서비스", desc: "출발지 공항 화물 선적 및 출항" },
  { name: "Anchor", label: "해상정박고정", icon: Anchor, category: "이사·청소·파트너 서비스", desc: "선적 화물 흔들림 방지 고정 결속" },
  { name: "Bike", label: "오토바이퀵", icon: Bike, category: "이사·청소·파트너 서비스", desc: "계약서 서류 및 경량 부품 긴급 퀵배송" },
  { name: "Box", label: "표준이사박스", icon: Box, category: "이사·청소·파트너 서비스", desc: "의류·도서 규격화된 표준 단프라 이사 박스" },
  { name: "PackageMinus", label: "포장물출고", icon: PackageMinus, category: "이사·청소·파트너 서비스", desc: "보관 창고에서 고객 이삿짐 출고 처리" },
  { name: "PackagePlus", label: "포장물입고", icon: PackagePlus, category: "이사·청소·파트너 서비스", desc: "보관 이사 짐 창고 입고 및 추가 적재" },
  { name: "PackageSearch", label: "박스내용물조회", icon: PackageSearch, category: "이사·청소·파트너 서비스", desc: "번호별 이사 박스 포장 품목 상세 검색" },
  { name: "PackageX", label: "파손주의박스", icon: PackageX, category: "이사·청소·파트너 서비스", desc: "파손 위험 물품 분류 및 포장 불량 표시" },
  { name: "FileBox", label: "문서보관박스", icon: FileBox, category: "이사·청소·파트너 서비스", desc: "사무실 이전 중요 서류 및 바인더 전용 박스" },
  { name: "ArchiveRestore", label: "보관물품반출", icon: ArchiveRestore, category: "이사·청소·파트너 서비스", desc: "장기 보관 물품 원상 복구 및 반출" },
  { name: "ArchiveX", label: "폐기물박스", icon: ArchiveX, category: "이사·청소·파트너 서비스", desc: "이사 현장 배출 폐기물 및 폐가전 정리 박스" },
  { name: "Blocks", label: "완충블록", icon: Blocks, category: "이사·청소·파트너 서비스", desc: "가구 충격 방지용 코너 프로텍터 및 완충 블록" },
  { name: "BoxSelect", label: "적재구역지정", icon: BoxSelect, category: "이사·청소·파트너 서비스", desc: "차량 적재함 내 짐 배치 구역 선택" },
  { name: "FileArchive", label: "문서기록보관소", icon: FileArchive, category: "이사·청소·파트너 서비스", desc: "이전 완료 문서 장기 보존 서고 정리" },
  { name: "Biohazard", label: "특수오염방역", icon: Biohazard, category: "이사·청소·파트너 서비스", desc: "곰팡이, 유해 물질 및 특수 오염 방역 소독" },
  { name: "CloudRainWind", label: "외벽고압세척", icon: CloudRainWind, category: "이사·청소·파트너 서비스", desc: "발코니 창틀 및 건물 외벽 고압 물세척" },
  { name: "FireExtinguisher", label: "소화기비치", icon: FireExtinguisher, category: "이사·청소·파트너 서비스", desc: "청소 및 이사 작업 현장 필수 소화 설비 점검" },
  { name: "FlameKindling", label: "폐목재처리", icon: FlameKindling, category: "이사·청소·파트너 서비스", desc: "노후 폐가구 분해 목재 및 폐기물 처리" },
  { name: "Paintbrush2", label: "실리콘코킹시공", icon: Paintbrush2, category: "이사·청소·파트너 서비스", desc: "욕실·싱크대 줄눈 및 곰팡이 방지 실리콘 재시공" },
  { name: "Recycle", label: "분리수거배출", icon: Recycle, category: "이사·청소·파트너 서비스", desc: "이사 후 폐종이박스, 플라스틱 자원 재활용 분리수거" },
  { name: "ShowerHead", label: "수전욕실청소", icon: ShowerHead, category: "이사·청소·파트너 서비스", desc: "샤워기 수전 물때 제거 및 욕실 고온 살균" },
  { name: "Sprout", label: "피톤치드소독", icon: Sprout, category: "이사·청소·파트너 서비스", desc: "입주 청소 후 친환경 피톤치드 연무 시공" },
  { name: "TreePine", label: "친환경새집증후군", icon: TreePine, category: "이사·청소·파트너 서비스", desc: "새집증후군 유해물질 저감 및 공기 정화 케어" },
  { name: "Droplet", label: "세정약품방울", icon: Droplet, category: "이사·청소·파트너 서비스", desc: "고농축 친환경 찌든때 분해 세정 원액" },
  { name: "PaintBucket", label: "페인트도색보수", icon: PaintBucket, category: "이사·청소·파트너 서비스", desc: "문틀 및 발코니 탄성코트 페인트 보수" },
  { name: "Pipette", label: "정밀약품투입", icon: Pipette, category: "이사·청소·파트너 서비스", desc: "실리콘 곰팡이 제거제 정밀 도포" },
  { name: "FlaskConical", label: "소독약제배합", icon: FlaskConical, category: "이사·청소·파트너 서비스", desc: "전문 방역용 살균 소독 희석액 배합" },
  { name: "Anvil", label: "중작업공구", icon: Anvil, category: "이사·청소·파트너 서비스", desc: "금속 부품 교정 및 특수 중장비 정비" },
  { name: "Axe", label: "폐목재분해", icon: Axe, category: "이사·청소·파트너 서비스", desc: "대형 폐가구 배출을 위한 해체 작업" },
  { name: "Construction", label: "안전작업구역", icon: Construction, category: "이사·청소·파트너 서비스", desc: "사다리차 작업 구역 라바콘 설치 및 보행자 안전 통제" },
  { name: "Drill", label: "벽걸이전동타공", icon: Drill, category: "이사·청소·파트너 서비스", desc: "벽걸이 TV, 선반, 블라인드 설치용 전동 해머드릴" },
  { name: "Nut", label: "볼트너트체결", icon: Nut, category: "이사·청소·파트너 서비스", desc: "침대 프레임, 조립식 책상 볼트·너트 정밀 조립" },
  { name: "NutOff", label: "가구분해볼트풀림", icon: NutOff, category: "이사·청소·파트너 서비스", desc: "대형 가구 분해를 위한 볼트 너트 탈거" },
  { name: "PencilRuler", label: "가구배치실측설계", icon: PencilRuler, category: "이사·청소·파트너 서비스", desc: "현장 공간 치수 측정 및 가구 배치 도면 마킹" },
  { name: "Pickaxe", label: "파쇄철거작업", icon: Pickaxe, category: "이사·청소·파트너 서비스", desc: "발코니 화단 철거 및 인테리어 기초 해체" },
  { name: "ScissorsLineDashed", label: "바닥보양재절단", icon: ScissorsLineDashed, category: "이사·청소·파트너 서비스", desc: "바닥 스크래치 방지 텐플로트 플라베니아 보양재 재단" },
  { name: "DraftingCompass", label: "배치설계컴퍼스", icon: DraftingCompass, category: "이사·청소·파트너 서비스", desc: "도면 가구 회전 반경 및 동선 간섭 확인" },
  { name: "Cog", label: "기계부품조정", icon: Cog, category: "이사·청소·파트너 서비스", desc: "전동 침대 모터 및 가전 구동부 기계 점검" },
  { name: "Shovel", label: "화단흙정리", icon: Shovel, category: "이사·청소·파트너 서비스", desc: "베란다 화단 흙 정리 및 야외 조경 폐기물 처리" },
  { name: "Plug2", label: "콘센트연결", icon: Plug2, category: "이사·청소·파트너 서비스", desc: "대형 가전 전원 플러그 및 멀티탭 안전 배선" },
  { name: "PlugZap", label: "누전안전점검", icon: PlugZap, category: "이사·청소·파트너 서비스", desc: "가전 설치 후 전력 부하 및 누전 차단기 점검" },
  { name: "PlugZap2", label: "접지단자점검", icon: PlugZap2, category: "이사·청소·파트너 서비스", desc: "세탁기·냉장고 감전 예방 접지 플러그 확인" },
  { name: "PowerOff", label: "메인차단기차단", icon: PowerOff, category: "이사·청소·파트너 서비스", desc: "조명 탈부착 전 두꺼비집 메인 전원 차단" },
  { name: "PowerSquare", label: "벽면스위치교체", icon: PowerSquare, category: "이사·청소·파트너 서비스", desc: "인테리어 조명 스위치 및 월패드 점검" },
  { name: "Unplug", label: "가전플러그분리", icon: Unplug, category: "이사·청소·파트너 서비스", desc: "이사 출발 전 냉장고·세탁기 전원 플러그 안전 분리" },
  { name: "Heater", label: "보일러난방점검", icon: Heater, category: "이사·청소·파트너 서비스", desc: "입주 전 개별 보일러 난방 배관 및 온수 확인" },
  { name: "Airplay", label: "무선영상송출", icon: Airplay, category: "이사·청소·파트너 서비스", desc: "스마트 TV 벽걸이 설치 후 무선 화면 연결 테스트" },
  { name: "Cctv", label: "도난방지CCTV", icon: Cctv, category: "이사·청소·파트너 서비스", desc: "이사 현장 보안 감시 및 보관 창고 CCTV 모니터링" },
  { name: "Flashlight", label: "어두운틈새점검", icon: Flashlight, category: "이사·청소·파트너 서비스", desc: "싱크대 하부장 및 붙박이장 안쪽 손전등 점검" },
  { name: "FlashlightOff", label: "점검조명소등", icon: FlashlightOff, category: "이사·청소·파트너 서비스", desc: "현장 작업 완료 후 보조 조명 소등" },
  { name: "LampCeiling", label: "천장조명탈부착", icon: LampCeiling, category: "이사·청소·파트너 서비스", desc: "거실 LED 실링라이트 및 샹들리에 이전 설치" },
  { name: "LampDesk", label: "스탠드조명포장", icon: LampDesk, category: "이사·청소·파트너 서비스", desc: "서재 데스크 스탠드 및 단스탠드 완충 포장" },
  { name: "LampFloor", label: "장스탠드포장", icon: LampFloor, category: "이사·청소·파트너 서비스", desc: "거실 플로어 램프 스크래치 방지 패브릭 포장" },
  { name: "LampWallDown", label: "벽부등하향조명", icon: LampWallDown, category: "이사·청소·파트너 서비스", desc: "발코니 및 복도 벽부등 탈착 점검" },
  { name: "LampWallUp", label: "벽부등상향조명", icon: LampWallUp, category: "이사·청소·파트너 서비스", desc: "인테리어 간접 조명 이전 설치 점검" },
  { name: "LightbulbOff", label: "소등확인", icon: LightbulbOff, category: "이사·청소·파트너 서비스", desc: "이사 퇴거 전 전 구역 소등 최종 확인" },
  { name: "MonitorSpeaker", label: "홈씨어터설치", icon: MonitorSpeaker, category: "이사·청소·파트너 서비스", desc: "PC 모니터 및 오디오 스피커 사운드 배선 세팅" },
  { name: "RockingChair", label: "안락의자포장", icon: RockingChair, category: "이사·청소·파트너 서비스", desc: "리클라이너 및 흔들의자 모터 보호 포장" },
  { name: "Theater", label: "홈프로젝터설치", icon: Theater, category: "이사·청소·파트너 서비스", desc: "거실 빔프로젝터 및 스크린 이전 설치" },
  { name: "Tv2", label: "대형TV이전설치", icon: Tv2, category: "이사·청소·파트너 서비스", desc: "OLED 대형 TV 전용 하드케이스 패킹 및 이전" },
  { name: "BrickWall", label: "벽체크랙검수", icon: BrickWall, category: "이사·청소·파트너 서비스", desc: "입주 전 벽체 균열, 누수 흔적 및 마감 하자 검수" },
  { name: "DoorClosed", label: "문잠금확인", icon: DoorClosed, category: "이사·청소·파트너 서비스", desc: "퇴거 시 창문 및 현관문 도어락 잠금 확인" },
  { name: "Fence", label: "단독주택펜스", icon: Fence, category: "이사·청소·파트너 서비스", desc: "주택 마당 펜스 및 사다리차 진입 공간 확인" },
  { name: "Hotel", label: "임시숙소예약", icon: Hotel, category: "이사·청소·파트너 서비스", desc: "도배·장판 인테리어 기간 중 고객 임시 체류 숙소" },
  { name: "Factory", label: "공장이전전문", icon: Factory, category: "이사·청소·파트너 서비스", desc: "공장 기계설비, 중장비 및 물류센터 전문 이전" },
  { name: "AlarmSmoke", label: "화재감지기점검", icon: AlarmSmoke, category: "이사·청소·파트너 서비스", desc: "천장 단독경보형 화재 연기 감지기 작동 확인" },
  { name: "FileBadge", label: "화물운송면허", icon: FileBadge, category: "이사·청소·파트너 서비스", desc: "적재물 배상책임보험 및 정식 화물운송 허가증" },
  { name: "FileClock", label: "견적유효시간", icon: FileClock, category: "이사·청소·파트너 서비스", desc: "제출된 이사·청소 견적서 유효 만료 시간" },
  { name: "FileKey", label: "보안계약서", icon: FileKey, category: "이사·청소·파트너 서비스", desc: "기업 사무실 이전 보안 유지 및 비밀 유지 서약서" },
  { name: "FolderClock", label: "작업이력보관", icon: FolderClock, category: "이사·청소·파트너 서비스", desc: "고객별 과거 이사·청소 서비스 히스토리 관리" },
  { name: "FolderSync", label: "견적데이터동기화", icon: FolderSync, category: "이사·청소·파트너 서비스", desc: "파트너 앱과 본사 서버 간 견적 상담 실시간 동기화" },
  { name: "Stamp", label: "공식계약날인", icon: Stamp, category: "이사·청소·파트너 서비스", desc: "전자계약서 최종 파트너 직인 및 날인 완료" },
  { name: "TimerReset", label: "작업소요시간초기화", icon: TimerReset, category: "이사·청소·파트너 서비스", desc: "작업 구간별 측정 스톱워치 리셋" },
  { name: "Watch", label: "정시방문도착", icon: Watch, category: "이사·청소·파트너 서비스", desc: "약속된 작업 시간 정시 도착 준수 체크" },
  { name: "CalendarHeart", label: "손없는날예약", icon: CalendarHeart, category: "이사·청소·파트너 서비스", desc: "이사 길일(손 없는 날) 특별 일정 예약" },
  { name: "BadgeAlert", label: "면허갱신경고", icon: BadgeAlert, category: "이사·청소·파트너 서비스", desc: "화물 운송 자격증 및 사업자등록증 갱신 안내" },
  { name: "BadgeHelp", label: "고객센터문의", icon: BadgeHelp, category: "이사·청소·파트너 서비스", desc: "견적 분쟁 및 현장 클레임 즉시 지원 상담" },
  { name: "BadgeInfo", label: "서비스안내뱃지", icon: BadgeInfo, category: "이사·청소·파트너 서비스", desc: "이사 유형별(포장, 반포장, 원룸) 상세 안내" },
  { name: "BadgeMinus", label: "할인쿠폰적용", icon: BadgeMinus, category: "이사·청소·파트너 서비스", desc: "비수기 평일 이사 고객 감사 할인 쿠폰" },
  { name: "BadgePlus", label: "옵션비용추가", icon: BadgePlus, category: "이사·청소·파트너 서비스", desc: "돌침대, 피아노, 에어컨 등 특수 품목 추가 비용" },
  { name: "HardHat", label: "현장안전모", icon: HardHat, category: "이사·청소·파트너 서비스", desc: "사다리차 하부 및 중량물 상하차 작업 필수 안전모" },
  { name: "LifeBuoy", label: "파손배상보증", icon: LifeBuoy, category: "이사·청소·파트너 서비스", desc: "작업 중 발생한 기물 파손 100% 손해배상 보증" },
  { name: "Siren", label: "긴급출동사이렌", icon: Siren, category: "이사·청소·파트너 서비스", desc: "현장 긴급 사고 발생 시 안전 관리팀 즉시 비상 연락" },
  { name: "Glasses", label: "보안경착용", icon: Glasses, category: "이사·청소·파트너 서비스", desc: "벽면 타공 및 천장 청소 시 이물질 방지 보호 안경" },

  // ==========================================
  // [신규 확장 100종] 앱 필수 공통 컨트롤러 (Fill & 체크박스/라디오 고도화 및 공통 UI)
  // ==========================================
  { name: "CheckboxSquare", label: "체크박스내장형", icon: CheckboxSquare, category: "앱 필수 공통 컨트롤러", desc: "박스 테두리 안쪽에 체크 표시가 정갈하게 내장된 아웃라인 체크박스" },
  { name: "CheckboxSquareFill", label: "체크박스채움형", icon: CheckboxSquareFill, category: "앱 필수 공통 컨트롤러", desc: "배경이 채워지고 체크 표시가 음각으로 파내진 솔리드 필 체크박스" },
  { name: "CheckboxCircleFill", label: "원형체크박스채움", icon: CheckboxCircleFill, category: "앱 필수 공통 컨트롤러", desc: "원형 배경이 채워지고 체크가 음각으로 파내진 솔리드 체크박스" },
  { name: "RadioUnchecked", label: "라디오미선택", icon: RadioUnchecked, category: "앱 필수 공통 컨트롤러", desc: "선택되지 않은 상태의 24px 표준 외곽선 라디오 버튼" },
  { name: "RadioCheckedFill", label: "라디오선택됨", icon: RadioCheckedFill, category: "앱 필수 공통 컨트롤러", desc: "외곽 링과 중앙 10px 대형 점이 또렷하게 채워진 선택 상태 라디오 버튼" },
  { name: "CheckCircleFill", label: "원형체크채움", icon: CheckCircleFill, category: "앱 필수 공통 컨트롤러", desc: "성공 완료 상태를 강조하는 솔리드 원형 체크 아이콘" },
  { name: "XCircleFill", label: "원형삭제채움", icon: XCircleFill, category: "앱 필수 공통 컨트롤러", desc: "오류 및 삭제 상태를 명확히 나타내는 솔리드 원형 닫기 아이콘" },
  { name: "AlertCircleFill", label: "원형경고채움", icon: AlertCircleFill, category: "앱 필수 공통 컨트롤러", desc: "주의 및 위험 알림을 표시하는 솔리드 원형 경고 아이콘" },
  { name: "HelpCircleFill", label: "원형도움말채움", icon: HelpCircleFill, category: "앱 필수 공통 컨트롤러", desc: "가이드 및 툴팁을 안내하는 솔리드 원형 도움말 아이콘" },
  { name: "InfoCircleFill", label: "원형정보채움", icon: InfoCircleFill, category: "앱 필수 공통 컨트롤러", desc: "공지 및 세부 사항을 안내하는 솔리드 원형 정보 아이콘" },
  { name: "HeartFill", label: "좋아요채움", icon: HeartFill, category: "앱 필수 공통 컨트롤러", desc: "위시리스트 및 파트너 찜하기 활성 상태의 솔리드 하트" },
  { name: "StarFill", label: "평점별채움", icon: StarFill, category: "앱 필수 공통 컨트롤러", desc: "고객 리뷰 및 별점 평가용 솔리드 별 아이콘" },
  { name: "BookmarkFill", label: "북마크채움", icon: BookmarkFill, category: "앱 필수 공통 컨트롤러", desc: "견적서 및 팁 글 보관 활성 상태의 솔리드 북마크" },
  { name: "BellFill", label: "알림벨채움", icon: BellFill, category: "앱 필수 공통 컨트롤러", desc: "새로운 알림 수신 상태를 강조하는 솔리드 알림 벨" },
  { name: "PinFill", label: "고정핀채움", icon: PinFill, category: "앱 필수 공통 컨트롤러", desc: "상단 공지 및 우선 고정 상태를 나타내는 솔리드 핀" },
  { name: "TagFill", label: "태그채움", icon: TagFill, category: "앱 필수 공통 컨트롤러", desc: "카테고리 및 프로모션 라벨용 솔리드 가격표 태그" },
  { name: "FolderFill", label: "폴더채움", icon: FolderFill, category: "앱 필수 공통 컨트롤러", desc: "자료함 및 첨부 파일 모음을 나타내는 솔리드 폴더" },
  { name: "ShieldFill", label: "방패보안채움", icon: ShieldFill, category: "앱 필수 공통 컨트롤러", desc: "보안 인증 및 안심 보증을 나타내는 솔리드 쉴드" },
  { name: "ShieldCheckFill", label: "인증방패채움", icon: ShieldCheckFill, category: "앱 필수 공통 컨트롤러", desc: "파트너 검증 완료 및 안전 결제를 보장하는 솔리드 체크 쉴드" },
  { name: "BadgeCheckFill", label: "공식인증뱃지채움", icon: BadgeCheckFill, category: "앱 필수 공통 컨트롤러", desc: "공식 마스터 파트너 및 우수 인증을 나타내는 솔리드 뱃지" },
  { name: "LockFill", label: "자물쇠잠금채움", icon: LockFill, category: "앱 필수 공통 컨트롤러", desc: "개인정보 보호 및 보안 잠금 상태를 나타내는 솔리드 자물쇠" },
  { name: "ThumbsUpFill", label: "추천채움", icon: ThumbsUpFill, category: "앱 필수 공통 컨트롤러", desc: "파트너 강력 추천 및 긍정 피드백용 솔리드 엄지척" },
  { name: "ThumbsDownFill", label: "비추천채움", icon: ThumbsDownFill, category: "앱 필수 공통 컨트롤러", desc: "개선 요청 및 부정 피드백용 솔리드 엄지다운" },
  { name: "EyeFill", label: "조회수채움", icon: EyeFill, category: "앱 필수 공통 컨트롤러", desc: "비밀번호 표시 및 견적서 열람 확인용 솔리드 눈" },
  { name: "PlayFill", label: "재생채움", icon: PlayFill, category: "앱 필수 공통 컨트롤러", desc: "동영상 및 오디오 가이드 재생용 솔리드 재생 버튼" },
  { name: "PauseFill", label: "일시정지채움", icon: PauseFill, category: "앱 필수 공통 컨트롤러", desc: "미디어 일시 정지용 솔리드 듀얼 바" },
  { name: "ZapFill", label: "번개채움", icon: ZapFill, category: "앱 필수 공통 컨트롤러", desc: "빠른 견적 및 번개 매칭을 나타내는 솔리드 번개" },
  { name: "AwardFill", label: "어워드메달채움", icon: AwardFill, category: "앱 필수 공통 컨트롤러", desc: "연간 최우수 파트너 시상 및 메달 엠블럼" },
  { name: "MapPinFill", label: "위치핀채움", icon: MapPinFill, category: "앱 필수 공통 컨트롤러", desc: "지도 위 현재 주소 및 작업 위치를 나타내는 솔리드 핀" },
  { name: "UserFill", label: "사용자프로필채움", icon: UserFill, category: "앱 필수 공통 컨트롤러", desc: "내 계정 및 프로필 마이페이지용 솔리드 아바타" },
  { name: "MessageSquareFill", label: "말풍선채움", icon: MessageSquareFill, category: "앱 필수 공통 컨트롤러", desc: "실시간 견적 채팅 및 문의 메시지용 솔리드 말풍선" },
  { name: "Bold", label: "굵게", icon: Bold, category: "앱 필수 공통 컨트롤러", desc: "텍스트 강조 및 헤드라인 볼드체 서식 적용" },
  { name: "Italic", label: "기울임꼴", icon: Italic, category: "앱 필수 공통 컨트롤러", desc: "인용구 및 보조 텍스트 이탤릭 서식 적용" },
  { name: "Underline", label: "밑줄", icon: Underline, category: "앱 필수 공통 컨트롤러", desc: "중요 텍스트 하단 밑줄 강조 서식" },
  { name: "Strikethrough", label: "취소선", icon: Strikethrough, category: "앱 필수 공통 컨트롤러", desc: "할인 전 원가 및 변경 전 정보 취소선 표시" },
  { name: "Subscript", label: "아래첨자", icon: Subscript, category: "앱 필수 공통 컨트롤러", desc: "화학식 및 세부 단위 표기용 아래첨자" },
  { name: "Superscript", label: "위첨자", icon: Superscript, category: "앱 필수 공통 컨트롤러", desc: "면적 단위(m²) 및 각주 번호 표기용 위첨자" },
  { name: "Heading1", label: "제목1대제목", icon: Heading1, category: "앱 필수 공통 컨트롤러", desc: "문서 최상위 대제목 서식 스타일" },
  { name: "Heading2", label: "제목2중제목", icon: Heading2, category: "앱 필수 공통 컨트롤러", desc: "문단 섹션 분할 중제목 서식 스타일" },
  { name: "Heading3", label: "제목3소제목", icon: Heading3, category: "앱 필수 공통 컨트롤러", desc: "항목별 세부 소제목 서식 스타일" },
  { name: "Pilcrow", label: "단락기호", icon: Pilcrow, category: "앱 필수 공통 컨트롤러", desc: "문단 나누기 및 줄바꿈 기호 표시" },
  { name: "TextQuote", label: "인용구블록", icon: TextQuote, category: "앱 필수 공통 컨트롤러", desc: "고객 후기 및 핵심 코멘트 인용 블록 서식" },
  { name: "Type", label: "폰트크기설정", icon: Type, category: "앱 필수 공통 컨트롤러", desc: "본문 타이포그래피 크기 및 서체 스타일 설정" },
  { name: "WrapText", label: "자동줄바꿈", icon: WrapText, category: "앱 필수 공통 컨트롤러", desc: "긴 텍스트 컨테이너 너비 맞춤 자동 줄바꿈" },
  { name: "Baseline", label: "텍스트기준선", icon: Baseline, category: "앱 필수 공통 컨트롤러", desc: "다국어 및 숫자 정렬용 폰트 베이스라인" },
  { name: "CaseSensitive", label: "대소문자구분", icon: CaseSensitive, category: "앱 필수 공통 컨트롤러", desc: "검색 및 필터링 시 대소문자 엄격 구분" },
  { name: "CaseUpper", label: "대문자변환", icon: CaseUpper, category: "앱 필수 공통 컨트롤러", desc: "영문 텍스트 전체 대문자 일괄 변환" },
  { name: "CaseLower", label: "소문자변환", icon: CaseLower, category: "앱 필수 공통 컨트롤러", desc: "영문 텍스트 전체 소문자 일괄 변환" },
  { name: "AlignLeft", label: "왼쪽정렬", icon: AlignLeft, category: "앱 필수 공통 컨트롤러", desc: "문단 및 텍스트 블록 좌측 정렬" },
  { name: "AlignCenter", label: "가운데정렬", icon: AlignCenter, category: "앱 필수 공통 컨트롤러", desc: "문단 및 텍스트 블록 중앙 정렬" },
  { name: "AlignRight", label: "오른쪽정렬", icon: AlignRight, category: "앱 필수 공통 컨트롤러", desc: "문단 및 금액 수치 우측 정렬" },
  { name: "AlignJustify", label: "양쪽정렬", icon: AlignJustify, category: "앱 필수 공통 컨트롤러", desc: "문단 양끝 맞춤 균등 정렬" },
  { name: "ListPlus", label: "리스트항목추가", icon: ListPlus, category: "앱 필수 공통 컨트롤러", desc: "체크리스트 및 상세 항목 새 줄 추가" },
  { name: "ListMinus", label: "리스트항목삭제", icon: ListMinus, category: "앱 필수 공통 컨트롤러", desc: "체크리스트 선택 항목 제거" },
  { name: "ListTree", label: "트리구조목록", icon: ListTree, category: "앱 필수 공통 컨트롤러", desc: "계층형 카테고리 및 폴더 트리 목록" },
  { name: "ListCollapse", label: "목록접기", icon: ListCollapse, category: "앱 필수 공통 컨트롤러", desc: "하위 리스트 일괄 아코디언 접기" },
  { name: "Highlighter", label: "형광펜하이라이트", icon: Highlighter, category: "앱 필수 공통 컨트롤러", desc: "계약서 주요 조항 형광펜 강조 표시" },
  { name: "Columns2", label: "2단컬럼분할", icon: Columns2, category: "앱 필수 공통 컨트롤러", desc: "화면 좌우 2열 그리드 레이아웃 분할" },
  { name: "Columns3", label: "3단컬럼분할", icon: Columns3, category: "앱 필수 공통 컨트롤러", desc: "화면 좌우 3열 카드 그리드 레이아웃 분할" },
  { name: "Rows2", label: "2행가로분할", icon: Rows2, category: "앱 필수 공통 컨트롤러", desc: "상하 2단 행 레이아웃 분할" },
  { name: "Rows3", label: "3행가로분할", icon: Rows3, category: "앱 필수 공통 컨트롤러", desc: "상중하 3단 행 레이아웃 분할" },
  { name: "PanelLeft", label: "좌측사이드바", icon: PanelLeft, category: "앱 필수 공통 컨트롤러", desc: "관리자 좌측 사이드 네비게이션 패널" },
  { name: "PanelRight", label: "우측인스펙터패널", icon: PanelRight, category: "앱 필수 공통 컨트롤러", desc: "속성 설정 및 세부 정보 우측 패널" },
  { name: "PanelTop", label: "상단알림바", icon: PanelTop, category: "앱 필수 공통 컨트롤러", desc: "글로벌 프로모션 및 공지용 상단 패널" },
  { name: "PanelBottom", label: "하단바텀시트패널", icon: PanelBottom, category: "앱 필수 공통 컨트롤러", desc: "모바일 액션 및 옵션 선택 하단 패널" },
  { name: "PanelLeftClose", label: "좌측패널접기", icon: PanelLeftClose, category: "앱 필수 공통 컨트롤러", desc: "작업 화면 확장을 위한 좌측 패널 축소" },
  { name: "PanelLeftOpen", label: "좌측패널열기", icon: PanelLeftOpen, category: "앱 필수 공통 컨트롤러", desc: "숨겨진 좌측 메뉴 사이드바 펼치기" },
  { name: "PanelRightClose", label: "우측패널접기", icon: PanelRightClose, category: "앱 필수 공통 컨트롤러", desc: "인스펙터 패널 닫기 및 뷰어 집중" },
  { name: "PanelRightOpen", label: "우측패널열기", icon: PanelRightOpen, category: "앱 필수 공통 컨트롤러", desc: "견적서 속성 편집 패널 펼치기" },
  { name: "SplitSquareVertical", label: "수직스플릿뷰", icon: SplitSquareVertical, category: "앱 필수 공통 컨트롤러", desc: "작업 도면과 견적표 수직 분할 뷰" },
  { name: "SplitSquareHorizontal", label: "수평스플릿뷰", icon: SplitSquareHorizontal, category: "앱 필수 공통 컨트롤러", desc: "비교 화면 좌우 수평 분할 뷰" },
  { name: "LayoutTemplate", label: "템플릿레이아웃", icon: LayoutTemplate, category: "앱 필수 공통 컨트롤러", desc: "표준 견적서 서식 및 페이지 템플릿 선택" },
  { name: "Undo", label: "실행취소", icon: Undo, category: "앱 필수 공통 컨트롤러", desc: "마지막 편집 및 입력 작업 1단계 취소" },
  { name: "Redo", label: "다시실행", icon: Redo, category: "앱 필수 공통 컨트롤러", desc: "취소했던 작업을 다시 앞으로 복구" },
  { name: "Undo2", label: "이전단계되돌리기", icon: Undo2, category: "앱 필수 공통 컨트롤러", desc: "단계별 마법사 이전 폼으로 이동" },
  { name: "Redo2", label: "다음단계진행", icon: Redo2, category: "앱 필수 공통 컨트롤러", desc: "단계별 마법사 다음 단계로 진행" },
  { name: "MousePointer2", label: "포인터커서", icon: MousePointer2, category: "앱 필수 공통 컨트롤러", desc: "캔버스 가구 배치 자유 선택 포인터" },
  { name: "Hand", label: "핸드패닝툴", icon: Hand, category: "앱 필수 공통 컨트롤러", desc: "도면 및 고화질 도면 드래그 화면 이동 손도구" },
  { name: "UserCog", label: "파트너계정관리", icon: UserCog, category: "앱 필수 공통 컨트롤러", desc: "기사 정보, 사업자 번호 및 정산 계좌 관리" },
  { name: "Volume1", label: "낮은볼륨", icon: Volume1, category: "앱 필수 공통 컨트롤러", desc: "효과음 및 안내 음성 1단계 볼륨" },
  { name: "Volume2", label: "표준볼륨", icon: Volume2, category: "앱 필수 공통 컨트롤러", desc: "안내 음성 기본 볼륨 레벨" },
  { name: "VolumeX", label: "음소거", icon: VolumeX, category: "앱 필수 공통 컨트롤러", desc: "알림음 및 비디오 소리 즉시 무음 처리" },
  { name: "PlayCircle", label: "원형재생", icon: PlayCircle, category: "앱 필수 공통 컨트롤러", desc: "튜토리얼 영상 모달 원형 재생 버튼" },
  { name: "PauseCircle", label: "원형일시정지", icon: PauseCircle, category: "앱 필수 공통 컨트롤러", desc: "영상 재생 일시 멈춤 원형 버튼" },
  { name: "StopCircle", label: "원형정지", icon: StopCircle, category: "앱 필수 공통 컨트롤러", desc: "음성 녹음 및 영상 정지 원형 버튼" },
  { name: "FastForward", label: "빨리감기", icon: FastForward, category: "앱 필수 공통 컨트롤러", desc: "동영상 2배속 재생 및 10초 건너뛰기" },
  { name: "Rewind", label: "되감기", icon: Rewind, category: "앱 필수 공통 컨트롤러", desc: "작업 안내 영상 10초 앞으로 되감기" },
  { name: "Repeat1", label: "한곡반복", icon: Repeat1, category: "앱 필수 공통 컨트롤러", desc: "현장 안내 오디오 클립 연속 반복 청취" },
  { name: "VideoOff", label: "카메라끄기", icon: VideoOff, category: "앱 필수 공통 컨트롤러", desc: "비대면 견적 상담 중 카메라 영상 비활성화" },
  { name: "Fingerprint", label: "지문생체인증", icon: Fingerprint, category: "앱 필수 공통 컨트롤러", desc: "간편 결제 및 파트너 로그인 지문 인증" },
  { name: "Globe", label: "글로벌언어", icon: Globe, category: "앱 필수 공통 컨트롤러", desc: "한국어/영어 다국어 서비스 언어 변경" },
  { name: "SignalHigh", label: "네트워크양호", icon: SignalHigh, category: "앱 필수 공통 컨트롤러", desc: "모바일 데이터 및 와이파이 최상태 연결" },
  { name: "SignalLow", label: "네트워크불안정", icon: SignalLow, category: "앱 필수 공통 컨트롤러", desc: "지하 현장 데이터 통신 신호 약함 안내" },
  { name: "Sun", label: "라이트모드", icon: Sun, category: "앱 필수 공통 컨트롤러", desc: "낮 시간 밝은 테마 전환 토글" },
  { name: "Moon", label: "다크모드", icon: Moon, category: "앱 필수 공통 컨트롤러", desc: "야간 눈부심 방지 어두운 테마 전환 토글" },
  { name: "FileCode", label: "개발자코드문서", icon: FileCode, category: "앱 필수 공통 컨트롤러", desc: "API 연동 개발 문서 및 웹훅 명세서" },
  { name: "FileSymlink", label: "바로가기문서", icon: FileSymlink, category: "앱 필수 공통 컨트롤러", desc: "클라우드 공유 드라이브 링크 문서" },
  { name: "FolderMinus", label: "폴더삭제", icon: FolderMinus, category: "앱 필수 공통 컨트롤러", desc: "불필요한 첨부 사진 폴더 삭제" },
  { name: "FolderRoot", label: "루트최상위폴더", icon: FolderRoot, category: "앱 필수 공통 컨트롤러", desc: "최상위 시스템 파일 디렉토리" },
  { name: "Code2", label: "소스코드보기", icon: Code2, category: "앱 필수 공통 컨트롤러", desc: "디자인 시스템 컴포넌트 JSX 코드 미리보기" },
];
