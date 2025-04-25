'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2404 = () => {
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
        Sano Media Không Chỉ Là Nơi Làm Việc – Đó Là Một Gia Đình</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media Không Chỉ Là Nơi Làm Việc – Đó Là Một Gia Đình

        </h1>
        <h3 style={{ fontSize: "20px" }}>24-04-2025
        </h3>
        <p>Ở Sano Media, người ta không chỉ đến công ty để làm việc. Mà đến để kết nối, chia sẻ và cùng nhau trưởng thành.</p>
        <p>Có thể mỗi người ở đây đều xuất phát từ những vùng đất khác nhau, những câu chuyện khác nhau, nhưng khi đã bước chân vào mái nhà Sano – thì cái “chất” đồng đội, cái tình thân thuộc lại trở thành điểm chung không thể thiếu.</p>
        <p>Những bữa ăn trưa ngồi quây quần, bàn chuyện deadline mà cũng không thiếu tiếng cười.</p>
        <p>Những ngày đầu tiên đi làm, chưa quen việc nhưng luôn có “đồng bọn” sẵn sàng chỉ dẫn từng chút một.</p>
        <p>Hay những dịp sinh nhật, lễ Tết – dù bận rộn cỡ nào, cả team vẫn dành thời gian cùng nhau tổ chức thật ấm áp.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2712%2F1211(5).mp4?alt=media&token=d236dd00-d1fd-43b3-8ee6-e875ce8c1b71" type="video/mp4" />
        </video>     
        <p>Ở đây, sự tử tế không đến từ quy định nội bộ, mà đến từ trái tim mỗi người. Và sự đoàn kết không cần ép buộc – vì ai cũng hiểu, chỉ có đi cùng nhau mới đi được xa.</p>
        <p>Vì vậy, Sano Media với nhiều người không còn là nơi “đến 8h – về 5h30”, mà là nơi mình tìm thấy niềm vui, tìm thấy chính mình trong công việc, và luôn có người đồng hành.</p>
      </div>
    </div>
  );
};

export default B2404;