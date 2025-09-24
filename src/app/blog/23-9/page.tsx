'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2207 = () => {
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
         Kết nối – Hợp Tác – Phát Triển</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Kết nối – Hợp Tác – Phát Triển
        </h1>
        <h3 style={{ fontSize: "20px" }}>23-09-2025
        </h3>
        <p>Trong hành trình phát triển, Sano Media luôn đề cao tinh thần kết nối và hợp tác để tạo ra những giá trị bền vững. Và một trong những cột mốc ý nghĩa chính là sự đồng hành cùng Dahota Group – đối tác chiến lược, cùng nhau hướng tới những thành công mới.</p>
        <p>Kết nối: Chúng tôi tin rằng, sự kết nối chặt chẽ giữa các doanh nghiệp chính là chìa khóa mở ra cơ hội và sức mạnh cộng hưởng.</p>
        <b>Hợp tác: Không chỉ dừng lại ở sự phối hợp, mà còn là sự thấu hiểu, chia sẻ và đồng hành cùng nhau trong từng dự án.</b>
        <p>Phát triển: Với nền tảng gắn kết ấy, Sano Media và Dahota Group cùng đặt mục tiêu vươn xa hơn, chinh phục những thành tựu lớn lao, đóng góp tích cực cho cộng đồng và xã hội.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                style={{ maxWidth: "1200px" }}
                                src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/550453883_796375709816883_2795612903546680692_n.jpg?alt=media&token=c77df62c-c801-4f2f-9c2a-86dc3516e391"
                                alt="image1" />
        <p>Sự hợp tác với Dahota Group không chỉ mang ý nghĩa về mặt công việc, mà còn là một hành trình truyền cảm hứng, khẳng định giá trị của niềm tin – đồng hành – bứt phá.</p>
        <b>Cùng nhau, chúng ta sẽ tiếp tục viết nên những câu chuyện thành công mới!</b>
      </div>
    </div>
  );
};

export default B2207;