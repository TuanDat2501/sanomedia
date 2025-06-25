'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2106 = () => {
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
        <title>VINH DANH TEAM “SÁNG CHẾ KHÔNG NGHỈ – CHIẾN THẮNG MỖI NGÀY”!</title>
        
      </Head>
      <div className="container">
        <h1>Vinh Danh Team "Sáng Tạo Không Ngừng - Chiến Thắng Mỗi Ngày"!</h1>
        <h3 style={{ fontSize: "20px" }}>21-06-2025</h3>
        <p>Một tràng pháo tay thật lớn gửi đến team đã xuất sắc giành giải thưởng hiệu suất hằng ngày của Sano Media! </p>
        <p>Không chỉ hoàn thành xuất sắc chỉ tiêu, các thành viên của team còn thể hiện tinh thần chủ động, sáng tạo và làm việc “nhiệt hơn cái nắng tháng 6” 🌞. Từ những deadline gấp rút, brief khó nhằn cho tới các ý tưởng viral "chạm nóc" – team luôn sẵn sàng bật mood “chiến thần” và cùng nhau bứt phá.</p>
        <p>Và phần thưởng cho những nỗ lực không ngừng ấy chính là… combo năng lượng đến từ Sano Media – để tiếp thêm lửa cho chặng đường tiếp theo!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_0954.JPG?alt=media&token=dc23c855-7e51-4cb1-aaaf-54fc7fa957db"
          alt="image1" />
        <br />
        <p>Tại Sano, mỗi ngày đều là một cơ hội để toả sáng. Chúng tôi tin rằng thành tích không nằm ở cuối con đường, mà chính là hành trình nỗ lực mỗi ngày của từng cá nhân, từng team.</p>
        <p>Và bạn thì sao?Đã sẵn sàng “on top” trong bảng vàng ngày mai chưa?</p>
      </div>
    </div>
  );
};

export default B2106;