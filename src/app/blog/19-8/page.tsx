'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1908 = () => {
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
         Mừng Sinh Nhật Tháng 8 – Gửi Trao Yêu Thương</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Mừng Sinh Nhật Tháng 8 – Gửi Trao Yêu Thương
        </h1>
        <h3 style={{ fontSize: "20px" }}>19-08-2025
        </h3>
        <p>Tháng 8 ghé qua mang theo nắng vàng và những lời chúc tốt đẹp nhất dành cho các thành viên có ngày sinh trong tháng. Hôm nay, đại gia đình Sano Media đã cùng nhau quây quần, tổ chức một buổi sinh nhật ấm áp và tràn đầy tiếng cười.</p>
        <p>Những chiếc bánh ngọt ngào, những bó hoa tươi thắm, cùng những món quà nhỏ xinh chính là cách mà tập thể gửi gắm tình cảm, lời tri ân và sự gắn kết đến các “nhân vật chính” của tháng.</p>
    
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/0816(3).mp4?alt=media&token=50684d11-0a05-4e40-8d2b-ea21efcb101b" type="video/mp4" />
        </video>  
        <p>Đây không chỉ là dịp để chúc mừng tuổi mới, mà còn là cơ hội để chúng ta cùng sẻ chia niềm vui, tạo nên những kỷ niệm đáng nhớ bên đồng nghiệp – những người bạn đồng hành trên hành trình chinh phục mục tiêu chung.</p>
        <p>Chúc các thành viên sinh nhật tháng 8 thật nhiều sức khỏe, niềm vui và thành công rực rỡ trong tuổi mới. Cảm ơn vì đã luôn góp phần tạo nên một Sano Media trẻ trung, nhiệt huyết và gắn kết!</p>
      </div>
    </div>
  );
};

export default B1908;