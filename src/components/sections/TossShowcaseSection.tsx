import React, { useState } from 'react';
import { Search, Heart, SlidersHorizontal, ChevronDown, Check, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, RefreshCw, Plus, Settings } from 'lucide-react';

interface StockItem {
  id: number;
  rank: number;
  name: string;
  code: string;
  logoBg: string;
  logoText: string;
  price: number;
  changeAmount: number;
  changeRate: number;
  category: string;
  marketCap: string;
  liked: boolean;
}

const INITIAL_STOCKS: StockItem[] = [
  { id: 1, rank: 1, name: '화천기계', code: '010660', logoBg: 'bg-[#0055A5]', logoText: '화천', price: 3640, changeAmount: -115, changeRate: -3.06, category: '산업용 기계', marketCap: '828.3억원', liked: false },
  { id: 2, rank: 2, name: 'BGF리테일', code: '282330', logoBg: 'bg-[#009E49]', logoText: 'BGF', price: 144400, changeAmount: -5800, changeRate: -3.86, category: '편의점', marketCap: '2.6조원', liked: true },
  { id: 3, rank: 3, name: '롯데칠성', code: '005300', logoBg: 'bg-[#ED1C24]', logoText: '롯데', price: 110800, changeAmount: -1000, changeRate: -0.89, category: '음료·주류', marketCap: '1.1조원', liked: false },
  { id: 4, rank: 4, name: '티웨이홀딩스', code: '004870', logoBg: 'bg-[#FF4500]', logoText: '티웨이', price: 1360, changeAmount: -27, changeRate: -1.94, category: '건설자재·항공', marketCap: '313.9억원', liked: false },
  { id: 5, rank: 5, name: 'KT', code: '030200', logoBg: 'bg-[#111111]', logoText: 'kt', price: 53500, changeAmount: 1700, changeRate: 3.28, category: '이동통신사', marketCap: '13.0조원', liked: true },
  { id: 6, rank: 6, name: '삼성바이오로직스', code: '207940', logoBg: 'bg-[#034EA2]', logoText: 'SAMSUNG', price: 1517000, changeAmount: -3000, changeRate: -0.19, category: '바이로서비스', marketCap: '70.3조원', liked: false },
  { id: 7, rank: 7, name: '대웅', code: '003090', logoBg: 'bg-[#E57200]', logoText: '대웅', price: 16160, changeAmount: -480, changeRate: -2.88, category: '지주사', marketCap: '1.0조원', liked: false },
  { id: 8, rank: 8, name: '리메드', code: '302550', logoBg: 'bg-[#2E3192]', logoText: 'REMED', price: 2445, changeAmount: -85, changeRate: -3.35, category: '의료기기', marketCap: '738.7억원', liked: false },
  { id: 9, rank: 9, name: '동구바이오제약', code: '006620', logoBg: 'bg-[#0072BC]', logoText: '동구', price: 3285, changeAmount: -80, changeRate: -2.37, category: '제약', marketCap: '976.3억원', liked: false },
  { id: 10, rank: 10, name: '빙그레', code: '005180', logoBg: 'bg-[#ED1B24]', logoText: '빙그레', price: 82200, changeAmount: -1500, changeRate: -1.79, category: '아이스크림·유가공', marketCap: '7,444.8억원', liked: false },
  { id: 11, rank: 11, name: '하이트진로', code: '000080', logoBg: 'bg-[#4B92DB]', logoText: '진로', price: 16620, changeAmount: -130, changeRate: -0.77, category: '주류', marketCap: '1.2조원', liked: false },
  { id: 12, rank: 12, name: '강원랜드', code: '035250', logoBg: 'bg-[#009688]', logoText: '강원', price: 14550, changeAmount: 30, changeRate: 0.20, category: '카지노·레저', marketCap: '3.1조원', liked: false },
];

