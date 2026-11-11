import { parse, Font } from 'opentype.js';

export interface CardData {
  nameKo: string;
  nameEn: string;
  department: string;
  position: string;
  mobile: string;
  phone: string;
  fax: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  website: string;
}

export const DEFAULT_CARD_DATA: CardData = {
  nameKo: '이재원',
  nameEn: 'Jacob',
  department: 'Operation Team',
  position: '파트리더',
  mobile: '010. 1234. 5678',
  phone: '02. 518. 0060',
  fax: '02. 6455. 2483',
  email: 'jacob@da24.co.kr',
  addressLine1: '서울시 강남구 테헤란로7길 12',
  addressLine2: '허바허바빌딩 3층',
  website: 'da24.co.kr',
};

// Dimensions in millimeters and PostScript points (72 pt / inch, 1 mm = 2.83464567 pt)
export const MM_TO_PT = 2.83464567;
export const TRIM_WIDTH_MM = 50;
export const TRIM_HEIGHT_MM = 90;
export const BLEED_MM = 1;
export const WORK_WIDTH_MM = TRIM_WIDTH_MM + BLEED_MM * 2; // 52 mm
export const WORK_HEIGHT_MM = TRIM_HEIGHT_MM + BLEED_MM * 2; // 92 mm

export const WORK_WIDTH_PT = WORK_WIDTH_MM * MM_TO_PT; // ~147.402 pt
export const WORK_HEIGHT_PT = WORK_HEIGHT_MM * MM_TO_PT; // ~260.787 pt
export const BLEED_PT = BLEED_MM * MM_TO_PT; // ~2.835 pt

// Official Daisa Brand Blue: CMYK (100, 80, 0, 0)
export const DAISA_BLUE_HEX = '#003893';
export const DAISA_BLUE_CMYK = { c: 1.0, m: 0.8, y: 0.0, k: 0.0 };

