'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0908 = () => {
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
          Vinh danh Team Xuất Sắc Nhận Thưởng Hằng Ngày</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Năng Lượng Tích Cực – Vũ Khí Bí Mật Của Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>09-08-2025
        </h3>
        <p>Ở Sano Media, mỗi buổi sáng bắt đầu không chỉ bằng tiếng “chào” thân thiện, mà còn bằng nụ cười và nguồn năng lượng tích cực lan tỏa khắp văn phòng.</p>
        <p>Một câu chúc ngày mới, một lời khen đúng lúc, hay chỉ đơn giản là một ánh mắt đồng cảm – cũng đủ để khiến ai đó cảm thấy mình được tiếp thêm sức mạnh.</p>
    
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2209%2F0422.mp4?alt=media&token=d8da45d2-6b90-49ab-97b3-41589cb1a2f0" type="video/mp4" />
        </video>  
        <p>Chúng tôi tin rằng: năng lượng tích cực giống như ánh nắng – khi bạn lan tỏa, nó không chỉ soi sáng chính mình mà còn sưởi ấm cả những người xung quanh.</p>
        <p>Ở Sano, không ai làm việc một mình. Khi một người mệt mỏi, cả team sẽ cùng nhau vực dậy tinh thần. Khi một người thành công, tất cả đều cùng vui như chiến thắng của chính mình.</p>
        <p>Bởi vì chúng tôi biết: Thành công không chỉ đến từ kỹ năng, mà còn từ tinh thần. Và tinh thần tích cực là thứ không bao giờ được để tắt.</p>
      </div>
    </div>
  );
};

export default B0908;