'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2806 = () => {
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
        <title>Nhiệt Huyết 200% – Tinh Thần Làm Hết Mình Của Nhà Sano!</title>
        
      </Head>
      <div className="container">
        <h1>Team Nhà Mình Lại Tiếp Tục “Ôm Quà” – Bắt Đầu Một Tháng Mới Đầy Rực Rỡ!</h1>
        <h3 style={{ fontSize: "20px" }}>28-06-2025</h3>
        <p>Chúng ta lại tiếp tục gọi tên những đội nhóm siêu đỉnh của đại gia đình Sano Media – những team đã xuất sắc duy trì hiệu suất làm việc tuyệt vời và liên tục nhận thưởng hằng ngày!</p>
        <p>Có thể bạn chưa biết: mỗi ngày tại Sano, không chỉ là hành trình chạy đua với deadline, ý tưởng và KPI, mà còn là cuộc chơi đầy động lực – nơi những nỗ lực được ghi nhận và vinh danh ngay tức thì.</p>
        <p>Những phần thưởng nho nhỏ nhưng ý nghĩa lớn, bởi đó là kết quả của tinh thần kỷ luật – bền bỉ – sáng tạo và hơn hết là sự phối hợp nhịp nhàng giữa các thành viên trong team.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_0963.JPG?alt=media&token=bcbad5ff-58b6-45cc-a140-7101610fdffa"
          alt="image1" />
        <br />
        <p>Không khí tại văn phòng lại càng rộn ràng hơn khi mỗi buổi chiều, lại có thêm một team nhận được phần thưởng xứng đáng. Tiếng vỗ tay, tiếng cười, tiếng “ủa nay lại được à?” vang lên như bản nhạc quen thuộc mỗi ngày.</p>
        <p>Sano Media – Làm hăng say, quà trao tay mỗi ngày!</p>
      </div>
    </div>
  );
};

export default B2806;