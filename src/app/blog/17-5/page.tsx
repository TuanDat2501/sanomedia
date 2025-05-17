'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1705 = () => {
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
        Ở Sano Media – Không Chỉ Là Làm Việc, Mà Là Sống Hết Mình!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Ở Sano Media – Không Chỉ Là Làm Việc, Mà Là Sống Hết Mình!
        </h1>
        <h3 style={{ fontSize: "20px" }}>17-05-2025
        </h3>
        <p>Tại Sano Media, công việc không chỉ gói gọn trong deadline hay KPI – mà còn là những khoảnh khắc sống trọn vẹn, nơi mỗi thành viên đều tìm thấy niềm vui và cảm hứng mỗi ngày.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/17051.mp4?alt=media&token=46308d0b-3e3f-4bec-858a-b45dafd94714" type="video/mp4" />
        </video>
        <p>Không khí làm việc tại đây tràn ngập tinh thần sáng tạo, năng động và luôn mở lòng đón nhận sự mới mẻ. Bạn có thể tự do đề xuất ý tưởng, mạnh dạn thử nghiệm điều mới và quan trọng hơn hết – luôn có đồng đội sát cánh bên bạn.</p>
        <p>Ở Sano, mỗi người đều có một vị trí riêng, một vai trò riêng, nhưng trên hết, tất cả đều là những người bạn – cùng sống, cùng cười và cùng nhau tạo nên những điều khác biệt.</p>
        <p>Với Sano Media, công việc là hành trình dài, nên điều quan trọng nhất không chỉ là điểm đến, mà là từng chặng đường bạn được sống và trưởng thành mỗi ngày.</p>
      </div>
    </div>
  );
};

export default B1705;