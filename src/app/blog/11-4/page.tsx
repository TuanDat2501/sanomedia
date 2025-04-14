'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1104 = () => {
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
        Văn Hóa Góp Ý – Sano Media Không Ngại Thẳng Thắn</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Văn Hóa Góp Ý – Sano Media Không Ngại Thẳng Thắn</h1>
        <h3 style={{ fontSize: "20px" }}>11-04-2025
        </h3>
        <p>Tại Sano Media, chúng tôi tin rằng: sự thẳng thắn là khởi đầu của tiến bộ. Chính vì vậy, văn hóa góp ý luôn được đề cao và duy trì như một phần không thể thiếu trong mọi hoạt động của công ty.</p>
        <p>Từ việc feedback các sản phẩm sáng tạo, góp ý trong cuộc họp đến những chia sẻ thẳng thắn giữa đồng nghiệp – tất cả đều diễn ra trong một tinh thần xây dựng và tôn trọng. Không có “nói tránh”, không có “ngại va chạm”, vì chúng tôi hiểu rằng mỗi ý kiến đóng góp đều là cơ hội để cá nhân và tập thể hoàn thiện hơn.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL8992.jpg?alt=media&token=ddb430a0-4db2-4c84-9ab5-8894593cda2f"
                       alt="image1" />
                  
        <p>Mỗi ngày ở Sano, bạn có thể nghe những câu như:
          <ul></ul>
          <li>“Ý tưởng này ổn, nhưng nếu thêm một cú twist thì sẽ đỉnh hơn.”</li>
          <li>“Phần này chưa thuyết phục lắm, thử nhìn từ góc độ khác xem?”</li> 
          <li>“Bạn làm tốt, nhưng mình nghĩ bạn còn có thể làm xuất sắc hơn nữa.”</li>
         </p>
        <p>Góp ý không để bắt lỗi. Góp ý để cùng nhau tốt hơn. Và cũng nhờ vậy, Sano Media luôn là nơi thúc đẩy sự phát triển cá nhân – không phải bằng lời khen suông, mà bằng những lời góp ý thật lòng nhất.</p>
      </div>
    </div>
  );
};

export default B1104;