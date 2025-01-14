'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1401 = () => {
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
        BẠN ĐÃ BÙNG NỔ NĂNG LƯỢNG VỚI FOLLOW THE LEADER?</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        BẠN ĐÃ BÙNG NỔ NĂNG LƯỢNG VỚI FOLLOW THE LEADER? </h1>
        <h3 style={{ fontSize: "20px" }}>13-01-2025
        </h3>
        <p>Không có gì là không thể khi chúng ta cùng nhau tạo ra sức mạnh đoàn kết và sự quyết tâm. Hãy để mỗi buổi tập là một cú hích giúp bạn mạnh mẽ hơn, tự tin hơn và tiến xa hơn trong mọi thử thách!</p>
        <p>Mỗi phút bạn dành cho sức khỏe là một phút bạn đầu tư vào tương lai của chính mình. Cùng nhau, chúng ta sẽ làm được nhiều điều tuyệt vời!</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1401%2F0111(3).mp4?alt=media&token=ae04541e-2d7a-47b5-ac3a-d4d6a467f8c8" type="video/mp4" />
        </video>
        
        <p>"Follow The Leader" đã thực sự mang đến một ngày bùng nổ năng lượng cho toàn thể nhân viên công ty. Hoạt động này không chỉ tạo ra những khoảnh khắc đáng nhớ mà còn là động lực để các thành viên tiếp tục đồng hành, gắn bó và phát triển trong môi trường làm việc đầy sáng tạo và chuyên nghiệp của công ty Sano.</p>
      </div>
    </div>
  );
};

export default B1401;