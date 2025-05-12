'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0905 = () => {
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
          CÙNG NHÌN LẠI NHỮNG KHOẢNH KHẮC ĐÁNG NHỚ CỦA SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media - Nơi tinh thần đội ngũ lên ngôi
        </h1>
        <h3 style={{ fontSize: "20px" }}>09-05-2025
        </h3>
        <p>Tại Sano Media, mỗi cá nhân là một mảnh ghép quan trọng, nhưng chính sức mạnh của tinh thần đồng đội đã tạo nên sự khác biệt. Chúng tôi không chỉ làm việc với nhau, mà còn cùng nhau phát triển và tạo ra những giá trị chung bền vững.</p>
        <p>Tinh thần đồng đội tại Sano Media không chỉ dừng lại ở việc chia sẻ công việc. Đó là sự hợp tác chặt chẽ, sự tôn trọng lẫn nhau và là tinh thần giúp đỡ, chia sẻ trong mọi hoàn cảnh. Khi một người gặp khó khăn, cả đội cùng chung tay tìm giải pháp. Khi một người đạt được thành công, cả công ty cùng vui mừng, chúc mừng.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/sanolife-5.webp?alt=media&token=af2737be-10ec-42b3-834f-4af1be3ea63a"
          alt="image1" />
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/sanolife-7.webp?alt=media&token=387181f2-2244-4003-a918-1f4dda6abcd7"
          alt="image1" />
        <p>Chúng tôi tin rằng: Sự kết nối chính là chìa khóa mở ra những cơ hội lớn. Đó là lý do tại sao tại Sano Media, mọi người luôn sẵn sàng hỗ trợ và nâng đỡ nhau, từ những đồng nghiệp mới gia nhập cho đến những lãnh đạo lâu năm. Mỗi thành viên đều có thể học hỏi, chia sẻ và phát huy tối đa năng lực của bản thân trong một môi trường thân thiện, cởi mở.</p>
        <p>Một công ty thành công không chỉ là một tổ chức mạnh, mà còn là nơi tinh thần đội ngũ được đặt lên hàng đầu, là nơi mà mỗi cá nhân biết rằng sự đóng góp của mình sẽ góp phần làm nên thành công chung.</p>
      </div>
    </div>
  );
};

export default B0905;