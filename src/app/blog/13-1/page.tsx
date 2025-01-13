'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1301 = () => {
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
        Các Thành Viên Xuất Sắc Được Vinh Danh Đầu Tuần</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Các Thành Viên Xuất Sắc Được Vinh Danh Đầu Tuần </h1>
        <h3 style={{ fontSize: "20px" }}>13-01-2025
        </h3>
        <p>Sáng nay, tại văn phòng công ty Sano, buổi lễ chúc mừng và trao thưởng cho các thành viên xuất sắc đã diễn ra trong không khí ấm áp và đầy hứng khởi. Đây là hoạt động định kỳ nhằm vinh danh những cá nhân có thành tích nổi bật, thể hiện tinh thần làm việc vượt trội và góp phần vào sự phát triển chung của công ty.</p>
        <p>Những nhân viên được vinh danh trong tuần này đã vượt qua các chỉ tiêu công việc, thể hiện sự tận tâm, sáng tạo và trách nhiệm trong từng nhiệm vụ. Họ không chỉ đạt được kết quả ấn tượng mà còn lan tỏa năng lượng tích cực, truyền cảm hứng cho đồng nghiệp cùng nỗ lực.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          alt={"image"} style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F1301%2Fz6222844110433_be583c5eeac25aaa378c2f959e2fe0c1.jpg?alt=media&token=58f23bf9-2c7f-474d-91b0-ed16f3f61270" />
        
        <p>Những thành tích này là minh chứng rõ ràng nhất cho năng lực và sự quyết tâm của các bạn. Chúng tôi hy vọng các bạn sẽ tiếp tục duy trì phong độ và đạt được nhiều thành công hơn nữa.</p>
        <p>Đây không chỉ là dịp để vinh danh các cá nhân xuất sắc mà còn là nguồn động lực để cả tập thể cùng phấn đấu, hướng đến những mục tiêu cao hơn trong tương lai.</p>
      </div>
    </div>
  );
};

export default B1301;