'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0708 = () => {
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
          Tự Giác – Tự Giỏi – Tự Tỏa Sáng: Chất riêng của người Sano!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Tự Giác – Tự Giỏi – Tự Tỏa Sáng: Chất riêng của người Sano!
        </h1>
        <h3 style={{ fontSize: "20px" }}>07-08-2025
        </h3>
        <p>Tại Sano Media, không ai cần phải đợi ai nhắc việc, chẳng cần deadline dí sát mới chịu chạy – bởi vì mỗi thành viên đều là “chiến binh chủ động”!</p>
        <p>Tự giác lên kế hoạch, chủ động đề xuất, dám làm – dám chịu – dám bứt phá. Đó chính là chất lửa khiến tập thể này luôn bùng nổ năng lượng mỗi ngày.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-3.jpg?alt=media&token=497c672e-9c11-452f-9273-34131251ed84"
          alt="image1" />
        <p>Chúng tôi không chỉ làm tốt việc được giao, mà còn chủ động làm hơn cả mong đợi. Mỗi task không còn là nhiệm vụ, mà là cơ hội để bộc lộ bản lĩnh, để học nhanh – làm gọn – và tạo ra giá trị thật sự.</p>
        <p> Sano tin rằng: Khi mỗi người tự giác như một leader, thì cả team sẽ luôn vững như một đội quân tinh nhuệ. Và khi bạn tỏa sáng đúng lúc, chẳng cần spotlight – cả văn phòng sẽ tự khắc vỗ tay!</p>
        <p>Tự giác không phải là áp lực – mà là sức mạnh. Là khí chất riêng của người làm chủ công việc, làm chủ hành trình của mình.</p>
      </div>
    </div>
  );
};

export default B0708;