'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2504 = () => {
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
          Chia sẻ là sức mạnh – văn hóa đặc trưng tại Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>25-04-2025
        </h3>
        <p>Ở Sano Media, chúng tôi tin rằng: khi một người chia sẻ, cả đội sẽ phát triển.</p>
        <p>Từ những buổi họp team, chia sẻ kinh nghiệm cá nhân, đến các buổi workshop nội bộ, không khí ở Sano luôn tràn đầy năng lượng của sự cởi mở. Mỗi thành viên không ngại góp ý, không ngại hỏi, và đặc biệt là không ngại giúp đỡ nhau cùng tốt lên mỗi ngày.</p>
        <ul>
          <li>Học được mẹo thiết kế mới? Chia sẻ ngay trong nhóm chat chung.</li>
          <li>Có tips quản lý thời gian hiệu quả? Kéo đồng nghiệp cùng thử nghiệm.</li>
          <li>Biết khách hàng cần gì? Truyền lại cho team sale, team content để tối ưu công việc.</li>
          </ul>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0263.jpg?alt=media&token=461ce1ee-bb0e-4993-8df6-cd861d5c79fa" />
                  
        <p>Chính văn hóa chia sẻ này đã tạo nên một tập thể thấu hiểu – linh hoạt – luôn học hỏi không ngừng, và đặc biệt là không có ai bị bỏ lại phía sau.</p>
        <p>Tại Sano, chúng tôi không chỉ chia sẻ để cùng nhau làm tốt việc, mà còn chia sẻ để hiểu nhau, để kết nối, để xây dựng một môi trường làm việc đáng tự hào.</p>
      </div>
    </div>
  );
};

export default B2504;