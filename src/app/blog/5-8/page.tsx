'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0508 = () => {
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
          Khi Sức Mạnh Teamwork Giúp Sano Media Vượt Qua Mọi Deadline!
        </h1>
        <h3 style={{ fontSize: "20px" }}>05-08-2025
        </h3>
        <p>Trong thế giới agency, deadline luôn là “áp lực vô hình” đè nặng lên từng chiến dịch. Nhưng tại Sano Media, chúng mình không để deadline trở thành nỗi sợ hãi – bởi vì chúng mình có TEAMWORK.</p>
        <p>Chuyện “chạy deadline” là chuyện nhỏ, khi cả team cùng đồng lòng, chia sẻ công việc, hỗ trợ nhau từng chút một. Từ việc brainstorming ý tưởng, lên kế hoạch chi tiết, đến khi sản phẩm hoàn thiện, mỗi cá nhân đều góp sức, góp ý, không ai đứng ngoài cuộc.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL8986.jpg?alt=media&token=6f269bad-3673-4b1e-9729-545c3d41630f"
                  alt="image1" />
        <p>Ở Sano Media, “Làm việc nhóm không phải là chia việc, mà là cộng hưởng sức mạnh”. Đó là lý do vì sao, dù những dự án khó nhằn nhất, team vẫn có thể xoay sở được, thậm chí còn “vượt target” ngoài mong đợi.</p>
        <p>Những buổi làm việc cũng vì thế mà trở nên… vui vẻ hơn bao giờ hết, bởi cả team cùng nhau chiến đấu, cùng nhau cười và cùng nhau đạt được thành quả.</p>                   
        <p>Sano Media không có “siêu nhân”, chỉ có những người đồng đội luôn tin tưởng nhau, sát cánh bên nhau. Và đó chính là lý do chúng mình chưa từng gục ngã trước deadline nào cả!</p>
      </div>
    </div>
  );
};  

export default B0508;