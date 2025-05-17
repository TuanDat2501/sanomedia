'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1505 = () => {
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
         Sano Media - Nơi Mỗi Ý Tưởng Đều Được Lắng Nghe</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Sano Media - Nơi Mỗi Ý Tưởng Đều Được Lắng Nghe
        </h1>
        <h3 style={{ fontSize: "20px" }}>15-05-2025
        </h3>
        <p>Ở một môi trường truyền thông – sáng tạo như Sano Media, ý tưởng là “tài sản quý giá” nhất. Và tại đây, mỗi cá nhân – dù là nhân viên mới, thực tập sinh hay quản lý kỳ cựu – đều có quyền cất lên tiếng nói, chia sẻ quan điểm và đóng góp góc nhìn riêng.</p>
         <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-3.jpg?alt=media&token=497c672e-9c11-452f-9273-34131251ed84"
          alt="image1" />
        <p>Không có ý tưởng nào là “ngớ ngẩn”, không có góp ý nào bị xem nhẹ.</p>
        <ul>
          <li>Một buổi brainstorm có thể xuất phát từ... câu chuyện buổi sáng.</li>
          <li>Một campaign thành công có thể bắt đầu từ... ý tưởng vu vơ trong bữa trưa.</li>
          <li>Một thay đổi tích cực cho nội bộ có thể đến từ... phản hồi thẳng thắn trong cuộc họp team.</li>
        </ul>
        <p>Sano Media không tìm kiếm sự hoàn hảo, mà tìm kiếm sự dám nghĩ, dám thử – bởi chúng tôi hiểu rằng mỗi ý tưởng, dù nhỏ bé, cũng có thể là hạt mầm cho sự bứt phá.</p>

        <p>Chúng tôi tự hào vì đã tạo nên một môi trường mà mọi người không chỉ được làm việc, mà còn được thể hiện bản thân. Vì khi bạn được lắng nghe, bạn sẽ tỏa sáng.</p>
      </div>
    </div>
  );
};

export default B1505;