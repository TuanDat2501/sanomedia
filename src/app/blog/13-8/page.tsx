'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1308 = () => {
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
          Vinh Danh Team Xuất Sắc – Chinh Phục KPI Ngày!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Vinh Danh Team Xuất Sắc – Chinh Phục KPI Ngày!
        </h1>
        <h3 style={{ fontSize: "20px" }}>13-08-2025
        </h3>
        <p>Mỗi ngày tại Sano Media đều là một chặng đua đầy thử thách. Và hôm nay, chúng ta cùng chúc mừng team đã bứt phá ngoạn mục, hoàn thành KPI ngày với kết quả ấn tượng!</p>
        <p>Không chỉ đạt mục tiêu, các bạn còn thể hiện tinh thần teamwork, sự sáng tạo và quyết tâm đến cùng. Đây chính là minh chứng rõ ràng rằng: Khi đồng lòng – không gì là không thể.</p>
        <p>Xin chúc mừng những người đã xuất sắc vượt chỉ tiêu, phối hợp ăn ý và mang lại kết quả đáng tự hào cho hôm nay! Không chỉ làm việc hiệu quả, team còn lan tỏa tinh thần lạc quan, sáng tạo và đầy nhiệt huyết trong từng hành động nhỏ nhất.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/z6895496815586_f3e4e144f6c55c193ba2fd873b364cf8.jpg?alt=media&token=31e5a48a-2e59-4107-86aa-089794f09fca"
          alt="image1" />
        
        <p>Phần thưởng ngọt ngào chính là động lực để team tiếp tục duy trì phong độ, lan tỏa tinh thần máu lửa và truyền cảm hứng đến tất cả mọi người trong đại gia đình Sano.</p>
        <p>Một lần nữa, xin gửi lời chúc mừng nồng nhiệt đến các “chiến binh” của ngày hôm nay. Hãy sẵn sàng, vì bảng vàng KPI ngày mai đang chờ đón những cái tên mới!</p>
      
      </div>
    </div>
  );
};

export default B1308;