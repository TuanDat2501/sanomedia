'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2304 = () => {
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
        Teamwork Tạo Nên Sức Mạnh – Ở Sano Là Cùng Nhau “Cân” Mọi Thử Thách!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Teamwork Tạo Nên Sức Mạnh – Ở Sano Là Cùng Nhau “Cân” Mọi Thử Thách!
        </h1>
        <h3 style={{ fontSize: "20px" }}>23-04-2025
        </h3>
        <p>Ở Sano Media, bạn sẽ không bao giờ thấy ai phải “đơn thương độc mã” với công việc. Bởi vì nơi đây, tinh thần teamwork không phải là khẩu hiệu, mà là văn hóa.</p>
        <p>Từ những project gấp rút đến những ý tưởng sáng tạo phút chót, mọi nhiệm vụ đều được giải quyết bằng tinh thần “cùng nhau làm – cùng nhau thắng”. Không có ai là “siêu nhân” ở Sano, chỉ có những đội ngũ biết phối hợp, chia sẻ và hỗ trợ không điều kiện.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                  alt={"image"} style={{ maxWidth: "1200px" }}
                  src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0264%20(1).jpg?alt=media&token=dd1c8719-2bf2-4803-b1d0-e2dfc68f8313" />
                  
        <p>Một người nghĩ ý tưởng, người khác triển khai, người còn lại chỉnh sửa và feedback – vòng lặp ấy cứ thế diễn ra nhịp nhàng như một đội bóng ăn ý, mỗi người đều có vai trò riêng nhưng đều hướng tới cùng một mục tiêu.</p>
        <p>Và chính trong những lần chạy deadline, cùng thức khuya để chỉnh sửa proposal hay ngồi brainstorm tới mức cạn pin não, Sanoer lại càng hiểu hơn giá trị của sự đồng hành.</p>
        <p>Teamwork ở Sano không chỉ là để hoàn thành công việc – mà là nơi nuôi dưỡng tinh thần chiến đấu, là nơi người này giúp người kia tốt hơn mỗi ngày, và là lý do để tất cả chúng tôi gắn bó lâu dài với nơi này.</p>
      </div>
    </div>
  );
};

export default B2304;