// Official vector paths from LogoSection / SVG assets
export const DAISA_PATHS = {
  symbol:
    'M 173.362 1.090 C 168.841 2.400, 10.502 94.033, 6.924 97.409 C 0.049 103.899, 0.533 96.489, 0.187 200.500 C -0.034 266.807, 0.201 296.016, 0.985 299.647 C 1.745 303.165, 3.156 305.883, 5.442 308.237 C 7.451 310.306, 40.292 329.869, 87.643 357.205 C 131.015 382.243, 167.915 403.451, 169.645 404.335 C 174.374 406.752, 180.277 407.392, 184.647 405.962 C 188.027 404.856, 325.664 326.075, 344.749 314.323 C 350.140 311.003, 352.704 308.659, 354.749 305.179 L 357.500 300.500 357.811 206.500 C 358.029 140.330, 357.793 110.976, 357.012 107.353 C 356.262 103.873, 354.846 101.119, 352.640 98.847 C 349.027 95.127, 189.435 2.559, 183.895 0.970 C 179.913 -0.172, 177.627 -0.146, 173.362 1.090 M 166.220 66.250 C 152.673 73.570, 139.045 81.478, 139.022 82.030 C 139.010 82.322, 166.930 98.696, 201.068 118.418 C 241.084 141.537, 263.733 155.188, 264.818 156.842 C 266.300 159.103, 266.535 163.666, 266.797 195.204 C 266.961 214.892, 266.778 231, 266.391 231 C 266.005 231, 264.154 229.830, 262.279 228.399 C 260.403 226.968, 258.727 225.956, 258.555 226.149 C 258.382 226.342, 257.097 228.750, 255.700 231.500 C 254.303 234.250, 252.514 237.360, 251.725 238.412 C 250.331 240.270, 250.190 240.247, 246.712 237.594 L 243.134 234.865 241.648 237.183 C 240.830 238.457, 239.136 241.637, 237.882 244.250 C 236.627 246.862, 235.211 249, 234.734 249 C 234.257 249, 232.353 247.846, 230.503 246.435 L 227.140 243.869 223.083 251.185 L 219.026 258.500 219.013 222.654 C 219.002 190.948, 218.807 186.481, 217.326 183.975 C 216.330 182.289, 211.572 178.724, 205.576 175.171 C 178.614 159.196, 92.374 109.710, 91.462 109.690 C 90.335 109.665, 65.150 124.138, 60.884 127.262 C 59.446 128.316, 57.196 131.050, 55.884 133.339 L 53.500 137.500 53.500 203 L 53.500 268.500 55.800 273.170 C 57.066 275.738, 59.541 278.926, 61.300 280.254 C 63.060 281.582, 88.573 296.560, 117.996 313.538 C 168.049 342.421, 171.853 344.434, 177.103 344.814 C 181.184 345.109, 183.913 344.689, 187.107 343.275 C 191.354 341.394, 284.594 287.886, 294.280 281.771 C 297.184 279.938, 300.129 276.936, 301.780 274.126 L 304.500 269.500 304.500 204 C 304.500 131.726, 304.764 134.890, 298.184 128.359 C 295.573 125.768, 193.580 66.211, 186.682 63.250 C 180.866 60.753, 174.726 61.653, 166.220 66.250',
  wordmark:
    'M 6.557 1.250 C 6.349 1.938, 4.999 13.300, 3.559 26.500 C 2.119 39.700, 0.693 51.738, 0.391 53.250 L -0.159 56 9.921 56 C 15.464 56, 20 56.339, 20 56.753 C 20 57.168, 16.833 82.705, 12.962 113.503 C 7.763 154.861, 6.098 170.938, 6.590 175 C 9.327 197.557, 23.822 214.737, 46.914 222.795 C 50.845 224.166, 59.175 224.445, 105.196 224.746 L 158.891 225.096 159.453 221.798 C 160.001 218.577, 166 170.839, 166 169.696 C 166 169.378, 146.988 168.979, 123.750 168.809 C 78.419 168.477, 79.584 168.610, 73.661 163.128 C 70.304 160.021, 68.527 156.764, 67.635 152.086 C 67.101 149.281, 76.692 66.832, 78.551 58.250 L 79.038 56 128.845 56 L 178.653 56 182.131 28 L 185.610 0 96.273 0 C 25.674 0, 6.858 0.262, 6.557 1.250 M 205.544 3.250 C 204.957 6.738, 180 222.466, 180 224.052 C 180 224.626, 190.650 225, 207 225 C 221.850 225, 234 224.634, 234 224.186 C 234 223.739, 236.025 206.155, 238.500 185.110 C 240.975 164.066, 243 146.207, 243 145.424 C 243 144.275, 245.217 144, 254.500 144 C 261.225 144, 266 143.599, 266 143.035 C 266 142.504, 267.799 127.316, 269.998 109.285 C 272.197 91.253, 273.997 76.162, 273.998 75.750 C 273.999 75.338, 268.825 75, 262.500 75 C 256.175 75, 251.001 74.662, 251.002 74.250 C 251.005 73.254, 258.786 8.559, 259.481 3.750 L 260.024 0 233.057 -0 L 206.091 -0 205.544 3.250 M 381 0.648 C 365.689 2.947, 356.956 5.544, 346 11.055 C 336.385 15.891, 330.418 20.206, 321.794 28.558 C 307.123 42.769, 297.025 60.922, 293.085 80.165 C 291.312 88.826, 286.009 135.935, 286.004 143.066 C 285.989 166.355, 297.021 189.614, 315.490 205.237 C 324.086 212.508, 339.493 220.177, 350.500 222.662 C 362.685 225.414, 380.657 224.992, 393.340 221.657 C 432.200 211.439, 461.685 178.558, 467.908 138.500 C 470.928 119.061, 473.998 90.217, 473.985 81.411 C 473.952 59.255, 466.293 41.225, 450.024 25 C 436.449 11.463, 420.872 3.619, 402.489 1.062 C 395.127 0.038, 386.206 -0.134, 381 0.648 M 501 0.735 C 501 2.111, 476.015 217.481, 475.418 221.250 L 474.824 225 501.867 225 L 528.909 225 529.447 221.750 C 530.001 218.400, 555.018 2.090, 555.007 0.750 C 555.003 0.337, 542.850 0, 528 0 C 513.150 0, 501 0.331, 501 0.735 M 644.084 2.250 C 643.608 3.488, 621.756 53.550, 595.524 113.500 C 569.293 173.450, 547.596 223.063, 547.309 223.750 C 546.898 224.733, 552.772 225, 574.777 225 L 602.769 225 607.701 213.750 C 610.414 207.563, 624.078 176.293, 638.067 144.263 C 652.055 112.232, 663.627 86.599, 663.782 87.299 C 664.014 88.347, 650.160 211.029, 648.599 221.750 L 648.126 225 675.044 225 L 701.962 225 702.444 222.750 C 702.978 220.254, 728.028 3.239, 728.011 1.250 C 728.002 0.270, 719.023 0, 686.475 0 L 644.950 0 644.084 2.250 M 746.638 41.750 C 743.991 64.713, 738.131 115.345, 733.617 154.266 L 725.409 225.031 752.447 224.766 L 779.484 224.500 784.184 185 C 786.770 163.275, 788.911 145.162, 788.942 144.750 C 788.974 144.338, 802.725 144, 819.500 144 C 836.330 144, 850 143.607, 850 143.122 C 850 142.640, 849.416 141.760, 848.702 141.168 C 847.988 140.575, 845.951 138.068, 844.176 135.595 L 840.948 131.100 847.413 125.919 L 853.879 120.738 848.939 114.634 C 846.223 111.276, 844.018 108.297, 844.041 108.014 C 844.064 107.732, 846.745 105.475, 850 103 C 853.255 100.525, 855.936 98.132, 855.959 97.683 C 855.982 97.233, 853.958 94.359, 851.463 91.295 C 848.967 88.231, 847.054 85.359, 847.213 84.913 C 847.371 84.466, 850.142 82.053, 853.370 79.550 L 859.241 75 828.120 75 L 797 75 797 72.619 C 797 71.310, 798.800 55.450, 801 37.375 C 803.200 19.301, 805 3.497, 805 2.256 L 805 0 778.226 0 L 751.452 0 746.638 41.750 M 375.798 57.871 C 367.547 60.596, 361.943 64.188, 356.282 70.382 C 347.610 79.870, 346.192 84.441, 342.911 113.480 C 339.673 142.139, 340.840 149.844, 349.856 159.336 C 362.468 172.614, 385.172 171.820, 401.740 157.521 C 406.699 153.241, 412.442 143.485, 413.935 136.804 C 416.016 127.490, 420.117 88.490, 419.487 84 C 418.002 73.416, 410.903 63.552, 401.494 58.997 C 394.837 55.774, 383.636 55.284, 375.798 57.871',
};

