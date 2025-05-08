'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0805 = () => {
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
          CÙNG NHÌN LẠI NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ CỦA SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Sano Media – Hành trình kiến tạo giá trị khác biệt
        </h1>
        <h3 style={{ fontSize: "20px" }}>08-05-2025
        </h3>
        <p>Trong một thị trường truyền thông ngày càng cạnh tranh và đổi thay chóng mặt, Sano Media vẫn luôn giữ cho mình một định hướng rõ ràng: không ngừng đổi mới, không ngừng tạo giá trị – và quan trọng nhất, luôn lấy con người làm trung tâm.</p>
        <p>Chúng tôi không chỉ làm truyền thông. Chúng tôi đồng hành cùng khách hàng trong việc xây dựng thương hiệu, chạm tới cảm xúc người xem và tạo ra những chiến dịch thực sự có sức lan tỏa.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/sanolife-10.webp?alt=media&token=4df989c9-2450-48c5-bbbc-b53a184d573c"
          alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-6.jpg?alt=media&token=67dd0c01-4c4b-41ea-9943-8f154203eb89"
          alt="image1" />
        <p>Đằng sau mỗi dự án thành công là sự đóng góp thầm lặng nhưng bền bỉ của cả một tập thể – những con người Sano luôn dấn thân, sáng tạo và tận tâm.</p>
        <p>Sano Media không tự hào vì mình là công ty lớn, mà tự hào vì mình đang từng ngày tạo ra những giá trị thật cho cộng đồng và cho chính mỗi thành viên trong đại gia đình này.</p>
      </div>
    </div>
  );
};

export default B0805;