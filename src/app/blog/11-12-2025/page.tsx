'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1112 = () => {
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
        <title>
          Sano Media - Cùng Bạn Tạo Nên Giá Trị Bền Vững</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Sano Media - Cùng Bạn Tạo Nên Giá Trị Bền Vững
        </h1>
        <h3 style={{ fontSize: "20px" }}>09-12-2025
        </h3>
        <p>Trong bối cảnh truyền thông ngày càng cạnh tranh, một thương hiệu muốn được ghi nhớ cần nhiều hơn những hình ảnh đẹp – cần chiến lược đúng, nội dung chạm và sự đồng hành lâu dài.</p>
        <p>Với đội ngũ trẻ trung, sáng tạo và không ngừng học hỏi, Sano Media mang đến các giải pháp truyền thông toàn diện, từ sản xuất video, nội dung số đến xây dựng hình ảnh thương hiệu. Mỗi dự án đều được thực hiện bằng sự nghiêm túc, chỉn chu và tinh thần trách nhiệm cao nhất.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://i.ibb.co/6JLRR45X/589123323-848967824557671-5277289159050350437-n.jpg"
          alt="image1" />
        <p>Điều tạo nên sự khác biệt của Sano Media chính là con người và văn hóa làm việc. Chúng tôi đề cao tinh thần chủ động, sự kết nối trong đội ngũ và sự linh hoạt trong cách tiếp cận. Mỗi thành viên đều được khuyến khích sáng tạo, dám nghĩ khác và sẵn sàng đổi mới để mang lại hiệu quả tốt nhất.</p>
        <p>Không chỉ tập trung vào kết quả, Sano Media còn chú trọng đến hành trình. Chúng tôi tin rằng, khi mỗi cá nhân được phát triển trong môi trường tích cực, những sản phẩm tạo ra sẽ mang giá trị lâu dài và chạm đúng nhu cầu của thị trường.</p>
        <p>Trong tương lai, Sano Media tiếp tục hướng đến việc nâng cao chất lượng dịch vụ, mở rộng năng lực sáng tạo và khẳng định vị thế trong lĩnh vực truyền thông. Chúng tôi luôn sẵn sàng đồng hành cùng các doanh nghiệp, cùng nhau kiến tạo những câu chuyện thương hiệu ý nghĩa và bền vững.</p>
        <p><strong>Sano Media – Kết nối ý tưởng, lan tỏa giá trị, đồng hành phát triển.</strong></p>
      </div>
    </div>
  );
};

export default B1112;