// Font cache
let cachedFonts: {
  regular: Font | null;
  medium: Font | null;
  bold: Font | null;
} = {
  regular: null,
  medium: null,
  bold: null,
};

export async function loadFonts(): Promise<{
  regular: Font;
  medium: Font;
  bold: Font;
}> {
  if (cachedFonts.regular && cachedFonts.medium && cachedFonts.bold) {
    return cachedFonts as {
      regular: Font;
      medium: Font;
      bold: Font;
    };
  }

  const [resReg, resMed, resBold] = await Promise.all([
    fetch('/fonts/Pretendard-Regular.otf').then((r) => r.arrayBuffer()),
    fetch('/fonts/Pretendard-Medium.otf').then((r) => r.arrayBuffer()),
    fetch('/fonts/Pretendard-Bold.otf').then((r) => r.arrayBuffer()),
  ]);

  cachedFonts = {
    regular: parse(resReg),
    medium: parse(resMed),
    bold: parse(resBold),
  };

  return cachedFonts as {
    regular: Font;
    medium: Font;
    bold: Font;
  };
}

// Convert SVG path commands to PDF page stream operators (reversing Y coordinate for PDF bottom-left origin)
export function svgPathToPdfOps(
  pathData: string,
  pageHeightPt: number,
  scale = 1,
  dx = 0,
  dy = 0
): string {
  // Matches tokens like 'M x y', 'C x1 y1 x2 y2 x3 y3', 'L x y', 'Z'
  const commandRegex = /([MLCQZz])([^MLCQZz]*)/g;
  let match: RegExpExecArray | null;
  let pdf = '';

  while ((match = commandRegex.exec(pathData)) !== null) {
    const type = match[1];
    const rawArgs = match[2].trim();
    const args = rawArgs ? rawArgs.split(/[\s,]+/).map(Number) : [];

    if (type === 'M' && args.length >= 2) {
      const x = args[0] * scale + dx;
      const y = pageHeightPt - (args[1] * scale + dy);
      pdf += `${x.toFixed(3)} ${y.toFixed(3)} m\n`;
    } else if (type === 'L' && args.length >= 2) {
      const x = args[0] * scale + dx;
      const y = pageHeightPt - (args[1] * scale + dy);
      pdf += `${x.toFixed(3)} ${y.toFixed(3)} l\n`;
    } else if (type === 'C' && args.length >= 6) {
      for (let i = 0; i < args.length; i += 6) {
        const x1 = args[i] * scale + dx;
        const y1 = pageHeightPt - (args[i + 1] * scale + dy);
        const x2 = args[i + 2] * scale + dx;
        const y2 = pageHeightPt - (args[i + 3] * scale + dy);
        const x3 = args[i + 4] * scale + dx;
        const y3 = pageHeightPt - (args[i + 5] * scale + dy);
        pdf += `${x1.toFixed(3)} ${y1.toFixed(3)} ${x2.toFixed(3)} ${y2.toFixed(3)} ${x3.toFixed(3)} ${y3.toFixed(3)} c\n`;
      }
    } else if (type === 'Q' && args.length >= 4) {
      // Convert quadratic bezier to cubic approximation
      for (let i = 0; i < args.length; i += 4) {
        const x1 = args[i] * scale + dx;
        const y1 = pageHeightPt - (args[i + 1] * scale + dy);
        const x2 = args[i + 2] * scale + dx;
        const y2 = pageHeightPt - (args[i + 3] * scale + dy);
        pdf += `${x1.toFixed(3)} ${y1.toFixed(3)} ${x1.toFixed(3)} ${y1.toFixed(3)} ${x2.toFixed(3)} ${y2.toFixed(3)} c\n`;
      }
    } else if (type === 'Z' || type === 'z') {
      pdf += 'h\n';
    }
  }

  return pdf;
}

