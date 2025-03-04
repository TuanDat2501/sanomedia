'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0403 = () => {
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
        <title>Tổng Kết Tháng Tại Sano Media</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Tổng Kết Tháng Tại Sano Media</h1>
        <h3 style={{ fontSize: "20px" }}>04-03-2025</h3>
        <p>Tháng mới bắt đầu cũng là lúc chúng ta cùng nhau nhìn lại chặng đường đã qua và ăn mừng những thành quả đạt được. Tại Sano Media, tổng kết tháng không chỉ là những con số mà còn là dịp để cả team cùng quây quần bên nhau, tận hưởng một bữa tiệc nhỏ nhưng đầy ý nghĩa!</p>
        <p>Tổng kết – Nhìn lại hành trình bứt phá!
        Buổi tổng kết tháng là thời điểm để cùng nhau điểm lại những thành tựu nổi bật, ghi nhận sự cố gắng của từng cá nhân và đội nhóm. Những con số ấn tượng, những dự án thành công và cả những bài học quý giá đều được chia sẻ, giúp chúng ta ngày càng hoàn thiện hơn.</p>
        <p>Bữa tiệc nhỏ – Niềm vui lớn!
        Không thể thiếu trong buổi tổng kết chính là một bữa tiệc ấm cúng. Những món ăn ngon, tiếng cười rộn ràng, những câu chuyện dí dỏm khiến không khí trở nên gần gũi hơn bao giờ hết. Đây chính là khoảnh khắc để mọi người cùng thư giãn và gắn kết hơn sau một tháng làm việc hết mình.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F0403%2F0303(1).mp4?alt=media&token=5b1251c1-bd3b-43cc-b980-74903d466746" type="video/mp4" />
        </video>
        <p> Vinh danh những cá nhân xuất sắc!
        Buổi tổng kết tháng cũng là lúc công ty vinh danh những cá nhân có thành tích nổi bật. Những tràng pháo tay vang lên, những phần thưởng xứng đáng được trao tay – tất cả là lời khích lệ cho sự nỗ lực không ngừng nghỉ.</p>
        <p>Tháng mới đã đến, cùng nhau tiếp tục bứt phá và chinh phục những cột mốc mới tại Sano Media nhé! </p>
      </div>
    </div> 
  );
};

export default B0403;