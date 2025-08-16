'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1108 = () => {
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
         Sinh Nhật CEO – Khoảnh Khắc Ấm Áp Tại Sano Media</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Sinh Nhật CEO – Khoảnh Khắc Ấm Áp Tại Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>11-08-2025
        </h3>
        <p>Hôm nay, đại gia đình Sano Media đã cùng nhau tổ chức một buổi sinh nhật nhỏ nhưng đầy ấm áp dành cho CEO của công ty – người luôn dẫn dắt, truyền cảm hứng và đồng hành cùng chúng ta trên mọi chặng đường.</p>
        <p>Không cần những nghi thức cầu kỳ, chỉ với một chiếc bánh sinh nhật, vài lời chúc chân thành và những nụ cười rạng rỡ, cả văn phòng đã tràn ngập không khí gắn kết, vui vẻ và hạnh phúc.</p>
    
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/0811(1).mp4?alt=media&token=6dbdaca9-1e74-444c-9b02-b7fd5f787c2b" type="video/mp4" />
        </video>  
        <p>Buổi sinh nhật không chỉ là dịp để tập thể gửi lời chúc mừng tuổi mới, mà còn là cách chúng ta bày tỏ sự tri ân, tình cảm và niềm tin dành cho vị thuyền trưởng của Sano Media.</p>
        <p>Chúc CEO luôn mạnh khỏe, tràn đầy năng lượng và tiếp tục đưa Sano Media ngày càng phát triển, vững vàng và bứt phá trên hành trình phía trước.</p>
        <p>Một buổi tiệc nhỏ – nhưng mang ý nghĩa lớn. Bởi ở Sano Media, mỗi khoảnh khắc bên nhau đều là kỷ niệm đáng trân trọng.</p>
      </div>
    </div>
  );
};

export default B1108;