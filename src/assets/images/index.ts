import chanli1 from './holder/chanli1_channguoi.jpg'
import chanli2 from './holder/chanli2_li.jpg'
import danChu2 from './holder/danchu_chu.jpg'
import danChu1 from './holder/danchu_dan.jpg'
import tudo1 from './holder/tudo1_chimbay.jpeg'
import tudo2 from './holder/tudo1_chimbocau.jpeg'
import daoduc1 from './holder/daoduc1_dao.png'
import daoduc2 from './holder/daoduc2_duc.jpg'
import banchat1 from './holder/banchat1_ban.jpg'
import banchat2 from './holder/banchat2_chat.jpg'
import binhdang1 from './holder/binhdang1_binh.jpg'
import binhdang2 from './holder/binhdang2_dang.jpg'
import chedochinhtri1 from './holder/chedochinhtri_che.jpg'
import chedochinhtri2 from './holder/chedochinhtri_chinhtri.webp'
import chedochinhtri12 from './holder/chedochinhtri_dojpg.png'
import chuno2 from './holder/chuno2_no.jpg'
import congly1 from './holder/congly1_cong.jpg'
import congly2 from './holder/congly2_ly.jpg'
import daidien from './holder/daidien_dai.jpg'
import daidien1 from './holder/daidien_dien.jpg'
import danchu1 from './holder/danchu_dan.jpg'
import danchu2 from './holder/danchu_chu.jpg'
import danchuchuno1 from './holder/danchuchuno_chuno.jpg'
import danchutusan1 from './holder/danchutusan_tusan.jpg'
import daso1 from './holder/daso1.jpg'
import daso2 from './holder/daso2.jpg'
import giacngo1 from './holder/giacngo1_giac.webp'
import giacngo2 from './holder/giacngo2_ngo.jpg'
import giaicap1 from './holder/giaicap1_giai.webp'
import giaicap2 from './holder/giaicap2_cap.jpg'
import giaicapcongnhan from './holder/giaicapcongnhan.jpg'
import hanhphuc1 from './holder/hanhphuc1_hanh.jpg'
import hanhphuc2 from './holder/hanhphuc2_phuc.jpg'
import hienhuu1 from './holder/hienhuu1_hien.webp'
import hienhuu2 from './holder/hienhuu2_huu.jpg'
import hinhthainhanuoc2 from './holder/hinhthainhanuoc_nhanuoc.jpg'
import hinhthainhanuoc1 from './holder/hinhthainhanuoc_thai.webp'
import hinhthuc_hinhnen from './holder/hinhthuc_hinhnen.jpg'
import hylap1 from './holder/hylap1.png'
import hylap2 from './holder/hylap2.jpg'
import luongtam1 from './holder/luongtam1_luong.jpg'
import luongtam2 from './holder/luongtam2_tam.jpg'
import nendanchu1 from './holder/nandanchu1.webp'
import nendanchu2 from './holder/nandanchu2.jpg'
import nhandan1 from './holder/nhandan1_nhan.png'
import nhansinhquan1 from './holder/nhansinhquan1_nhan.jpg'
import nhansinhquan2 from './holder/nhansinhquan2_sinh.jpg'
import nhansinhquan3 from './holder/nhansinhquan3_quan.jpg'
import quuyenluc1 from './holder/quyenluc1_quyen.png'
import quyenluc2 from './holder/quyenluc2_luc.webp'
import tamthuc1 from './holder/tamthuc1_tam.jpg'
import tamthuc2 from './holder/tamthuc2_thuc.jpg'
import thangmuoi1 from './holder/thangmuoi1.jpg'
import thangmuoi2 from './holder/thangmuoi2.jpg'
import thieuso1 from './holder/thieuso1.jpg'
import thieuso2 from './holder/thieuso2.jpg'
import thuctai1 from './holder/thuctai1_thuc.jpg'
import thuctai2 from './holder/thuctai2_tai.jpg'
import tritue1 from './holder/tritue1_tri.jpg'
import tritue2 from './holder/tritue2_tue.jpg'
import trutiep from './holder/tructiep.webp'
import tuduyphephan1 from './holder/tuduyphephan1_tuduy.png'
import tuduyphephan2 from './holder/tuduyphephan2_phephan.png'
import tusan1 from './holder/tusan1_tu.jpg'
import tusan2 from './holder/tusan2_san.jpg'
import conghuu1 from './holder/congly1_cong.jpg'
import conghuu2 from './holder/hienhuu2_huu.jpg'