export const TossShowcaseSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'stocks' | 'order'>('stocks');
  const [stocks, setStocks] = useState<StockItem[]>(INITIAL_STOCKS);
  const [selectedCategory, setSelectedCategory] = useState('연속 상승세');

  // Order panel state
  const [orderAction, setOrderAction] = useState<'buy' | 'sell' | 'wait'>('buy');
  const [orderPriceType, setOrderPriceType] = useState<'limit' | 'market'>('limit');
  const [targetPrice, setTargetPrice] = useState(190500);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [misuActive, setMisuActive] = useState(false);

  const toggleHeart = (id: number) => {
    setStocks(prev =>
      prev.map(s => (s.id === id ? { ...s, liked: !s.liked } : s))
    );
  };

  const categories = [
    { name: '연속 상승세', isHot: true },
    { name: '저평가 성장주', isHot: true },
    { name: '아직 저렴한 가치주', isHot: false },
    { name: '꾸준한 배당주', isHot: true },
    { name: '돈 잘버는 회사 찾기', isHot: false },
    { name: '저평가 탈출', isHot: false },
    { name: '미래의 배당왕 찾기', isHot: false },
    { name: '성장 기대주', isHot: false },
    { name: '쌍끌이 매수', isHot: false },
    { name: '고수익 저평가', isHot: false },
    { name: '안정 성장주', isHot: false },
  ];

  return (
    <section id="toss-showcase" className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-etc-03 pb-6">
        <span className="text-[13px] font-bold text-main-01">
          실제 프로덕션 화면 재현
        </span>
        <h2 className="text-[28px] font-extrabold text-text-01 tracking-da24 mt-1">
          토스증권 UI 디자인 쇼케이스
        </h2>
        <p className="text-[15px] text-text-03 mt-2 leading-relaxed max-w-3xl">
          토스 특유의 <strong>미니멀하고 직관적인 정보 위계, 라운드 필터 칩, 카드 그림자, 타이포그래피 규칙</strong>을 재사용 컴포넌트로 완벽 재현한 실전 화면 예시입니다.
        </p>
      </div>

      {/* Screen Mode Switcher */}
      <div className="flex items-center gap-3 bg-[#F4F5F7] p-1.5 rounded-[14px] w-fit border border-etc-03">
        <button
          type="button"
          onClick={() => setActiveView('stocks')}
          className={`px-4 py-2 rounded-[10px] text-[14px] font-bold transition-all ${
            activeView === 'stocks'
              ? 'bg-white text-text-01 shadow-sm'
              : 'text-text-03 hover:text-text-01'
          }`}
        >
          📈 1. 주식 골라보기 (랭킹 & 필터)
        </button>
        <button
          type="button"
          onClick={() => setActiveView('order')}
          className={`px-4 py-2 rounded-[10px] text-[14px] font-bold transition-all ${
            activeView === 'order'
              ? 'bg-white text-text-01 shadow-sm'
              : 'text-text-03 hover:text-text-01'
          }`}
        >
          💳 2. 종목 상세 및 주문 패널 (삼성전자)
        </button>
      </div>

      {/* Frame Container */}
      <div className="bg-[#F4F5F7] rounded-[24px] p-3 md:p-6 border border-etc-03 shadow-soft overflow-hidden">
        {/* Mock Toss Securities GNB */}
        <div className="bg-white rounded-t-[16px] px-6 py-3.5 border-b border-[#EBEEF2] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[12px] font-bold">
                T
              </span>
              <span className="font-extrabold text-[17px] text-text-01 tracking-tight">토스증권</span>
            </div>

            <nav className="hidden sm:flex items-center gap-5 text-[15px] font-medium text-text-03">
              <span className="hover:text-text-01 cursor-pointer">홈</span>
              <span className="hover:text-text-01 cursor-pointer">피드</span>
              <span className={`cursor-pointer pb-0.5 ${activeView === 'stocks' ? 'text-text-01 font-bold border-b-2 border-text-01' : ''}`}>
                주식 골라보기
              </span>
              <span className="hover:text-text-01 cursor-pointer">내 계좌</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-[#F2F4F6] px-3.5 py-1.5 rounded-[10px] text-[13px] text-text-03 w-[220px]">
              <Search className="w-3.5 h-3.5 text-text-04" />
              <span>/ 를 눌러 검색하세요</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#FFD400] flex items-center justify-center text-[13px] shadow-2xs">
              🐥
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* VIEW 1: 주식 골라보기 (Ranking & Filters) */}
        {/* ============================================================ */}
        {activeView === 'stocks' && (
          <div className="bg-white rounded-b-[16px] flex flex-col lg:flex-row min-h-[640px]">
            {/* Left Sidebar Category List */}
            <div className="w-full lg:w-[240px] border-b lg:border-b-0 lg:border-r border-[#EBEEF2] p-5 space-y-4 shrink-0 bg-[#FAFAFB]">
              <div className="text-[13px] font-bold text-text-04">주식 골라보기 목록</div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-text-04">내가 만든</span>
                <button
                  type="button"
                  className="w-full flex items-center gap-2 text-main-02 text-[14px] font-bold py-1.5 hover:opacity-80"
                >
                  <Plus className="w-4 h-4" />
                  <span>직접 만들기</span>
                </button>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-[11px] font-bold text-text-04">토스증권이 만든</span>
                <div className="space-y-0.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-[10px] text-[14px] transition-colors ${
                        selectedCategory === cat.name
                          ? 'bg-[#E8F3FF] text-[#1B64DA] font-bold'
                          : 'text-text-02 hover:bg-[#F2F4F6]'
                      }`}
                    >
                      <span>{cat.name}</span>
                      {cat.isHot && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-main-02">
                          인기
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content: Stocks Ranking Table */}
            <div className="flex-1 p-6 md:p-8 space-y-5 overflow-x-auto">
              <div>
                <h3 className="text-[22px] font-extrabold text-text-01">{selectedCategory}</h3>
                <p className="text-[13px] text-text-03 mt-0.5">일주일 연속 상승세를 보이는 주식</p>
              </div>

              {/* Filter Chips Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-etc-02 bg-white text-[13px] font-bold text-text-02 hover:bg-[#F8F9FA]"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-text-03" />
                  <span>필터추가</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-[#E8F3FF] text-[13px] font-bold text-[#1B64DA]"
                >
                  <span>🇰🇷 국내</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {['시장', '산업', '시가총액'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-etc-02 bg-white text-[13px] font-medium text-text-02 hover:bg-[#F8F9FA]"
                  >
                    <span>{f}</span>
                    <ChevronDown className="w-3 h-3 text-text-04" />
                  </button>
                ))}

                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-blue-200 bg-[#E8F3FF] text-[13px] font-medium text-[#1B64DA]"
                >
                  <span>주가등락률 · 1주일 전 보다 · 0% 이상</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-blue-200 bg-[#E8F3FF] text-[13px] font-medium text-[#1B64DA]"
                >
                  <span>주가 연속상승 · 5일 이상 연속</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Stock Ranking Table */}
              <div className="border border-[#EBEEF2] rounded-[14px] overflow-hidden">
                <table className="w-full text-left text-[14px]">
                  <thead className="bg-[#FAFAFB] border-b border-[#EBEEF2] text-[12px] text-text-04 font-medium">
                    <tr>
                      <th className="py-3 px-4 w-[60px] text-center">관심</th>
                      <th className="py-3 px-2 w-[40px] text-center">순위</th>
                      <th className="py-3 px-4 min-w-[180px]">
                        <div className="flex items-center gap-1.5">
                          <span>검색된 주식 · {stocks.length}개</span>
                          <RefreshCw className="w-3 h-3 cursor-pointer text-text-04 hover:text-text-01" />
                        </div>
                      </th>
                      <th className="py-3 px-4 text-right">현재가</th>
                      <th className="py-3 px-4 text-right">등락액</th>
                      <th className="py-3 px-4 text-right">등락률</th>
                      <th className="py-3 px-4 text-center">카테고리</th>
                      <th className="py-3 px-4 text-right">시가총액</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F2F4F6]">
                    {stocks.map((stock) => {
                      const isUp = stock.changeRate > 0;
                      return (
                        <tr key={stock.id} className="hover:bg-[#F9FAFB] transition-colors">
                          <td className="py-3 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => toggleHeart(stock.id)}
                              className="focus:outline-none transition-transform active:scale-125"
                            >
                              <Heart
                                className={`w-4 h-4 mx-auto ${
                                  stock.liked ? 'fill-[#F04452] text-[#F04452]' : 'text-text-04 hover:text-text-02'
                                }`}
                              />
                            </button>
                          </td>
                          <td className="py-3 px-2 text-center font-bold text-text-03 text-[13px]">
                            {stock.rank}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-7 h-7 rounded-full ${stock.logoBg} flex items-center justify-center text-white text-[10px] font-extrabold shrink-0`}>
                                {stock.logoText.slice(0, 2)}
                              </div>
                              <span className="font-bold text-text-01">{stock.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right font-bold text-text-01">
                            {stock.price.toLocaleString()}원
                          </td>
                          <td className={`py-3 px-4 text-right font-medium ${isUp ? 'text-[#F04452]' : 'text-[#3182F6]'}`}>
                            {isUp ? `+${stock.changeAmount.toLocaleString()}원` : `${stock.changeAmount.toLocaleString()}원`}
                          </td>
                          <td className={`py-3 px-4 text-right font-bold ${isUp ? 'text-[#F04452]' : 'text-[#3182F6]'}`}>
                            {isUp ? `+${stock.changeRate}%` : `${stock.changeRate}%`}
                          </td>
                          <td className="py-3 px-4 text-center text-[12px] text-text-03">
                            <span className="px-2 py-0.5 rounded bg-etc-04">{stock.category}</span>
                          </td>
                          <td className="py-3 px-4 text-right text-text-02 font-medium">
                            {stock.marketCap}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 2: 종목 상세 및 주문 패널 (Samsung Electronics) */}
        {/* ============================================================ */}
        {activeView === 'order' && (
          <div className="bg-white rounded-b-[16px] p-6 md:p-8 space-y-6">
            {/* Stock Top Info Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#EBEEF2] pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#034EA2] flex items-center justify-center text-white text-[10px] font-extrabold">
                    삼성
                  </div>
                  <h3 className="text-[22px] font-extrabold text-text-01">삼성전자</h3>
                  <span className="text-[13px] text-text-04 font-medium">005930</span>
                  <span className="text-[12px] text-text-03 bg-etc-04 px-2 py-0.5 rounded cursor-pointer hover:bg-etc-03">
                    기본 메모 작성
                  </span>
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[28px] font-extrabold text-[#3182F6]">190,400원</span>
                  <span className="text-[14px] font-bold text-[#3182F6]">
                    어제보다 -11,100원 (-5.50%)
                  </span>
                </div>
              </div>

              {/* Stat Summary Chips */}
              <div className="flex flex-wrap items-center gap-4 text-[12px] text-text-03 bg-[#FAFAFB] p-3 rounded-[12px] border border-etc-03">
                <div>
                  <span className="text-text-04">1일 범위:</span> 175,300원 ~ 196,500원
                </div>
                <div className="w-[1px] h-3 bg-etc-02" />
                <div>
                  <span className="text-text-04">거래대금:</span> 2위
                </div>
                <div className="w-[1px] h-3 bg-etc-02" />
                <div>
                  <span className="text-text-04">체결강도:</span> 98.45%
                </div>
              </div>
            </div>

            {/* Main Trading Layout: Left Analysis Chart + Center Order Box + Right Watchlist */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Transaction Ranking & Graph (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Transaction Ranking Card */}
                <div className="border border-[#EBEEF2] rounded-[18px] p-5 space-y-4 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-[#EBEEF2] pb-3">
                    <div>
                      <h4 className="text-[16px] font-bold text-text-01">거래원 매매 상위</h4>
                      <p className="text-[12px] text-text-04 mt-0.5">거래소에서 제공하는 주요 거래원의 실시간 데이터예요.</p>
                    </div>
                    <span className="text-[11px] text-text-04">11.06 14:33 기준</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Buy Top 5 */}
                    <div className="space-y-2">
                      <div className="text-[12px] font-bold text-[#F04452]">매수 상위 5</div>
                      {[
                        { rank: 1, name: 'KB증권', count: '3,345,386주', width: '95%' },
                        { rank: 2, name: 'JP모간', count: '3,249,491주', width: '92%' },
                        { rank: 3, name: '한국증권', count: '2,188,525주', width: '65%' },
                        { rank: 4, name: '키움증권', count: '1,892,393주', width: '55%' },
                        { rank: 5, name: 'NH투자증권', count: '1,797,411주', width: '50%' },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-[12px] py-1">
                          <span className="text-text-03 w-5">{item.rank}</span>
                          <span className="font-medium text-text-01 flex-1">{item.name}</span>
                          <span className="font-bold text-[#F04452] bg-red-50 px-2 py-0.5 rounded text-[11px]">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Sell Top 5 */}
                    <div className="space-y-2">
                      <div className="text-[12px] font-bold text-[#3182F6]">매도 상위 5</div>
                      {[
                        { rank: 1, name: 'KB증권', count: '3,569,472주', width: '98%' },
                        { rank: 2, name: '모간서울', count: '3,094,070주', width: '88%' },
                        { rank: 3, name: '한국증권', count: '2,744,707주', width: '78%' },
                        { rank: 4, name: '삼성증권', count: '1,744,572주', width: '50%' },
                        { rank: 5, name: 'NH투자증권', count: '1,707,561주', width: '48%' },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-[12px] py-1">
                          <span className="text-text-03 w-5">{item.rank}</span>
                          <span className="font-medium text-text-01 flex-1">{item.name}</span>
                          <span className="font-bold text-[#3182F6] bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trend Chart Mock */}
                <div className="border border-[#EBEEF2] rounded-[18px] p-5 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[15px] font-bold text-text-01">투자자별 매매 동향</h4>
                      <p className="text-[11px] text-text-04">외국인 순매수량은 장외거래를 포함한 매매수량이에요.</p>
                    </div>
                    <div className="flex gap-1.5 text-[11px]">
                      <span className="px-2 py-1 rounded bg-[#F2F4F6] text-text-02 font-bold cursor-pointer">일별 v</span>
                      <span className="px-2 py-1 rounded bg-[#F2F4F6] text-text-02 font-bold cursor-pointer">1주일 v</span>
                    </div>
                  </div>

                  {/* SVG Line Graph */}
                  <div className="h-[140px] bg-[#FAFAFB] rounded-[12px] p-3 flex items-end justify-between relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path
                        d="M 0,80 Q 75,70 150,40 T 300,10"
                        fill="none"
                        stroke="#3182F6"
                        strokeWidth="2.5"
                      />
                      <circle cx="300" cy="10" r="4" fill="#3182F6" />
                    </svg>
                    <span className="absolute bottom-2 right-4 text-[10px] text-text-04 font-mono">
                      순매수 +7,500,000주
                    </span>
                  </div>
                </div>
              </div>

              {/* Center / Right Column: Order Panel (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="border-2 border-[#EBEEF2] rounded-[20px] p-5 space-y-4 bg-white shadow-soft">
                  {/* Order Top Tabs */}
                  <div className="flex items-center justify-between border-b border-[#EBEEF2] pb-3 text-[13px] text-text-03 font-bold">
                    <span className="text-text-01 border-b-2 border-text-01 pb-1 cursor-pointer">일반주문</span>
                    <span className="hover:text-text-01 cursor-pointer">빠른주문</span>
                    <span className="hover:text-text-01 cursor-pointer">조건주문</span>
                  </div>

                  {/* Buy / Sell / Wait Segment */}
                  <div className="grid grid-cols-3 gap-1 bg-[#F2F4F6] p-1 rounded-[12px]">
                    <button
                      type="button"
                      onClick={() => setOrderAction('buy')}
                      className={`py-2 rounded-[9px] text-[14px] font-bold transition-all ${
                        orderAction === 'buy' ? 'bg-[#F04452] text-white shadow-sm' : 'text-text-03 hover:text-text-01'
                      }`}
                    >
                      구매
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderAction('sell')}
                      className={`py-2 rounded-[9px] text-[14px] font-bold transition-all ${
                        orderAction === 'sell' ? 'bg-[#3182F6] text-white shadow-sm' : 'text-text-03 hover:text-text-01'
                      }`}
                    >
                      판매
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderAction('wait')}
                      className={`py-2 rounded-[9px] text-[14px] font-bold transition-all ${
                        orderAction === 'wait' ? 'bg-text-01 text-white shadow-sm' : 'text-text-03 hover:text-text-01'
                      }`}
                    >
                      대기
                    </button>
                  </div>

                  {/* Limit vs Market Price Segment */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-text-03 font-medium">주문 유형</span>
                      <span className="text-text-01 font-bold">일반 주문 v</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-[#F2F4F6] p-1 rounded-[10px]">
                      <button
                        type="button"
                        onClick={() => setOrderPriceType('limit')}
                        className={`py-1.5 rounded-[8px] text-[13px] font-bold transition-all ${
                          orderPriceType === 'limit' ? 'bg-white text-text-01 shadow-2xs' : 'text-text-03'
                        }`}
                      >
                        지정가
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderPriceType('market')}
                        className={`py-1.5 rounded-[8px] text-[13px] font-bold transition-all ${
                          orderPriceType === 'market' ? 'bg-white text-text-01 shadow-2xs' : 'text-text-03'
                        }`}
                      >
                        시장가
                      </button>
                    </div>

                    {/* Price Input with +/- buttons */}
                    <div className="flex items-center border border-etc-02 rounded-[12px] px-3 py-2 bg-white justify-between">
                      <span className="text-[12px] text-text-04">구매 가격</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[16px] font-bold text-text-01">
                          {targetPrice.toLocaleString()}원
                        </span>
                        <div className="flex items-center gap-1 border-l border-etc-03 pl-2">
                          <button
                            type="button"
                            onClick={() => setTargetPrice(p => Math.max(0, p - 500))}
                            className="w-6 h-6 rounded bg-etc-04 flex items-center justify-center text-text-02 font-bold hover:bg-etc-03"
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => setTargetPrice(p => p + 500)}
                            className="w-6 h-6 rounded bg-etc-04 flex items-center justify-center text-text-02 font-bold hover:bg-etc-03"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Input */}
                    <div className="space-y-1.5">
                      <div className="flex items-center border border-etc-02 rounded-[12px] px-3 py-2 bg-white justify-between">
                        <span className="text-[12px] text-text-04">수량</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[16px] font-bold text-text-01">{orderQuantity}주</span>
                          <div className="flex items-center gap-1 border-l border-etc-03 pl-2">
                            <button
                              type="button"
                              onClick={() => setOrderQuantity(q => Math.max(1, q - 1))}
                              className="w-6 h-6 rounded bg-etc-04 flex items-center justify-center text-text-02 font-bold hover:bg-etc-03"
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => setOrderQuantity(q => q + 1)}
                              className="w-6 h-6 rounded bg-etc-04 flex items-center justify-center text-text-02 font-bold hover:bg-etc-03"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Quick Percentage Buttons */}
                      <div className="grid grid-cols-5 gap-1.5 text-[12px] font-bold text-text-03">
                        {['10%', '25%', '50%', '최대'].map((pct) => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => alert(`${pct} 수량이 적용되었습니다.`)}
                            className="py-1.5 rounded-[8px] bg-etc-04 hover:bg-etc-03 text-text-02 transition-colors"
                          >
                            {pct}
                          </button>
                        ))}
                        <button
                          type="button"
                          className="py-1.5 rounded-[8px] bg-etc-04 hover:bg-etc-03 text-text-02 flex items-center justify-center"
                        >
                          <Settings className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Total Amount */}
                    <div className="flex items-center justify-between text-[13px] pt-1">
                      <span className="text-text-03 font-medium">총 주문 금액</span>
                      <span className="text-[17px] font-extrabold text-text-01">
                        {(targetPrice * orderQuantity).toLocaleString()}원
                      </span>
                    </div>

                    {/* Misu Switch */}
                    <div className="flex items-center justify-between pt-1 border-t border-etc-03">
                      <span className="text-[12px] text-text-03">미수거래</span>
                      <button
                        type="button"
                        onClick={() => setMisuActive(!misuActive)}
                        className={`w-10 h-5 rounded-full transition-colors relative ${misuActive ? 'bg-[#F04452]' : 'bg-etc-02'}`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${misuActive ? 'right-0.5' : 'left-0.5'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Main CTA Button: 구매하기 */}
                  <button
                    type="button"
                    onClick={() => alert(`삼성전자 ${(targetPrice * orderQuantity).toLocaleString()}원 구매 주문이 접수되었습니다!`)}
                    className={`w-full h-[52px] rounded-[14px] font-bold text-[16px] text-white transition-all shadow-md active:scale-[0.98] ${
                      orderAction === 'buy'
                        ? 'bg-[#F04452] hover:bg-[#D93442]'
                        : orderAction === 'sell'
                        ? 'bg-[#3182F6] hover:bg-[#2069D6]'
                        : 'bg-text-01 hover:bg-[#222]'
                    }`}
                  >
                    {orderAction === 'buy' ? '구매하기' : orderAction === 'sell' ? '판매하기' : '대기 등록하기'}
                  </button>

                  <div className="text-center text-[11px] text-text-04">
                    주문 가능 금액: 1,500,000원
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
