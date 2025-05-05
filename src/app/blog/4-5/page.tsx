'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0405 = () => {
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
        CÙNG NHÌN LẠI NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ CỦA SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
    
        Cùng Nhìn Lại Những Khoảnh Khắc Đáng Nhớ Của Sano Media
        </h1>
        <h3 style={{ fontSize: "20px" }}>04-05-2025
        </h3>
        <p>Hành trình phát triển không chỉ được đo bằng những con số, mà còn bằng những khoảnh khắc – những giây phút gắn kết, cùng nhau vượt qua khó khăn và lan tỏa năng lượng tích cực trong đại gia đình Sano Media.</p>
        <p>Từ những buổi họp team đầy nhiệt huyết, những chiến dịch truyền thông chạy nước rút đến từng giây phút vui nhộn bên nhau trong các hoạt động nội bộ – tất cả đã tạo nên bức tranh sống động về một tập thể không chỉ biết làm việc mà còn biết yêu thương, sẻ chia và đồng hành.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-2.jpg?alt=media&token=6aa8e90a-4a38-4c50-b910-6c0f5155c1d3" />
         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                alt={"image"} style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=880f93e3-6327-4adb-a4a2-02f211080986" />
        <p>Mỗi nụ cười, mỗi cái bắt tay và cả những cái gật đầu thầm lặng đều là minh chứng cho tinh thần đoàn kết vững chắc tại nơi đây. Chúng tôi không chỉ cùng nhau hoàn thành công việc – chúng tôi cùng nhau tạo nên kỷ niệm.</p>
        <p>Dù là những bức ảnh hậu trường, những khoảnh khắc ăn trưa vui vẻ hay một buổi mừng sinh nhật bất ngờ, Sano Media luôn giữ lại tất cả – bởi chúng chính là năng lượng để ngày mai chúng tôi bước tiếp vững vàng hơn.</p>
        <p>Cùng nhìn lại, để thêm trân trọng hành trình chúng ta đang đi – và sẵn sàng viết tiếp những chương mới rực rỡ hơn!</p>
      </div>
    </div>
  );
};

export default B0405;