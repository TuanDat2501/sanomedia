'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2808 = () => {
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
          Một Trận Đấu – Ba Màu Áo – Một Tinh Thần</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Một Trận Đấu – Ba Màu Áo – Một Tinh Thần
        </h1>
        <h3 style={{ fontSize: "20px" }}>28-08-2025
        </h3>
        <p>Vừa qua, FC Sano Media, FC Padoma Media Việt Nam và FC Lý Bá Thiện đã có buổi giao lưu bóng đá đầy kịch tính tại Bắc Ninh.</p>
        <p>Những pha bóng máu lửa, những cú sút đẹp mắt cùng tiếng reo hò cổ vũ đã tạo nên bầu không khí sôi động và nhiệt huyết.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/536273579_777138471740607_2879142311139913624_n.jpg?alt=media&token=34aa4812-ce4b-49c1-9378-a85997411d96"
                                alt="image1" />
        <p>Đối thủ trong trận đấu, chiến hữu sau trận đấu – bóng đá luôn tuyệt vời như thế. Cảm ơn tất cả cầu thủ, CĐV và ban tổ chức - hẹn gặp lại ở những trận cầu giao lưu tiếp theo!</p>
            
      </div>
    </div>
  );
};  

export default B2808;