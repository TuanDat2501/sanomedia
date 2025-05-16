'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1405 = () => {
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
          Đội Ngũ Sano Media – Mỗi Người Một Màu, Góp Lại Thành Cầu Vồng</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
          Đội Ngũ Sano Media – Mỗi Người Một Màu, Góp Lại Thành Cầu Vồng
        </h1>
        <h3 style={{ fontSize: "20px" }}>14-05-2025
        </h3>
        <p>Nếu hỏi điều gì tạo nên sức mạnh đặc biệt của Sano Media, thì đó chắc chắn là: con người – những cá nhân đầy màu sắc, cá tính nhưng luôn sẵn sàng hòa hợp và hỗ trợ nhau như một tập thể thực sự.</p>
        <p>Ở Sano, bạn có thể dễ dàng bắt gặp:</p>
        <ul>
          <li>Một bạn Gen Z sáng tạo “bất chấp”, dám nghĩ lớn và không ngại thử điều mới.</li>
          <li>Một leader đầy kinh nghiệm, điềm tĩnh lắng nghe và luôn tìm cách dẫn dắt bằng sự thấu hiểu.</li>
          <li>Một bạn nhân sự luôn cười rạng rỡ, chẳng bao giờ ngại giúp đồng nghiệp giải quyết rắc rối nhỏ nhất trong công việc.</li>
        </ul>
        <p>Chúng tôi không giống nhau – và đó chính là điểm mạnh. Sự đa dạng về cá tính, quan điểm, chuyên môn chính là nguồn năng lượng để các ý tưởng bùng nổ, các chiến dịch khác biệt ra đời, và các kế hoạch được triển khai hiệu quả hơn.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/456457605_502764735844650_827711997439719184_n%20(1).jpg?alt=media&token=d4548123-785e-4969-9ba7-63b51956f0c2"
          alt="image1" />
        <p>Tại Sano, tôn trọng sự khác biệt là một nguyên tắc ngầm mà ai cũng hiểu. Bởi chúng tôi tin rằng: “Mỗi người đều có điều đặc biệt để mang đến cho tập thể”. Việc của chúng tôi không phải là làm cho ai giống ai, mà là tìm cách để những màu sắc riêng ấy phối hợp hài hòa – như một bức tranh đa sắc, vừa sống động vừa bền vững.</p>
        <p>Sano Media không tìm kiếm những người hoàn hảo giống nhau, mà trân trọng những người thật sự phù hợp – cả về năng lực lẫn tinh thần.</p>
      </div>
    </div>
  );
};

export default B1405;