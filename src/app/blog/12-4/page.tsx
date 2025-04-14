'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1204 = () => {
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
        Sano Media – Nơi Tài Năng Không Bị Bỏ Lỡ</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Nơi Tài Năng Không Bị Bỏ Lỡ</h1>
        <h3 style={{ fontSize: "20px" }}>12-04-2025
        </h3>
        <p>Ở Sano Media, chúng tôi tin rằng mỗi cá nhân đều mang trong mình một ngọn lửa riêng biệt – một tài năng, một thế mạnh, hay thậm chí là một góc nhìn khác biệt có thể tạo nên giá trị cho cả tập thể.</p>
        <p>Không cần phải là người có kinh nghiệm dày dạn, cũng không nhất thiết phải sở hữu bảng thành tích quá “khủng”. Chỉ cần bạn chịu học, dám thử và sẵn sàng tiến lên, Sano luôn có cách để nhìn thấy và trao cơ hội phát triển cho bạn.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/IMG_5435.JPG?alt=media&token=2aac6813-8c3f-45f2-b546-24c2e868ca6b"
                       alt="image1" />
                  
        <p>Chúng tôi không “đóng khung” nhân sự theo vị trí, mà khuyến khích họ bước ra khỏi vùng an toàn, đề xuất sáng kiến, thử nghiệm cái mới và tạo ra dấu ấn riêng. Rất nhiều thành viên tại Sano đã từng bắt đầu với vai trò nhỏ, nhưng bằng sự chủ động và quyết tâm, họ đã tiến xa hơn mong đợi – trở thành những người dẫn dắt dự án, những nhân tố cốt lõi trong đội ngũ.</p>
        <p>Sano Media không phải là nơi bạn chỉ “đi làm rồi về”. Đây là nơi bạn được lắng nghe, được phát triển và được tin tưởng. Tài năng của bạn, dù ở bất kỳ hình thức nào – sẽ luôn được trân trọng và nuôi dưỡng.</p>
      </div>
    </div>
  );
};

export default B1204;