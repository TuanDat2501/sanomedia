'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1806 = () => {
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
        <title>Chơi Hết Minh – Gắn Kết Hết Sức: Buổi Game Gắn Kết Đội Ngũ Nhà Sano!</title>

      </Head>
      <div className="container">
        <h1>Chơi Hết Minh – Gắn Kết Hết Sức: Buổi Game Gắn Kết Đội Ngũ Nhà Sano!</h1>
        <h3 style={{ fontSize: "20px" }}>18-06-2025</h3>
        <p>Không chỉ là những người đồng nghiệp cùng nhau “chiến đấu” trong công việc, các thành viên của Sano Media còn là một team ăn ý cả trong… các trận game siêu hài hước và “náo loạn”!</p>
        <p>Hôm nay, đại gia đình Sano đã có một buổi team bonding bằng mini game siêu lầy lội và bùng nổ năng lượng. Không cần sân khấu hoành tráng, không cần đạo cụ cầu kỳ – chỉ với sự hào hứng và tinh thần “cháy” cùng nhau, mọi khoảng cách như được xóa nhòa.</p>
        <p>Từ những trò chơi đồng đội đòi hỏi sự phối hợp ăn ý, đến những pha “tấu hài không biết mệt” khiến cả văn phòng cười nghiêng ngả – buổi chơi game không chỉ mang lại tiếng cười, mà còn là chất keo kết nối mọi người.</p>
        <p>Các thử thách được thiết kế “đo ni đóng giày” cho từng cá tính trong team: người sáng tạo, người chiến lược, người nhanh nhạy… ai cũng có cơ hội tỏa sáng!</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/0618%20(1)(1).mp4?alt=media&token=dad3d640-ec33-4d43-b793-58ea4fe29885" type="video/mp4" />
        </video>
        <br />
        <p>Những khoảnh khắc đáng nhớ đã được ghi lại – từ những pha tranh cãi “nảy lửa” trong trò đoán ý đồng đội, đến màn “hát ca đoán nhạc” khiến không khí văn phòng như… sân khấu biểu diễn tự do.</p>
        <p>Không chỉ để thư giãn sau giờ làm, buổi game còn giúp các thành viên hiểu nhau hơn, gắn bó hơn và tiếp thêm năng lượng tích cực cho hành trình chinh phục những mục tiêu lớn sắp tới.</p>
        <p>Vì ở Sano Media, chúng ta không chỉ làm việc cùng nhau – mà còn là đồng đội trên mọi mặt trận, kể cả... mặt trận tiếng cười!</p>
      </div>
    </div>
  );
};

export default B1806;