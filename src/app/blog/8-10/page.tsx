'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0606 = () => {
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
        <title>Sano Media – Nơi Kiến Tạo Giá Trị, Lan Tỏa Sự Khác Biệt</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Sano Media – Nơi Kiến Tạo Giá Trị, Lan Tỏa Sự Khác Biệt</h1>
        <h3 style={{ fontSize: "20px" }}>08-10-2025</h3>
        <p>Trong thế giới truyền thông không ngừng thay đổi, Sano Media tự hào là một trong những đơn vị trẻ, năng động và sáng tạo, luôn tiên phong trong việc mang đến những giải pháp truyền thông hiệu quả và đột phá cho doanh nghiệp.</p>
        <p>Từ những ngày đầu thành lập, Sano Media đã mang trong mình sứ mệnh “Lan tỏa giá trị – Kết nối cảm xúc”, lấy con người làm trung tâm, lấy sáng tạo làm nền tảng. Với đội ngũ nhân sự trẻ trung, đầy nhiệt huyết, chúng tôi không chỉ tạo nên những sản phẩm truyền thông chất lượng mà còn kiến tạo những câu chuyện thương hiệu chạm đến trái tim người xem.</p>
        <p>Bên trong Sano Media là một môi trường làm việc mở – trẻ – hiện đại, nơi mọi ý tưởng đều được lắng nghe và tôn trọng. Mỗi cá nhân đều có cơ hội thể hiện bản thân, thử sức ở nhiều lĩnh vực khác nhau và cùng nhau phát triển. Chính tinh thần đoàn kết, hỗ trợ lẫn nhau đã giúp Sano Media không ngừng lớn mạnh qua từng dự án.</p>
        <p>Chúng tôi tin rằng, giá trị thật sự của một công ty không chỉ nằm ở thành công kinh doanh, mà còn ở con người – văn hóa – và tinh thần cùng nhau tiến bước. Mỗi chiến dịch là một hành trình học hỏi, mỗi thành viên là một mảnh ghép tạo nên bản sắc riêng của Sano Media.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-2.jpg?alt=media&token=6aa8e90a-4a38-4c50-b910-6c0f5155c1d3"
          alt="image1" />
        <br />
        <p>Sano Media – Nơi làm việc không chỉ để thành công, mà còn để cùng nhau trưởng thành, sáng tạo và lan tỏa niềm cảm hứng.</p>
       
      </div>
    </div>
  );
};

export default B0606;