'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1712 = () => {
  const isMobile = useMediaQuery('(max-width: 430px)');
  return (
    <div style={{
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100px",
      marginBottom: "100px",
      padding: "15px"
    }}>
      <Head>
        <title>Vinh Danh Team Chiến Thắng - Buổi Đào Tạo Công Ty</title>
        <meta
          name="description"
          content="Chúc mừng team chiến thắng trong buổi đào tạo công ty! Cùng tìm hiểu cách họ đạt được thành tích xuất sắc và bài học quý giá từ sự kiện này."
        />
        <meta
          name="keywords"
          content="vinh danh, team chiến thắng, buổi đào tạo, công ty, kỹ năng, teamwork"
        />
        <meta name="author" content="Công Ty ABC" />
      </Head>
      <main className="container mx-auto p-4">
        <article>
          <h1 className="text-4xl font-bold my-6">
            Vinh Danh Team Chiến Thắng - Team Chất
          </h1>
          <h3 style={{ fontSize: "20px" }}>17-12-2024</h3>  
          <p className="text-lg my-4">
            Vào ngày 9 tháng 12, công ty chúng ta đã tổ chức một buổi đào tạo
            thành công với sự tham gia của tất cả các phòng ban. Trong buổi đào tạo, các
            thành viên đã được chia thành nhiều nhóm để tham gia một trò chơi thú vị nhằm
            thúc đẩy kỹ năng làm việc nhóm và sáng tạo.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 my-4">
            Chúc Mừng Team Chiến Thắng
          </h2>
          <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                  alt={"image"} style={{ maxWidth: "1200px" }}
                                                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1812%2F01XL9749.JPG?alt=media&token=d8531a63-f1ea-4b2e-8e4e-043cd870d03b" />
          <i><strong>Team Chất</strong></i>
          <p className="text-lg my-4">
            Sau những giờ phút căng thẳng và đầy nhiệt huyết, chúng ta đã tìm ra
            đội chiến thắng: <strong>Team Chất</strong>. Với tinh thần đồng đội cao,
            sự sáng tạo và chiến lược xuất sắc, họ đã vượt qua tất cả thử thách và đạt
            được điểm số ấn tượng.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 my-4">
            Bí Quyết Thành Công
          </h2>
          <ul className="list-disc pl-8 text-lg my-4">
            <li><strong>Giao tiếp hiệu quả:</strong> Các thành viên luôn giữ vững
              sự kết nối và trao đổi thông tin kịp thời.</li>
            <li><strong>Tinh thần đồng đội:</strong> Mỗi thành viên đều đóng góp
              hết mình, không ngại giúp đỡ lẫn nhau.</li>
            <li><strong>Khả năng sáng tạo:</strong> Họ đã đưa ra những ý tưởng
              sáng tạo để giải quyết các thử thách một cách xuất sắc.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-700 my-4">
            Bài Học Từ Sự Kiện
          </h2>
          <p className="text-lg my-4">
            Sự kiện này không chỉ là một trò chơi mà còn là cơ hội để chúng ta
            học hỏi về tầm quan trọng của làm việc nhóm và sự sáng tạo trong công việc.
            Chúng ta hy vọng sẽ có thêm nhiều buổi đào tạo thú vị hơn nữa trong tương lai!
          </p>
          <p className="text-lg my-4">
            Một lần nữa, chúc mừng <strong>Team Chất</strong> và cảm ơn tất
            cả các thành viên đã tham gia nhiệt tình. Hẹn gặp lại trong những sự kiện tiếp
            theo!
          </p>
        </article>
      </main>
    </div>
  );
};

export default B1712;