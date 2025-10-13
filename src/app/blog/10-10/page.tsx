'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1010 = () => {
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
        <title>Sano Media – Nơi Nhiệt Huyết Gặp Gỡ Sáng Tạo!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Sano Media – Nơi Nhiệt Huyết Gặp Gỡ Sáng Tạo!</h1>
        <h3 style={{ fontSize: "20px" }}>10-10-2025</h3>
        <p>Tại Sano Media, mỗi ngày đều là một hành trình khám phá mới. Một ý tưởng nhỏ có thể trở thành chiến dịch lớn. Một nụ cười, một cái bắt tay, hay chỉ một dòng tin nhắn “let’s go team!” cũng đủ để khởi động tinh thần bùng nổ của cả tập thể.</p>
        <p>Sano Media không chỉ là nơi làm việc, mà là một “vũ trụ sáng tạo”, nơi những con người trẻ trung, tràn đầy năng lượng cùng nhau viết nên câu chuyện riêng của mình. Ở đây, không có giới hạn cho ý tưởng – chỉ có những thử thách để cùng nhau chinh phục.</p>
        <p>Chúng tôi tin rằng: Truyền thông không chỉ là công việc – đó là nghệ thuật kết nối cảm xúc. Vì thế, mỗi dự án tại Sano đều được chăm chút bằng sự sáng tạo, tâm huyết và tinh thần cầu tiến không ngừng nghỉ.</p>
        <p>Đằng sau những thành công là đội ngũ Sano-er – những chiến binh không ngại khó, luôn làm hết mình, chơi hết sức và cùng nhau tạo nên giá trị thật</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-6.jpg?alt=media&token=67dd0c01-4c4b-41ea-9943-8f154203eb89"
          alt="image1" />
        <br />
        <p>Với Sano Media, hành trình phía trước không chỉ là mục tiêu tăng trưởng, mà là hành trình lan tỏa đam mê, cảm hứng và tinh thần “Together We Grow” – cùng nhau lớn lên mỗi ngày.</p>
       
      </div>
    </div>
  );
};

export default B1010;