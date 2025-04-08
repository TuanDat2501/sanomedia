'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0404 = () => {
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
        Sano Media Việt Nam – Đổi Mới Sáng Tạo Là Chìa Khóa Thành Công</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Chúc Mừng Các Nhân Sự Xuất Sắc Tháng!</h1>
        <h3 style={{ fontSize: "20px" }}>04-04-2025
        </h3>
        <p>Một tháng làm việc chăm chỉ đã khép lại, và đây là lúc chúng ta cùng vinh danh những cá nhân đã tỏa sáng với thành tích nổi bật, tinh thần làm việc chuyên nghiệp và đóng góp tích cực cho tập thể.</p>
        <p>Xin chúc mừng những “gương mặt vàng” của đại gia đình Sano Media! Các bạn chính là nguồn cảm hứng và là minh chứng cho tinh thần: nỗ lực không ngừng – thành công xứng đáng.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/488150480_663049453149510_8687558787945054165_n.jpg?alt=media&token=4f4d6023-dadd-45ad-a67e-aee323b74cef"
                       alt="image1" />
                       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/488224276_663049209816201_8108609259275981142_n.jpg?alt=media&token=53bb3bbd-3cea-40b0-81e6-9814ae57c8e4"
                       alt="image1" />
        <p>Tại Sano, thành công không đến từ một cá nhân, mà là sự cộng hưởng từ tinh thần đồng đội, hỗ trợ nhau cùng tiến lên. Mỗi người xuất sắc được vinh danh hôm nay không chỉ vì kết quả, mà còn vì sự nỗ lực bền bỉ, thái độ tích cực và tinh thần “làm hết mình – chơi nhiệt tình”.</p>
        <p>Cảm ơn vì đã truyền cảm hứng, lan tỏa tinh thần tích cực đến mọi người xung quanh. Chúc các bạn tiếp tục phát huy, bứt phá hơn nữa trong tháng tới!</p>
      </div>
    </div>
  );
};

export default B0404;