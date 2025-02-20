'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2002 = () => {
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
        <title>Team Đạt KPI Hằng Ngày - Hướng Đến Triệu View & Doanh Thu Bùng Nổ</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>Team Đạt KPI Hằng Ngày - Hướng Đến Triệu View & Doanh Thu Bùng Nổ</h1>
        <h3 style={{ fontSize: "20px" }}>20-02-2025</h3>
        <p>Hôm nay lại là một ngày rực rỡ khi chúng ta cùng vinh danh những team đã xuất sắc hoàn thành KPI hằng ngày! Không chỉ đơn thuần là những con số, đây chính là thành quả của sự nỗ lực bền bỉ, tinh thần đồng đội và chiến lược sáng tạo không ngừng nghỉ.</p>
        <p>Mục tiêu triệu view – Không gì là không thể! Các team đã không ngừng bứt phá, tạo ra những nội dung viral, thu hút hàng loạt người xem và nâng tầm thương hiệu. Mỗi lượt xem, mỗi tương tác chính là minh chứng cho sự nhạy bén và sáng tạo không giới hạn.</p>
        <p>Kiếm nhiều tiền – Thành quả xứng đáng cho sự nỗ lực! KPI không chỉ là mục tiêu mà còn là cơ hội để các team gia tăng thu nhập, đạt được những phần thưởng hấp dẫn và cùng công ty tiến xa hơn. Mỗi con số doanh thu tăng lên là một bước tiến vững chắc trên hành trình thành công.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                        style={{ maxWidth: "1200px" }}
                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2002%2F2025_02_20_08_13_IMG_0547.JPG?alt=media&token=0cb99377-8cef-4aaf-85a9-1f7dadd4dc9d"
                        alt="image1" />
                    <br />
        <p>Buổi vinh danh hôm nay không chỉ là sự ghi nhận mà còn là nguồn động lực mạnh mẽ để toàn thể nhân viên tiếp tục phấn đấu, sáng tạo và chinh phục những thử thách mới. Những tràng pháo tay, những ánh mắt rạng rỡ chính là sự khích lệ lớn nhất để chúng ta cùng nhau tiếp tục “bật mode chiến thần” mỗi ngày!</p>
        <p>Cùng nhau hướng đến những cột mốc mới, cùng nhau biến mục tiêu triệu view thành hiện thực và biến mọi nỗ lực thành tiền bạc! Let’s go team!</p>
      </div>
    </div> 
  );
};

export default B2002;