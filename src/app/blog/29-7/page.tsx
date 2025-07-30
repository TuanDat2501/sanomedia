'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2907 = () => {
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
         Vinh danh team đạt KPI ngày – Chinh phục mục tiêu mỗi ngày!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Vinh danh team đạt KPI ngày – Chinh phục mục tiêu mỗi ngày!
        </h1>
        <h3 style={{ fontSize: "20px" }}>29-07-2025
        </h3>
        <p>Không cần đợi đến cuối tháng, tại Sano Media, mọi nỗ lực đều xứng đáng được ghi nhận ngay hôm nay! </p>
        <p>Và hôm nay, một tràng pháo tay lớn xin dành cho team Nova – những “chiến binh” đã xuất sắc vượt KPI ngày, dẫn đầu bảng thành tích và truyền cảm hứng mạnh mẽ cho cả văn phòng!</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_0999.JPG?alt=media&token=4280e072-83ac-411f-9fb4-6e3608831b79"
                                alt="image1" />
        <p>Với tinh thần làm việc máu lửa, tập trung cao độ và phối hợp siêu ăn ý, các bạn đã chứng minh rằng:  “KPI không phải là áp lực – mà là động lực để cùng nhau bứt phá!”</p>
        <p>Không chỉ hoàn thành công việc đúng hạn, các bạn còn giữ vững năng lượng tích cực, chia sẻ, hỗ trợ đồng đội và lan tỏa tinh thần trách nhiệm đến mọi người xung quanh.</p>                   
        <p>Và phần thưởng nhỏ nhưng đầy ý nghĩa sẽ là “vitamin tinh thần” cho hành trình bùng nổ tiếp theo!</p>
      </div>
    </div>
  );
};  

export default B2907;