export const imageMap: Record<number, string[]> = {
  // ══════════════════════════════════════════════════════════════════════════
  // TRIẾT HỌC GỐC (ID 1–15)
  // ══════════════════════════════════════════════════════════════════════════

  // 2 | TỰ DO
  // Gợi ý: chim sổ lồng, bầu trời rộng, người dang tay
  // Subfolder: q02-tu-do/
  2: [
    tudo1, // img1 – chim bay tự do
    tudo2, // img2 – người dang tay trên đỉnh núi
  ],

  // 3 | CHÂN LÝ
  // Gợi ý: cân công lý, ánh sáng/sự thật, mắt nhìn thẳng
  // Subfolder: q03-chan-ly/
  3: [
    chanli1, // img1 – ánh sáng chiếu qua
    chanli2, // img2 – cân công lý
  ],

  // 4 | TƯ DUY PHÊ PHÁN
  // Gợi ý: người đang suy nghĩ sâu, não bộ, câu hỏi dấu hỏi
  // Subfolder: q04-tu-duy-phe-phan/
  4: [
    tuduyphephan1, // img1 – người suy tư
    tuduyphephan2, // img2 – hình ảnh não bộ
  ],

  // 5 | ĐẠO ĐỨC
  // Gợi ý: bắt tay, giúp đỡ nhau, trái tim
  // Subfolder: q05-dao-duc/
  5: [
    daoduc1, // img1 – mọi người hợp tác
    daoduc2, // img2 – bàn tay nâng đỡ
  ],

  // 6 | HIỆN HỮU
  // Gợi ý: bóng người trong không gian, vũ trụ, sự tồn tại
  // Subfolder: q06-hien-huu/
  6: [
    hienhuu1, // img1 – không gian vũ trụ
    hienhuu2, // img2 – bóng người đứng một mình
  ],

  // 7 | LƯƠNG TÂM
  // Gợi ý: ánh nến, bàn tay che ngọn lửa, người đang suy ngẫm
  // Subfolder: q07-luong-tam/
  7: [
    luongtam1, // img1 – ánh nến le lói
    luongtam2, // img2 – trái tim phát sáng
  ],

  // 8 | HẠNH PHÚC
  // Gợi ý: gia đình vui vẻ, nụ cười, cảnh đẹp thiên nhiên
  // Subfolder: q08-hanh-phuc/
  8: [
    hanhphuc1, // img1 – người cười hạnh phúc
    hanhphuc2, // img2 – nhóm bạn bè vui vẻ
  ],

  // 9 | TÂM THỨC
  // Gợi ý: thiền định, não bộ sáng, người nhắm mắt tập trung
  // Subfolder: q09-tam-thuc/
  9: [
    tamthuc1, // img1 – người thiền định
    tamthuc2, // img2 – trạng thái tĩnh lặng nội tâm
  ],

  // 10 | CÔNG LÝ
  // Gợi ý: cân công lý, tòa án, búa phán quyết
  // Subfolder: q10-cong-ly/
  10: [
    congly1, // img1 – biểu tượng pháp luật
    congly2, // img2 – búa thẩm phán
  ],

  // 11 | TRÍ TUỆ
  // Gợi ý: cụ già uyên thâm, sao trời, ánh sáng tri thức
  // Subfolder: q11-tri-tue/
  11: [
    tritue1, // img1 – bầu trời đêm đầy sao
    tritue2, // img2 – người lớn tuổi trí tuệ
  ],

  // 12 | GIÁC NGỘ
  // Gợi ý: ánh sáng bừng lên, hoa sen nở, người thiền dưới cây
  // Subfolder: q12-giac-ngo/
  12: [
    giacngo1, // img1 – hoa sen nở rộ
    giacngo2, // img2 – ánh sáng giác ngộ
  ],

  // 13 | BẢN CHẤT
  // Gợi ý: bản đồ Việt Nam, lọ hóa chất, cấu trúc bên trong
  // Subfolder: q13-ban-chat/
  13: [banchat1, banchat2],

  // 14 | NHÂN SINH QUAN
  // Gợi ý: người nhìn ra xa / toàn cảnh thế giới, địa cầu
  // Subfolder: q14-nhan-sinh-quan/
  14: [
    nhansinhquan1, // img1 – người đứng nhìn toàn cảnh
    nhansinhquan2, // img2 – quả địa cầu / bản đồ thế giới
    nhansinhquan3, // img3 – hình ảnh toàn cảnh
  ],

  // 15 | THỰC TẠI
  // Gợi ý: cảnh thực tế cuộc sống, đường phố, vật thể cụ thể
  // Subfolder: q15-thuc-tai/
  15: [
    thuctai1, // img1 – cảnh thiên nhiên thực tế
    thuctai2, // img2 – không gian vũ trụ thực tại
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // NHÓM 1 – TỪ KHÓA ĐƠN / ĐÔI (ID 16–28)
  // ══════════════════════════════════════════════════════════════════════════
  // 16 | DÂN CHỦ
  // Gợi ý: người dân lao động + ông chủ mặc vest (Dân + Chủ)
  // Subfolder: q16-dan-chu/
  16: [
    danChu1, // img1 – người dân lao động
    danChu2, // img2 – ông chủ mặc vest
  ],

  // 17 | NHÂN DÂN
  // Gợi ý: củ nhân sâm + đám đông dân số (Nhân + Dân)
  // Subfolder: q17-nhan-dan/
  17: [
    nhandan1, // img1 – đám đông nhân dân
    danchu1, // img2 – quần chúng đa dạng
  ],

  // 18 | QUYỀN LỰC
  // Gợi ý: quyển sách (Quyền) + lực sĩ nâng tạ (Lực)
  // Subfolder: q18-quyen-luc/
  18: [
    quuyenluc1, // img1 – quyển sách (đọc lái = Quyền)
    quyenluc2, // img2 – lực sĩ nâng tạ (= Lực)
  ],

  // 19 | HY LẠP
  // Gợi ý: khuôn mặt cười hi hi (Hy) + củ lạc đậu phộng (Lạp)
  // Subfolder: q19-hy-lap/
  19: [
    hylap1, // img1 – đền Parthenon Hy Lạp
    hylap2, // img2 – cột trụ cổ đại
  ],

  // 20 | CHỦ NÔ
  // Gợi ý: ông chủ (Chủ) + em bé đang nô đùa (Nô)
  // Subfolder: q20-chu-no/
  20: [
    danChu2, // img1 – ông chủ quyền lực
    chuno2, // img2 – em bé nô đùa
  ],

  // 21 | TƯ SẢN
  // Gợi ý: người đang suy tư (Tư) + vàng bạc tài sản (Sản)
  // Subfolder: q21-tu-san/
  21: [
    tusan1, // img1 – người đang suy tư
    tusan2, // img2 – vàng bạc tài sản
  ],

  // 22 | CÔNG HỮU
  // Gợi ý: con chim công (Công) + hai người bạn hữu (Hữu)
  // Subfolder: q22-cong-huu/
  22: [
    conghuu1, // img1 – con chim công xòe đuôi
    conghuu2, // img2 – hai người bạn hữu
  ],

  // 23 | TƯ HỮU
  // Gợi ý: hành động tưới nước (gần âm Tư) + bằng hữu (Hữu)
  // Subfolder: q23-tu-huu/
  23: [
    tusan1, // img1 – tưới cây (= Tư)
    conghuu2, // img2 – bạn hữu bên nhau
  ],

  // 24 | BÌNH ĐẲNG
  // Gợi ý: cái bình hoa (Bình) + dấu bằng toán học (Đẳng)
  // Subfolder: q24-binh-dang/
  24: [binhdang1, binhdang2],
  // 25 | GIAI CẤP
  // Gợi ý: anh chàng đẹp giai (Giai) + xe cấp cứu (Cấp)
  // Subfolder: q25-giai-cap/
  25: [
    giaicap1, // img1 – chàng trai điển trai (= Giai)
    giaicap2, // img2 – xe cấp cứu (= Cấp)
  ],

  // 26 | THIỂU SỐ
  // Gợi ý: hành động thêu thùa (đọc lái thành Thiểu) + dãy số (Số)
  // Subfolder: q26-thieu-so/
  26: [
    thieuso1, // img1 – thêu thùa (= Thiểu)
    thieuso2, // img2 – con số, thống kê (= Số)
  ],

  // 27 | ĐA SỐ
  // Gợi ý: cây đa cổ thụ (Đa) + dãy số (Số)
  // Subfolder: q27-da-so/
  27: [
    daso1, // img1 – cây đa cổ thụ to lớn
    daso2, // img2 – dãy số học (= Số)
  ],

  // 28 | THÁNG MƯỜI
  // Gợi ý: ánh trăng / Mặt Trăng (Tháng) + điểm mười đỏ chói (Mười)
  // Subfolder: q28-thang-muoi/
  28: [
    thangmuoi1, // img1 – Mặt Trăng đêm (= Tháng)
    thangmuoi2, // img2 – bài thi điểm 10 (= Mười)
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // NHÓM 2 – CỤM TỪ KHÁI NIỆM TRỌNG TÂM (ID 29–39)
  // ══════════════════════════════════════════════════════════════════════════

  // 29 | NỀN DÂN CHỦ
  // Gợi ý: nền móng bê tông (Nền) + tòa nhà quốc hội / dân chủ (Dân Chủ)
  // Subfolder: q29-nen-dan-chu/
  29: [
    nendanchu1, // img1 – nền móng công trình xây dựng
    nendanchu2, // img2 – tòa nhà quốc hội / nghị viện
    danChu1,
  ],

  // 30 | DÂN CHỦ HÌNH THỨC
  // Gợi ý: người dân (Dân) + bức tranh/hình vẽ (Hình) + người thức khuya học (Thức)
  // Subfolder: q30-dan-chu-hinh-thuc/ — có 3 ảnh
  30: [
    danChu1, // img1 – đám đông người dân (= Dân)
    hinhthuc_hinhnen, // img2 – bức tranh / hình vẽ (= Hình)
    tamthuc2, // img3 – người thức khuya học bài (= Thức)
  ],

  // 31 | DÂN CHỦ CHỦ NÔ
  // Gợi ý: đền Hy Lạp cổ đại (nền dân chủ đầu tiên) + trẻ em vui chơi (nô đùa)
  // Subfolder: q31-dan-chu-chu-no/
  31: [
    danChu1, // img1 – công trình Hy Lạp cổ đại
    danchuchuno1, // img2 – trẻ em nô đùa (= Nô)
  ],

  // 32 | DÂN CHỦ TƯ SẢN
  // Gợi ý: vàng/tài sản (Tư Sản) + biểu tượng tư bản
  // Subfolder: q32-dan-chu-tu-san/
  32: [
    danchu1, // img1 – vàng bạc tài sản tư hữu
    danchutusan1, // img2 – biểu tượng tư bản / công nghiệp
  ],

  // 33 | CHẾ ĐỘ CHÍNH TRỊ
  // Gợi ý: tòa nhà chính phủ + nghị trường / chính trị
  // Subfolder: q33-che-do-chinh-tri/
  33: [
    chedochinhtri1,
    chedochinhtri12, // img1 – tòa nhà quốc hội (= Chính Trị)
    chedochinhtri2, // img2 – cuộc họp chính phủ
  ],

  // 34 | HÌNH THÁI NHÀ NƯỚC
  // Gợi ý: các hình khối hình học (Hình Thái) + ngôi nhà / trụ sở (Nhà Nước)
  // Subfolder: q34-hinh-thai-nha-nuoc/
  34: [
    hinhthuc_hinhnen, // img1 – kiến trúc hình khối (= Hình Thái)
    hinhthainhanuoc1,
    hinhthainhanuoc2, // img2 – tòa nhà nhà nước / chính phủ
  ],

  // 35 | DÂN CHỦ TRỰC TIẾP
  // Gợi ý: hòm phiếu bầu cử (trực tiếp bỏ phiếu) + người dân xếp hàng bầu cử
  // Subfolder: q35-dan-chu-truc-tiep/
  35: [
    danChu1, // img1 – hòm phiếu bầu cử trực tiếp
    trutiep, // img2 – người dân xếp hàng bỏ phiếu
  ],

  // 36 | DÂN CHỦ ĐẠI DIỆN
  // Gợi ý: phòng họp quốc hội (đại biểu đại diện) + người phát biểu trước đám đông
  // Subfolder: q36-dan-chu-dai-dien/
  36: [
    danChu1,
    daidien, // img1 – hội trường quốc hội (= Đại Diện)
    daidien1, // img2 – người đại diện phát biểu
  ],

  // 37 | CHẾ ĐỘ CÔNG HỮU
  // Gợi ý: công nhân lao động tập thể (Công) + con chim công (Công Hữu)
  // Subfolder: q37-che-do-cong-huu/
  37: [
    chedochinhtri1, // img1 – công nhân lao động tập thể
    chedochinhtri12,
    conghuu1,
    hienhuu2, // img2 – con chim công (= Công Hữu)
  ],

  // 38 | CHẾ ĐỘ TƯ HỮU
  // Gợi ý: tài sản tư nhân / vàng bạc (Tư Hữu) + tưới cây cá nhân (Tư)
  // Subfolder: q38-che-do-tu-huu/
  38: [
    chedochinhtri1, // img1 – công nhân lao động tập thể
    chedochinhtri12,
    tusan1,
    hienhuu2,
  ],

  // 39 | GIAI CẤP CÔNG NHÂN
  // Gợi ý: công nhân nhà máy (Công Nhân) + anh chàng đẹp giai (Giai Cấp)
  // Subfolder: q39-giai-cap-cong-nhan/
  39: [
    giaicap1, // img1 – công nhân nhà máy
    giaicap2, // img2 – lao động tập thể giai cấp
    giaicapcongnhan
  ],
}
