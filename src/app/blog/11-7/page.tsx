'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0907 = () => {
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
          Vinh danh Team Xuất Sắc Nhận Thưởng Hằng Ngày</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Sano Media - Không gian trẻ trung, cảm hứng mỗi ngày
        </h1>
        <h3 style={{ fontSize: "20px" }}>11-07-2025
        </h3>
        <p>Một ngày làm việc tại Sano Media không bắt đầu bằng tiếng gõ bàn phím, mà bằng tiếng cười rôm rả, một bài nhạc chill nhẹ buổi sáng, và năng lượng lan tỏa từ khắp mọi góc văn phòng.</p>
        <h3> Không gian mở – Tư duy mở:</h3>
        <p>Tại Sano Media, chúng tôi tin rằng môi trường ảnh hưởng trực tiếp đến chất lượng công việc. Văn phòng được thiết kế với phong cách mở, hiện đại, ngập tràn ánh sáng tự nhiên và điểm xuyết những mảng xanh để nuôi dưỡng tinh thần. Không có những ô bàn gò bó – mà là không gian để mọi ý tưởng được bay xa.</p>
        <h3>Màu sắc tươi sáng – Cảm hứng bật lên:</h3>
        <p>Từng mảng tường, từng chiếc ghế đều được lựa chọn để tạo nên một tổng thể trẻ trung, năng động. Những góc chill-out, bàn cà phê mini, hay chiếc xích đu giữa văn phòng không chỉ là điểm nhấn décor mà còn là nơi “sạc pin” tinh thần cho cả team.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=0d3ee022-cb67-4db1-9921-123fd7cf8384"
          alt="image1" />
        <h3>Tự do sáng tạo – Là chính mình:</h3>
        <p>Ở đây, bạn có thể brainstorming trên bảng viết kính, vừa nhâm nhi trà sữa vừa thảo luận ý tưởng, hay ngồi bệt dưới sàn với laptop và một chiếc tai nghe noise-cancelling. Quan trọng là bạn thấy thoải mái và luôn là phiên bản bùng nổ nhất của chính mình.</p>
      </div>
    </div>
  );
};

export default B0907;