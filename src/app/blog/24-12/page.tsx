'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2412 = () => {
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
        <title>Trao Thưởng KPI Đầy Ấn Tượng Cho Team Nhân Viên Xuất Sắc</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Trao Thưởng KPI Đầy Ấn Tượng Cho Team Nhân Viên Xuất Sắc</h1>
        <h3 style={{ fontSize: "20px" }}>24-12-2024</h3>
        <p> Trong một buổi chiều cuối năm đầy hân hoan, Công ty đã tổ chức lễ trao thưởng cho những đội ngũ nhân viên xuất sắc liên tục đạt được KPI trong năm qua. Sự kiện diễn ra tại hội trường chính của công ty, với sự tham dự của ban lãnh đạo và toàn thể nhân viên. </p>
        <p> Không khí buổi lễ năng động và trẻ trung. Khi những thành viên xuất sắc bước lên sân khấu, cả hội trường như rực sáng với những tràng pháo tay không ngớt. Mỗi phần thưởng được trao đi kèm theo những lời chúc mừng và động viên từ ban giám đốc, khiến ai nấy đều cảm thấy tự hào và được ghi nhận.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2412%2F2024_12_25_08_17_IMG_3346.JPG?alt=media&token=af8b05db-7c60-459a-8826-c751db24efab" />
        <p>Trong bất kỳ doanh nghiệp nào, việc khen thưởng không chỉ mang ý nghĩa ghi nhận sự nỗ lực mà còn là yếu tố
              thúc đẩy hiệu suất làm việc. Những team liên tục nhận thưởng ngày tại công ty chính là minh chứng cho sự phối
              hợp hiệu quả và tinh thần làm việc xuất sắc. Hãy cùng tìm hiểu bí quyết thành công của họ qua bài viết dưới đây.</p>
              <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                                                          alt={"image"} style={{ maxWidth: "1200px" }}
                                                                          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2412%2F2024_12_25_08_17_IMG_3343.JPG?alt=media&token=bd249356-9f02-461f-ac82-ff6a3b774840" />
      </div>
    </div>
  );
};

export default B2412;