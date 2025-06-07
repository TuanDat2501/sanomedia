'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0506 = () => {
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
        <title>Tinh thần Sano: Năng lượng, Sáng tạo và Chinh phục thử thách!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tinh thần Sano: Năng lượng, Sáng tạo và Chinh phục thử thách!</h1>
        <h3 style={{ fontSize: "20px" }}>05-06-2025</h3>
        <p>Sano Media không chỉ là nơi làm việc, mà là ngọn lửa khơi dậy đam mê và sáng tạo mỗi ngày. Mỗi thành viên ở đây đều mang trong mình một năng lượng bùng nổ, luôn sẵn sàng đón nhận và vượt qua mọi thử thách.</p>
        <p><b>Năng lượng dồi dào</b> giúp mọi người không ngại khó, không ngại khổ, luôn “cháy” hết mình trong từng dự án.</p>
        <p><b>Sáng tạo là chìa khóa</b> để mỗi cá nhân thể hiện cá tính riêng, biến những ý tưởng táo bạo thành hiện thực đầy ấn tượng.</p>
        <p><b>Chinh phục thử thách</b> không chỉ là mục tiêu, mà là cách mỗi người liên tục nâng tầm bản thân, để ngày hôm nay tốt hơn ngày hôm qua.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0264.jpg?alt=media&token=d2275460-2836-4404-949a-e394ef227253"
          alt="image1" />
        <br />
        <p>Tại Sano, không có chỗ cho sự trì trệ hay rụt rè. Mọi thử thách đều được xem như cơ hội để bứt phá, để khẳng định “chất riêng” và đóng góp cho sự phát triển chung.</p>
        <p>Cùng Sano Media, mỗi ngày là một hành trình khám phá, một câu chuyện thành công mới được viết nên từ chính sự nhiệt huyết và sáng tạo của bạn!</p>
      </div>
    </div>
  );
};

export default B0506;