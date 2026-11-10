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
  },
  "에어캡패드": {
    id: "aircap-pad",
    name: "에어캡패드",
    subtitle: "1호 ~ 13호 재단 패드 (0.2T / 0.4T)",
    unitLabel: "장당 단가",
    specColumnName: "두께",
    sizeColumnName: "사이즈(cm)",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="20" width="48" height="40" rx="4" fill="#E8F1FA" stroke="#0066CC" stroke-width="2"/>
      <line x1="24" y1="30" x2="56" y2="30" stroke="#0066CC" stroke-width="1.8" stroke-dasharray="3 3"/>
      <line x1="24" y1="40" x2="56" y2="40" stroke="#0066CC" stroke-width="1.8" stroke-dasharray="3 3"/>
      <line x1="24" y1="50" x2="56" y2="50" stroke="#0066CC" stroke-width="1.8" stroke-dasharray="3 3"/>
    </svg>`
  },
  "박스(에스아이비)": {
    id: "box-sib",
    name: "박스(에스아이비)",
    subtitle: "SIB 골판지 택배박스 (200여종 · 무료배송)",
    unitLabel: "묶음 단가",
    specColumnName: "재질/골",
    sizeColumnName: "사이즈(mm)",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 30L40 16L64 30L40 44L16 30Z" fill="#D9A86C" stroke="#1D1D1F" stroke-width="2" stroke-linejoin="round"/>
      <path d="M16 30V56L40 70V44L16 30Z" fill="#C69153" stroke="#1D1D1F" stroke-width="2" stroke-linejoin="round"/>
      <path d="M64 30V56L40 70V44L64 30Z" fill="#B37D42" stroke="#1D1D1F" stroke-width="2" stroke-linejoin="round"/>
      <path d="M30 23L54 37" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.6"/>
    </svg>`
  },
  "이고다박스": {
    id: "box-igoda",
    name: "이고다박스",
    subtitle: "이고다 자체 규격 박스 (A골 · B골 · DW골)",
    unitLabel: "장당 단가",
    specColumnName: "골 종류",
    sizeColumnName: "사이즈(mm)",
    svg: `<svg class="product-render-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="20" width="44" height="44" rx="4" fill="#EDD5B3" stroke="#1D1D1F" stroke-width="2"/>
      <path d="M18 34H62M40 34V64" stroke="#1D1D1F" stroke-width="1.8"/>
      <path d="M28 20V34M52 20V34" stroke="#1D1D1F" stroke-width="1.5"/>
      <circle cx="40" cy="49" r="4" fill="#0066CC"/>
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
  "에어캡패드": [
    {
      "name": "에어캡패드 1호",
      "spec": "0.2T",
      "size": "15x25",
      "packUnit": 1200.0,
      "price": 15.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 2호",
      "spec": "0.2T",
      "size": "20x30",
      "packUnit": 750.0,
      "price": 19.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 3호",
      "spec": "0.2T",
      "size": "20x45",
      "packUnit": 450.0,
      "price": 26.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 4호",
      "spec": "0.2T",
      "size": "20x50",
      "packUnit": 450.0,
      "price": 28.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 5호",
      "spec": "0.2T",
      "size": "25x30",
      "packUnit": 600.0,
      "price": 23.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 6호",
      "spec": "0.2T",
      "size": "25x40",
      "packUnit": 300.0,
      "price": 28.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 7호",
      "spec": "0.2T",
      "size": "25x60",
      "packUnit": 300.0,
      "price": 34.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 8호",
      "spec": "0.2T",
      "size": "25x60",
      "packUnit": 300.0,
      "price": 39.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 9호",
      "spec": "0.2T",
      "size": "25x70",
      "packUnit": 200.0,
      "price": 44.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 10호",
      "spec": "0.2T",
      "size": "30x40",
      "packUnit": 300.0,
      "price": 33.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 11호",
      "spec": "0.2T",
      "size": "30x50",
      "packUnit": 300.0,
      "price": 39.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 12호",
      "spec": "0.2T",
      "size": "30x60",
      "packUnit": 200.0,
      "price": 45.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 13호",
      "spec": "0.2T",
      "size": "30x70",
      "packUnit": 200.0,
      "price": 55.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 14호",
      "spec": "0.2T",
      "size": "35x40",
      "packUnit": 200.0,
      "price": 37.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 15호",
      "spec": "0.2T",
      "size": "50x50",
      "packUnit": 150.0,
      "price": 63.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 16호",
      "spec": "0.2T",
      "size": "50x60",
      "packUnit": 150.0,
      "price": 74.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 17호",
      "spec": "0.2T",
      "size": "50x70",
      "packUnit": 100.0,
      "price": 86.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 18호",
      "spec": "0.2T",
      "size": "60x70",
      "packUnit": 100.0,
      "price": 101.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 1호",
      "spec": "0.4T",
      "size": "15x25",
      "packUnit": 600.0,
      "price": 19.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 2호",
      "spec": "0.4T",
      "size": "20x30",
      "packUnit": 600.0,
      "price": 26.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 3호",
      "spec": "0.4T",
      "size": "20x45",
      "packUnit": 450.0,
      "price": 37.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 4호",
      "spec": "0.4T",
      "size": "20x50",
      "packUnit": 450.0,
      "price": 40.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 5호",
      "spec": "0.4T",
      "size": "25x50",
      "packUnit": 300.0,
      "price": 50.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 6호",
      "spec": "0.4T",
      "size": "25x60",
      "packUnit": 300.0,
      "price": 58.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 7호",
      "spec": "0.4T",
      "size": "30x60",
      "packUnit": 200.0,
      "price": 69.0,
      "shipping": 3500.0
    },
    {
      "name": "에어캡패드 8호",
      "spec": "0.4T",
      "size": "60x70",
      "packUnit": 100.0,
      "price": 158.0,
      "shipping": 3500.0
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
  ],
  "박스(에스아이비)": [
    {
      "name": "E-001(x150)",
      "spec": "S/W(B)",
      "size": "200x160x130",
      "packUnit": null,
      "price": 28188.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-007(x100)",
      "spec": "S/W(B)",
      "size": "210x210x120",
      "packUnit": null,
      "price": 25750.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-008(x120)",
      "spec": "S/W(B)",
      "size": "220x160x140",
      "packUnit": null,
      "price": 25750.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-014(x90)",
      "spec": "S/W(B)",
      "size": "230x200x180",
      "packUnit": null,
      "price": 27213.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-018(x70)",
      "spec": "S/W(B)",
      "size": "245x245x250",
      "packUnit": null,
      "price": 29175.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-023(x100)",
      "spec": "S/W(B)",
      "size": "250x210x120",
      "packUnit": null,
      "price": 27375.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-024(x100)",
      "spec": "S/W(B)",
      "size": "250x230x150",
      "packUnit": null,
      "price": 31625.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-026(x80)",
      "spec": "S/W(B)",
      "size": "250x250x100",
      "packUnit": null,
      "price": 25800.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-028(x100)",
      "spec": "S/W(B)",
      "size": "260x160x140",
      "packUnit": null,
      "price": 24250.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-034(x70)",
      "spec": "S/W(B)",
      "size": "260x260x200",
      "packUnit": null,
      "price": 29263.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-040(x100)",
      "spec": "S/W(B)",
      "size": "270x200x180",
      "packUnit": null,
      "price": 31125.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-042(x100)",
      "spec": "S/W(B)",
      "size": "270x240x100",
      "packUnit": null,
      "price": 29875.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-049(x100)",
      "spec": "S/W(B)",
      "size": "280x220x110",
      "packUnit": null,
      "price": 28875.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-051(x80)",
      "spec": "S/W(B)",
      "size": "290x220x200",
      "packUnit": null,
      "price": 29300.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-060(x80)",
      "spec": "S/W(B)",
      "size": "300x240x130",
      "packUnit": null,
      "price": 28200.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-065(x80)",
      "spec": "S/W(B)",
      "size": "300x280x100",
      "packUnit": null,
      "price": 30700.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-066(x80)",
      "spec": "S/W(B)",
      "size": "300x300x140",
      "packUnit": null,
      "price": 34300.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-073(x80)",
      "spec": "S/W(B)",
      "size": "310x200x160",
      "packUnit": null,
      "price": 27100.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-076(x80)",
      "spec": "S/W(B)",
      "size": "310x220x130",
      "packUnit": null,
      "price": 26800.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-077(x80)",
      "spec": "S/W(B)",
      "size": "310x220x150",
      "packUnit": null,
      "price": 27800.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-078(x75)",
      "spec": "S/W(B)",
      "size": "310x220x200",
      "packUnit": null,
      "price": 28750.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-081(x75)",
      "spec": "S/W(B)",
      "size": "310x270x150",
      "packUnit": null,
      "price": 30625.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-085(x80)",
      "spec": "S/W(B)",
      "size": "320x220x150",
      "packUnit": null,
      "price": 28200.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-086(x80)",
      "spec": "S/W(B)",
      "size": "320x220x200",
      "packUnit": null,
      "price": 30500.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-090(x75)",
      "spec": "S/W(B)",
      "size": "320x240x200",
      "packUnit": null,
      "price": 31094.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-101(x80)",
      "spec": "S/W(B)",
      "size": "330x230x130",
      "packUnit": null,
      "price": 28900.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-102(x50)",
      "spec": "S/W(A)",
      "size": "330x270x220",
      "packUnit": null,
      "price": 29330.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-106(x120)",
      "spec": "S/W(B)",
      "size": "340x170x110",
      "packUnit": null,
      "price": 29800.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-110(x80)",
      "spec": "S/W(B)",
      "size": "340x260x100",
      "packUnit": null,
      "price": 30300.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-112(x70)",
      "spec": "S/W(B)",
      "size": "340x260x150",
      "packUnit": null,
      "price": 29788.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-116(x90)",
      "spec": "S/W(B)",
      "size": "350x200x150",
      "packUnit": null,
      "price": 29913.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-124(x60)",
      "spec": "S/W(B)",
      "size": "350x300x150",
      "packUnit": null,
      "price": 30550.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-128(x70)",
      "spec": "S/W(B)",
      "size": "360x240x140",
      "packUnit": null,
      "price": 28563.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-130(x60)",
      "spec": "S/W(B)",
      "size": "360x240x230",
      "packUnit": null,
      "price": 28900.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-131(x50)",
      "spec": "S/W(B)",
      "size": "360x300x210",
      "packUnit": null,
      "price": 29438.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-132(x50)",
      "spec": "S/W(B)",
      "size": "360x300x240",
      "packUnit": null,
      "price": 30750.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-133(x50)",
      "spec": "S/W(B)",
      "size": "360x360x120",
      "packUnit": null,
      "price": 29875.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-134(x75)",
      "spec": "S/W(B)",
      "size": "370x250x150",
      "packUnit": null,
      "price": 31375.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-138(x70)",
      "spec": "S/W(B)",
      "size": "380x250x100",
      "packUnit": null,
      "price": 27425.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-139(x70)",
      "spec": "S/W(B)",
      "size": "380x250x160",
      "packUnit": null,
      "price": 30838.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-140(x60)",
      "spec": "S/W(B)",
      "size": "380x270x200",
      "packUnit": null,
      "price": 30550.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-141(x50)",
      "spec": "S/W(B)",
      "size": "380x320x170",
      "packUnit": null,
      "price": 29313.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-143(x50)",
      "spec": "S/W(A)",
      "size": "400x200x150",
      "packUnit": null,
      "price": 21813.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-144(x60)",
      "spec": "S/W(A)",
      "size": "400x200x200",
      "packUnit": null,
      "price": 26800.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-148(x50)",
      "spec": "S/W(A)",
      "size": "400x250x200",
      "packUnit": null,
      "price": 27500.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-151(x40)",
      "spec": "S/W(A)",
      "size": "400x300x180",
      "packUnit": null,
      "price": 25650.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-152(x40)",
      "spec": "S/W(A)",
      "size": "400x300x300",
      "packUnit": null,
      "price": 38480.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-153(x40)",
      "spec": "S/W(A)",
      "size": "400x310x210",
      "packUnit": null,
      "price": 32830.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-156(x40)",
      "spec": "S/W(A)",
      "size": "400x350x200",
      "packUnit": null,
      "price": 36380.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-157(x35)",
      "spec": "S/W(A)",
      "size": "400x350x300",
      "packUnit": null,
      "price": 38193.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-166(x40)",
      "spec": "S/W(B)",
      "size": "420x370x150",
      "packUnit": null,
      "price": 28450.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-168(x35)",
      "spec": "S/W(A)",
      "size": "450x350x200",
      "packUnit": null,
      "price": 34986.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-174(x30)",
      "spec": "S/W(A)",
      "size": "450x320x200",
      "packUnit": null,
      "price": 29055.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-175(x35)",
      "spec": "S/W(A)",
      "size": "450x320x300",
      "packUnit": null,
      "price": 37624.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-178(x20)",
      "spec": "S/W(A)",
      "size": "460x350x350",
      "packUnit": null,
      "price": 26200.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-182(x40)",
      "spec": "S/W(A)",
      "size": "500x300x150",
      "packUnit": null,
      "price": 32880.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-183(x40)",
      "spec": "S/W(A)",
      "size": "500x300x200",
      "packUnit": null,
      "price": 35630.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-186(x30)",
      "spec": "S/W(A)",
      "size": "500x320x220",
      "packUnit": null,
      "price": 31155.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-189(x30)",
      "spec": "S/W(A)",
      "size": "500x350x250",
      "packUnit": null,
      "price": 35155.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-190(x30)",
      "spec": "S/W(A)",
      "size": "500x400x120",
      "packUnit": null,
      "price": 31680.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-192(x20)",
      "spec": "S/W(A)",
      "size": "500x400x300",
      "packUnit": null,
      "price": 30030.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-193(x20)",
      "spec": "S/W(A)",
      "size": "500x500x250",
      "packUnit": null,
      "price": 34280.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-197(x30)",
      "spec": "S/W(A)",
      "size": "510x400x180",
      "packUnit": null,
      "price": 35380.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-198(x20)",
      "spec": "S/W(A)",
      "size": "510x410x310",
      "packUnit": null,
      "price": 30955.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-199(x30)",
      "spec": "S/W(A)",
      "size": "520x330x300",
      "packUnit": null,
      "price": 36168.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-205(x25)",
      "spec": "S/W(A)",
      "size": "520x380x420",
      "packUnit": null,
      "price": 39475.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-206(x20)",
      "spec": "S/W(A)",
      "size": "520x410x200",
      "packUnit": null,
      "price": 28330.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-209(x20)",
      "spec": "S/W(A)",
      "size": "520x450x400",
      "packUnit": null,
      "price": 36230.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-213(x20)",
      "spec": "S/W(A)",
      "size": "550x420x350",
      "packUnit": null,
      "price": 34330.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-216(x15)",
      "spec": "S/W(A)",
      "size": "550x550x390",
      "packUnit": null,
      "price": 35455.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-221(x25)",
      "spec": "S/W(A)",
      "size": "570x340x250",
      "packUnit": null,
      "price": 30755.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-224(x35)",
      "spec": "S/W(A)",
      "size": "600x250x120",
      "packUnit": null,
      "price": 22306.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-225(x20)",
      "spec": "S/W(A)",
      "size": "600x400x250",
      "packUnit": null,
      "price": 32030.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-229(x20)",
      "spec": "S/W(A)",
      "size": "600x500x300",
      "packUnit": null,
      "price": 41375.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-230(x15)",
      "spec": "S/W(A)",
      "size": "600x510x440",
      "packUnit": null,
      "price": 39230.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-235(x20)",
      "spec": "S/W(A)",
      "size": "640x360x220",
      "packUnit": null,
      "price": 28100.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-243(x10)",
      "spec": "S/W(A)",
      "size": "700x500x350",
      "packUnit": null,
      "price": 25905.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-247(x30)",
      "spec": "S/W(A)",
      "size": "750x200x180",
      "packUnit": null,
      "price": 25725.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-251(x10)",
      "spec": "S/W(A)",
      "size": "750x520x420",
      "packUnit": null,
      "price": 30243.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄002호(x300)",
      "spec": "S/W(B)",
      "size": "140x100x70",
      "packUnit": null,
      "price": 34000.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄004호(x230)",
      "spec": "S/W(B)",
      "size": "150x120x120",
      "packUnit": null,
      "price": 33200.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄005호(x230)",
      "spec": "S/W(B)",
      "size": "150x130x100",
      "packUnit": null,
      "price": 33488.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄006호(x220)",
      "spec": "S/W(B)",
      "size": "160x140x60",
      "packUnit": null,
      "price": 31250.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄007호(x280)",
      "spec": "S/W(B)",
      "size": "160x100x60",
      "packUnit": null,
      "price": 31450.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄009호(x200)",
      "spec": "S/W(B)",
      "size": "160x140x100",
      "packUnit": null,
      "price": 32500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄010호(x190)",
      "spec": "S/W(B)",
      "size": "170x130x120",
      "packUnit": null,
      "price": 31400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄011호(x230)",
      "spec": "S/W(B)",
      "size": "180x100x100",
      "packUnit": null,
      "price": 31188.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄012호(x170)",
      "spec": "S/W(B)",
      "size": "180x150x120",
      "packUnit": null,
      "price": 32875.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄014호(x150)",
      "spec": "S/W(B)",
      "size": "180x180x100",
      "packUnit": null,
      "price": 30250.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄016호(x210)",
      "spec": "S/W(B)",
      "size": "190x120x90",
      "packUnit": null,
      "price": 31450.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄017호(x250)",
      "spec": "S/W(B)",
      "size": "200x100x80",
      "packUnit": null,
      "price": 31625.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄018호(x210)",
      "spec": "S/W(B)",
      "size": "200x130x80",
      "packUnit": null,
      "price": 31713.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄019호(x170)",
      "spec": "S/W(B)",
      "size": "200x130x140",
      "packUnit": null,
      "price": 32025.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄020호(x150)",
      "spec": "S/W(B)",
      "size": "200x180x80",
      "packUnit": null,
      "price": 30063.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄021호(x130)",
      "spec": "S/W(B)",
      "size": "200x180x120",
      "packUnit": null,
      "price": 29438.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄023호(x100)",
      "spec": "S/W(B)",
      "size": "200x200x165",
      "packUnit": null,
      "price": 28750.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄024호(x160)",
      "spec": "S/W(B)",
      "size": "200x150x100",
      "packUnit": null,
      "price": 29000.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄027호(x180)",
      "spec": "S/W(B)",
      "size": "220x110x100",
      "packUnit": null,
      "price": 29125.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄028호(x200)",
      "spec": "S/W(B)",
      "size": "220x120x70",
      "packUnit": null,
      "price": 29250.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄029호(x160)",
      "spec": "S/W(B)",
      "size": "220x160x90",
      "packUnit": null,
      "price": 31400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄030호(x180)",
      "spec": "S/W(B)",
      "size": "230x120x110",
      "packUnit": null,
      "price": 31375.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄031호(x180)",
      "spec": "S/W(B)",
      "size": "230x160x70",
      "packUnit": null,
      "price": 33175.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄032호(x150)",
      "spec": "S/W(B)",
      "size": "230x160x120",
      "packUnit": null,
      "price": 31563.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄033호(x120)",
      "spec": "S/W(B)",
      "size": "230x170x160",
      "packUnit": null,
      "price": 30850.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄035호(x130)",
      "spec": "S/W(B)",
      "size": "230x195x90",
      "packUnit": null,
      "price": 31713.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄037호(x180)",
      "spec": "S/W(B)",
      "size": "240x140x100",
      "packUnit": null,
      "price": 34075.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄038호(x130)",
      "spec": "S/W(B)",
      "size": "240x160x150",
      "packUnit": null,
      "price": 31388.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄039호(x120)",
      "spec": "S/W(B)",
      "size": "240x200x120",
      "packUnit": null,
      "price": 31900.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄040호(x160)",
      "spec": "S/W(B)",
      "size": "240x170x70",
      "packUnit": null,
      "price": 31400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄042호(x110)",
      "spec": "S/W(B)",
      "size": "250x180x150",
      "packUnit": null,
      "price": 31663.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄043호(x120)",
      "spec": "S/W(B)",
      "size": "250x200x100",
      "packUnit": null,
      "price": 30400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄044호(x90)",
      "spec": "S/W(B)",
      "size": "250x230x150",
      "packUnit": null,
      "price": 31488.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄046호(x140)",
      "spec": "S/W(B)",
      "size": "260x160x120",
      "packUnit": null,
      "price": 32500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄047호(x110)",
      "spec": "S/W(B)",
      "size": "260x180x150",
      "packUnit": null,
      "price": 30700.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄048호(x80)",
      "spec": "S/W(B)",
      "size": "260x220x180",
      "packUnit": null,
      "price": 28400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄049호(x110)",
      "spec": "S/W(B)",
      "size": "270x200x120",
      "packUnit": null,
      "price": 31113.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄051호(x80)",
      "spec": "S/W(B)",
      "size": "270x240x150",
      "packUnit": null,
      "price": 30500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄052호(x160)",
      "spec": "S/W(B)",
      "size": "280x130x90",
      "packUnit": null,
      "price": 29800.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄053호(x120)",
      "spec": "S/W(B)",
      "size": "280x160x150",
      "packUnit": null,
      "price": 31150.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄056호(x110)",
      "spec": "S/W(B)",
      "size": "280x180x150",
      "packUnit": null,
      "price": 31525.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄057호(x100)",
      "spec": "S/W(B)",
      "size": "280x180x185",
      "packUnit": null,
      "price": 32500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄058호(x140)",
      "spec": "S/W(B)",
      "size": "285x160x90",
      "packUnit": null,
      "price": 31100.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄061호(x80)",
      "spec": "S/W(B)",
      "size": "290x260x200",
      "packUnit": null,
      "price": 33500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄062호(x130)",
      "spec": "S/W(B)",
      "size": "295x195x90",
      "packUnit": null,
      "price": 31550.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄063호(x120)",
      "spec": "S/W(B)",
      "size": "300x200x120",
      "packUnit": null,
      "price": 32350.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄064호(x100)",
      "spec": "S/W(B)",
      "size": "300x200x150",
      "packUnit": null,
      "price": 30125.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄066호(x120)",
      "spec": "S/W(B)",
      "size": "300x225x60",
      "packUnit": null,
      "price": 31150.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄068호(x90)",
      "spec": "S/W(B)",
      "size": "300x250x150",
      "packUnit": null,
      "price": 32950.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄070호(x100)",
      "spec": "S/W(B)",
      "size": "310x200x195",
      "packUnit": null,
      "price": 38630.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄071호(x80)",
      "spec": "S/W(B)",
      "size": "310x215x240",
      "packUnit": null,
      "price": 32400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄072호(x120)",
      "spec": "S/W(B)",
      "size": "320x160x150",
      "packUnit": null,
      "price": 30700.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄073호(x120)",
      "spec": "S/W(B)",
      "size": "320x220x80",
      "packUnit": null,
      "price": 32500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄075호(x100)",
      "spec": "S/W(B)",
      "size": "320x240x100",
      "packUnit": null,
      "price": 32000.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄076호(x80)",
      "spec": "S/W(B)",
      "size": "320x240x190",
      "packUnit": null,
      "price": 32600.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄081호(x80)",
      "spec": "S/W(B)",
      "size": "330x250x150",
      "packUnit": null,
      "price": 31400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄082호(x60)",
      "spec": "S/W(B)",
      "size": "330x250x250",
      "packUnit": null,
      "price": 29950.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄083호(x90)",
      "spec": "S/W(B)",
      "size": "340x260x70",
      "packUnit": null,
      "price": 30475.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄085호(x90)",
      "spec": "S/W(B)",
      "size": "350x220x120",
      "packUnit": null,
      "price": 30025.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄086호(x90)",
      "spec": "S/W(B)",
      "size": "350x220x160",
      "packUnit": null,
      "price": 33063.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄087호(x90)",
      "spec": "S/W(B)",
      "size": "350x250x100",
      "packUnit": null,
      "price": 31713.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄089호(x70)",
      "spec": "S/W(B)",
      "size": "350x270x150",
      "packUnit": null,
      "price": 30488.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄090호(x70)",
      "spec": "S/W(B)",
      "size": "350x270x180",
      "packUnit": null,
      "price": 33113.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄091호(x60)",
      "spec": "S/W(B)",
      "size": "350x327x129",
      "packUnit": null,
      "price": 31450.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄092호(x80)",
      "spec": "S/W(B)",
      "size": "360x300x100",
      "packUnit": null,
      "price": 34400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄093호(x60)",
      "spec": "S/W(B)",
      "size": "360x300x150",
      "packUnit": null,
      "price": 30850.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄094호(x50)",
      "spec": "S/W(B)",
      "size": "360x300x300",
      "packUnit": null,
      "price": 33375.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄097호(x50)",
      "spec": "S/W(B)",
      "size": "390x270x300",
      "packUnit": null,
      "price": 31438.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄098호(x70)",
      "spec": "S/W(B)",
      "size": "400x300x100",
      "packUnit": null,
      "price": 32500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄099호(x60)",
      "spec": "S/W(B)",
      "size": "400x300x150",
      "packUnit": null,
      "price": 32200.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄100호(x60)",
      "spec": "S/W(B)",
      "size": "400x300x200",
      "packUnit": null,
      "price": 40080.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄101호(x70)",
      "spec": "S/W(B)",
      "size": "420x290x140",
      "packUnit": null,
      "price": 35125.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄102호(x50)",
      "spec": "S/W(B)",
      "size": "430x340x200",
      "packUnit": null,
      "price": 40155.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄103호(x80)",
      "spec": "S/W(B)",
      "size": "440x240x150",
      "packUnit": null,
      "price": 34400.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄104호(x60)",
      "spec": "S/W(B)",
      "size": "450x300x100",
      "packUnit": null,
      "price": 30475.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄105호(x40)",
      "spec": "S/W(B)",
      "size": "440x350x270",
      "packUnit": null,
      "price": 37980.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄106호(x40)",
      "spec": "S/W(B)",
      "size": "450x400x150",
      "packUnit": null,
      "price": 34650.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄107호(x55)",
      "spec": "S/W(B)",
      "size": "460x350x100",
      "packUnit": null,
      "price": 39068.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄108호(x50)",
      "spec": "S/W(B)",
      "size": "460x350x170",
      "packUnit": null,
      "price": 39843.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄109호(x40)",
      "spec": "S/W(B)",
      "size": "460x350x250",
      "packUnit": null,
      "price": 38280.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄110호(x30)",
      "spec": "S/W(B)",
      "size": "460x350x350",
      "packUnit": null,
      "price": 32700.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄111호(x50)",
      "spec": "S/W(B)",
      "size": "480x300x200",
      "packUnit": null,
      "price": 32375.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄112호(x50)",
      "spec": "S/W(B)",
      "size": "480x350x150",
      "packUnit": null,
      "price": 39655.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄113호(x40)",
      "spec": "S/W(B)",
      "size": "480x400x200",
      "packUnit": null,
      "price": 40480.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄114호(x50)",
      "spec": "S/W(B)",
      "size": "500x300x150",
      "packUnit": null,
      "price": 31000.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄011-1호(x210)",
      "spec": "S/W(B)",
      "size": "180x150x70",
      "packUnit": null,
      "price": 32500.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄036-2호(x200)",
      "spec": "S/W(B)",
      "size": "240x120x100",
      "packUnit": null,
      "price": 32750.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-534525(x10)",
      "spec": "D/W(BA)",
      "size": "530x450x250",
      "packUnit": null,
      "price": 26109.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-574735(x10)",
      "spec": "D/W(BA)",
      "size": "570x470x350",
      "packUnit": null,
      "price": 31154.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-604035(x10)",
      "spec": "D/W(BA)",
      "size": "600x400x350",
      "packUnit": null,
      "price": 27230.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-605045(x10)",
      "spec": "D/W(BA)",
      "size": "600x500x450",
      "packUnit": null,
      "price": 36927.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-654540(x10)",
      "spec": "D/W(BA)",
      "size": "650x450x400",
      "packUnit": null,
      "price": 33007.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-724840(x10)",
      "spec": "D/W(BA)",
      "size": "720x480x400",
      "packUnit": null,
      "price": 36387.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-755242(x10)",
      "spec": "D/W(BA)",
      "size": "750x520x420",
      "packUnit": null,
      "price": 39936.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄_우체국-1호(x120)",
      "spec": "S/W(B)",
      "size": "220x190x90",
      "packUnit": null,
      "price": 29392.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄_우체국-2호(x100)",
      "spec": "S/W(B)",
      "size": "270x180x150",
      "packUnit": null,
      "price": 30770.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄_우체국-3호(x50)",
      "spec": "S/W(B)",
      "size": "340x250x210",
      "packUnit": null,
      "price": 28755.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄_우체국-4호(x30)",
      "spec": "S/W(A)",
      "size": "410x310x280",
      "packUnit": null,
      "price": 30051.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄_우체국-5호(x16)",
      "spec": "D/W(BA)",
      "size": "480x380x340",
      "packUnit": null,
      "price": 37154.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄_우체국-6호(x11)",
      "spec": "D/W(BA)",
      "size": "520x480x400",
      "packUnit": null,
      "price": 35537.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-006(x120)",
      "spec": "S/W(B)",
      "size": "210x155x100",
      "packUnit": null,
      "price": 22950.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-019(x120)",
      "spec": "S/W(B)",
      "size": "250x190x120",
      "packUnit": null,
      "price": 29100.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-020(x90)",
      "spec": "S/W(B)",
      "size": "250x190x190",
      "packUnit": null,
      "price": 27225.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-041(x120)",
      "spec": "S/W(B)",
      "size": "270x230x130",
      "packUnit": null,
      "price": 40530.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-043(x100)",
      "spec": "S/W(B)",
      "size": "280x200x150",
      "packUnit": null,
      "price": 31500.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-050(x100)",
      "spec": "S/W(B)",
      "size": "280x230x170",
      "packUnit": null,
      "price": 37955.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-064(x50)",
      "spec": "S/W(B)",
      "size": "300x260x260",
      "packUnit": null,
      "price": 26500.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-082(x80)",
      "spec": "S/W(B)",
      "size": "320x220x120",
      "packUnit": null,
      "price": 26800.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-129(x75)",
      "spec": "S/W(B)",
      "size": "360x240x200",
      "packUnit": null,
      "price": 32813.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-154(x45)",
      "spec": "S/W(A)",
      "size": "400x310x220",
      "packUnit": null,
      "price": 38036.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-179(x45)",
      "spec": "S/W(A)",
      "size": "470x360x100",
      "packUnit": null,
      "price": 37755.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-181(x30)",
      "spec": "S/W(A)",
      "size": "480x360x230",
      "packUnit": null,
      "price": 33405.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-191(x30)",
      "spec": "S/W(A)",
      "size": "500x400x150",
      "packUnit": null,
      "price": 33593.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-023-1(x120)",
      "spec": "S/W(B)",
      "size": "250x220x160",
      "packUnit": null,
      "price": 36980.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-156-1(x30)",
      "spec": "S/W(A)",
      "size": "400x350x250",
      "packUnit": null,
      "price": 30893.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-166-1(x30)",
      "spec": "S/W(A)",
      "size": "430x370x250",
      "packUnit": null,
      "price": 33518.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-197-1(x30)",
      "spec": "S/W(A)",
      "size": "510x400x200",
      "packUnit": null,
      "price": 36030.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-101-1(x50)",
      "spec": "S/W(B)",
      "size": "330x265x185",
      "packUnit": null,
      "price": 25500.0,
      "shipping": "무료배송"
    },
    {
      "name": "E-139-1(x70)",
      "spec": "S/W(B)",
      "size": "380x270x170",
      "packUnit": null,
      "price": 33075.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄108-1호(x40)",
      "spec": "S/W(A)",
      "size": "460x350x170",
      "packUnit": null,
      "price": 37580.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄109-1호(x30)",
      "spec": "S/W(B)",
      "size": "460x350x250",
      "packUnit": null,
      "price": 29680.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄065-1호(x100)",
      "spec": "S/W(B)",
      "size": "300x215x120",
      "packUnit": null,
      "price": 29625.0,
      "shipping": "무료배송"
    },
    {
      "name": "무인쇄111-1호(x40)",
      "spec": "S/W(A)",
      "size": "480x300x200",
      "packUnit": null,
      "price": 35430.0,
      "shipping": "무료배송"
    },
    {
      "name": "D-755215(x10)",
      "spec": "D/W(BA)",
      "size": "750x520x150",
      "packUnit": null,
      "price": 28755.0,
      "shipping": "무료배송"
    }
  ],
  "이고다박스": [
    {
      "name": "D101",
      "spec": "A골",
      "size": "590x470x315",
      "packUnit": null,
      "price": 830.0,
      "shipping": null
    },
    {
      "name": "D102",
      "spec": "A골",
      "size": "595x495x500",
      "packUnit": null,
      "price": 1185.0,
      "shipping": null
    },
    {
      "name": "D103",
      "spec": "A골",
      "size": "1000x215x220",
      "packUnit": null,
      "price": 835.0,
      "shipping": null
    },
    {
      "name": "D103-1",
      "spec": "A골",
      "size": "1000x155x155",
      "packUnit": null,
      "price": 695.0,
      "shipping": null
    },
    {
      "name": "D104",
      "spec": "A골",
      "size": "650x460x380",
      "packUnit": null,
      "price": 1090.0,
      "shipping": null
    },
    {
      "name": "D01",
      "spec": "B골",
      "size": "245x170x90",
      "packUnit": null,
      "price": 116.0,
      "shipping": null
    },
    {
      "name": "D02",
      "spec": "B골",
      "size": "280x210x60",
      "packUnit": null,
      "price": 128.0,
      "shipping": null
    },
    {
      "name": "D03",
      "spec": "B골",
      "size": "280x210x120",
      "packUnit": null,
      "price": 152.0,
      "shipping": null
    },
    {
      "name": "D04",
      "spec": "B골",
      "size": "280x210x200",
      "packUnit": null,
      "price": 190.0,
      "shipping": null
    },
    {
      "name": "D05",
      "spec": "B골",
      "size": "320x240x60",
      "packUnit": null,
      "price": 170.0,
      "shipping": null
    },
    {
      "name": "D05-1",
      "spec": "B골",
      "size": "320x240x90",
      "packUnit": null,
      "price": 180.0,
      "shipping": null
    },
    {
      "name": "D06",
      "spec": "B골",
      "size": "320x240x120",
      "packUnit": null,
      "price": 202.0,
      "shipping": null
    },
    {
      "name": "D07",
      "spec": "B골",
      "size": "320x240x200",
      "packUnit": null,
      "price": 270.0,
      "shipping": null
    },
    {
      "name": "D08",
      "spec": "B골",
      "size": "370x320x120",
      "packUnit": null,
      "price": 317.0,
      "shipping": null
    },
    {
      "name": "D09",
      "spec": "B골",
      "size": "470x340x120",
      "packUnit": null,
      "price": 400.0,
      "shipping": null
    },
    {
      "name": "D10",
      "spec": "B골",
      "size": "320x300x120",
      "packUnit": null,
      "price": 281.0,
      "shipping": null
    },
    {
      "name": "우체국1호",
      "spec": "B골",
      "size": "270x190x90",
      "packUnit": null,
      "price": 123.0,
      "shipping": null
    },
    {
      "name": "우체국2호",
      "spec": "B골",
      "size": "270x180x150",
      "packUnit": null,
      "price": 168.0,
      "shipping": null
    },
    {
      "name": "우체국3호",
      "spec": "B골",
      "size": "320x250x210",
      "packUnit": null,
      "price": 292.0,
      "shipping": null
    },
    {
      "name": "우체국4호",
      "spec": "B골",
      "size": "410x310x280",
      "packUnit": null,
      "price": 529.0,
      "shipping": null
    },
    {
      "name": "우체국5호",
      "spec": "DW골",
      "size": "480x380x340",
      "packUnit": null,
      "price": 1117.0,
      "shipping": null
    }
  ]
};

// Default vendor data (fallback & base data from '업체정보' sheet)
const DEFAULT_VENDOR_DATA = {
  "에어캡롤(묶음)": {
    vendor: "(주)그래이거",
    address: "경기도 하남시 하남대로 947, 비동 15층 1502호 (풍산동, 하남테크노밸리 U1 CENTER)",
    contactPerson: "김영실 과장",
    phone: "010-2815-0517",
    email: "hoho7960@naver.com",
    note: ""
  },
  "에어캡롤(낱개)": {
    vendor: "(주)그래이거",
    address: "경기도 하남시 하남대로 947, 비동 15층 1502호 (풍산동, 하남테크노밸리 U1 CENTER)",
    contactPerson: "김영실 과장",
    phone: "010-2815-0517",
    email: "hoho7960@naver.com",
    note: ""
  },
  "에어캡원단": {
    vendor: "(주)그래이거",
    address: "경기도 하남시 하남대로 947, 비동 15층 1502호 (풍산동, 하남테크노밸리 U1 CENTER)",
    contactPerson: "김영실 과장",
    phone: "010-2815-0517",
    email: "hoho7960@naver.com",
    note: ""
  },
  "에어캡패드": {
    vendor: "(주)그래이거",
    address: "경기도 하남시 하남대로 947, 비동 15층 1502호 (풍산동, 하남테크노밸리 U1 CENTER)",
    contactPerson: "김영실 과장",
    phone: "010-2815-0517",
    email: "hoho7960@naver.com",
    note: ""
  },
  "PET안전봉투(낱개)": {
    vendor: "일석공업사",
    address: "인천시 남동구 고잔동 666-13",
    contactPerson: "김민준 과장",
    phone: "010-3667-3647",
    email: "is216644@naver.com",
    note: ""
  },
  "PET안전봉투(묶음)": {
    vendor: "일석공업사",
    address: "인천시 남동구 고잔동 666-13",
    contactPerson: "김민준 과장",
    phone: "010-3667-3647",
    email: "is216644@naver.com",
    note: ""
  },
  "종이쇼핑백": {
    vendor: "오즐바이오",
    address: "경기도 파주시 문산읍 사목로 184-54",
    contactPerson: "실장님",
    phone: "010-2727-8969",
    email: "amore4600@hanmail.net",
    note: ""
  },
  "단열에어캡": {
    vendor: "(주)한국에어론",
    address: "경기도 광주시 오포읍 매자리길27번길 10",
    contactPerson: "안성진 과장",
    phone: "010-8226-5018",
    email: "hkair9951@hanmeil.net",
    note: ""
  },
  "은박원단": {
    vendor: "(주)이루케미칼",
    address: "경기도 안성시 보개면 보개산로 160-22",
    contactPerson: "김고은 과장",
    phone: "010-8126-6546",
    email: "leeru100@hanmail.net",
    note: ""
  },
  "박스테이프": {
    vendor: "금성케이엔티",
    address: "경기도 광주시 오포읍 오포로 593",
    contactPerson: "조대리",
    phone: "010-3370-8823",
    email: "tapeknt@naver.com",
    note: ""
  },
  "박스(에스아이비)": {
    vendor: "에스아이비",
    address: "경기도 평택시 청북읍 청북중앙로 443 （고잔리 631-16 B동）",
    contactPerson: "박춘수 전무",
    phone: "010-4288-0654",
    email: "sib5599@nate.com",
    note: ""
  },
  "이고다박스": {
    vendor: "삼보판지",
    address: "경기도 시흥시 공단1대로28범길 120",
    contactPerson: "박상훈 부장",
    phone: "010-6247-7858",
    email: "fish981107@isambo.com",
    note: ""
  }
};

// Application State
const state = {
  selectedCategory: "ALL",
  selectedSpec: "ALL",
  searchQuery: "",
  viewMode: "board",
  sortBy: "default",
  vendorData: { ...DEFAULT_VENDOR_DATA }
};

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2400);
}

function copyToClipboard(text, label = "내용") {
  if (!text) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => {
        showToast(`✓ ${label}가 복사되었습니다: ${text}`);
      },
      () => {
        fallbackCopy(text, label);
      }
    );
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  try {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.style.position = "fixed";
    tempInput.style.left = "-9999px";
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(`✓ ${label}가 복사되었습니다: ${text}`);
  } catch (err) {
    showToast(`복사에 실패했습니다. 수동으로 복사해 주세요.`);
  }
}

function renderVendorCardHTML(cat) {
  const v = state.vendorData[cat];
  if (!v || (!v.vendor && !v.contactPerson && !v.phone && !v.address && !v.email)) {
    return "";
  }

  const cleanPhone = v.phone ? v.phone.replace(/[^0-9]/g, "") : "";
  const phoneLink = v.phone
    ? `<a href="tel:${cleanPhone}" class="phone-link">${escapeHTML(v.phone)}</a>`
    : "";
  const emailLink = v.email
    ? `<a href="mailto:${escapeHTML(v.email)}" class="phone-link">${escapeHTML(v.email)}</a>`
    : "";
  const noteBadge = v.note
    ? `<div class="vendor-note-wrap"><span>📝 ${escapeHTML(v.note)}</span></div>`
    : "";

  return `
    <div class="category-vendor-card">
      <div class="vendor-card-header">
        <div class="vendor-brand-group">
          <span class="vendor-badge">🏢 입고처: ${escapeHTML(v.vendor || "지정 정보 없음")}</span>
        </div>
        <div class="vendor-contact-group">
          ${v.contactPerson ? `
            <div class="vendor-contact-item">
              <span class="label">담당자</span>
              <span class="value">👤 ${escapeHTML(v.contactPerson)}</span>
            </div>
          ` : ""}
          ${v.phone ? `
            <div class="vendor-contact-item">
              <span class="label">연락처</span>
              <span class="value">📞 ${phoneLink}</span>
              <button type="button" class="copy-pill-btn" data-copy-text="${escapeHTML(v.phone)}" data-copy-label="연락처" title="연락처 복사">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                복사
              </button>
            </div>
          ` : ""}
          ${v.email ? `
            <div class="vendor-contact-item">
              <span class="label">이메일</span>
              <span class="value">✉️ ${emailLink}</span>
              <button type="button" class="copy-pill-btn" data-copy-text="${escapeHTML(v.email)}" data-copy-label="이메일" title="이메일 복사">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                복사
              </button>
            </div>
          ` : ""}
        </div>
      </div>
      <div class="vendor-card-body">
        <div class="vendor-address-wrap">
          <span class="label">📍 입고처 주소</span>
          <span class="address-text">${escapeHTML(v.address || "주소 미입력")}</span>
          ${v.address ? `
            <button type="button" class="copy-pill-btn" data-copy-text="${escapeHTML(v.address)}" data-copy-label="주소" title="주소 복사">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              주소 복사
            </button>
          ` : ""}
        </div>
        ${noteBadge}
      </div>
    </div>
  `;
}

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
  if (num === null || num === undefined || num === "" || isNaN(num)) return "-";
  return "₩" + Number(num).toLocaleString("ko-KR");
}

function formatShipping(val) {
  if (val === null || val === undefined || val === "") return "-";
  if (typeof val === "number" || (!isNaN(Number(val)) && typeof val === "string" && val.trim() !== "")) {
    return "₩" + Number(val).toLocaleString("ko-KR");
  }
  return String(val);
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
  const isPad = cat === "에어캡패드";
  const isBoxSIB = cat.includes("박스(에스아이비)");
  const isBoxIgoda = cat === "이고다박스";

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
  } else if (isPad) {
    theadHTML += `<th>품명</th><th>사이즈 규격 (cm)</th><th style="width: 70px;">두께</th>`;
  } else if (isBoxSIB || isBoxIgoda) {
    theadHTML += `<th>품명 (규격명)</th><th>사이즈 (mm)</th><th style="width: 85px;">골/재질</th>`;
  } else {
    theadHTML += `<th>품명 / 규격</th><th style="width: 75px;">사양</th>`;
  }

  if (hasPack) {
    theadHTML += `<th class="text-right" style="width: 80px;">포장단위</th>`;
  }

  theadHTML += `<th class="text-right" style="min-width: 130px; white-space: nowrap;">입고단가 <span class="vat-tag">(VAT별도)</span></th>`;

  if (hasPack) {
    theadHTML += `<th class="text-right" style="min-width: 140px; white-space: nowrap;">1묶음 합계 <span class="vat-tag">(VAT별도)</span></th>`;
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
      } else if (isPad) {
        rowHTML += `<td><strong>${item.name}</strong></td><td class="numeric">${item.size}</td><td><span class="item-spec-chip">${item.spec}</span></td>`;
      } else if (isBoxSIB || isBoxIgoda) {
        rowHTML += `<td><strong>${item.name}</strong></td><td class="numeric">${item.size}</td><td><span class="item-spec-chip">${item.spec}</span></td>`;
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
        const shippingStr = formatShipping(item.shipping);
        const isFree = String(item.shipping).includes("무료");
        const extraStyle = isFree ? 'style="color:#00875a; font-weight:600;"' : '';
        rowHTML += `<td class="text-right numeric shipping-badge" ${extraStyle}>${shippingStr}</td>`;
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
      } else if (cat === "에어캡패드") {
        subGroups = specs.map((sp) => ({
          title: `패드 두께 ${sp}`,
          subtitle: `에어캡패드 ${sp} 규격 (호수별)`,
          items: catItems.filter((i) => i.spec === sp)
        }));
      } else if (cat === "박스테이프") {
        subGroups.push({
          title: "박스테이프 전 규격",
          subtitle: "포장단위(박스) 및 롤당 단가 · 택배비",
          items: catItems
        });
      } else if (cat.includes("박스(에스아이비)")) {
        subGroups.push({
          title: "박스(에스아이비) 전 규격",
          subtitle: `시트 원본 품명 순서 (${catItems.length}종 · 무료배송)`,
          items: catItems
        });
      } else if (cat === "이고다박스") {
        subGroups.push({
          title: "이고다박스 전 규격",
          subtitle: `시트 원본 품명 순서 (${catItems.length}종)`,
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

          ${renderVendorCardHTML(cat)}

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
  const baseTabs = [...Object.keys(RAW_SHEET_DATA), "업체정보"];
  try {
    const resp = await fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`, { cache: "no-store" });
    if (resp.ok) {
      const html = await resp.text();
      const parts = html.split('docs-sheet-tab-caption">').slice(1);
      const names = parts.map((p) => p.split("</div>")[0].trim()).filter(Boolean);
      if (names.length > 0) {
        if (!names.includes("업체정보")) names.push("업체정보");
        return [...new Set(names)];
      }
    }
  } catch (e) {
    // fallback if CORS or network error
  }
  return baseTabs;
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

      // Handle dedicated Vendor Info sheet
      if (sheetName === "업체정보" || sheetName.includes("업체") || sheetName.includes("입고처")) {
        const vHeaders = rows[0].map((h) => h.trim());
        let catCol = -1, vendorCol = -1, addrCol = -1, personCol = -1, phoneCol = -1, emailCol = -1, noteCol = -1;
        vHeaders.forEach((h, idx) => {
          const lh = h.toLowerCase();
          if (h.includes("품목") || h.includes("시트") || h.includes("카테고리")) catCol = idx;
          else if (h.includes("입고처") || h.includes("업체") || h.includes("상호")) vendorCol = idx;
          else if (h.includes("주소") || h.includes("위치")) addrCol = idx;
          else if (h.includes("담당") || h.includes("성명") || h.includes("이름")) personCol = idx;
          else if (h.includes("연락") || h.includes("전화") || h.includes("번호") || h.includes("핸드폰")) phoneCol = idx;
          else if (h.includes("이메일") || h.includes("메일") || lh.includes("email") || lh.includes("mail")) emailCol = idx;
          else if (h.includes("비고") || h.includes("메모") || h.includes("참고")) noteCol = idx;
        });

        if (catCol === -1) catCol = 0;
        if (vendorCol === -1) vendorCol = 1;
        if (addrCol === -1) addrCol = 2;
        if (personCol === -1) personCol = 3;
        if (phoneCol === -1) phoneCol = 4;

        for (let i = 1; i < rows.length; i++) {
          const r = rows[i];
          const catName = r[catCol] ? r[catCol].trim() : "";
          if (!catName || catName.includes("품목")) continue;

          state.vendorData[catName] = {
            vendor: vendorCol < r.length && r[vendorCol] ? r[vendorCol].trim() : "",
            address: addrCol < r.length && r[addrCol] ? r[addrCol].trim() : "",
            contactPerson: personCol < r.length && r[personCol] ? r[personCol].trim() : "",
            phone: phoneCol < r.length && r[phoneCol] ? r[phoneCol].trim() : "",
            email: emailCol !== -1 && emailCol < r.length && r[emailCol] ? r[emailCol].trim() : "",
            note: noteCol !== -1 && noteCol < r.length && r[noteCol] ? r[noteCol].trim() : ""
          };
        }
        continue;
      }

      const headers = rows[0].map((h) => h.trim());
      let nameIdx = 0;
      let specIdx = 1;
      let sizeIdx = 2;
      let packIdx = -1;
      let priceIdx = -1;
      let shipIdx = -1;

      headers.forEach((h, idx) => {
        if (h.includes("품명")) nameIdx = idx;
        else if (h.includes("두께") || h.includes("재질") || h.includes("골")) specIdx = idx;
        else if (h.includes("사이즈") || h.includes("규격")) sizeIdx = idx;
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
          const rawShip = String(r[shipIdx]).trim();
          const s = parseFloat(rawShip.replace(/,/g, ""));
          if (!isNaN(s)) {
            shipVal = s;
          } else if (rawShip) {
            shipVal = rawShip;
          }
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

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy-text]");
    if (btn) {
      const text = btn.getAttribute("data-copy-text");
      const label = btn.getAttribute("data-copy-label") || "내용";
      copyToClipboard(text, label);
    }
  });

  renderAll();
  syncFromGoogleSheets();
});
