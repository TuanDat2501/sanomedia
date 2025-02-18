'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1802 = () => {
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
        <title>Cơ hội chỉ đến một lần - Gia nhập Sanomedia</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Cơ hội chỉ đến một lần - Gia nhập ngay Sanomedia!</h1>
        <h3 style={{ fontSize: "20px" }}>18-02-2025</h3>
        <p>Bạn đang tìm kiếm một môi trường làm việc sáng tạo, năng động và đầy thử thách? Bạn muốn phát triển bản thân trong một tập thể trẻ trung, chuyên nghiệp? Đừng bỏ lỡ cơ hội này – Sano Media đang tìm kiếm những chiến binh tài năng để cùng nhau tạo nên những dấu ấn bùng nổ!</p>
        <p>Tại Sano Media, chúng tôi không chỉ là đồng nghiệp mà còn là một đại gia đình gắn kết. Mỗi ngày làm việc tại đây là một ngày tràn đầy năng lượng với những dự án sáng tạo, những thử thách thú vị và đặc biệt là những cơ hội phát triển không giới hạn. Chúng tôi tin rằng, khi bạn được làm điều mình yêu thích, bạn sẽ không ngừng tỏa sáng!</p>
        <p>Vì sao nên gia nhập Sano Media?</p>
        <ul>
          <li>Môi trường làm việc trẻ trung, sáng tạo, không giới hạn ý tưởng</li>
          <li>Cơ hội học hỏi, phát triển và thăng tiến rõ ràng</li>
          <li>Đồng nghiệp thân thiện, hỗ trợ hết mình</li>
          <li>Thu nhập hấp dẫn, thưởng theo hiệu suất</li>
          <li>Những buổi team building, sự kiện nội bộ siêu chất</li>
        </ul>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1802%2Fvideo123.mp4?alt=media&token=992deb75-057d-4a1c-ab0e-0878ecd5ecd0" type="video/mp4" />
        </video>
        <p>Nếu bạn đam mê lĩnh vực truyền thông, sáng tạo nội dung bất kỳ vị trí nào tại Sano Media, đừng chần chừ! Cơ hội không đến hai lần – Ứng tuyển ngay hôm nay và trở thành một phần của đại gia đình Sano Media!</p>
      </div>
    </div> 
  );
};

export default B1802;