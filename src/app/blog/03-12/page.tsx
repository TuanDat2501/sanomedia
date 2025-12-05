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
        <title>Xây Dựng Văn Hóa Doanh Nghiệp Từ Những Điều Giản Dị</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Xây Dựng Văn Hóa Doanh Nghiệp Từ Những Điều Giản Dị</h1>
        <h3 style={{ fontSize: "20px" }}>08-10-2025</h3>
        <p>Một công ty vững mạnh không chỉ được xây dựng bằng chiến lược hay con số, mà còn bởi văn hoá – thứ vô hình nhưng tạo ra giá trị bền vững nhất.</p>
        <p>Trong suốt hành trình vừa qua, chúng ta đã cùng nhau kiến tạo một môi trường làm việc nơi mỗi người đều cảm thấy được tôn trọng, được lắng nghe và được truyền cảm hứng. Đó không phải điều tự nhiên mà có – mà từ chính thái độ sống, cách làm việc và tinh thần của từng thành viên.</p>
        <p>Ở công ty chúng ta, năng lượng tích cực không đến từ những điều lớn lao, mà từ những điều tưởng chừng rất đỗi bình thường:</p>
        <ul>
          <li>✨ Một lời hỏi thăm đầu ngày.</li>
          <li>✨ Một nụ cười động viên khi đồng đội gặp khó.</li>
          <li>✨ Sự chủ động hỗ trợ nhau khi deadline đến gần.</li>
          <li>✨ Những chia sẻ chân thành sau mỗi dự án, để cùng tốt lên.</li>
        </ul>
        <p>Chính những điều nhỏ bé ấy góp thành một tập thể đoàn kết – nơi ai cũng cảm thấy an tâm phát triển, tự tin sáng tạo và sẵn sàng bứt phá.</p>
        <p>Chúng ta hiểu rằng:</p>
        <ul>
          <li>👉 Một nhân viên hạnh phúc sẽ tạo ra công việc chất lượng.</li>
          <li>👉 Một tập thể kết nối chặt chẽ sẽ tạo ra giá trị mạnh mẽ.</li>
          <li>👉 Và một môi trường tích cực sẽ giúp từng người bộc lộ tốt nhất khả năng của mình.</li>
        </ul>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://i.ibb.co/mCX71V59/539073780-773073298813791-3355023922934736797-n.jpg"
          alt="image1" />
        <br />
        <p>Hành trình phía trước còn dài, còn nhiều cơ hội, nhiều thử thách. Nhưng chỉ cần chúng ta tiếp tục giữ vững tinh thần tích cực, tiếp tục tin tưởng nhau, và cùng nhau tiến bước – chắc chắn công ty sẽ đạt được những mục tiêu lớn hơn nữa.</p>
      </div>
    </div>
  );
};

export default B0606;