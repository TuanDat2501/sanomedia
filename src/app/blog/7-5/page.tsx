'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0705 = () => {
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
          Cùng nhìn lại những khoảnh khắc đáng nhớ của Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>07-05-2025
        </h3>
        <p>Tại Sano Media, chúng tôi tin rằng: Công việc sẽ nhẹ nhàng hơn khi ta có những người đồng hành tuyệt vời.</p>
        <p>Không chỉ cùng nhau “chiến đấu” trong từng dự án, từng deadline gấp rút, mà những giờ phút ăn trưa, những trận cười trong phòng họp hay những buổi liên hoan ấm cúng… đều là chất keo kết nối các thành viên lại với nhau.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-3.jpg?alt=media&token=497c672e-9c11-452f-9273-34131251ed84"
          alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-4.jpg?alt=media&token=b69f2ec8-9c72-44a0-bbb0-edb7f3a5cdfc"
          alt="image1" />
        <p>Đó là những khoảnh khắc không ghi trong KPI, không nằm trong bảng lương, nhưng lại đọng mãi trong ký ức – vì chúng ta đã cùng cười, cùng chia sẻ và lớn lên mỗi ngày.</p>
        <p>Sano Media không chỉ là nơi làm việc, mà là nơi tạo nên những mối quan hệ chân thành và đáng quý.</p>
      </div>
    </div>
  );
};

export default B0705;