'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0205 = () => {
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
        CHIA SẺ LÀ SỨC MẠNH – VĂN HÓA ĐẶC TRƯNG TẠI SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media | Kỷ niệm ngày Giải phóng miền Nam 30/4
        </h1>
        <h3 style={{ fontSize: "20px" }}>02-05-2025
        </h3>
        <p>Hoà chung không khí hào hùng của cả nước, tại Sano Media Việt Nam chúng mình không chỉ ôn lại dấu ấn lịch sử hào hùng của dân tộc mà còn ghi nhận những nỗ lực không ngừng nghỉ của đội ngũ 🎉</p>
        <p>Những phần thưởng này được trao giữa sắc đỏ lá cờ Tổ quốc – không chỉ là lời tri ân, mà còn là động lực để tất cả chúng ta tiếp tục bứt phá, cống hiến, và cùng nhau lan tỏa giá trị tích cực qua từng sản phẩm.</p>

         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0205%2F494419427_684116981042757_2035289550162444142_n.jpg?alt=media&token=ade58b5f-01e6-4ae3-b6a3-d404160c7e60" />
        <p>Tự hào là 1 Sanoers – Tự hào là người Việt Nam!</p>
      </div>
    </div>
  );
};

export default B0205;