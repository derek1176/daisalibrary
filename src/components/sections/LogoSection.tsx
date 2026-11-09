import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';

interface LogoSectionProps {
  mode?: 'customer' | 'partner';
}

interface LogoVariant {
  id: string;
  name: string;
  filename: string;
  bgType: 'white' | 'blue' | 'dark';
  bgColor: string;
  borderColor: string;
  logoColorName: string;
  svgContent: string;
}

interface LogoGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedUse: string;
  variants: LogoVariant[];
}

export const LogoSection: React.FC<LogoSectionProps> = ({ mode = 'customer' }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const PATHS = {
    symbol: "M 173.362 1.090 C 168.841 2.400, 10.502 94.033, 6.924 97.409 C 0.049 103.899, 0.533 96.489, 0.187 200.500 C -0.034 266.807, 0.201 296.016, 0.985 299.647 C 1.745 303.165, 3.156 305.883, 5.442 308.237 C 7.451 310.306, 40.292 329.869, 87.643 357.205 C 131.015 382.243, 167.915 403.451, 169.645 404.335 C 174.374 406.752, 180.277 407.392, 184.647 405.962 C 188.027 404.856, 325.664 326.075, 344.749 314.323 C 350.140 311.003, 352.704 308.659, 354.749 305.179 L 357.500 300.500 357.811 206.500 C 358.029 140.330, 357.793 110.976, 357.012 107.353 C 356.262 103.873, 354.846 101.119, 352.640 98.847 C 349.027 95.127, 189.435 2.559, 183.895 0.970 C 179.913 -0.172, 177.627 -0.146, 173.362 1.090 M 166.220 66.250 C 152.673 73.570, 139.045 81.478, 139.022 82.030 C 139.010 82.322, 166.930 98.696, 201.068 118.418 C 241.084 141.537, 263.733 155.188, 264.818 156.842 C 266.300 159.103, 266.535 163.666, 266.797 195.204 C 266.961 214.892, 266.778 231, 266.391 231 C 266.005 231, 264.154 229.830, 262.279 228.399 C 260.403 226.968, 258.727 225.956, 258.555 226.149 C 258.382 226.342, 257.097 228.750, 255.700 231.500 C 254.303 234.250, 252.514 237.360, 251.725 238.412 C 250.331 240.270, 250.190 240.247, 246.712 237.594 L 243.134 234.865 241.648 237.183 C 240.830 238.457, 239.136 241.637, 237.882 244.250 C 236.627 246.862, 235.211 249, 234.734 249 C 234.257 249, 232.353 247.846, 230.503 246.435 L 227.140 243.869 223.083 251.185 L 219.026 258.500 219.013 222.654 C 219.002 190.948, 218.807 186.481, 217.326 183.975 C 216.330 182.289, 211.572 178.724, 205.576 175.171 C 178.614 159.196, 92.374 109.710, 91.462 109.690 C 90.335 109.665, 65.150 124.138, 60.884 127.262 C 59.446 128.316, 57.196 131.050, 55.884 133.339 L 53.500 137.500 53.500 203 L 53.500 268.500 55.800 273.170 C 57.066 275.738, 59.541 278.926, 61.300 280.254 C 63.060 281.582, 88.573 296.560, 117.996 313.538 C 168.049 342.421, 171.853 344.434, 177.103 344.814 C 181.184 345.109, 183.913 344.689, 187.107 343.275 C 191.354 341.394, 284.594 287.886, 294.280 281.771 C 297.184 279.938, 300.129 276.936, 301.780 274.126 L 304.500 269.500 304.500 204 C 304.500 131.726, 304.764 134.890, 298.184 128.359 C 295.573 125.768, 193.580 66.211, 186.682 63.250 C 180.866 60.753, 174.726 61.653, 166.220 66.250",
    wordmark: "M 6.557 1.250 C 6.349 1.938, 4.999 13.300, 3.559 26.500 C 2.119 39.700, 0.693 51.738, 0.391 53.250 L -0.159 56 9.921 56 C 15.464 56, 20 56.339, 20 56.753 C 20 57.168, 16.833 82.705, 12.962 113.503 C 7.763 154.861, 6.098 170.938, 6.590 175 C 9.327 197.557, 23.822 214.737, 46.914 222.795 C 50.845 224.166, 59.175 224.445, 105.196 224.746 L 158.891 225.096 159.453 221.798 C 160.001 218.577, 166 170.839, 166 169.696 C 166 169.378, 146.988 168.979, 123.750 168.809 C 78.419 168.477, 79.584 168.610, 73.661 163.128 C 70.304 160.021, 68.527 156.764, 67.635 152.086 C 67.101 149.281, 76.692 66.832, 78.551 58.250 L 79.038 56 128.845 56 L 178.653 56 182.131 28 L 185.610 0 96.273 0 C 25.674 0, 6.858 0.262, 6.557 1.250 M 205.544 3.250 C 204.957 6.738, 180 222.466, 180 224.052 C 180 224.626, 190.650 225, 207 225 C 221.850 225, 234 224.634, 234 224.186 C 234 223.739, 236.025 206.155, 238.500 185.110 C 240.975 164.066, 243 146.207, 243 145.424 C 243 144.275, 245.217 144, 254.500 144 C 261.225 144, 266 143.599, 266 143.035 C 266 142.504, 267.799 127.316, 269.998 109.285 C 272.197 91.253, 273.997 76.162, 273.998 75.750 C 273.999 75.338, 268.825 75, 262.500 75 C 256.175 75, 251.001 74.662, 251.002 74.250 C 251.005 73.254, 258.786 8.559, 259.481 3.750 L 260.024 0 233.057 -0 L 206.091 -0 205.544 3.250 M 381 0.648 C 365.689 2.947, 356.956 5.544, 346 11.055 C 336.385 15.891, 330.418 20.206, 321.794 28.558 C 307.123 42.769, 297.025 60.922, 293.085 80.165 C 291.312 88.826, 286.009 135.935, 286.004 143.066 C 285.989 166.355, 297.021 189.614, 315.490 205.237 C 324.086 212.508, 339.493 220.177, 350.500 222.662 C 362.685 225.414, 380.657 224.992, 393.340 221.657 C 432.200 211.439, 461.685 178.558, 467.908 138.500 C 470.928 119.061, 473.998 90.217, 473.985 81.411 C 473.952 59.255, 466.293 41.225, 450.024 25 C 436.449 11.463, 420.872 3.619, 402.489 1.062 C 395.127 0.038, 386.206 -0.134, 381 0.648 M 501 0.735 C 501 2.111, 476.015 217.481, 475.418 221.250 L 474.824 225 501.867 225 L 528.909 225 529.447 221.750 C 530.001 218.400, 555.018 2.090, 555.007 0.750 C 555.003 0.337, 542.850 0, 528 0 C 513.150 0, 501 0.331, 501 0.735 M 644.084 2.250 C 643.608 3.488, 621.756 53.550, 595.524 113.500 C 569.293 173.450, 547.596 223.063, 547.309 223.750 C 546.898 224.733, 552.772 225, 574.777 225 L 602.769 225 607.701 213.750 C 610.414 207.563, 624.078 176.293, 638.067 144.263 C 652.055 112.232, 663.627 86.599, 663.782 87.299 C 664.014 88.347, 650.160 211.029, 648.599 221.750 L 648.126 225 675.044 225 L 701.962 225 702.444 222.750 C 702.978 220.254, 728.028 3.239, 728.011 1.250 C 728.002 0.270, 719.023 0, 686.475 0 L 644.950 0 644.084 2.250 M 746.638 41.750 C 743.991 64.713, 738.131 115.345, 733.617 154.266 L 725.409 225.031 752.447 224.766 L 779.484 224.500 784.184 185 C 786.770 163.275, 788.911 145.162, 788.942 144.750 C 788.974 144.338, 802.725 144, 819.500 144 C 836.330 144, 850 143.607, 850 143.122 C 850 142.640, 849.416 141.760, 848.702 141.168 C 847.988 140.575, 845.951 138.068, 844.176 135.595 L 840.948 131.100 847.413 125.919 L 853.879 120.738 848.939 114.634 C 846.223 111.276, 844.018 108.297, 844.041 108.014 C 844.064 107.732, 846.745 105.475, 850 103 C 853.255 100.525, 855.936 98.132, 855.959 97.683 C 855.982 97.233, 853.958 94.359, 851.463 91.295 C 848.967 88.231, 847.054 85.359, 847.213 84.913 C 847.371 84.466, 850.142 82.053, 853.370 79.550 L 859.241 75 828.120 75 L 797 75 797 72.619 C 797 71.310, 798.800 55.450, 801 37.375 C 803.200 19.301, 805 3.497, 805 2.256 L 805 0 778.226 0 L 751.452 0 746.638 41.750 M 375.798 57.871 C 367.547 60.596, 361.943 64.188, 356.282 70.382 C 347.610 79.870, 346.192 84.441, 342.911 113.480 C 339.673 142.139, 340.840 149.844, 349.856 159.336 C 362.468 172.614, 385.172 171.820, 401.740 157.521 C 406.699 153.241, 412.442 143.485, 413.935 136.804 C 416.016 127.490, 420.117 88.490, 419.487 84 C 418.002 73.416, 410.903 63.552, 401.494 58.997 C 394.837 55.774, 383.636 55.284, 375.798 57.871",
    combination: "M 410 1.372 C 405.247 3.116, 247.078 94.601, 244.259 97.237 C 243.026 98.389, 241.114 101.199, 240.009 103.482 C 238.040 107.549, 238 109.534, 238 203.856 C 238 296.472, 238.071 300.219, 239.903 303.790 C 240.949 305.830, 242.862 308.472, 244.153 309.659 C 247.304 312.558, 405.449 403.848, 410.376 405.612 C 415.559 407.468, 419.679 407.330, 424.500 405.136 C 432.233 401.618, 585.534 312.720, 588.342 310.126 C 589.904 308.682, 592.042 305.830, 593.092 303.790 C 594.931 300.214, 595 296.571, 595 203.441 C 595 97.703, 595.317 103.492, 589.204 97.743 C 585.365 94.133, 426.071 2.391, 421.380 1.088 C 416.460 -0.278, 414.353 -0.225, 410 1.372 M 407.067 64.549 C 404.079 65.940, 399.129 68.574, 396.067 70.403 C 393.005 72.233, 387.209 75.627, 383.186 77.946 L 375.873 82.163 437.186 117.554 C 471.987 137.642, 499.689 154.262, 501.250 155.989 L 504 159.032 504 195.051 C 504 230.417, 503.965 231.051, 502.056 230.030 C 500.986 229.457, 499.835 228.542, 499.497 227.995 C 497.899 225.409, 495.333 227.330, 492.141 233.504 C 490.293 237.077, 488.442 240, 488.026 240 C 487.610 240, 486.071 239.057, 484.605 237.904 C 483.140 236.752, 481.283 236.061, 480.478 236.370 C 479.674 236.679, 477.572 239.857, 475.809 243.433 L 472.603 249.935 469.368 247.467 C 467.589 246.110, 465.679 245, 465.125 245 C 464.570 245, 462.532 247.811, 460.595 251.247 L 457.075 257.495 456.787 221.819 C 456.511 187.499, 456.421 186.036, 454.421 183.322 C 452.542 180.772, 437.782 172.016, 342.825 117.124 L 329.151 109.219 314.325 117.623 C 298.718 126.470, 293.705 130.804, 292.007 136.915 C 291.395 139.120, 291.009 164.782, 291.006 203.572 C 290.999 273.275, 290.952 272.705, 297.291 278.744 C 299.942 281.270, 394.471 336.608, 407.418 343.213 C 410.436 344.753, 412.747 345.122, 417.485 344.820 C 423.478 344.438, 425.024 343.629, 478.068 313.071 C 508.005 295.824, 533.794 280.540, 535.376 279.106 C 536.958 277.673, 539.086 274.700, 540.104 272.500 C 541.847 268.735, 541.955 264.684, 541.937 203.500 L 541.918 138.500 539.709 134.060 C 538.494 131.618, 535.925 128.386, 534 126.878 C 530.068 123.797, 429.295 65.446, 424.282 63.347 C 419.364 61.288, 413.138 61.723, 407.067 64.549 M 6.553 470.250 C 6.342 470.938, 4.985 482.300, 3.537 495.500 C 2.090 508.700, 0.666 520.737, 0.373 522.250 L -0.159 525 9.921 525 C 15.464 525, 20 525.283, 20 525.629 C 20 526.237, 7.572 626.345, 6.481 634.528 C 5.473 642.089, 7.704 652.895, 12.153 662 C 19.297 676.621, 32.963 687.784, 49 692.098 C 52.150 692.946, 69.320 693.433, 106.250 693.725 C 135.262 693.954, 159 693.980, 159 693.784 C 159 693.588, 160.574 681.294, 162.498 666.464 C 164.422 651.634, 165.997 638.938, 165.998 638.250 C 166 637.270, 156.915 637, 123.901 637 C 77.027 637, 77.690 637.087, 71.994 630.176 C 66.334 623.310, 66.358 621.509, 72.772 571 L 78.550 525.500 128.525 525 L 178.500 524.500 178.804 522 C 178.972 520.625, 180.571 508.137, 182.358 494.250 L 185.608 469 96.273 469 C 25.676 469, 6.857 469.262, 6.553 470.250 M 205.538 472.250 C 204.920 475.878, 180 691.211, 180 692.918 C 180 693.667, 188.300 694, 207 694 C 225.783 694, 234 693.669, 234 692.912 C 234 692.314, 236.025 674.705, 238.500 653.780 C 240.975 632.856, 243 615.120, 243 614.368 C 243 613.290, 245.439 613, 254.500 613 C 261.788 613, 266 612.619, 266 611.961 C 266 611.390, 267.800 596.107, 270 578 C 272.200 559.893, 274 544.610, 274 544.039 C 274 543.380, 269.760 543, 262.412 543 L 250.824 543 251.395 539.250 C 251.709 537.188, 253.547 522, 255.478 505.500 C 257.410 489, 259.238 474.038, 259.540 472.250 L 260.091 469 233.091 469 L 206.091 469 205.538 472.250 M 373.342 470.417 C 355.162 473.875, 337.105 482.891, 323.265 495.420 C 313.081 504.639, 302.344 520.935, 297.015 535.261 C 293.679 544.229, 292.165 552.664, 289.032 579.725 C 285.574 609.592, 285.374 616.052, 287.573 626.700 C 291.146 643.997, 297.187 655.151, 310 668.105 C 329.041 687.356, 351.087 695.379, 378.096 692.887 C 420.472 688.977, 456.808 656.936, 466.424 615 C 467.244 611.425, 469.323 597.475, 471.044 584 C 474.925 553.610, 474.815 539.258, 470.601 526.694 C 466.002 512.978, 461.440 505.494, 451.061 494.635 C 440.400 483.481, 426.758 475.413, 412 471.534 C 403.259 469.237, 382.673 468.642, 373.342 470.417 M 501 469.681 C 501 470.946, 475.991 686.467, 475.405 690.250 L 474.824 694 501.824 694 L 528.824 694 529.418 690.250 C 529.990 686.640, 555 470.972, 555 469.649 C 555 469.292, 542.850 469, 528 469 C 513.150 469, 501 469.306, 501 469.681 M 643.642 472.250 C 642.880 474.038, 620.999 524.100, 595.016 583.500 C 569.034 642.900, 547.553 692.063, 547.281 692.750 C 546.892 693.732, 552.779 694, 574.736 694 L 602.686 694 633.093 624.374 C 649.817 586.079, 663.624 555.368, 663.776 556.126 C 664.035 557.422, 649.670 683.751, 648.468 690.750 L 647.909 694 674.936 694 L 701.962 694 702.434 691.750 C 702.962 689.239, 728.016 472.222, 728.006 470.250 C 728.001 469.270, 719.033 469, 686.513 469 L 645.027 469 643.642 472.250 M 738.672 579.750 C 731.645 640.663, 725.918 691.295, 725.947 692.266 C 725.997 693.916, 727.762 694.015, 752.737 693.766 L 779.473 693.500 784.187 653.500 C 786.780 631.500, 788.923 613.388, 788.950 613.250 C 788.978 613.112, 802.725 613, 819.500 613 C 836.275 613, 850 612.741, 850 612.424 C 850 612.107, 847.910 609.132, 845.356 605.812 L 840.711 599.777 844.103 597.138 C 845.968 595.687, 848.835 593.308, 850.475 591.852 L 853.455 589.204 848.532 582.938 L 843.610 576.672 847.020 574.086 C 848.896 572.664, 851.765 570.328, 853.396 568.895 L 856.360 566.289 851.450 560.040 L 846.540 553.790 850.484 550.645 C 852.653 548.915, 855.569 546.502, 856.964 545.282 L 859.500 543.063 828.250 543.032 C 798.174 543.001, 797 542.928, 797 541.091 C 797 540.041, 798.800 524.306, 801 506.124 C 803.200 487.941, 805 472.150, 805 471.033 C 805 469.040, 804.476 469, 778.225 469 L 751.450 469 738.672 579.750 M 378.500 525.672 C 364.424 529.415, 353.043 539.205, 348.054 551.864 C 345.294 558.865, 340.687 596.520, 341.247 607.500 C 342.531 632.690, 366.927 644.994, 391.696 632.943 C 403.919 626.995, 412.677 614.737, 414.874 600.500 C 417.496 583.500, 420.097 556.518, 419.485 552.667 C 417.846 542.370, 410.859 532.315, 402.330 527.979 C 398.469 526.016, 395.794 525.485, 389 525.332 C 384.325 525.227, 379.600 525.380, 378.500 525.672"
  };

  const createSvgMarkup = (viewBox: string, path: string, fillHex: string) =>
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + viewBox + '" fill="none" style="width: 100%; height: 100%; max-height: 100%; object-fit: contain;">' +
    '<path d="' + path + '" fill="' + fillHex + '" fill-rule="evenodd" />' +
    '</svg>';

  const SVG_MAP = {
    comboBlue: createSvgMarkup('0 0 860 694', PATHS.combination, '#1219F7'),
    comboDark: createSvgMarkup('0 0 860 694', PATHS.combination, '#191F28'),
    comboWhite: createSvgMarkup('0 0 860 694', PATHS.combination, '#FFFFFF'),

    symbolBlue: createSvgMarkup('0 0 359 408', PATHS.symbol, '#1219F7'),
    symbolDark: createSvgMarkup('0 0 359 408', PATHS.symbol, '#191F28'),
    symbolWhite: createSvgMarkup('0 0 359 408', PATHS.symbol, '#FFFFFF'),

    wordmarkBlue: createSvgMarkup('0 0 860 225', PATHS.wordmark, '#1219F7'),
    wordmarkDark: createSvgMarkup('0 0 860 225', PATHS.wordmark, '#191F28'),
    wordmarkWhite: createSvgMarkup('0 0 860 225', PATHS.wordmark, '#FFFFFF'),
  };

  const handleDownload = (svgContent: string, fileName: string) => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = (svgContent: string, id: string) => {
    navigator.clipboard.writeText(svgContent);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const logoGroups: LogoGroup[] = [
    {
      id: 'combination',
      title: '조합형 로고 (Combination)',
      subtitle: 'Primary Signature',
      description: '상단 헥사곤 큐브 심볼과 하단 볼드 워드마크가 결합된 공식 시그니처 로고입니다.',
      recommendedUse: '앱 스플래시 화면, 서비스 메인 헤더, 옥외 광고물, 온·오프라인 대표 마케팅 에셋',
      variants: [
        {
          id: 'combo-blue',
          name: '시그니처 블루',
          filename: 'daisa-combination-blue.svg',
          bgType: 'white',
          bgColor: 'bg-white',
          borderColor: 'border-[#E5E8EB]',
          logoColorName: '#1219F7',
          svgContent: SVG_MAP.comboBlue,
        },
        {
          id: 'combo-dark',
          name: '다크',
          filename: 'daisa-combination-dark.svg',
          bgType: 'white',
          bgColor: 'bg-[#F8F9FA]',
          borderColor: 'border-[#E5E8EB]',
          logoColorName: '#191F28',
          svgContent: SVG_MAP.comboDark,
        },
        {
          id: 'combo-white',
          name: '화이트 (반전용)',
          filename: 'daisa-combination-white.svg',
          bgType: 'blue',
          bgColor: 'bg-[#1219F7]',
          borderColor: 'border-[#1219F7]',
          logoColorName: '#FFFFFF',
          svgContent: SVG_MAP.comboWhite,
        },
      ],
    },
    {
      id: 'symbol',
      title: '심볼 단독형 (Symbol Mark)',
      subtitle: 'Hexagon & 3D Cube',
      description: '육각형 프레임과 입체적인 3D 이사 큐브 박스를 형상화한 핵심 심볼 그래픽입니다.',
      recommendedUse: '모바일 앱 아이콘, 웹 파비콘(Favicon), SNS 프로필 아바타, 좁은 UI 헤더 및 푸터',
      variants: [
        {
          id: 'symbol-blue',
          name: '시그니처 블루',
          filename: 'daisa-symbol-blue.svg',
          bgType: 'white',
          bgColor: 'bg-white',
          borderColor: 'border-[#E5E8EB]',
          logoColorName: '#1219F7',
          svgContent: SVG_MAP.symbolBlue,
        },
        {
          id: 'symbol-dark',
          name: '다크',
          filename: 'daisa-symbol-dark.svg',
          bgType: 'white',
          bgColor: 'bg-[#F8F9FA]',
          borderColor: 'border-[#E5E8EB]',
          logoColorName: '#191F28',
          svgContent: SVG_MAP.symbolDark,
        },
        {
          id: 'symbol-white',
          name: '화이트 (반전용)',
          filename: 'daisa-symbol-white.svg',
          bgType: 'blue',
          bgColor: 'bg-[#1219F7]',
          borderColor: 'border-[#1219F7]',
          logoColorName: '#FFFFFF',
          svgContent: SVG_MAP.symbolWhite,
        },
      ],
    },
    {
      id: 'wordmark',
      title: '워드마크 단독형 (Wordmark)',
      subtitle: 'Korean Dynamic Wordmark',
      description: '다이사 고유의 스피드감 있는 이탤릭 앵글과 볼드한 웨이트의 한글 타이포그래피 로고입니다.',
      recommendedUse: '상단 네비게이션 바(GNB), 공식 인쇄 서식, 견적 계약서 서명란, 파트너 명함',
      variants: [
        {
          id: 'wordmark-blue',
          name: '시그니처 블루',
          filename: 'daisa-wordmark-blue.svg',
          bgType: 'white',
          bgColor: 'bg-white',
          borderColor: 'border-[#E5E8EB]',
          logoColorName: '#1219F7',
          svgContent: SVG_MAP.wordmarkBlue,
        },
        {
          id: 'wordmark-dark',
          name: '다크',
          filename: 'daisa-wordmark-dark.svg',
          bgType: 'white',
          bgColor: 'bg-[#F8F9FA]',
          borderColor: 'border-[#E5E8EB]',
          logoColorName: '#191F28',
          svgContent: SVG_MAP.wordmarkDark,
        },
        {
          id: 'wordmark-white',
          name: '화이트 (반전용)',
          filename: 'daisa-wordmark-white.svg',
          bgType: 'blue',
          bgColor: 'bg-[#1219F7]',
          borderColor: 'border-[#1219F7]',
          logoColorName: '#FFFFFF',
          svgContent: SVG_MAP.wordmarkWhite,
        },
      ],
    },
  ];

  return (
    <div className="space-y-12 animate-fadeIn pb-16 max-w-5xl">
      {/* 1. Header (Clean & Minimal) */}
      <div className="space-y-2 border-b border-[#E5E8EB] pb-6">
        <span className="text-[12px] font-bold text-[#1219F7]">
          Foundations
        </span>
        <h1 className="text-[32px] md:text-[36px] font-extrabold tracking-tight text-[#191F28]">
          Logo
        </h1>
        <p className="text-[15px] text-[#6B7684] leading-relaxed max-w-2xl">
          다이사 브랜드 아이덴티티를 형성하는 3가지 공식 로고 에셋과 배경색별 적용 규칙입니다. 로고 카드에 마우스를 올리면 고해상도 벡터 SVG 다운로드 및 코드 복사가 가능합니다.
        </p>
      </div>

      {/* 2. 3대 핵심 로고 인터랙티브 쇼케이스 */}
      <div className="space-y-10">
        {logoGroups.map((group) => (
          <section key={group.id} className="space-y-3.5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] font-bold text-[#191F28]">
                  {group.title}
                </h2>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F2F4F8] text-[#6B7684]">
                  {group.subtitle}
                </span>
              </div>
              <p className="text-[13px] text-[#8B95A1]">
                {group.description} · <span className="text-[#4E5968] font-medium">권장: {group.recommendedUse}</span>
              </p>
            </div>

            {/* 3 Color Variants Cards (Hover to download) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {group.variants.map((variant) => (
                <div
                  key={variant.id}
                  className="group relative rounded-[12px] border border-[#E5E8EB] overflow-hidden bg-white shadow-2xs transition-all duration-200 hover:shadow-sm hover:border-[#1219F7]/40 flex flex-col justify-between"
                >
                  {/* Visual Canvas Area with Logo (Clean Responsive Aspect) */}
                  <div
                    className={"h-[160px] " + variant.bgColor + " relative flex items-center justify-center p-6 overflow-hidden transition-all duration-200"}
                  >
                    {/* SVG Render (Crystal clear vector) */}
                    <div
                      className="w-full h-full max-w-[130px] max-h-[80px] flex items-center justify-center select-none transition-transform duration-200 group-hover:scale-105"
                      dangerouslySetInnerHTML={{ __html: variant.svgContent }}
                    />

                    {/* Hover Floating Action Bar */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-4">
                      <button
                        type="button"
                        onClick={() => handleDownload(variant.svgContent, variant.filename)}
                        className="h-8 px-3 rounded-[8px] bg-white text-[#191F28] font-bold text-[12px] flex items-center gap-1.5 shadow-sm hover:bg-[#F8F9FA] transition-transform active:scale-95 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#1219F7]" />
                        <span>SVG</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(variant.svgContent, variant.id)}
                        className="h-8 px-2.5 rounded-[8px] bg-white/95 text-[#191F28] font-bold text-[12px] flex items-center gap-1 shadow-sm hover:bg-white transition-transform active:scale-95 cursor-pointer"
                        title="SVG 코드 복사"
                      >
                        {copiedId === variant.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 text-[11px]">복사됨</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#6B7684]" />
                            <span className="text-[11px]">코드</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Bottom Meta Info */}
                  <div className="px-3 py-2.5 bg-white border-t border-[#F2F4F8] flex items-center justify-between text-[11px]">
                    <span className="font-medium text-[#191F28]">{variant.name}</span>
                    <span className="font-mono font-bold text-[#8B95A1]">{variant.logoColorName}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 3. 배경색별 로고 색상 적용 원칙 */}
      <section className="space-y-4 pt-6 border-t border-[#E5E8EB]">
        <div className="space-y-1">
          <h2 className="text-[18px] font-bold text-[#191F28]">
            배경색별 적용 원칙
          </h2>
          <p className="text-[13px] text-[#6B7684]">
            어떤 배경 환경에서도 명확한 시인성을 보장받을 수 있도록 배경색에 따라 정해진 로고 컬러 규칙을 준수합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {/* Rule 1: 화이트/라이트 배경 */}
          <div className="bg-white rounded-[12px] border border-[#E5E8EB] p-4 space-y-3">
            <div className="flex items-center justify-between text-[12px]">
              <span className="font-bold text-[#191F28]">밝은 배경</span>
              <span className="text-[11px] font-bold text-[#1219F7]">표준 적용</span>
            </div>
            <div className="h-[84px] bg-[#FAFAFA] border border-[#E5E8EB] rounded-[8px] flex items-center justify-center p-3 overflow-hidden">
              <div
                className="w-full h-full max-w-[110px] max-h-[50px] flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }}
              />
            </div>
            <p className="text-[12px] text-[#4E5968] leading-relaxed">
              흰색(#FFFFFF) 및 밝은 회색 배경에서는 <strong>다크(#191F28)</strong> 또는 <strong>시그니처 블루(#1219F7)</strong> 로고를 사용합니다.
            </p>
          </div>

          {/* Rule 2: 다이사 블루 배경 (핵심 강조 규칙) */}
          <div className="bg-white rounded-[12px] border-2 border-[#1219F7] p-4 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between text-[12px]">
              <span className="font-bold text-[#1219F7]">파란색 배경</span>
              <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-[#1219F7] text-white">화이트 필수</span>
            </div>
            <div className="h-[84px] bg-[#1219F7] rounded-[8px] flex items-center justify-center p-3 overflow-hidden shadow-inner">
              <div
                className="w-full h-full max-w-[110px] max-h-[50px] flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboWhite }}
              />
            </div>
            <p className="text-[12px] text-[#191F28] font-medium leading-relaxed">
              배경이 파란색(#1219F7)일 경우에는 반드시 <strong>화이트(#FFFFFF) 로고</strong>만 사용해야 합니다. (블랙 로고 사용 금지)
            </p>
          </div>

          {/* Rule 3: 다크/블랙 배경 */}
          <div className="bg-white rounded-[12px] border border-[#E5E8EB] p-4 space-y-3">
            <div className="flex items-center justify-between text-[12px]">
              <span className="font-bold text-[#191F28]">어두운 배경</span>
              <span className="text-[11px] font-bold text-[#6B7684]">화이트 로고</span>
            </div>
            <div className="h-[84px] bg-[#191F28] rounded-[8px] flex items-center justify-center p-3 overflow-hidden">
              <div
                className="w-full h-full max-w-[110px] max-h-[50px] flex items-center justify-center select-none"
                dangerouslySetInnerHTML={{ __html: SVG_MAP.comboWhite }}
              />
            </div>
            <p className="text-[12px] text-[#4E5968] leading-relaxed">
              어두운 배경(#191F28, #121212)이나 딤드 오버레이 위에서는 시인성 확보를 위해 <strong>화이트(#FFFFFF) 로고</strong>를 적용합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Do & Don't (오용 사례 방지) */}
      <section className="space-y-4 pt-6 border-t border-[#E5E8EB]">
        <div className="space-y-1">
          <h2 className="text-[18px] font-bold text-[#191F28]">
            Do & Don't
          </h2>
          <p className="text-[13px] text-[#6B7684]">
            브랜드 가치를 훼손할 수 있는 형태 왜곡이나 규정에 어긋난 색상 오용을 금지합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1: DO */}
          <div className="bg-white rounded-[12px] border border-[#E5E8EB] p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>DO: 블루 배경 + 화이트 로고</span>
            </div>
            <div className="h-[72px] bg-[#1219F7] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden">
              <div className="w-full h-full max-w-[85px] max-h-[44px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboWhite }} />
            </div>
            <p className="text-[11px] text-[#6B7684] leading-normal">
              블루 배경에서는 높은 대비비를 위해 100% 화이트 로고를 사용합니다.
            </p>
          </div>

          {/* Card 2: DONT (Blue background + Black logo) */}
          <div className="bg-white rounded-[12px] border border-red-200 p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>DON'T: 파란 배경에 검정 로고</span>
            </div>
            <div className="h-[72px] bg-[#1219F7] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden opacity-60">
              <div className="w-full h-full max-w-[85px] max-h-[44px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }} />
            </div>
            <p className="text-[11px] text-red-600 font-medium leading-normal">
              파란 배경에 검정 로고 사용을 금지합니다. (시인성 훼손)
            </p>
          </div>

          {/* Card 3: DONT (Distortion) */}
          <div className="bg-white rounded-[12px] border border-red-200 p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>DON'T: 비율 왜곡 금지</span>
            </div>
            <div className="h-[72px] bg-[#F2F4F8] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden">
              <div className="w-[80px] h-[36px] flex items-center justify-center scale-x-135 scale-y-70" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }} />
            </div>
            <p className="text-[11px] text-red-600 font-medium leading-normal">
              가로세로 비율(종횡비)을 임의로 늘리거나 줄여서는 안 됩니다.
            </p>
          </div>

          {/* Card 4: DONT (Arbitrary Color & Shadow) */}
          <div className="bg-white rounded-[12px] border border-red-200 p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-[12px]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>DON'T: 임의 색상 및 그림자</span>
            </div>
            <div className="h-[72px] bg-[#F2F4F8] rounded-[8px] flex items-center justify-center p-2.5 overflow-hidden">
              <div className="w-[80px] h-[40px] flex items-center justify-center [filter:drop-shadow(0_2px_4px_rgba(239,68,68,0.7))] [&>svg_path]:fill-red-500" dangerouslySetInnerHTML={{ __html: SVG_MAP.comboDark }} />
            </div>
            <p className="text-[11px] text-red-600 font-medium leading-normal">
              지정되지 않은 색상 변경이나 외곽선, 그림자 효과를 적용하지 않습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSection;
