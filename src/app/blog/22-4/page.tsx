'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2204 = () => {
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
        MỘT BUỔI SÁNG THƯỜNG NGÀY TẠI SANO MEDIA DIỄN RA NHƯ THẾ NÀO?</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Một Buổi Sáng Thường Ngày Tại Sano Media Diễn Ra Như Thế Nào?</h1>
        <h3 style={{ fontSize: "20px" }}>22-04-2025
        </h3>
        <p>Tại Sano Media, mỗi buổi sáng không chỉ là thời gian bắt đầu công việc, mà còn là khoảnh khắc toàn thể đội ngũ cùng nhau khởi động ngày mới đầy năng lượng! </p>
        <p>Khoảng 8h00, khi mặt trời vừa lên cao và văn phòng dần đông đủ, các thành viên Sano tạm gác lại laptop, sẵn sàng cho 15 phút thể dục khởi động. Những động tác đơn giản nhưng đầy sảng khoái khiến không khí văn phòng bỗng trở nên rộn ràng và tràn ngập tiếng cười.</p>
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F2209%2F0422.mp4?alt=media&token=d8da45d2-6b90-49ab-97b3-41589cb1a2f0" type="video/mp4" />
        </video>  
        <p>Ngay sau đó là khoảnh khắc đặc biệt – nghi thức đọc tuyên bố nhóm. Mỗi team lần lượt hô vang câu slogan, lời tuyên bố thể hiện mục tiêu và tinh thần chiến đấu trong tuần, trong tháng. Tiếng đồng thanh vang dội, ánh mắt quyết tâm, những cái “đập tay” tiếp sức… tất cả tạo nên một tinh thần gắn kết mạnh mẽ và tràn đầy động lực.</p>
        <p>Chỉ mất khoảng 20 phút mỗi sáng, nhưng đây lại là khoảng thời gian vô cùng “đắt giá” – nơi từng cá nhân được truyền cảm hứng, được tiếp thêm lửa để sẵn sàng bứt phá trong công việc.</p>
        <p>Bởi vì tại Sano Media, năng lượng không đến từ cà phê – mà đến từ sự kết nối và đồng lòng của cả tập thể.</p>
      </div>
    </div>
  );
};

export default B2204;