// Generate the fully outlined 2-Page Vector PDF (which AI natively opens as editable artboards with outlined text)
export async function generateOutlinedCardPdf(data: CardData): Promise<Blob> {
  const fonts = await loadFonts();

  // Page Dimensions (in Points)
  const W = WORK_WIDTH_PT; // 147.402 pt (52 mm)
  const H = WORK_HEIGHT_PT; // 260.787 pt (92 mm)
  const b = BLEED_PT; // 2.835 pt (1 mm)

  // -------------------------------------------------------------
  // Page 1: FRONT (아트보드 1 - Blue Background + White Vectors)
  // -------------------------------------------------------------
  let p1Stream = '';
  // 1. Blue Background: Full bleed (0 to W, 0 to H)
  // CMYK: 1.0 0.8 0.0 0.0
  p1Stream += `/CS0 cs 1 0.8 0 0 scn\n`;
  p1Stream += `0 0 ${W.toFixed(3)} ${H.toFixed(3)} re\nf\n`;

  // 2. White Fill for logos and text: CMYK 0 0 0 0
  p1Stream += `0 0 0 0 scn\n`;

  // Top Text: "No.1"
  const pNo1 = fonts.bold.getPath('No.1', 0, 0, 9.5);
  // Center horizontally: measure width
  const bNo1 = fonts.bold.getPaths('No.1', 0, 0, 9.5);
  let minX = 9999,
    maxX = -9999;
  bNo1.forEach((pt) => {
    const bb = pt.getBoundingBox();
    if (bb.x1 < minX) minX = bb.x1;
    if (bb.x2 > maxX) maxX = bb.x2;
  });
  const wNo1 = maxX - minX > 0 ? maxX - minX : 20;
  const xNo1 = (W - wNo1) / 2;
  const yNo1 = b + 27 * MM_TO_PT;
  p1Stream += 'q\n' + svgPathToPdfOps(pNo1.toPathData(2), H, 1, xNo1, yNo1) + 'f\nQ\n';

  // Top Text: "홈서비스 플랫폼"
  const pHome = fonts.medium.getPath('홈서비스 플랫폼', 0, 0, 7.8);
  const bHome = fonts.medium.getPaths('홈서비스 플랫폼', 0, 0, 7.8);
  minX = 9999;
  maxX = -9999;
  bHome.forEach((pt) => {
    const bb = pt.getBoundingBox();
    if (bb.x1 < minX) minX = bb.x1;
    if (bb.x2 > maxX) maxX = bb.x2;
  });
  const wHome = maxX - minX > 0 ? maxX - minX : 50;
  const xHome = (W - wHome) / 2;
  const yHome = yNo1 + 3.8 * MM_TO_PT;
  p1Stream += 'q\n' + svgPathToPdfOps(pHome.toPathData(2), H, 1, xHome, yHome) + 'f\nQ\n';

  // Divider line: centered, width 6mm, height 0.3mm
  const wDiv = 6.5 * MM_TO_PT;
  const xDiv = (W - wDiv) / 2;
  const yDiv = yHome + 3.5 * MM_TO_PT;
  p1Stream += `${xDiv.toFixed(3)} ${(H - yDiv).toFixed(3)} ${wDiv.toFixed(3)} 0.75 re\nf\n`;

  // Center Front Logo: Symbol + Wordmark
  // Symbol viewbox: 359 x 408
  const symW = 16.5 * MM_TO_PT;
  const symScale = symW / 359;
  const symH = 408 * symScale;
  const symX = (W - symW) / 2;
  const symY = b + 48 * MM_TO_PT;
  p1Stream += 'q\n' + svgPathToPdfOps(DAISA_PATHS.symbol, H, symScale, symX, symY) + 'f\nQ\n';

  // Wordmark viewbox: 860 x 225
  const wmW = 23.5 * MM_TO_PT;
  const wmScale = wmW / 860;
  const wmX = (W - wmW) / 2;
  const wmY = symY + symH + 4.5 * MM_TO_PT;
  p1Stream += 'q\n' + svgPathToPdfOps(DAISA_PATHS.wordmark, H, wmScale, wmX, wmY) + 'f\nQ\n';

  // -------------------------------------------------------------
  // Page 2: BACK (아트보드 2 - White Background + Custom Outlines)
  // -------------------------------------------------------------
  let p2Stream = '';
  // 1. White Background
  p2Stream += `0 0 0 0 scn\n`;
  p2Stream += `0 0 ${W.toFixed(3)} ${H.toFixed(3)} re\nf\n`;

  // 2. Watermark Symbol on Right (faint blue)
  // In CMYK: 1.0 0.8 0 0 with low density, or 0.08 0.06 0 0
  p2Stream += `0.08 0.06 0 0 scn\n`;
  const bgSymW = 27 * MM_TO_PT;
  const bgSymScale = bgSymW / 359;
  const bgSymX = W - bgSymW - b - 1.5 * MM_TO_PT;
  const bgSymY = b + 32 * MM_TO_PT;
  p2Stream += 'q\n' + svgPathToPdfOps(DAISA_PATHS.symbol, H, bgSymScale, bgSymX, bgSymY) + 'f\nQ\n';

  // 3. Top-left Wordmark in Blue
  p2Stream += `/CS0 cs 1 0.8 0 0 scn\n`;
  const backWmW = 19 * MM_TO_PT;
  const backWmScale = backWmW / 860;
  const backWmX = b + 6.5 * MM_TO_PT;
  const backWmY = b + 10 * MM_TO_PT;
  p2Stream += 'q\n' + svgPathToPdfOps(DAISA_PATHS.wordmark, H, backWmScale, backWmX, backWmY) + 'f\nQ\n';

  // 4. Name & Title Block
  // Name in Blue: "이재원 / Jacob"
  const nameText = `${data.nameKo || '이재원'} / ${data.nameEn || 'Jacob'}`;
  const nameY = b + 29 * MM_TO_PT;
  const pName = fonts.bold.getPath(nameText, 0, 0, 10.5);
  p2Stream += 'q\n' + svgPathToPdfOps(pName.toPathData(2), H, 1, backWmX, nameY) + 'f\nQ\n';

  // Department & Position in Dark Gray (CMYK: 0 0 0 0.9 = K:90%)
  p2Stream += `0 0 0 0.9 scn\n`;
  const pDept = fonts.regular.getPath(data.department || 'Operation Team', 0, 0, 7.8);
  const deptY = nameY + 4.2 * MM_TO_PT;
  p2Stream += 'q\n' + svgPathToPdfOps(pDept.toPathData(2), H, 1, backWmX, deptY) + 'f\nQ\n';

  const pPos = fonts.regular.getPath(data.position || '파트리더', 0, 0, 7.8);
  const posY = deptY + 3.4 * MM_TO_PT;
  p2Stream += 'q\n' + svgPathToPdfOps(pPos.toPathData(2), H, 1, backWmX, posY) + 'f\nQ\n';

  // 5. Contact Info Block
  const contactStartY = b + 55 * MM_TO_PT;
  const labelX = backWmX;
  const valueX = labelX + 4.2 * MM_TO_PT;
  const contactItems = [
    { label: 'M', value: data.mobile || '010. 1234. 5678' },
    { label: 'T', value: data.phone || '02. 518. 0060' },
    { label: 'F', value: data.fax || '02. 6455. 2483' },
    { label: 'E', value: data.email || 'jacob@da24.co.kr' },
    { label: 'A', value: data.addressLine1 || '서울시 강남구 테헤란로7길 12' },
    { label: '', value: data.addressLine2 || '허바허바빌딩 3층' },
    { label: 'W', value: data.website || 'da24.co.kr' },
  ];

  let curY = contactStartY;
  for (const item of contactItems) {
    if (item.label) {
      // Label in Bold K:100%
      p2Stream += `0 0 0 1 scn\n`;
      const pLabel = fonts.bold.getPath(item.label, 0, 0, 7.2);
      p2Stream += 'q\n' + svgPathToPdfOps(pLabel.toPathData(2), H, 1, labelX, curY) + 'f\nQ\n';
    }

    if (item.value) {
      // Value in Medium/Regular K:85%
      p2Stream += `0 0 0 0.85 scn\n`;
      const pVal = fonts.regular.getPath(item.value, 0, 0, 7.2);
      p2Stream += 'q\n' + svgPathToPdfOps(pVal.toPathData(2), H, 1, valueX, curY) + 'f\nQ\n';
    }
    curY += 3.4 * MM_TO_PT;
  }

  // -------------------------------------------------------------
  // Construct Valid PDF 1.6 Document with BleedBox & TrimBox
  // -------------------------------------------------------------
  const pdfBytes = buildTwoPagePdf({
    workWidthPt: W,
    workHeightPt: H,
    bleedPt: b,
    trimWidthPt: TRIM_WIDTH_MM * MM_TO_PT,
    trimHeightPt: TRIM_HEIGHT_MM * MM_TO_PT,
    page1Ops: p1Stream,
    page2Ops: p2Stream,
  });

  return new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
}

