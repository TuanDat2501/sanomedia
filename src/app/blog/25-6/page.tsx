'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B2106 = () => {
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
        <title>Nhiệt Huyết 200% – Tinh Thần Làm Hết Mình Của Nhà Sano!</title>
        
      </Head>
      <div className="container">
        <h1>Mỗi Dự Án – Một Hành Trình Khám Phá</h1>
        <h3 style={{ fontSize: "20px" }}>21-06-2025</h3>
        <p>Ở Sano Media, mỗi dự án không chỉ là công việc – mà là hành trình khám phá và vượt giới hạn.</p>
        <p>Từ những buổi brainstorming kéo dài hàng giờ,Đến những ngày  chỉnh sửa xuyên đêm, Tất cả không làm chùn bước tinh thần của đội ngũ – mà càng khiến mọi người thêm gắn bó và thấu hiểu giá trị của sự sáng tạo chân thực.</p>
        <p>Chúng tôi không ngại thử cái mới, không sợ sai – vì chính trong những lần "vấp ngã" ấy, chúng tôi tìm thấy những ý tưởng bứt phá. Và rồi, khi sản phẩm cuối cùng được hoàn thiện, cả team lại cùng nhau vỡ òa trong niềm vui, tự hào vì một hành trình "điên rồ" nữa đã được chinh phục.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/image8.jpg?alt=media&token=87207162-79af-46fd-9f05-91f25403d9e1"
          alt="image1" />
        <br />
        <p>Bởi vì tại Sano, làm dự án không chỉ là “xong việc” – mà là để trưởng thành, để kết nối và để tạo nên điều khác biệt.</p>
      </div>
    </div>
  );
};

export default B2106;