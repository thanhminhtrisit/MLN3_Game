import { imageMap } from '../../assets/images';

export interface Question {
  id: number;
  imageUrls: string[];
  answer: string;
  normalizedAnswer: string;
  timeLimit: number;
}

export const philosophyQuestions: Question[] = [
  // ── TRIẾT HỌC GỐC ────────────────────────────────────────────────────────
  { id: 2,  imageUrls: imageMap[2],  answer: "TỰ DO",              normalizedAnswer: "tu do",              timeLimit: 38 },
  { id: 3,  imageUrls: imageMap[3],  answer: "CHÂN LÝ",            normalizedAnswer: "chan ly",             timeLimit: 38 },
  { id: 4,  imageUrls: imageMap[4],  answer: "TƯ DUY PHÊ PHÁN",   normalizedAnswer: "tu duy phe phan",    timeLimit: 45 },
  { id: 5,  imageUrls: imageMap[5],  answer: "ĐẠO ĐỨC",           normalizedAnswer: "dao duc",            timeLimit: 38 },
  { id: 6,  imageUrls: imageMap[6],  answer: "HIỆN HỮU",          normalizedAnswer: "hien huu",           timeLimit: 38 },
  { id: 7,  imageUrls: imageMap[7],  answer: "LƯƠNG TÂM",         normalizedAnswer: "luong tam",          timeLimit: 38 },
  { id: 8,  imageUrls: imageMap[8],  answer: "HẠNH PHÚC",         normalizedAnswer: "hanh phuc",          timeLimit: 38 },
  { id: 9,  imageUrls: imageMap[9],  answer: "TÂM THỨC",          normalizedAnswer: "tam thuc",           timeLimit: 38 },
  { id: 10, imageUrls: imageMap[10], answer: "CÔNG LÝ",            normalizedAnswer: "cong ly",            timeLimit: 38 },
  { id: 11, imageUrls: imageMap[11], answer: "TRÍ TUỆ",            normalizedAnswer: "tri tue",            timeLimit: 38 },
  { id: 12, imageUrls: imageMap[12], answer: "GIÁC NGỘ",           normalizedAnswer: "giac ngo",           timeLimit: 38 },
  { id: 13, imageUrls: imageMap[13], answer: "BẢN CHẤT",           normalizedAnswer: "ban chat",           timeLimit: 38 },
  { id: 14, imageUrls: imageMap[14], answer: "NHÂN SINH QUAN",     normalizedAnswer: "nhan sinh quan",     timeLimit: 45 },
  { id: 15, imageUrls: imageMap[15], answer: "THỰC TẠI",           normalizedAnswer: "thuc tai",           timeLimit: 38 },

  // ── NHÓM 1: TỪ KHÓA ĐƠN / ĐÔI ───────────────────────────────────────────
  { id: 16, imageUrls: imageMap[16], answer: "DÂN CHỦ",            normalizedAnswer: "dan chu",            timeLimit: 38 },
  { id: 17, imageUrls: imageMap[17], answer: "NHÂN DÂN",           normalizedAnswer: "nhan dan",           timeLimit: 38 },
  { id: 18, imageUrls: imageMap[18], answer: "QUYỀN LỰC",          normalizedAnswer: "quyen luc",          timeLimit: 38 },
  { id: 19, imageUrls: imageMap[19], answer: "HY LẠP",             normalizedAnswer: "hy lap",             timeLimit: 38 },
  { id: 20, imageUrls: imageMap[20], answer: "CHỦ NÔ",             normalizedAnswer: "chu no",             timeLimit: 38 },
  { id: 21, imageUrls: imageMap[21], answer: "TƯ SẢN",             normalizedAnswer: "tu san",             timeLimit: 38 },
  { id: 22, imageUrls: imageMap[22], answer: "CÔNG HỮU",           normalizedAnswer: "cong huu",           timeLimit: 38 },
  { id: 23, imageUrls: imageMap[23], answer: "TƯ HỮU",             normalizedAnswer: "tu huu",             timeLimit: 38 },
  { id: 24, imageUrls: imageMap[24], answer: "BÌNH ĐẲNG",          normalizedAnswer: "binh dang",          timeLimit: 38 },
  { id: 25, imageUrls: imageMap[25], answer: "GIAI CẤP",           normalizedAnswer: "giai cap",           timeLimit: 38 },
  { id: 26, imageUrls: imageMap[26], answer: "THIỂU SỐ",           normalizedAnswer: "thieu so",           timeLimit: 38 },
  { id: 27, imageUrls: imageMap[27], answer: "ĐA SỐ",              normalizedAnswer: "da so",              timeLimit: 38 },
  { id: 28, imageUrls: imageMap[28], answer: "THÁNG MƯỜI",         normalizedAnswer: "thang muoi",         timeLimit: 38 },

  // ── NHÓM 2: CỤM TỪ KHÁI NIỆM TRỌNG TÂM ─────────────────────────────────
  { id: 29, imageUrls: imageMap[29], answer: "NỀN DÂN CHỦ",        normalizedAnswer: "nen dan chu",        timeLimit: 45 },
  { id: 30, imageUrls: imageMap[30], answer: "DÂN CHỦ HÌNH THỨC", normalizedAnswer: "dan chu hinh thuc", timeLimit: 50 },
  { id: 31, imageUrls: imageMap[31], answer: "DÂN CHỦ CHỦ NÔ",    normalizedAnswer: "dan chu chu no",    timeLimit: 50 },
  { id: 32, imageUrls: imageMap[32], answer: "DÂN CHỦ TƯ SẢN",    normalizedAnswer: "dan chu tu san",    timeLimit: 50 },
  { id: 33, imageUrls: imageMap[33], answer: "CHẾ ĐỘ CHÍNH TRỊ",  normalizedAnswer: "che do chinh tri",  timeLimit: 50 },
  { id: 34, imageUrls: imageMap[34], answer: "HÌNH THÁI NHÀ NƯỚC", normalizedAnswer: "hinh thai nha nuoc", timeLimit: 50 },
  { id: 35, imageUrls: imageMap[35], answer: "DÂN CHỦ TRỰC TIẾP", normalizedAnswer: "dan chu truc tiep", timeLimit: 50 },
  { id: 36, imageUrls: imageMap[36], answer: "DÂN CHỦ ĐẠI DIỆN",  normalizedAnswer: "dan chu dai dien",  timeLimit: 50 },
  { id: 37, imageUrls: imageMap[37], answer: "CHẾ ĐỘ CÔNG HỮU",   normalizedAnswer: "che do cong huu",   timeLimit: 50 },
  { id: 38, imageUrls: imageMap[38], answer: "CHẾ ĐỘ TƯ HỮU",     normalizedAnswer: "che do tu huu",     timeLimit: 50 },
  { id: 39, imageUrls: imageMap[39], answer: "GIAI CẤP CÔNG NHÂN", normalizedAnswer: "giai cap cong nhan", timeLimit: 50 },
];

// Shuffle and pick 10 random questions
export function getRandomQuestions(): Question[] {
  const shuffled = [...philosophyQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

// Remove Vietnamese diacritics for comparison (including đ/Đ which NFD cannot decompose)
export function removeDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[đĐ]/g, d => d === 'đ' ? 'd' : 'D')
    .toLowerCase()
    .trim();
}
