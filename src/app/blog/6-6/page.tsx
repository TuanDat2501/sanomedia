'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0606 = () => {
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
        <title>Ở Sano, chúng ta không chỉ là đồng nghiệp – Chúng ta là một đội!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Ở Sano, chúng ta không chỉ là đồng nghiệp – Chúng ta là một đội!</h1>
        <h3 style={{ fontSize: "20px" }}>06-06-2025</h3>
        <p>Có một điều đặc biệt tại Sano Media: bạn sẽ không bao giờ cảm thấy lạc lõng.Từ giây phút đầu tiên gia nhập đại gia đình này, bạn sẽ cảm nhận được sự ấm áp, hỗ trợ và kết nối – điều mà không phải nơi làm việc nào cũng có thể mang lại.</p>
        <p> Ở đây, mỗi người đều có một điểm mạnh riêng. Và khi những điểm mạnh đó được ghép lại, chúng ta tạo nên một đội ngũ vững vàng, năng động và sáng tạo vượt trội.</p>
        <p>Làm việc tại Sano không phải là “mỗi người một việc”, mà là mỗi người cùng hướng tới một mục tiêu chung – cùng học, cùng làm, cùng trưởng thành.</p>
        <p>Dù bạn là “newbie” còn đang loay hoay hay là “lão làng” dày dạn kinh nghiệm, bạn đều được lắng nghe, được trao quyền và được tin tưởng. Không ai bị bỏ lại phía sau.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-2.jpg?alt=media&token=6aa8e90a-4a38-4c50-b910-6c0f5155c1d3"
          alt="image1" />
        <br />
        <p>Sano Media không chỉ là nơi để làm việc. Đó là nơi để bạn tìm thấy chính mình, để bạn lớn lên cùng những con người tuyệt vời.</p>
       
      </div>
    </div>
  );
};

export default B0606;