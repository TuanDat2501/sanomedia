'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0909 = () => {
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
          Sano Media – Nơi Công Việc Và Niềm Vui Gặp Nhau</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Sano Media – Nơi Công Việc Và Niềm Vui Gặp Nhau
        </h1>
        <h3 style={{ fontSize: "20px" }}>09-09-2025
        </h3>
        <p>Tại Sano Media, chúng mình luôn tin rằng: một môi trường làm việc lý tưởng không chỉ là nơi hoàn thành KPI, mà còn là nơi mỗi người được sống vui, sống hết mình cùng đồng đội.</p>
        <p>Ở đây, tinh thần trẻ trung luôn hiện diện trong từng khoảnh khắc – từ những giờ brainstorm bùng nổ ý tưởng, đến những phút giây giải lao đầy tiếng cười. Chính sự cân bằng ấy giúp mỗi nhân viên không chỉ làm việc hiệu quả hơn, mà còn tìm thấy niềm vui mỗi ngày.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0264.jpg?alt=media&token=d2275460-2836-4404-949a-e394ef227253"
                  alt="image1" /> 
        <p>Điều đặc biệt tại Sano Media là: ai cũng có thể tự do thể hiện cá tính, dám thử, dám khác biệt và luôn được đồng đội ủng hộ. Mỗi người là một mảnh ghép độc đáo, và khi ghép lại, chúng ta tạo nên một tập thể đầy sức sống.</p>
        <p>Với Sano, công việc không còn là áp lực, mà là hành trình đồng hành cùng niềm vui, sự sáng tạo và tinh thần gắn kết. Và đó chính là lý do tại sao Sano Media không chỉ là một công ty – mà còn là một ngôi nhà thứ hai của tất cả chúng mình.</p>
      </div>
    </div>
  );
};

export default B0909;