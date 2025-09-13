'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1109 = () => {
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
        Sano Media – Nơi Mỗi Người Là Một Ngôi Sao</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
         Sano Media – Nơi Mỗi Người Là Một Ngôi Sao
        </h1>
        <h3 style={{ fontSize: "20px" }}>11-09-2025
        </h3>
        <p>Ở Sano Media, chúng mình luôn tin rằng mỗi cá nhân đều mang trong mình một “ánh sáng” riêng. Dù là nhân viên mới hay đã gắn bó lâu năm, mỗi người đều góp phần tạo nên một bầu trời rực rỡ mang tên Sano Media.</p>
        <p>Tại đây, thành công không chỉ được đo bằng kết quả công việc, mà còn bằng tinh thần cống hiến, sự nỗ lực không ngừng và năng lượng tích cực lan tỏa cho đồng đội.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                        style={{ maxWidth: "1200px" }}
                                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/542135843_779367741517680_6930047670904673805_n.jpg?alt=media&token=741cf162-94f4-4285-ad4c-ea666c666802"
                                        alt="image1" />
        <p>Mỗi ngôi sao tỏa sáng theo cách riêng, và khi cùng nhau, chúng ta tạo nên một dải ngân hà đầy màu sắc – nơi sự khác biệt trở thành sức mạnh.</p>
        <p>Với Sano, bạn không chỉ là một nhân viên, mà còn là một phần không thể thiếu trong hành trình chung, cùng nhau tỏa sáng và chinh phục những đỉnh cao mới.</p>
      </div>
    </div>
  );
};

export default B1109;