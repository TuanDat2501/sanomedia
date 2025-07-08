'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0707 = () => {
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
          Vinh danh Team Xuất Sắc Nhận Thưởng Hằng Ngày
        </h1>
        <h3 style={{ fontSize: "20px" }}>07-07-2025
        </h3>
        <p>Không khí tại Sano Media hôm nay lại sôi động hơn bao giờ hết khi một lần nữa, giải thưởng team xuất sắc trong ngày đã gọi tên những chiến binh nhiệt huyết và bền bỉ nhất!</p>
        <p>Dù chỉ là một “cuộc đua” trong ngày, nhưng tinh thần làm việc của cả team lại bùng nổ như thể đây là chặng cuối của một chiến dịch lớn. Từ sự phối hợp nhịp nhàng, sự chủ động trong từng đầu việc đến tinh thần hỗ trợ nhau không ngơi nghỉ – mọi thứ đều tạo nên một “cú nước rút” vô cùng ấn tượng.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-3.jpg?alt=media&token=497c672e-9c11-452f-9273-34131251ed84"
          alt="image1" />
        <p>Giải thưởng hôm nay không chỉ là một phần quà nhỏ, mà còn là sự ghi nhận xứng đáng cho nỗ lực của cả đội. Đó là lời cảm ơn gửi đến những con người luôn làm việc với 200% năng lượng, không ngại khó, không ngại khổ, chỉ ngại không tiến lên!</p>
        <p>Xin chúc mừng team đã xuất sắc về đích hôm nay! Và nếu bạn đang đọc bài viết này, hãy nhớ rằng: ngày mai, bảng vàng rất có thể sẽ gọi tên team của bạn đấy!</p>
      </div>
    </div>
  );
};

export default B0707;