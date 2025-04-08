'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B0804 = () => {
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
        KHI SÁNG TẠO KHÔNG CÓ GIỚI HẠN – CÂU CHUYỆN ĐẰNG SAU MỖI SẢN PHẨM TẠI SANO MEDIA</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Khi Sáng Tạo Không Có Giới Hạn - Câu Chuyện Đằng Sau Mỗi Sản Phẩm</h1>
        <h3 style={{ fontSize: "20px" }}>04-04-2025
        </h3>
        <p>Tại Sano Media, mỗi sản phẩm không chỉ là một video, một nội dung truyền thông – mà là kết quả của hàng giờ đồng hồ sáng tạo, cộng hưởng trí tuệ và đam mê từ cả một đội ngũ.</p>
        <p>Phía sau những clip triệu view là hàng loạt buổi brainstorm căng não, những lần chỉnh sửa đến khuya, những cuộc thảo luận “nảy lửa” nhưng đầy năng lượng tích cực.</p>
       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/488150480_663049453149510_8687558787945054165_n.jpg?alt=media&token=4f4d6023-dadd-45ad-a67e-aee323b74cef"
                       alt="image1" />
                       <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
                       style={{ maxWidth: "1200px" }}
                       src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/488224276_663049209816201_8108609259275981142_n.jpg?alt=media&token=53bb3bbd-3cea-40b0-81e6-9814ae57c8e4"
                       alt="image1" />
        <p>Sano Media không chạy theo xu hướng – chúng tôi tạo ra xu hướng.</p>
        <p>Và nếu bạn hỏi điều gì là “vũ khí bí mật” của chúng tôi? Đó chính là con người – những chiến binh truyền thông với trái tim nhiệt huyết và tinh thần không ngừng học hỏi.</p>
      </div>
    </div>
  );
};

export default B0804;