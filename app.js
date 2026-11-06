const SPREADSHEET_ID = "1FvQHOY66rj8t3uRZd32RwiMoapb2o3Fc9LI6JF2DzS4";
const SPREADSHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?gid=0#gid=0`;

const CATEGORY_META = {
  "에어캡롤(낱개)": {
    id: "aircap-roll-single",
    name: "에어캡롤(낱개)",
    subtitle: "소포장 롤 낱개 규격 (50M)",
    unitLabel: "롤당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="24" rx="24" ry="10" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
      <path d="M16 24V56C16 61.5228 26.7452 66 40 66C53.2548 66 64 61.5228 64 56V24" fill="#F5F9FF" stroke="#0066CC" stroke-width="2"/>
      <ellipse cx="40" cy="24" rx="9" ry="4" fill="#FFFFFF" stroke="#0066CC" stroke-width="1.8"/>
      <path d="M24 36C29 39 51 39 56 36" stroke="#86B7FE" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M24 48C29 51 51 51 56 48" stroke="#86B7FE" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  },
  "에어캡롤(묶음)": {
    id: "aircap-roll-bundle",
    name: "에어캡롤(묶음)",
    subtitle: "소포장 롤 묶음 규격 (50M)",
    unitLabel: "롤당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="24" rx="24" ry="10" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
      <path d="M16 24V56C16 61.5228 26.7452 66 40 66C53.2548 66 64 61.5228 64 56V24" fill="#F5F9FF" stroke="#0066CC" stroke-width="2"/>
      <ellipse cx="40" cy="24" rx="9" ry="4" fill="#FFFFFF" stroke="#0066CC" stroke-width="1.8"/>
      <rect x="12" y="38" width="56" height="8" rx="2" fill="#0066CC" fill-opacity="0.2" stroke="#0066CC" stroke-width="1.5"/>
    </svg>`
  },
  "에어캡원단": {
    id: "aircap-fabric",
    name: "에어캡원단",
    subtitle: "대용량 원단 규격 (170M)",
    unitLabel: "롤당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="36" cy="22" rx="24" ry="10" fill="#E3EEFA" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M12 22V56C12 61.5 22.7 66 36 66C49.3 66 60 61.5 60 56V22" fill="#FFFFFF" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M60 32H70V62H56" fill="#F5F5F7" stroke="#0066CC" stroke-width="2" stroke-linejoin="round"/>
      <ellipse cx="36" cy="22" rx="8" ry="3.5" fill="#1D1D1F"/>
      <circle cx="26" cy="40" r="2.5" fill="#0066CC" fill-opacity="0.35"/>
      <circle cx="36" cy="42" r="2.5" fill="#0066CC" fill-opacity="0.35"/>
      <circle cx="46" cy="40" r="2.5" fill="#0066CC" fill-opacity="0.35"/>
      <circle cx="31" cy="50" r="2.5" fill="#0066CC" fill-opacity="0.35"/>
      <circle cx="41" cy="50" r="2.5" fill="#0066CC" fill-opacity="0.35"/>
    </svg>`
  },
  "PET안전봉투(낱개)": {
    id: "pet-bag-single",
    name: "PET안전봉투(낱개)",
    subtitle: "1호 ~ 28호 소량(10매) 낱개 발주",
    unitLabel: "개당 단가",
    specColumnName: "재질",
    sizeColumnName: "사이즈 (cm)",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="44" height="50" rx="4" fill="#FFFFFF" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M18 22C18 19.7909 19.7909 18 22 18H58C60.2091 18 62 19.7909 62 22V30L40 38L18 30V22Z" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
      <line x1="26" y1="48" x2="42" y2="48" stroke="#1D1D1F" stroke-width="2" stroke-linecap="round"/>
      <line x1="26" y1="55" x2="36" y2="55" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  "PET안전봉투(묶음)": {
    id: "pet-bag-bundle",
    name: "PET안전봉투(묶음)",
    subtitle: "1호 ~ 28호 박스/묶음 단위 발주",
    unitLabel: "개당 단가",
    specColumnName: "재질",
    sizeColumnName: "사이즈 (cm)",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="44" height="50" rx="4" fill="#FFFFFF" stroke="#0066CC" stroke-width="2"/>
      <rect x="23" y="13" width="44" height="50" rx="4" fill="none" stroke="#86B7FE" stroke-width="1.8" stroke-dasharray="3 3"/>
      <path d="M18 22C18 19.7909 19.7909 18 22 18H58C60.2091 18 62 19.7909 62 22V30L40 38L18 30V22Z" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
      <line x1="26" y1="48" x2="42" y2="48" stroke="#1D1D1F" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  "종이쇼핑백": {
    id: "paper-bag",
    name: "종이쇼핑백",
    subtitle: "무지 · 도시락 · 마트 시리즈 (130g)",
    unitLabel: "개당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈(mm)",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 26V20C30 14.4772 34.4772 10 40 10C45.5228 10 50 14.4772 50 20V26" stroke="#1D1D1F" stroke-width="2.2" stroke-linecap="round"/>
      <rect x="20" y="26" width="40" height="42" rx="3" fill="#FAF6F0" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M52 26L56 32V64" stroke="#0066CC" stroke-width="1.6" stroke-linecap="round"/>
      <rect x="28" y="42" width="18" height="10" rx="2" fill="#FFFFFF" stroke="#0066CC" stroke-width="1.5"/>
    </svg>`
  },
  "단열에어캡": {
    id: "thermal-aircap",
    name: "단열에어캡",
    subtitle: "무지 · 눈꽃 · 분홍꽃 (100cm×100M)",
    unitLabel: "롤당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="16" width="48" height="48" rx="10" fill="#FFFFFF" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M40 24V56M24 40H56M29 29L51 51M51 29L29 51" stroke="#0066CC" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="40" cy="40" r="6" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
    </svg>`
  },
  "은박원단": {
    id: "silver-fabric",
    name: "은박원단",
    subtitle: "1T 은박 롤 규격 (300M)",
    unitLabel: "롤당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="20" width="48" height="40" rx="6" fill="#F0F3F6" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M16 28L40 44L64 28" stroke="#0066CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="24" y="32" width="32" height="20" rx="3" fill="#FFFFFF" stroke="#0066CC" stroke-width="1.5" stroke-dasharray="2 2"/>
    </svg>`
  },
  "박스테이프": {
    id: "box-tape",
    name: "박스테이프",
    subtitle: "경포장 · 중포장 포장 테이프 (박스)",
    unitLabel: "개당 단가",
    specColumnName: "용도/두께",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="26" fill="#FFF9E6" stroke="#1D1D1F" stroke-width="2"/>
      <circle cx="40" cy="40" r="14" fill="#FFFFFF" stroke="#1D1D1F" stroke-width="2"/>
      <circle cx="40" cy="40" r="8" fill="#FAF6F0" stroke="#0066CC" stroke-width="1.5"/>
      <path d="M58 24L68 34" stroke="#0066CC" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  }
};

let RAW_SHEET_DATA = {
  "에어캡롤(낱개)": [
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "20cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "25cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "33cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "50cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "100cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "20cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "25cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "33cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "50cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 3300.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "100cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 4500.0
    }
  ],
  "에어캡롤(묶음)": [
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "20cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "25cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "33cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "50cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.2T",
      "size": "100cm x 50M",
      "packUnit": null,
      "price": 6900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "20cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "25cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "33cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "50cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 4500.0
    },
    {
      "name": "에어캡롤",
      "spec": "0.4T",
      "size": "100cm x 50M",
      "packUnit": null,
      "price": 12900.0,
      "shipping": 4500.0
    }
  ],
  "에어캡원단": [
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "40cm x 170M",
      "packUnit": null,
      "price": 12000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "44cm x 170M",
      "packUnit": null,
      "price": 13200.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "50cm x 170M",
      "packUnit": null,
      "price": 15000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "60cm x 170M",
      "packUnit": null,
      "price": 18000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "64cm x 170M",
      "packUnit": null,
      "price": 19200.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "66cm x 170M",
      "packUnit": null,
      "price": 19800.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "70cm x 170M",
      "packUnit": null,
      "price": 21000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "76cm x 170M",
      "packUnit": null,
      "price": 22800.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "80cm x 170M",
      "packUnit": null,
      "price": 24000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "90cm x 170M",
      "packUnit": null,
      "price": 27000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "100cm x 170M",
      "packUnit": null,
      "price": 30000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "110cm x 170M",
      "packUnit": null,
      "price": 33000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "120cm x 170M",
      "packUnit": null,
      "price": 36000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "130cm x 170M",
      "packUnit": null,
      "price": 38900.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.25T",
      "size": "140cm x 170M",
      "packUnit": null,
      "price": 41900.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "40cm x 170M",
      "packUnit": null,
      "price": 17600.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "44cm x 170M",
      "packUnit": null,
      "price": 19300.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "45cm x 170M",
      "packUnit": null,
      "price": 19800.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "50cm x 170M",
      "packUnit": null,
      "price": 22000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "55cm x 170M",
      "packUnit": null,
      "price": 24200.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "60cm x 170M",
      "packUnit": null,
      "price": 26400.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "65cm x 170M",
      "packUnit": null,
      "price": 28600.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "66cm x 170M",
      "packUnit": null,
      "price": 29000.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "70cm x 170M",
      "packUnit": null,
      "price": 30800.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "76cm x 170M",
      "packUnit": null,
      "price": 33400.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "80cm x 170M",
      "packUnit": null,
      "price": 35100.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "85cm x 170M",
      "packUnit": null,
      "price": 37300.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "90cm x 170M",
      "packUnit": null,
      "price": 39500.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "95cm x 170M",
      "packUnit": null,
      "price": 41700.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "100cm x 170M",
      "packUnit": null,
      "price": 43900.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "105cm x 170M",
      "packUnit": null,
      "price": 46100.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "115cm x 170M",
      "packUnit": null,
      "price": 48300.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "110cm x 170M",
      "packUnit": null,
      "price": 50500.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "120cm x 170M",
      "packUnit": null,
      "price": 52700.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "125cm x 170M",
      "packUnit": null,
      "price": 54900.0,
      "shipping": null
    },
    {
      "name": "에어캡원단",
      "spec": "0.4T",
      "size": "96cm x 170M",
      "packUnit": null,
      "price": 42200.0,
      "shipping": null
    }
  ],
  "PET안전봉투(낱개)": [
    {
      "name": "1호",
      "spec": "PET",
      "size": "13x23+4",
      "packUnit": 10.0,
      "price": 84.0,
      "shipping": 2200.0
    },
    {
      "name": "2호",
      "spec": "PET",
      "size": "14x20+4",
      "packUnit": 10.0,
      "price": 82.0,
      "shipping": 2200.0
    },
    {
      "name": "3호",
      "spec": "PET",
      "size": "15x23+4",
      "packUnit": 10.0,
      "price": 92.0,
      "shipping": 2200.0
    },
    {
      "name": "4호",
      "spec": "PET",
      "size": "16x25+4",
      "packUnit": 10.0,
      "price": 101.0,
      "shipping": 2200.0
    },
    {
      "name": "5호",
      "spec": "PET",
      "size": "17x28+4",
      "packUnit": 10.0,
      "price": 113.0,
      "shipping": 2200.0
    },
    {
      "name": "6호",
      "spec": "PET",
      "size": "18x20+4",
      "packUnit": 10.0,
      "price": 96.0,
      "shipping": 2200.0
    },
    {
      "name": "7호",
      "spec": "PET",
      "size": "19x23+4",
      "packUnit": 10.0,
      "price": 108.0,
      "shipping": 2200.0
    },
    {
      "name": "8호",
      "spec": "PET",
      "size": "20x28+4",
      "packUnit": 10.0,
      "price": 126.0,
      "shipping": 2200.0
    },
    {
      "name": "9호",
      "spec": "PET",
      "size": "21x25+4",
      "packUnit": 10.0,
      "price": 121.0,
      "shipping": 2200.0
    },
    {
      "name": "10호",
      "spec": "PET",
      "size": "22x28+4",
      "packUnit": 10.0,
      "price": 136.0,
      "shipping": 2200.0
    },
    {
      "name": "11호",
      "spec": "PET",
      "size": "23x28+4",
      "packUnit": 10.0,
      "price": 140.0,
      "shipping": 2200.0
    },
    {
      "name": "12호",
      "spec": "PET",
      "size": "23x31+4",
      "packUnit": 10.0,
      "price": 157.0,
      "shipping": 2200.0
    },
    {
      "name": "13호",
      "spec": "PET",
      "size": "25x30+4",
      "packUnit": 10.0,
      "price": 164.0,
      "shipping": 2200.0
    },
    {
      "name": "14호",
      "spec": "PET",
      "size": "25x34+4",
      "packUnit": 10.0,
      "price": 179.0,
      "shipping": 2200.0
    },
    {
      "name": "15호",
      "spec": "PET",
      "size": "27x34+4",
      "packUnit": 10.0,
      "price": 190.0,
      "shipping": 2200.0
    },
    {
      "name": "16호",
      "spec": "PET",
      "size": "28x34+4",
      "packUnit": 10.0,
      "price": 200.0,
      "shipping": 2200.0
    },
    {
      "name": "17호",
      "spec": "PET",
      "size": "28x36+4",
      "packUnit": 10.0,
      "price": 209.0,
      "shipping": 2200.0
    },
    {
      "name": "18호",
      "spec": "PET",
      "size": "29x36+4",
      "packUnit": 10.0,
      "price": 215.0,
      "shipping": 2200.0
    },
    {
      "name": "19호",
      "spec": "PET",
      "size": "30x35+4",
      "packUnit": 10.0,
      "price": 216.0,
      "shipping": 2200.0
    },
    {
      "name": "20호",
      "spec": "PET",
      "size": "30x39+4",
      "packUnit": 10.0,
      "price": 235.0,
      "shipping": 2200.0
    },
    {
      "name": "21호",
      "spec": "PET",
      "size": "32x39+4",
      "packUnit": 10.0,
      "price": 248.0,
      "shipping": 2200.0
    },
    {
      "name": "22호",
      "spec": "PET",
      "size": "33x39+4",
      "packUnit": 10.0,
      "price": 254.0,
      "shipping": 2200.0
    },
    {
      "name": "23호",
      "spec": "PET",
      "size": "34x42+4",
      "packUnit": 10.0,
      "price": 276.0,
      "shipping": 2200.0
    },
    {
      "name": "24호",
      "spec": "PET",
      "size": "35x45+4",
      "packUnit": 10.0,
      "price": 311.0,
      "shipping": 2200.0
    },
    {
      "name": "25호",
      "spec": "PET",
      "size": "37x45+4",
      "packUnit": 10.0,
      "price": 327.0,
      "shipping": 2200.0
    },
    {
      "name": "26호",
      "spec": "PET",
      "size": "38x45+4",
      "packUnit": 10.0,
      "price": 340.0,
      "shipping": 2200.0
    },
    {
      "name": "27호",
      "spec": "PET",
      "size": "40x50+4",
      "packUnit": 10.0,
      "price": 387.0,
      "shipping": 2200.0
    },
    {
      "name": "28호",
      "spec": "PET",
      "size": "45x50+4",
      "packUnit": 10.0,
      "price": 430.0,
      "shipping": 2200.0
    }
  ],
  "PET안전봉투(묶음)": [
    {
      "name": "1호",
      "spec": "PET",
      "size": "13x23+4",
      "packUnit": 300.0,
      "price": 84.0,
      "shipping": 3800.0
    },
    {
      "name": "2호",
      "spec": "PET",
      "size": "14x20+4",
      "packUnit": 300.0,
      "price": 82.0,
      "shipping": 3800.0
    },
    {
      "name": "3호",
      "spec": "PET",
      "size": "15x23+4",
      "packUnit": 260.0,
      "price": 92.0,
      "shipping": 3800.0
    },
    {
      "name": "4호",
      "spec": "PET",
      "size": "16x25+4",
      "packUnit": 230.0,
      "price": 101.0,
      "shipping": 3800.0
    },
    {
      "name": "5호",
      "spec": "PET",
      "size": "17x28+4",
      "packUnit": 230.0,
      "price": 113.0,
      "shipping": 3800.0
    },
    {
      "name": "6호",
      "spec": "PET",
      "size": "18x20+4",
      "packUnit": 230.0,
      "price": 96.0,
      "shipping": 3800.0
    },
    {
      "name": "7호",
      "spec": "PET",
      "size": "19x23+4",
      "packUnit": 210.0,
      "price": 108.0,
      "shipping": 3800.0
    },
    {
      "name": "8호",
      "spec": "PET",
      "size": "20x28+4",
      "packUnit": 230.0,
      "price": 126.0,
      "shipping": 3800.0
    },
    {
      "name": "9호",
      "spec": "PET",
      "size": "21x25+4",
      "packUnit": 220.0,
      "price": 121.0,
      "shipping": 3800.0
    },
    {
      "name": "10호",
      "spec": "PET",
      "size": "22x28+4",
      "packUnit": 220.0,
      "price": 136.0,
      "shipping": 3800.0
    },
    {
      "name": "11호",
      "spec": "PET",
      "size": "23x28+4",
      "packUnit": 200.0,
      "price": 140.0,
      "shipping": 3800.0
    },
    {
      "name": "12호",
      "spec": "PET",
      "size": "23x31+4",
      "packUnit": 180.0,
      "price": 157.0,
      "shipping": 3800.0
    },
    {
      "name": "13호",
      "spec": "PET",
      "size": "25x30+4",
      "packUnit": 150.0,
      "price": 164.0,
      "shipping": 3800.0
    },
    {
      "name": "14호",
      "spec": "PET",
      "size": "25x34+4",
      "packUnit": 140.0,
      "price": 179.0,
      "shipping": 3800.0
    },
    {
      "name": "15호",
      "spec": "PET",
      "size": "27x34+4",
      "packUnit": 125.0,
      "price": 190.0,
      "shipping": 3800.0
    },
    {
      "name": "16호",
      "spec": "PET",
      "size": "28x34+4",
      "packUnit": 125.0,
      "price": 200.0,
      "shipping": 3800.0
    },
    {
      "name": "17호",
      "spec": "PET",
      "size": "28x36+4",
      "packUnit": 120.0,
      "price": 209.0,
      "shipping": 3800.0
    },
    {
      "name": "18호",
      "spec": "PET",
      "size": "29x36+4",
      "packUnit": 120.0,
      "price": 215.0,
      "shipping": 3800.0
    },
    {
      "name": "19호",
      "spec": "PET",
      "size": "30x35+4",
      "packUnit": 120.0,
      "price": 216.0,
      "shipping": 3800.0
    },
    {
      "name": "20호",
      "spec": "PET",
      "size": "30x39+4",
      "packUnit": 120.0,
      "price": 235.0,
      "shipping": 3800.0
    },
    {
      "name": "21호",
      "spec": "PET",
      "size": "32x39+4",
      "packUnit": 110.0,
      "price": 248.0,
      "shipping": 3800.0
    },
    {
      "name": "22호",
      "spec": "PET",
      "size": "33x39+4",
      "packUnit": 100.0,
      "price": 254.0,
      "shipping": 3800.0
    },
    {
      "name": "23호",
      "spec": "PET",
      "size": "34x42+4",
      "packUnit": 100.0,
      "price": 276.0,
      "shipping": 3800.0
    },
    {
      "name": "24호",
      "spec": "PET",
      "size": "35x45+4",
      "packUnit": 90.0,
      "price": 311.0,
      "shipping": 3800.0
    },
    {
      "name": "25호",
      "spec": "PET",
      "size": "37x45+4",
      "packUnit": 85.0,
      "price": 327.0,
      "shipping": 3800.0
    },
    {
      "name": "26호",
      "spec": "PET",
      "size": "38x45+4",
      "packUnit": 75.0,
      "price": 340.0,
      "shipping": 3800.0
    },
    {
      "name": "27호",
      "spec": "PET",
      "size": "40x50+4",
      "packUnit": 75.0,
      "price": 387.0,
      "shipping": 3800.0
    },
    {
      "name": "28호",
      "spec": "PET",
      "size": "45x50+4",
      "packUnit": 70.0,
      "price": 430.0,
      "shipping": 3800.0
    }
  ],
  "종이쇼핑백": [
    {
      "name": "무지 미니",
      "spec": "130g",
      "size": "180x90x230",
      "packUnit": null,
      "price": 54.0,
      "shipping": 2200.0
    },
    {
      "name": "무지 특소",
      "spec": "130g",
      "size": "200x90x280",
      "packUnit": null,
      "price": 63.0,
      "shipping": 2200.0
    },
    {
      "name": "무지 소",
      "spec": "130g",
      "size": "220x90x280",
      "packUnit": null,
      "price": 64.0,
      "shipping": 2200.0
    },
    {
      "name": "무지 정3",
      "spec": "130g",
      "size": "310x125x260",
      "packUnit": null,
      "price": 77.0,
      "shipping": 2200.0
    },
    {
      "name": "무지 중",
      "spec": "130g",
      "size": "260x90x360",
      "packUnit": null,
      "price": 77.0,
      "shipping": 2200.0
    },
    {
      "name": "무지 대",
      "spec": "130g",
      "size": "310x125x420",
      "packUnit": null,
      "price": 95.0,
      "shipping": 2200.0
    },
    {
      "name": "도시락 소",
      "spec": "130g",
      "size": "220x130x260",
      "packUnit": null,
      "price": 79.0,
      "shipping": 2200.0
    },
    {
      "name": "도시락 중별",
      "spec": "130g",
      "size": "260x120x260",
      "packUnit": null,
      "price": 73.0,
      "shipping": 2200.0
    },
    {
      "name": "도시락 대",
      "spec": "130g",
      "size": "260x170x300",
      "packUnit": null,
      "price": 86.0,
      "shipping": 2200.0
    },
    {
      "name": "도시락 특대",
      "spec": "130g",
      "size": "305x200x310",
      "packUnit": null,
      "price": 102.0,
      "shipping": 2200.0
    },
    {
      "name": "마트 소",
      "spec": "130g",
      "size": "305x175x305",
      "packUnit": null,
      "price": 92.0,
      "shipping": 2200.0
    },
    {
      "name": "마트 중",
      "spec": "130g",
      "size": "305x175x355",
      "packUnit": null,
      "price": 95.0,
      "shipping": 2200.0
    },
    {
      "name": "마트 대",
      "spec": "130g",
      "size": "305x175x410",
      "packUnit": null,
      "price": 105.0,
      "shipping": 2200.0
    }
  ],
  "단열에어캡": [
    {
      "name": "무지",
      "spec": "0.4T",
      "size": "100cmx100M",
      "packUnit": null,
      "price": 42000.0,
      "shipping": null
    },
    {
      "name": "1도(눈꽃)",
      "spec": "0.4T",
      "size": "100cmx100M",
      "packUnit": null,
      "price": 56000.0,
      "shipping": null
    },
    {
      "name": "2도(분홍꽃)",
      "spec": "0.4T",
      "size": "100cmx100M",
      "packUnit": null,
      "price": 59400.0,
      "shipping": null
    }
  ],
  "은박원단": [
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "51cm x 300M",
      "packUnit": null,
      "price": 70118.0,
      "shipping": null
    },
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "55cm x 300M",
      "packUnit": null,
      "price": 12000.0,
      "shipping": null
    },
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "65cm x 300M",
      "packUnit": null,
      "price": 105446.0,
      "shipping": null
    },
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "75cm x 300M",
      "packUnit": null,
      "price": 128066.0,
      "shipping": null
    },
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "85cm x 300M",
      "packUnit": null,
      "price": 137878.0,
      "shipping": null
    },
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "95cm x 300M",
      "packUnit": null,
      "price": 141680.0,
      "shipping": null
    },
    {
      "name": "은박원단",
      "spec": "1T",
      "size": "105cm x 300M",
      "packUnit": null,
      "price": 151388.0,
      "shipping": null
    }
  ],
  "박스테이프": [
    {
      "name": "박스테이프",
      "spec": "경포장",
      "size": "48mmx80m",
      "packUnit": 40.0,
      "price": 546.0,
      "shipping": 3300.0
    },
    {
      "name": "박스테이프",
      "spec": "경포장",
      "size": "48mmx40m",
      "packUnit": 50.0,
      "price": 266.0,
      "shipping": 3300.0
    },
    {
      "name": "박스테이프",
      "spec": "중포장",
      "size": "48mmx50m",
      "packUnit": 50.0,
      "price": 384.0,
      "shipping": 3300.0
    }
  ]
};

// Application State
const state = {
  selectedCategory: "ALL",
  selectedSpec: "ALL",
  searchQuery: "",
  viewMode: "board",
  sortBy: "default"
};

function getCategoryMeta(cat) {
  if (CATEGORY_META[cat]) {
    return CATEGORY_META[cat];
  }
  const safeId = "cat-" + encodeURIComponent(cat).replace(/%/g, "").toLowerCase();
  return {
    id: safeId,
    name: cat,
    subtitle: `${cat} 입고단가`,
    unitLabel: "단가",
    specColumnName: "두께/사양",
    sizeColumnName: "사이즈",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="44" height="44" rx="10" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
      <path d="M26 34H54M26 44H46M26 54H38" stroke="#0066CC" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  };
}

function formatKRW(num) {
  if (num === null || num === undefined || isNaN(num)) return "-";
  return "₩" + Number(num).toLocaleString("ko-KR");
}

function formatNumber(num) {
  if (num === null || num === undefined || isNaN(num)) return "-";
  return Number(num).toLocaleString("ko-KR");
}

function parseLeadingNumber(str) {
  const m = String(str).match(/(\d+(\.\d+)?)/);
  return m ? parseFloat(m[1]) : 0;
}

function getAllItemsFlat() {
  const list = [];
  let idx = 0;
  for (const [category, items] of Object.entries(RAW_SHEET_DATA)) {
    for (const item of items) {
      list.push({
        id: `${category}-${idx++}`,
        category,
        ...item
      });
    }
  }
  return list;
}

function getFilteredItems() {
  const all = getAllItemsFlat();
  const q = state.searchQuery.trim().toLowerCase();

  let filtered = all.filter((item) => {
    if (state.selectedCategory !== "ALL" && item.category !== state.selectedCategory) {
      return false;
    }
    if (state.selectedSpec !== "ALL" && item.spec !== state.selectedSpec) {
      return false;
    }
    if (q) {
      const hay = `${item.category} ${item.name} ${item.spec} ${item.size} ${item.price} ${item.shipping || ""}`.toLowerCase();
      return hay.includes(q);
    }
    return true;
  });

  if (state.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "size-asc") {
    filtered.sort((a, b) => parseLeadingNumber(a.size) - parseLeadingNumber(b.size));
  }

  return filtered;
}

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

function renderCategorySummaryCards() {
  const container = document.getElementById("categoryOverviewGrid");
  if (!container) return;

  const categories = Object.keys(RAW_SHEET_DATA);
  container.innerHTML = categories
    .map((cat) => {
      const items = RAW_SHEET_DATA[cat] || [];
      const meta = getCategoryMeta(cat);
      const prices = items.map((i) => i.price).filter((p) => p > 0);
      const minP = prices.length ? Math.min(...prices) : 0;
      const maxP = prices.length ? Math.max(...prices) : 0;
      const specs = [...new Set(items.map((i) => i.spec).filter(Boolean))].join(" · ");
      const isSelected = state.selectedCategory === cat;
      const hasShipping = items.some((i) => i.shipping !== null && i.shipping !== undefined);

      return `
        <article class="store-utility-card ${isSelected ? "selected" : ""}" data-cat="${cat}" role="button" tabindex="0">
          <div>
            <div class="utility-card-visual">
              ${meta.svg}
            </div>
            <div class="utility-card-meta">${meta.subtitle}</div>
            <h3 class="utility-card-title">
              <span>${cat}</span>
              <span class="chip-count">${items.length}종</span>
            </h3>
            <div class="utility-card-price-range numeric">
              ${minP === maxP ? formatKRW(minP) : `${formatKRW(minP)} – ${formatKRW(maxP)}`}
            </div>
          </div>
          <div class="utility-card-footer">
            <span class="utility-card-meta" style="margin:0;">${specs ? `규격: ${specs}` : (hasShipping ? "택배비 포함 정보" : "입고단가 정보")}</span>
            <span class="text-link">${isSelected ? "전체 보기" : "단가 보기 ›"}</span>
          </div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll(".store-utility-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-cat");
      state.selectedCategory = state.selectedCategory === cat ? "ALL" : cat;
      state.selectedSpec = "ALL";
      renderAll();
      document.getElementById("dashboardMainSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderFilterChips() {
  const catChipContainer = document.getElementById("categoryFilterChips");
  const allItems = getAllItemsFlat();

  const catCounts = { ALL: allItems.length };
  Object.keys(RAW_SHEET_DATA).forEach((c) => {
    catCounts[c] = RAW_SHEET_DATA[c].length;
  });

  const catOptions = ["ALL", ...Object.keys(RAW_SHEET_DATA)];
  if (catChipContainer) {
    catChipContainer.innerHTML =
      `<span class="chip-group-label">품목 카테고리</span>` +
      catOptions
        .map((cat) => {
          const label = cat === "ALL" ? "전체 품목" : cat;
          const active = state.selectedCategory === cat ? "selected" : "";
          return `
            <button type="button" class="configurator-option-chip ${active}" data-cat="${cat}">
              <span>${label}</span>
              <span class="chip-count">${catCounts[cat]}</span>
            </button>
          `;
        })
        .join("");

    catChipContainer.querySelectorAll(".configurator-option-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedCategory = btn.getAttribute("data-cat");
        renderAll();
      });
    });
  }

  const globalNavContainer = document.getElementById("globalNavLinks");
  if (globalNavContainer) {
    globalNavContainer.innerHTML =
      `<li><button type="button" class="global-nav-link ${state.selectedCategory === "ALL" ? "active" : ""}" data-nav-cat="ALL">전체 품목 (${allItems.length})</button></li>` +
      Object.keys(RAW_SHEET_DATA)
        .map((cat) => {
          const count = (RAW_SHEET_DATA[cat] || []).length;
          const active = state.selectedCategory === cat ? "active" : "";
          return `<li><button type="button" class="global-nav-link ${active}" data-nav-cat="${cat}">${cat} (${count})</button></li>`;
        })
        .join("");

    globalNavContainer.querySelectorAll(".global-nav-link[data-nav-cat]").forEach((navBtn) => {
      navBtn.addEventListener("click", () => {
        state.selectedCategory = navBtn.getAttribute("data-nav-cat");
        renderAll();
        document.getElementById("dashboardMainSection").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
}

function renderSubgroupTableHTML(sg, cat) {
  const isPet = cat.includes("PET안전봉투");
  const isBag = cat === "종이쇼핑백";
  const isTape = cat === "박스테이프";
  const isRoll = cat.includes("에어캡롤");
  const isFabric = cat === "에어캡원단" || cat === "은박원단";

  const hasPack = sg.items.some((i) => i.packUnit !== null && i.packUnit !== undefined);
  const hasShipping = sg.items.some((i) => i.shipping !== null && i.shipping !== undefined);

  let theadHTML = `<tr>`;
  if (isPet) {
    theadHTML += `<th style="width: 65px;">호수</th><th>사이즈 (cm)</th>`;
  } else if (isTape) {
    theadHTML += `<th>품명</th><th>규격</th><th style="width: 75px;">두께/종류</th>`;
  } else if (isBag) {
    theadHTML += `<th>품명</th><th>사이즈 규격 (mm)</th><th style="width: 65px;">두께</th>`;
  } else if (isRoll || isFabric) {
    theadHTML += `<th>사이즈 규격 (폭 × 길이)</th><th style="width: 75px;">두께</th>`;
  } else {
    theadHTML += `<th>품명 / 규격</th><th style="width: 75px;">사양</th>`;
  }

  if (hasPack) {
    theadHTML += `<th class="text-right" style="width: 80px;">포장단위</th>`;
  }

  theadHTML += `<th class="text-right" style="width: 130px; white-space: nowrap;">입고단가 <span style="font-size: 11px; font-weight: normal; color: var(--color-ink-muted-48);">(VAT별도)</span></th>`;

  if (hasPack) {
    theadHTML += `<th class="text-right" style="width: 135px; white-space: nowrap;">1묶음 합계 <span style="font-size: 11px; font-weight: normal; color: var(--color-ink-muted-48);">(VAT별도)</span></th>`;
  }

  if (hasShipping) {
    theadHTML += `<th class="text-right shipping-col-header" style="width: 100px; white-space: nowrap;">택배비</th>`;
  }

  theadHTML += `</tr>`;

  const tbodyHTML = sg.items
    .map((item) => {
      let rowHTML = `<tr>`;

      if (isPet) {
        rowHTML += `<td><strong>${item.name}</strong></td><td class="numeric">${item.size}</td>`;
      } else if (isTape) {
        rowHTML += `<td><strong>${item.name}</strong></td><td class="numeric">${item.size}</td><td><span class="item-spec-chip">${item.spec}</span></td>`;
      } else if (isBag) {
        rowHTML += `<td><strong>${item.name}</strong></td><td class="numeric">${item.size}</td><td><span class="item-spec-chip">${item.spec}</span></td>`;
      } else if (isRoll || isFabric) {
        rowHTML += `<td><strong class="numeric">${item.size}</strong></td><td><span class="item-spec-chip">${item.spec}</span></td>`;
      } else {
        rowHTML += `<td><strong>${item.name} ${item.size ? `(${item.size})` : ""}</strong></td><td><span class="item-spec-chip">${item.spec || "-"}</span></td>`;
      }

      if (hasPack) {
        rowHTML += `<td class="text-right numeric">${item.packUnit ? `${formatNumber(item.packUnit)}매` : "-"}</td>`;
      }

      rowHTML += `<td class="text-right table-price">${formatKRW(item.price)}</td>`;

      if (hasPack) {
        const packTotal = item.packUnit ? item.packUnit * item.price : null;
        rowHTML += `<td class="text-right numeric" style="color: var(--color-ink-muted-80); font-weight: 600;">${packTotal !== null ? formatKRW(packTotal) : "-"}</td>`;
      }

      if (hasShipping) {
        const shippingStr = item.shipping !== null && item.shipping !== undefined ? formatKRW(item.shipping) : "-";
        rowHTML += `<td class="text-right numeric shipping-badge">${shippingStr}</td>`;
      }

      rowHTML += `</tr>`;
      return rowHTML;
    })
    .join("");

  return `
    <div class="subgroup-table-wrap">
      <table class="subgroup-table">
        <thead>${theadHTML}</thead>
        <tbody>${tbodyHTML}</tbody>
      </table>
    </div>
  `;
}

function renderBoardView(filteredItems) {
  const categoriesToShow =
    state.selectedCategory === "ALL"
      ? Object.keys(RAW_SHEET_DATA)
      : [state.selectedCategory];

  const blocks = categoriesToShow
    .map((cat) => {
      const catItems = filteredItems.filter((i) => i.category === cat);
      if (catItems.length === 0) return "";

      const meta = getCategoryMeta(cat);
      const prices = catItems.map((i) => i.price).filter((p) => p > 0);
      const minP = prices.length ? Math.min(...prices) : 0;
      const maxP = prices.length ? Math.max(...prices) : 0;
      const avgP = prices.length ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : 0;

      let subGroups = [];
      const specs = [...new Set(catItems.map((i) => i.spec).filter(Boolean))];

      if (cat.includes("에어캡롤") || cat === "에어캡원단") {
        subGroups = specs.map((sp) => ({
          title: `두께 ${sp}`,
          subtitle: cat.includes("에어캡롤") ? `${cat} (50M)` : "길이 170M 대용량 원단",
          items: catItems.filter((i) => i.spec === sp)
        }));
      } else if (cat.includes("PET안전봉투")) {
        const smallMid = catItems.filter((i) => parseLeadingNumber(i.name) <= 14);
        const large = catItems.filter((i) => parseLeadingNumber(i.name) > 14);
        if (smallMid.length) {
          subGroups.push({
            title: "소·중형 (1호 ~ 14호)",
            subtitle: `${cat} 입고단가 및 택배비`,
            items: smallMid
          });
        }
        if (large.length) {
          subGroups.push({
            title: "중·대형 (15호 ~ 28호)",
            subtitle: `${cat} 입고단가 및 택배비`,
            items: large
          });
        }
      } else if (cat === "종이쇼핑백") {
        const muji = catItems.filter((i) => i.name.startsWith("무지"));
        const dosirak = catItems.filter((i) => i.name.startsWith("도시락"));
        const mart = catItems.filter((i) => i.name.startsWith("마트"));
        if (muji.length) subGroups.push({ title: "무지 쇼핑백 시리즈", subtitle: "130g 규격 (mm)", items: muji });
        if (dosirak.length) subGroups.push({ title: "도시락 쇼핑백 시리즈", subtitle: "130g 규격 (mm)", items: dosirak });
        if (mart.length) subGroups.push({ title: "마트 쇼핑백 시리즈", subtitle: "130g 규격 (mm)", items: mart });
      } else if (cat === "박스테이프") {
        subGroups.push({
          title: "박스테이프 전 규격",
          subtitle: "포장단위(박스) 및 롤당 단가 · 택배비",
          items: catItems
        });
      } else if (specs.length > 1) {
        subGroups = specs.map((sp) => ({
          title: `두께/사양 ${sp}`,
          subtitle: `${cat} ${sp} 규격`,
          items: catItems.filter((i) => i.spec === sp)
        }));
      } else {
        subGroups.push({
          title: `${cat} 전 규격`,
          subtitle: `${cat} 입고단가 목록`,
          items: catItems
        });
      }

      const gridClass = subGroups.length === 3 ? "subgroup-grid-3col" : subGroups.length === 2 ? "subgroup-grid-2col" : "";

      return `
        <section class="category-section-block" id="section-${meta.id}">
          <div class="category-block-header">
            <div class="category-block-title-wrap">
              <h3 class="category-block-title">${cat}</h3>
              <span class="category-badge-pill">${catItems.length}개 품목</span>
              <span class="category-badge-pill">${meta.unitLabel}</span>
              <span class="category-badge-pill" style="color: var(--color-primary); font-weight: 600;">부가세 별도</span>
            </div>
            <div class="category-summary-stats">
              <div class="stat-item">
                <span class="stat-label">최저 단가(VAT별도)</span>
                <span class="stat-value">${formatKRW(minP)}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">평균 단가(VAT별도)</span>
                <span class="stat-value">${formatKRW(avgP)}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">최고 단가(VAT별도)</span>
                <span class="stat-value">${formatKRW(maxP)}</span>
              </div>
            </div>
          </div>

          <div class="${gridClass}">
            ${subGroups
              .map(
                (sg) => `
              <div class="subgroup-panel">
                <div class="subgroup-header">
                  <h4 class="subgroup-title">${sg.title}</h4>
                  <span class="subgroup-meta">${sg.subtitle} · ${sg.items.length}종</span>
                </div>
                ${renderSubgroupTableHTML(sg, cat)}
              </div>
            `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .filter(Boolean)
    .join("");

  return `<div class="board-categories-stack">${blocks}</div>`;
}

function renderMainContent() {
  const container = document.getElementById("mainPriceDisplayContainer");
  const resultCountEl = document.getElementById("filteredResultCount");
  const filteredItems = getFilteredItems();

  if (resultCountEl) {
    resultCountEl.textContent = `총 ${filteredItems.length}개 규격 표시 중`;
  }

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div class="category-section-block" style="text-align:center; padding: 64px 24px;">
        <h3 class="category-block-title" style="margin-bottom:12px;">일치하는 품목이 없습니다.</h3>
        <p class="section-subtitle" style="margin-bottom:24px;">검색어나 카테고리 조건을 변경해 보세요.</p>
        <button type="button" class="button-primary compact" id="resetFiltersBtn">초기화</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.selectedCategory = "ALL";
        state.selectedSpec = "ALL";
        state.searchQuery = "";
        document.getElementById("globalSearchInput").value = "";
        renderAll();
      });
    }
    return;
  }

  container.innerHTML = renderBoardView(filteredItems);
}

// ============================================================================
// GOOGLE SHEETS LIVE SYNC & CSV EXPORT
// ============================================================================

function parseCSVRows(csvText) {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  return lines.map((line) => {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    result.push(current.trim());
    return result;
  });
}

async function discoverSheetNames() {
  try {
    const resp = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`, { cache: "no-store" });
    if (resp.ok) {
      const html = await resp.text();
      const parts = html.split('docs-sheet-tab-caption">').slice(1);
      const names = parts.map((p) => p.split("</div>")[0].trim()).filter(Boolean);
      if (names.length > 0) {
        return [...new Set(names)];
      }
    }
  } catch (e) {
    // fallback if CORS or network error
  }
  return Object.keys(RAW_SHEET_DATA);
}

async function syncFromGoogleSheets() {
  const syncBtn = document.getElementById("syncSheetBtn");
  const statusText = document.getElementById("syncStatusText");
  if (syncBtn) syncBtn.textContent = "동기화 중...";
  if (statusText) statusText.textContent = "Google Sheets 탭 목록 확인 중...";

  try {
    const sheetNames = await discoverSheetNames();
    const updatedData = {};

    for (const sheetName of sheetNames) {
      const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) continue;
      const csvText = await response.text();
      const rows = parseCSVRows(csvText);

      if (rows.length < 2) continue;

      const headers = rows[0].map((h) => h.trim());
      let nameIdx = 0;
      let specIdx = 1;
      let sizeIdx = 2;
      let packIdx = -1;
      let priceIdx = -1;
      let shipIdx = -1;

      headers.forEach((h, idx) => {
        if (h.includes("품명")) nameIdx = idx;
        else if (h.includes("두께") || h.includes("재질")) specIdx = idx;
        else if (h.includes("사이즈")) sizeIdx = idx;
        else if (h.includes("포장")) packIdx = idx;
        else if (h.includes("단가")) priceIdx = idx;
        else if (h.includes("택배")) shipIdx = idx;
      });

      const parsedItems = [];
      for (let i = 1; i < rows.length; i++) {
        const r = rows[i];
        if (!r[nameIdx] || r[nameIdx] === "품명") continue;

        const nameVal = r[nameIdx] || "";
        const specVal = specIdx !== -1 && specIdx < r.length ? r[specIdx] : "";
        const sizeVal = sizeIdx !== -1 && sizeIdx < r.length ? r[sizeIdx] : "";
        
        let packVal = null;
        if (packIdx !== -1 && packIdx < r.length && r[packIdx]) {
          const p = parseFloat(String(r[packIdx]).replace(/,/g, ""));
          if (!isNaN(p)) packVal = p;
        }

        let priceVal = 0;
        if (priceIdx !== -1 && priceIdx < r.length && r[priceIdx]) {
          const p = parseFloat(String(r[priceIdx]).replace(/,/g, ""));
          if (!isNaN(p)) priceVal = p;
        }

        let shipVal = null;
        if (shipIdx !== -1 && shipIdx < r.length && r[shipIdx]) {
          const s = parseFloat(String(r[shipIdx]).replace(/,/g, ""));
          if (!isNaN(s)) shipVal = s;
        }

        if (priceVal > 0) {
          parsedItems.push({
            name: nameVal,
            spec: specVal,
            size: sizeVal,
            packUnit: packVal,
            price: priceVal,
            shipping: shipVal
          });
        }
      }

      if (parsedItems.length > 0) {
        updatedData[sheetName] = parsedItems;
      }
    }

    if (Object.keys(updatedData).length > 0) {
      RAW_SHEET_DATA = updatedData;
      renderAll();
      const now = new Date();
      const timeStr = now.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      if (statusText) statusText.textContent = `실시간 연동 완료 (${timeStr})`;
    }
  } catch (err) {
    if (statusText) statusText.textContent = "내장 스냅샷 데이터 사용 중 (오프라인/보안 모드)";
  } finally {
    if (syncBtn) syncBtn.textContent = "실시간 시트 동기화";
  }
}

function downloadFilteredCSV() {
  const items = getFilteredItems();
  const headers = ["카테고리", "품명", "두께/재질", "사이즈", "포장단위", "입고단가(원, VAT별도)", "택배비(원)"];
  const rows = items.map((i) => [
    i.category,
    i.name,
    i.spec,
    `"${i.size}"`,
    i.packUnit || "",
    i.price,
    i.shipping !== null && i.shipping !== undefined ? i.shipping : ""
  ]);
  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `IGODA_품목별_입고단가표_택배비포함.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================================
// INITIALIZE & BIND EVENTS
// ============================================================================

function renderAll() {
  renderCategorySummaryCards();
  renderFilterChips();
  renderMainContent();
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("globalSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.classList.toggle("visible", state.searchQuery.length > 0);
      }
      renderMainContent();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.searchQuery = "";
      searchInput.value = "";
      clearBtn.classList.remove("visible");
      renderMainContent();
    });
  }

  const syncBtn = document.getElementById("syncSheetBtn");
  if (syncBtn) {
    syncBtn.addEventListener("click", syncFromGoogleSheets);
  }
  const csvBtn = document.getElementById("exportCsvBtn");
  if (csvBtn) {
    csvBtn.addEventListener("click", downloadFilteredCSV);
  }

  renderAll();
  syncFromGoogleSheets();
});
