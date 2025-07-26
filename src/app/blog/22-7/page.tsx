'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2207 = () => {
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
         Sano Media – Nơi Tinh Thần Trẻ Trung Luôn Cháy Bỏng!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Nơi Tinh Thần Trẻ Trung Luôn Cháy Bỏng!
        </h1>
        <h3 style={{ fontSize: "20px" }}>22-07-2025
        </h3>
        <p><b>Trẻ trung không chỉ là độ tuổi – mà là thái độ sống!: </b></p>
        <p>Tại Sano, mỗi thành viên mang trong mình tinh thần Gen Z: dám nghĩ – dám làm – dám bùng nổ. Từ những ý tưởng “không tưởng” đến những cuộc họp cười ra nước mắt, tất cả đều là chất liệu tạo nên một môi trường không bao giờ nhàm chán.</p>
        <b>Làm việc hiện đại – Sống hết mình!</b>
        <p>Ở Sano, tinh thần trẻ trung không đến từ decor, mà đến từ cách chúng tôi kết nối, sáng tạo và truyền cảm hứng cho nhau mỗi ngày. Có thể bạn 25 tuổi, hoặc 35 tuổi – điều quan trọng là bạn dám bước ra khỏi vùng an toàn và không ngừng mới mẻ chính mình.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL8986%20(1).jpg?alt=media&token=854ffa17-14df-4638-8817-0f1aa5464243"
                                alt="image1" />
        <p>Vì vậy, nếu bạn đang tìm kiếm một nơi làm việc “xịn”, con người “xịn” và vibe thì “rất gì và này nọ”, thì… Sano Media chính là điểm hẹn lý tưởng!</p>
        <b>Sano Media – Làm hết mình, sống chất từng khoảnh khắc!</b>
      </div>
    </div>
  );
};

export default B2207;