'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1102 = () => {
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
        <title>Tinh Thần Đồng Đội - Sức Mạnh Vượt Mọi Giới Hạn</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tinh Thần Đồng Đội - Sức Mạnh Vượt Mọi Giới Hạn</h1>
        <h3 style={{ fontSize: "20px" }}>11-02-2025</h3>
        <p>Các bạn còn nhớ không, khoảnh khắc chúng ta cùng hô vang "Sano Media". Khoảnh khắc ấy vẫn còn vẹn nguyên trong trái tim mỗi người – giây phút chúng ta cùng nhau hô vang cái tên ấy đầy tự hào!</p>
        <p>Đó không chỉ là một cái tên, mà là tinh thần, là bản lĩnh, là ước mơ chung của tất cả chúng ta.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        alt={"image"} style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2001%2F01XL0628.JPG?alt=media&token=01273345-8068-44e6-81a7-75a53499de26" />
        <p>Đó không chỉ là một công ty, mà là gia đình, là nơi mỗi người đều nỗ lực, cống hiến để tạo nên điều tuyệt vời.</p>
        <p>Chúng ta đã cùng nhau trải qua bao thăng trầm, cùng nhau chiến đấu, cùng nhau chinh phục những thử thách tưởng chừng không thể.</p>
        <p>Nhưng chính tinh thần đồng đội, chính niềm tin vào con đường chúng ta đang đi đã giúp Sano Media vững bước, mạnh mẽ hơn từng ngày!</p>
      </div>
    </div> 
  );
};

export default B1102;