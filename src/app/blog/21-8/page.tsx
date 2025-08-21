'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2108 = () => {
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
         Tinh Thần Sano Media – Làm Hết Mình, Chơi Hết Sức!</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Tinh Thần Sano Media – Làm Hết Mình, Chơi Hết Sức!
        </h1>
        <h3 style={{ fontSize: "20px" }}>21-08-2025
        </h3>
        <p>Ở Sano Media, mỗi nhân viên không chỉ là một “mắt xích” trong công việc, mà còn là một phần trong đại gia đình đầy năng lượng và sáng tạo.</p>
        <p>Tinh thần làm việc: Mỗi ngày, chúng mình luôn mang đến sự tập trung, trách nhiệm và tinh thần “không gì là không thể”. Dù thử thách lớn hay nhỏ, cả team đều cùng nhau vượt qua với quyết tâm cao nhất.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                                        style={{ maxWidth: "1200px" }}
                                        src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/01XL0281.jpg?alt=media&token=0d3ee022-cb67-4db1-9921-123fd7cf8384"
                                        alt="image1" />
        <p>Tinh thần đồng đội: Ở đây, không ai đơn độc. Mỗi thành viên đều sẵn sàng hỗ trợ, động viên và truyền năng lượng tích cực cho nhau. Thành công của một người chính là niềm vui của cả tập thể.</p>
        <p>Tinh thần trẻ trung: Làm việc nghiêm túc nhưng không quên “chơi hết mình”. Những tiếng cười, những hoạt động gắn kết đã trở thành “vitamin” nuôi dưỡng tinh thần, để mỗi ngày đi làm đều là một ngày vui.</p>
        <p>Chính nhờ tinh thần ấy, Sano Media không chỉ là nơi làm việc, mà còn là một môi trường truyền cảm hứng, giúp mỗi người thêm yêu công việc và tự tin bứt phá.</p>
      </div>
    </div>
  );
};

export default B2108;