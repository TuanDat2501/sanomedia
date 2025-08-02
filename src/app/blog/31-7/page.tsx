'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B3107 = () => {
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
        Một ngày Làm Việc Tràn năng Lượng Tại Sano Media</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Một ngày Làm Việc Tràn năng Lượng Tại Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>31-07-2025
        </h3>
        <p>Tại Sano Media, mỗi ngày làm việc không chỉ đơn thuần là “cắm cúi làm việc”, mà là một hành trình chinh phục mục tiêu bằng tinh thần máu lửa và trẻ trung của cả team!</p>
        <p>Bắt đầu ngày mới bằng bài thể dục và khẩu hiệu – tiếp thêm năng lượng tích cực, khởi động tinh thần đoàn kết và quyết tâm.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2209%2F0422.mp4?alt=media&token=d8da45d2-6b90-49ab-97b3-41589cb1a2f0" type="video/mp4" />
        </video>  
        <p>Làm việc linh hoạt, sáng tạo không giới hạn – từ lên ý tưởng content, quay dựng, chạy chiến dịch đến brainstorm những chiến lược độc đáo, mọi cá nhân đều được trao quyền thể hiện bản thân</p>
        <p>Đồng đội luôn là chỗ dựa – dù deadline có “cháy” đến đâu, team vẫn không rời nhau nửa bước. Hỗ trợ, chia sẻ, cùng nhau xử lý mọi vấn đề là điều làm nên khác biệt tại Sano.</p>                   
      </div>
    </div>
  );
};  

export default B3107;