'use client'
import React from 'react';

import './style.scss';
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Head from 'next/head';

const B1310 = () => {
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
         Sano Media – Nơi Sáng Tạo Gặp Gỡ Đam Mê</title>
        <meta name="description" content="Trải nghiệm đáng nhớ về chuyến thăm quê Bác Hồ của công ty vào buổi chiều và những bài học ý nghĩa từ mảnh đất lịch sử này." />
      </Head>
      <div className="container">
        <h1>
        Sano Media – Nơi Sáng Tạo Gặp Gỡ Đam Mê
        </h1>
        <h3 style={{ fontSize: "20px" }}>13-11-2025
        </h3>
        <p>Trong thời đại mà hình ảnh và cảm xúc lên ngôi, Sano Media tự hào là đơn vị truyền thông sáng tạo, mang đến giải pháp toàn diện trong lĩnh vực sản xuất video, nội dung và chiến lược truyền thông thương hiệu.</p>
        <p>Với đội ngũ trẻ trung, nhiệt huyết và tràn đầy năng lượng, Sano Media không chỉ dừng lại ở việc “làm video” — mà là kể câu chuyện của khách hàng bằng cảm xúc, bằng hình ảnh, và bằng sự chân thật. Mỗi sản phẩm được tạo ra là kết tinh của tư duy chiến lược, kỹ thuật chuyên nghiệp và tinh thần sáng tạo không giới hạn.</p>
        <p>Tại Sano Media, “Sáng tạo là DNA, chất lượng là cam kết” – đó chính là tinh thần đã đưa chúng tôi trở thành đối tác đáng tin cậy của nhiều thương hiệu hàng đầu trên thị trường.</p>
        <Image loading="lazy" width={isMobile ? 430 : 1000} height={isMobile ? 430 : 1000} quality={100}
          style={{ maxWidth: "1200px" }}
          src="https://firebasestorage.googleapis.com/v0/b/sanomedia-prod.appspot.com/o/DSC06410.jpg?alt=media&token=cdb37fba-7473-4aeb-a8bf-5528ee6f686c"
          alt="image1" />
        
        <p>Nếu bạn đang tìm kiếm một đơn vị truyền thông hiểu thương hiệu của bạn, thổi hồn vào từng khung hình và kể câu chuyện thật nhất, hãy đến với Sano Media – nơi ý tưởng được biến thành giá trị.</p> 
        <p><b>Sano Media – Create. Inspire. Grow.</b></p>
      </div>
    </div>
  );
};

export default B1310;