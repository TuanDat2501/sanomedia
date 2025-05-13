'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1205 = () => {
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
        Sano Media - Khi Mỗi Ngày Đi Làm Là Một Niềm Vui</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media - Khi Mỗi Ngày Đi Làm Là Một Niềm Vui
        </h1>
        <h3 style={{ fontSize: "20px" }}>12-05-2025
        </h3>
        <p>Có bao giờ bạn nghĩ: “Giá mà sáng nào thức dậy cũng háo hức đi làm như thể đi chơi”? Ở Sano Media, điều đó không phải là viển vông – mà là cảm giác rất thật của nhiều thành viên trong đại gia đình này.</p>
        <p>Không khí ở Sano không gò bó. Đó là một nơi mà bạn được là chính mình – dù bạn là người trầm tính hay hướng ngoại, là newbie hay là leader kỳ cựu. Ở đây, ai cũng có tiếng nói, ai cũng có cơ hội được thể hiện ý tưởng, được lắng nghe và được công nhận.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/images%2F490267198_669673089153813_8648893672316917879_n.jpg?alt=media&token=bd01a1ff-6154-48a1-aa12-00a917c0c4d0"
                       alt="image1" />
                  
        <p>Một ngày làm việc không chỉ có checklist và deadline, mà còn có tiếng cười, những cuộc trò chuyện chân thành, những lời động viên đúng lúc và cả những pha “tấu hài” đặc trưng của dân sáng tạo.</p>
        <p>Chúng tôi tin rằng, khi bạn vui vẻ – bạn sẽ sáng tạo tốt hơn, làm việc hiệu quả hơn và gắn bó lâu hơn. Vì thế, tạo ra môi trường tích cực không phải là “bonus”, mà là ưu tiên.</p>
        <p>Sano Media không chỉ là nơi làm việc. Đó là nơi bạn cảm thấy thuộc về.</p>
      </div>
    </div>
  );
};

export default B1205;