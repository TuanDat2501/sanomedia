'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0906 = () => {
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
        <h1>VINH DANH TEAM "CHIẾN THẦN DOANH THU" – THÁNG NÀY AI ĐÂY?</h1>
        <h3 style={{ fontSize: "20px" }}>09-06-2025</h3>
        <p>Tháng Năm, không thể không gọi tên Team Nova – những chiến binh đã bứt phá cực mạnh và chạm đỉnh doanh thu cao nhất toàn công ty! 🎉🔥</p>
        <p>Với tinh thần làm việc "máu lửa", tốc độ "ánh sáng" và một chút duyên "chốt đơn", team đã chứng minh rằng: có teamwork – có tất cả!</p>
        <p>Kết quả này không chỉ là con số, mà còn là thành quả của những ngày tăng tốc không nghỉ, những giờ họp không ngừng ý tưởng, và cả những cú “xoay chuyển tình thế” phút chót!</p>
        <p>Và phần thưởng dành cho team chính là<b>4 tấm vé cực hot xem concert “Anh Trai Vượt Ngàn Trông Gai”!</b> Không chỉ có âm nhạc đỉnh cao, ánh sáng cháy rực mà còn là một đêm “cháy hết mình” cùng nhau – như cách team đã “cháy” trong công việc vậy!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_0902.JPG?alt=media&token=b343e164-e65f-488d-81d7-a4228bc28892"
          alt="image1" />
        <br />
        <p><b>Một lần nữa, xin chúc mừng Team Nova!</b></p>
        <p>Chặng đường phía trước vẫn còn nhiều mục tiêu lớn hơn – nhưng trước hết, chúc các bạn có một đêm concert thật “bung xõa” và tràn đầy cảm hứng nhé!</p>
        <p><b>Sano Media – Làm hết sức, chơi hết mình!</b></p>
      </div>
    </div>
  );
};

export default B0906;