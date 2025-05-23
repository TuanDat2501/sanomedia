'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2105 = () => {
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
        Một Ngày Ở Sano Media – Nơi Cảm Hứng Bắt Đầu Từ Những Điều Bình Dị</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Một Ngày Ở Sano Media – Nơi Cảm Hứng Bắt Đầu Từ Những Điều Bình Dị
        </h1>
        <h3 style={{ fontSize: "20px" }}>21-05-2025
        </h3>
        <p>Không cần những sự kiện hoành tráng hay lễ lạt rộn ràng, mỗi ngày tại Sano Media Việt Nam đều là một hành trình đặc biệt – nơi công việc không chỉ đơn thuần là nhiệm vụ, mà là cảm hứng, là đam mê, là động lực cùng nhau đi xa hơn.</p>
        <p>Trong guồng quay công việc bận rộn, giao tiếp nội bộ chính là “chìa khóa” giữ cho nhịp đập tập thể luôn đồng đều. Tại Sano, bạn không chỉ trò chuyện để truyền đạt thông tin – mà còn để lắng nghe, chia sẻ và đồng cảm.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/aboutme-3.jpg?alt=media&token=497c672e-9c11-452f-9273-34131251ed84"
                                alt="image1" />
        <p>Chúng tôi khuyến khích sự giao tiếp cởi mở và minh bạch – không có khoảng cách giữa nhân viên và quản lý, không có rào cản giữa phòng ban này với phòng ban khác. Mỗi ý kiến đều được tôn trọng, mỗi góp ý đều đáng giá.</p>
        <p>Nhờ vậy, mọi thành viên đều cảm thấy mình là một phần quan trọng trong guồng máy chung. Tinh thần đồng đội, sự thấu hiểu và sự phối hợp nhịp nhàng không đến từ những “bài giảng”, mà đến từ những cuộc trò chuyện giản dị mỗi ngày.</p>
        <p>Tại Sano Media, giao tiếp không chỉ là kỹ năng – mà là văn hóa. Và chính văn hóa ấy đã góp phần tạo nên một tập thể đoàn kết, hiệu quả và tràn đầy cảm hứng.</p>
      </div>
    </div>
  );
};

export default B2105;