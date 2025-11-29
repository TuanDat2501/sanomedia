import React from 'react';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-3xl mx-auto px-4 py-12">


        {/* --- ARTICLE HEADER --- */}
        <header className="mb-10 text-center md:text-left">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Cơ hội nghề nghiệp
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Tìm Kiếm Video Editor: Gia Nhập Đội Ngũ Sáng Tạo Tại Sano Media
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
            {/* <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xs">HR</div>
            </div>
            <span>•</span> */}
            <time>29 Tháng 11, 2025</time>
          </div>
        </header>

        {/* --- HERO IMAGE PLACEHOLDER --- */}
        <div className="w-full h-64 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl mb-10 flex items-center justify-center shadow-lg" style={{height:"23rem"}}>
          {/* <span className="text-white text-opacity-90 font-bold text-2xl tracking-widest border-4 border-white border-opacity-30 p-4">
            WE ARE HIRING
          </span> */}
          <video controls>
                <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2402%2F0224(2).mp4?alt=media&token=4c4b65b8-6f6e-4f6a-96ca-3747884c8fa0" type="video/mp4" />
            </video>
        </div>

        {/* --- ARTICLE BODY --- */}
        <article className="prose prose-lg max-w-none text-gray-700 leading-loose">

          <p className="text-xl text-gray-600 italic mb-8 border-l-4 border-orange-500 pl-4 bg-gray-50 py-2">
            "Tại Sano Media, chúng tôi tự hào mang đến một môi trường làm việc mà bạn luôn tìm kiếm: Trẻ trung, năng động và tôn trọng sự khác biệt."
          </p>

          <p>
            Bạn là một người trẻ yêu thích sự sáng tạo? Bạn muốn những thước phim do chính tay mình edit được lan tỏa và đón nhận? Sano Media đang mở cửa chào đón vị trí <strong>Video Editor</strong> đầy tiềm năng gia nhập đại gia đình của chúng tôi.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 flex items-center gap-2">
            1. Thu nhập & Quyền lợi hấp dẫn
          </h2>
          <p>
            Chúng tôi hiểu rằng để sáng tạo thăng hoa, bạn cần một nền tảng tài chính vững chắc. Tại Sano Media, mức thu nhập không chỉ dừng lại ở lương cứng.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-gray-900">Mức lương cứng cạnh tranh</strong>
                  <span>Từ <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">8.000.000đ – 12.000.000đ</span> (thỏa thuận theo năng lực).</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-gray-900">Thưởng không giới hạn</strong>
                  <span>Cơ chế thưởng minh bạch dựa trên hiệu suất làm việc. Bạn làm tốt, thu nhập sẽ xứng đáng.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl font-bold">✓</span>
                <div>
                  <strong className="block text-gray-900">Phúc lợi đầy đủ</strong>
                  <span>Đóng BHXH đầy đủ theo quy định, đảm bảo quyền lợi lâu dài cho nhân sự.</span>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            2. Môi trường làm việc "trong mơ"
          </h2>
          <p>
            Quên đi những văn phòng gò bó hay những quy tắc cứng nhắc. Sano Media hướng tới sự <strong>Chuyên nghiệp & Hiện đại</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Thiết bị xịn sò:</strong> Chúng tôi cung cấp máy móc cấu hình cao, phục vụ tối đa cho công việc dựng phim, đồ họa.</li>
            <li><strong>Tôn trọng & Lắng nghe:</strong> Tại đây, không có ý tưởng nào là "ngớ ngẩn". Mọi ý kiến đóng góp đều được trân trọng. Sếp và đồng nghiệp luôn sẵn sàng lắng nghe bạn.</li>
            <li><strong>Phát triển bản thân:</strong> Là nơi tài năng của bạn được tỏa sáng và thăng hoa. Chúng tôi thường xuyên tổ chức các buổi đào tạo nội bộ (Training) để nâng cao kỹ năng.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
            3. Đời sống tinh thần (Work-life balance)
          </h2>
          <p>
            Làm hết sức, chơi hết mình! Ngoài công việc, Sano Media cực kỳ chú trọng đến đời sống tinh thần của anh em:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">✈️ Du lịch hàng năm</h3>
              <p className="text-sm text-gray-600">Những chuyến đi "xả hơi" định kỳ để nạp lại năng lượng sáng tạo.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <h3 className="font-bold text-orange-800 mb-2">🤝 Teambuilding</h3>
              <p className="text-sm text-gray-600">Hoạt động gắn kết đội ngũ, vui chơi có thưởng thường xuyên.</p>
            </div>
          </div>

        </article>

        {/* --- CALL TO ACTION (FOOTER AREA) --- */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center md:text-left md:flex items-center justify-between shadow-xl">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Bạn đã sẵn sàng gia nhập?</h3>
              <p className="text-gray-400">Đừng chần chờ, hãy gửi hồ sơ cho chúng tôi ngay hôm nay.</p>
            </div>

           {/*  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 active:scale-95 whitespace-nowrap">
              📩 Inbox Nhận JD Chi Tiết
            </button> */}
          </div>
        </div>

      </main>

      {/* --- SIMPLE FOOTER --- */}
      {/* <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Sano Media. All rights reserved.</p>
      </footer> */}

    </div>
  );
}