// Low-level pure PDF assembler ensuring Adobe Illustrator Artboards & CMYK compliance
function buildTwoPagePdf(params: {
  workWidthPt: number;
  workHeightPt: number;
  bleedPt: number;
  trimWidthPt: number;
  trimHeightPt: number;
  page1Ops: string;
  page2Ops: string;
}): Uint8Array {
  const { workWidthPt, workHeightPt, bleedPt, page1Ops, page2Ops } = params;

  const w = workWidthPt.toFixed(3);
  const h = workHeightPt.toFixed(3);
  const b = bleedPt.toFixed(3);
  const trimR = (workWidthPt - bleedPt).toFixed(3);
  const trimT = (workHeightPt - bleedPt).toFixed(3);

  // Objects list:
  // 1: Catalog
  // 2: Outlines
  // 3: Pages
  // 4: ColorSpace (CMYK Default)
  // 5: Page 1
  // 6: Stream Page 1
  // 7: Page 2
  // 8: Stream Page 2

  const p1Bytes = new TextEncoder().encode(page1Ops);
  const p2Bytes = new TextEncoder().encode(page2Ops);

  const objects: { id: number; body: string; stream?: Uint8Array }[] = [
    {
      id: 1,
      body: `<< /Type /Catalog /Pages 3 0 R >>`,
    },
    {
      id: 2,
      body: `<< /Type /Outlines /Count 0 >>`,
    },
    {
      id: 3,
      body: `<< /Type /Pages /Kids [5 0 R 7 0 R] /Count 2 >>`,
    },
    {
      id: 4,
      body: `[/DeviceCMYK]`,
    },
    {
      id: 5,
      body: `<< /Type /Page
/Parent 3 0 R
/MediaBox [0 0 ${w} ${h}]
/BleedBox [0 0 ${w} ${h}]
/TrimBox [${b} ${b} ${trimR} ${trimT}]
/ArtBox [${b} ${b} ${trimR} ${trimT}]
/Resources << /ColorSpace << /CS0 4 0 R >> >>
/Contents 6 0 R
>>`,
    },
    {
      id: 6,
      body: `<< /Length ${p1Bytes.length} >>\nstream\n`,
      stream: p1Bytes,
    },
    {
      id: 7,
      body: `<< /Type /Page
/Parent 3 0 R
/MediaBox [0 0 ${w} ${h}]
/BleedBox [0 0 ${w} ${h}]
/TrimBox [${b} ${b} ${trimR} ${trimT}]
/ArtBox [${b} ${b} ${trimR} ${trimT}]
/Resources << /ColorSpace << /CS0 4 0 R >> >>
/Contents 8 0 R
>>`,
    },
    {
      id: 8,
      body: `<< /Length ${p2Bytes.length} >>\nstream\n`,
      stream: p2Bytes,
    },
  ];

  // Assemble with exact byte offsets for xref table
  let pdfString = '%PDF-1.6\n%\xE2\xE3\xCF\xD3\n';
  const offsets: number[] = [];

  const chunks: (Uint8Array | string)[] = [pdfString];
  let curOffset = new TextEncoder().encode(pdfString).length;

  for (const obj of objects) {
    offsets[obj.id] = curOffset;
    const header = `${obj.id} 0 obj\n${obj.body}`;
    chunks.push(header);
    curOffset += new TextEncoder().encode(header).length;

    if (obj.stream) {
      chunks.push(obj.stream);
      curOffset += obj.stream.length;
      const footer = '\nendstream\nendobj\n';
      chunks.push(footer);
      curOffset += new TextEncoder().encode(footer).length;
    } else {
      const footer = '\nendobj\n';
      chunks.push(footer);
      curOffset += new TextEncoder().encode(footer).length;
    }
  }

  // xref
  const xrefStart = curOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    const off = offsets[i] || 0;
    xref += off.toString().padStart(10, '0') + ' 00000 n \n';
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  chunks.push(xref);

  // Combine all chunks into one Uint8Array
  let totalLength = 0;
  const uint8Chunks: Uint8Array[] = chunks.map((c) => {
    if (typeof c === 'string') {
      const b = new TextEncoder().encode(c);
      totalLength += b.length;
      return b;
    } else {
      totalLength += c.length;
      return c;
    }
  });

  const finalBuf = new Uint8Array(totalLength);
  let pos = 0;
  for (const b of uint8Chunks) {
    finalBuf.set(b, pos);
    pos += b.length;
  }

  return finalBuf;
}
