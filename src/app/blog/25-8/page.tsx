'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2508 = () => {
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
          Khi Nỗ Lực Được Đền Đáp – Thưởng Ngày Cho Team Xuất Sắc!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Khi Nỗ Lực Được Đền Đáp – Thưởng Ngày Cho Team Xuất Sắc!
        </h1>
        <h3 style={{ fontSize: "20px" }}>25-08-2025
        </h3>
        <p>Một ngày làm việc tại Sano Media không chỉ dừng lại ở những con số KPI, mà còn là hành trình của sự nỗ lực và tinh thần đồng đội. Và hôm nay, chúng ta cùng chúc mừng team đã xuất sắc hoàn thành KPI ngày, rinh về phần thưởng xứng đáng!</p>
        <p>Mỗi thành viên trong team đều đã đóng góp hết mình, từ sự tập trung cao độ, tinh thần kỷ luật cho đến những ý tưởng sáng tạo bứt phá. Chính sự đồng lòng ấy đã tạo nên kết quả rực rỡ và mang lại niềm vui chung cho cả tập thể.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_1416.JPG?alt=media&token=9539cd19-9c47-49c1-84b0-5e9ea54de9cf"
                                alt="image1" />
        <p>Phần thưởng ngày không chỉ là sự ghi nhận, mà còn là động lực để mỗi người thêm quyết tâm, mỗi team thêm gắn kết và mạnh mẽ hơn trong những chặng đường sắp tới.</p>
        <p>Một lần nữa, chúc mừng team đã chạm đích xuất sắc! Hy vọng đây sẽ là bước đệm để chúng ta cùng nhau chinh phục nhiều thành công rực rỡ hơn nữa trong tương lai.</p>
      </div>
    </div>
  );
};

export default B2508;