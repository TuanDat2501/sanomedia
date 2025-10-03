'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0110 = () => {
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
          Vinh Danh Team Xuất Sắc – Rinh Thưởng Ngày!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Vinh Danh Team Xuất Sắc – Rinh Thưởng Ngày!
        </h1>
        <h3 style={{ fontSize: "20px" }}>01-10-2025
        </h3>
        <p>Một ngày làm việc đầy nỗ lực đã khép lại với thành tích rực rỡ từ những chiến binh đã bứt phá ngoạn mục và chinh phục KPI trong ngày hôm nay.</p>
        <p>Phần thưởng xứng đáng chính là sự ghi nhận cho tinh thần làm việc hết mình, đồng lòng và quyết tâm không bỏ cuộc của cả đội.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0110%2FIMG_4520.JPG?alt=media&token=98b86c32-280e-4c1f-bcf8-6db9e7ccd348"
          alt="image1" />

        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0110%2FIMG_4515.JPG?alt=media&token=36a336d4-b84c-40f3-9bcd-1f6b10d66d4f"
          alt="image1" />
        <p>Thành công của team hôm nay không chỉ là con số, mà còn là minh chứng cho sức mạnh tập thể, cho tinh thần “cùng nhau tiến lên” của đại gia đình Sano Media.</p>
        <p>Chúc mừng team đã rinh thưởng ngày – và hãy tiếp tục giữ lửa để còn chinh phục nhiều đỉnh cao hơn nữa trong hành trình sắp tới nhé!</p>
      </div>
    </div>
  );
};

export default B0110;